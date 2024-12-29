"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    id: 1,
    name: "Jhon",
    call: function () {
        return 10;
    },
    text: function () {
        return "Hello";
    }
};
var user1 = {
    id: 1,
    name: "Jhon",
    call: function () {
        return 10;
    },
    // text : (): string => {
    //     return "Hello";
    // }
};
console.log(user.call());
console.log(user1.call());
