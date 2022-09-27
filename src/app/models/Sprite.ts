import {Position} from "./Positiion";

export class Sprite {

  position!: Position;
  velocity?: number;
  image: HTMLImageElement;
  frames?: any;
  sprites?: any;
  width!:number;
  height!: number;
  moving?:boolean = false;

  constructor( position: Position, image: HTMLImageElement, velocity?: number,  frames = { max: 1 }, sprites?: any ) {
    this.position = position
    this.image = image
    this.frames = { ...frames, val: 0, elapsed: 0 }
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max
      this.height = this.image.height
      console.log(this.width);
      console.log(this.height);

    }
    this.moving = false
    this.sprites = sprites
  }


  draw(c:any) {
    c.drawImage(
      this.image,
      this.frames.val * this.width!,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height,
    )
    if (!this.moving) return
    if (this.frames.max > 1) {
      this.frames.elapsed++
    }
    if (this.frames.elapsed % 10 === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++
      else this.frames.val = 0
    }

  }
}
