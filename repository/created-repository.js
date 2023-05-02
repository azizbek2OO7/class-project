"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedRepository = void 0;
var CreatedRepository = /** @class */ (function () {
    function CreatedRepository() {
        this.list = [];
        this.counter = 0;
    }
    CreatedRepository.prototype.create = function () {
        var created = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            created[_i] = arguments[_i];
        }
        for (var _a = 0, created_1 = created; _a < created_1.length; _a++) {
            var create = created_1[_a];
            if (this.isExist(create.country)) {
                throw new Error("\u274C Already brought from ".concat(create.country));
            }
            create.setId(++this.counter);
            this.list.push(create);
        }
    };
    CreatedRepository.prototype.isExist = function (country) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var create = _a[_i];
            if (create.country === country)
                return true;
        }
        return false;
    };
    CreatedRepository.prototype.getList = function () {
        return this.list;
    };
    return CreatedRepository;
}());
exports.CreatedRepository = CreatedRepository;
