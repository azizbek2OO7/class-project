import { Car } from "../entities/car";

export class CarRepository {
  private list: Car[] = [];
  private counter = 0;

  create(...cars: Car[]) {
    for (let car of cars) {
      if (this.isExist(car.number)) {
        throw new Error(`❌ Car(${car.number}) already exists`);
      }

      car.setId(++this.counter);
      this.list.push(car);
    }
  }

  isExist(carNumber: string) {
    for (let car of this.list) {
      if (car.number === carNumber) return true;
    }

    return false;
  }

  getList() {
    return this.list;
  }
}
