"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
var CarRepository = /** @class */ (function () {
    function CarRepository() {
        this.list = [];
        this.counter = 0;
    }
    CarRepository.prototype.create = function () {
        var cars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cars[_i] = arguments[_i];
        }
        for (var _a = 0, cars_1 = cars; _a < cars_1.length; _a++) {
            var car = cars_1[_a];
            if (this.isExist(car.number)) {
                throw new Error("\u274C Car(".concat(car.number, ") already exists"));
            }
            car.setId(++this.counter);
            this.list.push(car);
        }
    };
    CarRepository.prototype.isExist = function (carNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.number === carNumber)
                return true;
        }
        return false;
    };
    CarRepository.prototype.getList = function () {
        return this.list;
    };
    return CarRepository;
}());
exports.CarRepository = CarRepository;
