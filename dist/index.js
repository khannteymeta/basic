"use strict";
let a = 30;
a = 30;
let numbers = [2, 2, 4, 4, 5];
let nameList = ["lika", "kakka"];
let person;
person = [
    [1, "roth"],
    [2, "kaka"],
];
let caculateTax = function (amount, tax = 0.4) {
    let total = amount + amount * tax;
    return total;
};
let taxCalulated = caculateTax(100, 0.4);
caculateTax(500);
let employee = {
    id: 1,
    name: "tata",
    details: function () {
        return `ID : ${this.id},Name : ${this.name}`;
    },
    retirment: function (date) {
        console.log(`${this.name} is retiring on ${date}`);
    }
};
employee.retirment(new Date());
