export class Student {
  public name: string;
  public dob: Date;
  public score: number;
  public stream: number;

  constructor(name: string, dob: Date, score: number, stream: number) {
    this.name = name;
    this.dob = dob;
    this.score = score;
    this.stream = stream;
  }
}
