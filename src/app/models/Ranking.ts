export class Ranking {

  private _id: number;
  private _name: string;
  private _points: number


  constructor(id: number, name: string, points: number) {
    this._id = id;
    this._name = name;
    this._points = points;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }
}
