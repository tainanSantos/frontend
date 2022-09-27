import {Position} from "./Positiion";

export class Boundary {

  width = 32;
  height = 32;
  position: any ;

  constructor(position: any) {
    this.position = position ;
    this.width = 32;
    this.height = 32;
  }

  draw(c: any) {
    c.fillStyle = 'transparent';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
