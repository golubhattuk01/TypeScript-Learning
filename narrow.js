"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFish(pet) {
    console.log(pet.swim !== undefined);
}
function isBird(pet) {
    console.log(pet.fly !== undefined);
}
var MyBird = /** @class */ (function () {
    function MyBird() {
    }
    MyBird.prototype.fly = function () {
        console.log("Flying");
    };
    return MyBird;
}());
var bird1 = new MyBird();
isFish(bird1);
isBird(bird1);
