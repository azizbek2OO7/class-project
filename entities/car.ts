import { Car_Type } from "./type";

export class Car {
  private id: number;

  constructor(public type: Car_Type, public number: string, public color: string, public price: string) {}

  setId(newId: number) {
    this.id = newId;
  }

  getId() {
    return this.id;
  }
}
