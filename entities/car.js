"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(type, number, color, price) {
        this.type = type;
        this.number = number;
        this.color = color;
        this.price = price;
    }
    Car.prototype.setId = function (newId) {
        this.id = newId;
    };
    Car.prototype.getId = function () {
        return this.id;
    };
    return Car;
}());
exports.Car = Car;
