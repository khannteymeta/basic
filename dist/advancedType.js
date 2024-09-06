"use strict";
let employee1 = {
    id: 1,
    name: "meta",
    salary: 100,
    details: function () {
        return `ID : ${this.id},Name : ${this.name}`;
    },
    retirment: function (date) {
        console.log(`${this.name} is retiring on ${date}`);
    },
};
let unionType;
unionType = 200;
unionType = "yaya";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseFloat(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs("10"));
let manager1 = {
    name: "meta",
    age: 18,
    employee: [
        {
            id: 1,
            salary: 1000,
        },
        {
            id: 2,
            salary: 2000,
        },
    ],
};
let manager2 = {
    name: "thavy",
    age: 19,
    employee: [
        {
            id: 1,
            salary: 1000,
        },
        {
            id: 2,
            salary: 2000,
        },
    ],
};
console.log(manager1);
function printQuantity(value) {
    console.log(value);
}
function greet(name) {
    if (name) {
        console.log(`hello ${name}`);
    }
    else {
        console.log(`hello Quest`);
    }
}
greet("tata");
function getCustomerDetail(id) {
    return id === 0 ? null : { name: "yaya", birth: new Date() };
}
let customer = getCustomerDetail(1);
console.log((customer === null || customer === void 0 ? void 0 : customer.name) || "Quest");
console.log((customer === null || customer === void 0 ? void 0 : customer.birth) || "NA");
let customerList = [];
console.log((customerList === null || customerList === void 0 ? void 0 : customerList[0]) || "No customer found");
let log = console.log;
log("hello world");
log = undefined;
(log === null || log === void 0 ? void 0 : log("hi")) || console.log("not found");
