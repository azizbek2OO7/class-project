"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./entities/car");
var created_1 = require("./entities/created");
var car_repository_1 = require("./repository/car-repository");
var created_repository_1 = require("./repository/created-repository");
function init() {
    try {
        var carRepository = new car_repository_1.CarRepository();
        var createdRepository = new created_repository_1.CreatedRepository();
        var car1 = new car_1.Car("BMW", "A3507", "black", "$100000");
        var car2 = new car_1.Car("Rolls-Royce", "C8607", "blue", "$150000");
        var car3 = new car_1.Car("Opel", "C5613", "red", "$200000");
        carRepository.create(car1, car2, car3);
        var created1 = new created_1.Created("New York", "05.15.20", car1.getId());
        var created2 = new created_1.Created("Australia", "03.12.17", car1.getId());
        var created3 = new created_1.Created("Dubai", "05.15.20", car3.getId());
        createdRepository.create(created1, created2, created3);
        console.log("Cars", carRepository.getList());
        console.log("Created", createdRepository.getList());
    }
    catch (err) {
        console.log("".concat(err.message));
    }
}
init();
