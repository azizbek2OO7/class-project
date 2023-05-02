import { Car } from "./entities/car";
import { Created } from "./entities/created";
import { CarRepository } from "./repository/car-repository";
import { CreatedRepository } from "./repository/created-repository";

function init() {
  try {
    const carRepository = new CarRepository();
    const createdRepository = new CreatedRepository();

    const car1 = new Car("BMW", "A3507", "black", "$100000");
    const car2 = new Car("Rolls-Royce", "C8607", "blue", "$150000");
    const car3 = new Car("Opel", "C5613", "red", "$200000");
    carRepository.create(car1, car2, car3);

    const created1 = new Created("New York", "05.15.20", car1.getId());
    const created2 = new Created("Australia", "03.12.17", car1.getId());
    const created3 = new Created("Dubai", "05.15.20", car3.getId());
    createdRepository.create(created1, created2, created3);

    console.log("Cars", carRepository.getList());
    console.log("Created", createdRepository.getList());
  } catch (err: any) {
    console.log(`${err.message}`);
  }
}

init();
