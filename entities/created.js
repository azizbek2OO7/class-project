"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Created = void 0;
var Created = /** @class */ (function () {
    function Created(country, date, ownerId) {
        this.country = country;
        this.date = date;
        this.ownerId = ownerId;
    }
    Created.prototype.setId = function (newId) {
        this.id = newId;
    };
    Created.prototype.getId = function () {
        return this.id;
    };
    return Created;
}());
exports.Created = Created;
