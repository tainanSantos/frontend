import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Sprite} from "../models/Sprite";
import {Boundary} from "../models/Boundary";
import {offset} from "../utils/offset";
import {ItemSelect} from "../models/DragAndDropItem";
import {CdkDragDrop, copyArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {Collisions} from "../utils/collisions";
import {ActivatedRoute, Router} from "@angular/router";
import {Position} from "../models/Positiion";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild('myCanvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement> | undefined;
  ctx!: CanvasRenderingContext2D;

  @Output() showDialogResult = new EventEmitter();

  background!: Sprite;
  player!: Sprite;

  moedasFaseUm!: Sprite[];

  boundaries = <any>[];
  collisionsMap = [];

  directions!: string[];

  animation = false;
  pixelMove = 0;


  options: ItemSelect[];
  option_function: ItemSelect[]
  selected_normal: ItemSelect[] = [];
  selected_function: ItemSelect[] = [];

  gamePhase = 1


  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
    this.options = [
      new ItemSelect("assets/drag_drop/top.svg", 't'),
      new ItemSelect("assets/drag_drop/button.svg", 'b'),
      new ItemSelect("assets/drag_drop/left.svg", 'l'),
      new ItemSelect("assets/drag_drop/right.svg", 'r'),
    ];
    this.option_function = [
      new ItemSelect('assets/drag_drop/function.svg', 'f')
    ];
  }

  ngOnInit(): void {

    // se função, criar lófica para ler o que veio como função
    this.directions = []


// @ts-ignore
    this.ctx = this.canvas!.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';

    this.loadCollisions();

    this.loadBackground();

    this.loadPlayer();

    this.loadMedals()

    this.onAnimate();

  }

  loadCollisions() {
    const collisions = Collisions.loadCollisions(this.gamePhase);

    for (let i = 0; i < collisions.length; i += 20) {
      // @ts-ignore
      this.collisionsMap.push(collisions.slice(i, 20 + i));
    }

    this.collisionsMap.forEach((row: any, i) => {
      row.forEach((symbol: any, j: number) => {
        if (symbol === 321) {
          this.boundaries.push
          (new Boundary({
              x: j * 32,
              y: i * 32
            })
          );
        }
      })
    });
  }

  loadBackground() {
    const image = new Image();

    if (this.gamePhase === 1) {
      image.src = "../../assets/tile_jogo_v02_fase1.png"
    } else if (this.gamePhase === 2) {
      image.src = "../../assets/tile_jogo_v02_fase2.png"
    } else if (this.gamePhase === 3) {
      image.src = "../../assets/tile_jogo_v02_fase3.png"
    }
    this.background = new Sprite({
        x: offset.x,
        y: offset.y
      }, image
    )
  }


  loadPlayer() {
    const playerDownImage = new Image();
    playerDownImage.src = '../../assets/playerDown.png';
    const playerUpImage = new Image();
    playerUpImage.src = '../../assets/playerUp.png';
    const playerLeftImage = new Image();
    playerLeftImage.src = '../../assets/playerLeft.png';
    const playerRightImage = new Image();
    playerRightImage.src = '../../assets/playerRight.png';

    let p = new Position(100, 192)
    if (this.gamePhase === 2) {
      p = new Position(326, 160)
    }
    if (this.gamePhase === 3) {
      p = new Position(68, 224)
    }


    this.player = new Sprite(p,
      playerDownImage,
      0,
      {max: 4},
      {
        top: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        bottom: playerDownImage
      }
    );

  }


  detectCollision(rect1: Sprite, rect2: any) {

    return (rect1.position.x < rect2.position.x + rect2.width &&
      rect1.position.x + rect1.width > rect2.position.x &&
      rect1.position.y < rect2.position.y + rect2.height &&
      rect1.position.y + rect1.height > rect2.position.y)
  }


  loadMedals() {
    const moedasImage = new Image();
    const moedasImage2 = new Image();
    const moedasImage3 = new Image();
    const moedasImage4 = new Image();
    const moedasImage5 = new Image();
    const moedasImage6 = new Image();
    const moedasImage7 = new Image();
    const moedasImage8 = new Image();
    const moedasImage9 = new Image();

    moedasImage.src = '../../assets/moedas.png';
    moedasImage2.src = '../../assets/moedas.png';
    moedasImage3.src = '../../assets/moedas.png';
    moedasImage4.src = '../../assets/moedas.png';
    moedasImage5.src = '../../assets/moedas.png';
    moedasImage6.src = '../../assets/moedas.png';
    moedasImage7.src = '../../assets/moedas.png';
    moedasImage8.src = '../../assets/moedas.png';
    moedasImage9.src = '../../assets/moedas.png';

    if (this.gamePhase === 1) {
      this.moedasFaseUm = [
        new Sprite({x: 168, y: 200}, moedasImage, 0, {max: 10}),
        new Sprite({x: 200, y: 200}, moedasImage3, 0, {max: 10}),
        new Sprite({x: 200, y: 234}, moedasImage2, 0, {max: 10}),
      ]
    }
    if (this.gamePhase === 2) {
      this.moedasFaseUm = [
        new Sprite({x: 168, y: 200}, moedasImage, 0, {max: 10}),
        new Sprite({x: 200, y: 234}, moedasImage2, 0, {max: 10}),
        new Sprite({x: 232, y: 234}, moedasImage3, 0, {max: 10}),
        new Sprite({x: 266, y: 234}, moedasImage4, 0, {max: 10}),
        new Sprite({x: 298, y: 234}, moedasImage5, 0, {max: 10}),
        new Sprite({x: 328, y: 200}, moedasImage6, 0, {max: 10}),
      ]
    }
    if (this.gamePhase === 3) {
      this.moedasFaseUm = [
        new Sprite({x: 168, y: 200}, moedasImage, 0, {max: 10}),
        new Sprite({x: 200, y: 234}, moedasImage2, 0, {max: 10}),
        new Sprite({x: 232, y: 234}, moedasImage3, 0, {max: 10}),
        new Sprite({x: 266, y: 264}, moedasImage4, 0, {max: 10}),
        new Sprite({x: 298, y: 264}, moedasImage5, 0, {max: 10}),
        new Sprite({x: 328, y: 234}, moedasImage6, 0, {max: 10}),
        new Sprite({x: 358, y: 234}, moedasImage7, 0, {max: 10}),
        new Sprite({x: 388, y: 264}, moedasImage8, 0, {max: 10}),
        new Sprite({x: 418, y: 264}, moedasImage9, 0, {max: 10}),
      ]
    }
  }

  startAnimations() {
    if (this.selected_normal.length > 0) {
      this.selected_normal.forEach(event => {
        if (event.key != 'f') {
          this.directions.push(event.key)
        } else {
          this.selected_function.forEach(value =>
            this.directions.push(value.key))
        }
      })
      if (this.directions.length > 0) {
        this.animation = true;
      } else {
        alert("Selecione a sequência antes de começar o jogo")
      }
    }
  }

  stopAnimations() {
    this.animation = false;
  }

  resetOptionsSelect() {
    this.selected_function = [];
    this.selected_normal = [];
  }

  private resetSprite() {
    this.player.position.x = 100;
    this.player.position.y = 192;
    this.player.image = this.player.sprites.bottom;
  }

  onAnimate() {

    window.requestAnimationFrame(() => this.onAnimate());

    this.background.draw(this.ctx);

    this.boundaries.forEach((item: Boundary) => {
      item.draw(this.ctx);

    })
    this.player.draw(this.ctx);


    this.moedasFaseUm.forEach(value => {
      value.draw(this.ctx)
      value.moving = true
    })


    this.player.moving = false
    if (this.animation) {
      //  começar a movimentar o personagem na tela
      if (this.pixelMove === 32) {
        this.pixelMove = 0;
        if (this.directions.length === 0) {
          this.stopAnimations();
          //  verificado consição de parada do game
          if (this.moedasFaseUm.length > 0) {
            //  exibir modal-custom de perdeu  e tentar novamente
            this.playAudioError()
            this.stopAnimations();
            this.resetOptionsSelect();
            this.loadPlayer();
            this.loadMedals()
            this.showDialogResultEmitResulSession("Tente novamente :(", 1, false);
          } else {
            //  exibir modal-custom de sucesso e passar para a próxima fase
            if (this.gamePhase < 3) {
              this.showDialogResultEmitResulSession("Vamos para a próxima fase.", 1, true);
              this.gamePhase += 1;
              this.stopAnimations();
              this.resetOptionsSelect();
              this.loadPlayer();
              this.loadMedals();
              this.playAudioSucesso();
              this.loadBackground();
              this.loadCollisions();

            } else {
              this.playAudioSucesso();
              // Navegando para a tela de históricos
              this.router.navigate(['/app/ranking']);
              this.showDialogResultEmitResulSession("Você concluiu o jogo. Vá em histórico e veja sua classificação", 1, true);
            }
          }
        } else {
          this.directions.splice(0, 1);
        }
      }

      // detectando colisão enter as moedas e o sprite
      this.moedasFaseUm.forEach(
        (moeda: Sprite, index: number) => {
          if (this.detectCollision(this.player, moeda)) {
            this.moedasFaseUm.splice(index, 1);
            this.playAudio();
          }
        }
      )

      // detectando colisão entre as paredes
      this.boundaries.forEach((el: any) => {
        if (this.detectCollision(this.player, el)) {
          this.playAudioError()
          this.stopAnimations();
          this.resetOptionsSelect();
          this.loadPlayer();
          this.loadMedals()
          this.showDialogResultEmitResulSession("Tente novamente :(", 1, false);
        }
      });

      // fazendo caminhos
      if (this.directions[0] === "r" && this.pixelMove <= 32) {
        this.player.position.x += 1;
        this.player.image = this.player.sprites.right;
        this.player.moving = true;


      }
      if (this.directions[0] === "l" && this.pixelMove <= 32) {
        this.player.position.x -= 1;
        this.player.image = this.player.sprites.left;
        this.player.moving = true;

      }
      if (this.directions[0] === "b" && this.pixelMove <= 32) {
        this.player.position.y += 1;
        this.player.image = this.player.sprites.bottom;
        this.player.moving = true;

      }
      if (this.directions[0] === "t" && this.pixelMove <= 32) {
        this.player.position.y -= 1;
        this.player.image = this.player.sprites.top;
        this.player.moving = true;

      }


      this.pixelMove += 1;


    }


  }


  dropOptionElementNormal(event: CdkDragDrop<ItemSelect[]>) {
    if (this.selected_normal.length <= 9)
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
  }


  dropOptionElementFunction(event: CdkDragDrop<ItemSelect[]>) {
    var add = true;
    event.previousContainer.data.forEach((e: ItemSelect) => {
      if (e.key === 'f') add = false;
    })
    if (this.selected_function.length <= 6 && add)
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
  }


  showDialogResultEmitResulSession(message: string, fase: number, status: boolean) {
    this.showDialogResult.emit({message: message, fase: fase, status: status})
  }


  playAudio(): void {
    if (localStorage.getItem('som') === 'true') {
      const audio = new Audio();
      audio.src = '../../assets/audios/moedas.ogg';
      audio.load();
      audio.play();
    }
  }

  playAudioSucesso(): void {
    if (localStorage.getItem('som') === 'true') {
      const audio = new Audio();
      audio.src = '../../assets/audios/sucesso.wav';
      audio.load();
      audio.play();
    }
  }

  playAudioError(): void {
    if (localStorage.getItem('som') === 'true') {
      const audio = new Audio();
      audio.src = '../../assets/audios/error.wav';
      audio.load();
      audio.play();
    }
  }


  onRemoveItemListNormal(i: number) {
    this.selected_normal.splice(i, 1);

  }

  onRemoveItemListFunction(j: number) {
    this.selected_function.splice(j, 1);
  }
}
