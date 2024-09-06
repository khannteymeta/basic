type employee = {
  readonly id: number;
  name: string;
  salary: number;
  details: () => string;
  retirment: (date: Date) => void;
};

let employee1: employee = {
  id: 1,
  name: "meta",
  salary: 100,
  details: function () {
    return `ID : ${this.id},Name : ${this.name}`;
  },
  retirment: function (date: Date) {
    console.log(`${this.name} is retiring on ${date}`);
  },
};

//union types
let unionType: string | number;
unionType = 200;
unionType = "yaya";

function kgToLbs(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseFloat(weight) * 2.2;
  }
}
console.log(kgToLbs(10));
console.log(kgToLbs("10"));

// intersection type

type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  salary: number;
};

type Manager = {
  employee: Employee[];
};

type ManagerWithPerson = Person & Manager;

let manager1: ManagerWithPerson = {
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

let manager2: ManagerWithPerson = {
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

// literal types
type Qty = 10 | 20 | 30;

function printQuantity(value: Qty) {
  console.log(value);
}

// nullable type

function greet(name: string) {
  if (name) {
    console.log(`hello ${name}`);
  } else {
    console.log(`hello Quest`);
  }
}
greet("tata");

// Optional Type

type Customer = {
  name: string;
  birth: Date;
};
function getCustomerDetail(id: number): Customer | null | undefined {
  return id === 0 ? null : { name: "yaya", birth: new Date() };
}

let customer = getCustomerDetail(1);
console.log(customer?.name || "Quest");
console.log(customer?.birth || "NA");

let customerList: Customer[] = [];
console.log(customerList?.[0] || "No customer found");

let log: any = console.log;
log("hello world");

log = undefined;

log?.("hi") || console.log("not found");
