
let a: number = 30;
a = 30;

//array
let numbers = [2, 2, 4, 4, 5];
let nameList: string[] = ["lika", "kakka"];

//touple
let person: [number, string][];
person = [
  [1, "roth"],
  [2, "kaka"],
];


//enum : naming big for first letter (both number and)
const enum Sizes {
  Small = 30,
  Meduim,
  Large,
}

const enum SizeString {
  Small = "small",
  Meduim = "meduim",
  Large = "large",
}

const enum PizzaPromotion {
  Monday = "Buy 1 free 1",
  Tuesday = "Normal",
}

//function
let caculateTax = function (amount: number, tax = 0.4): number {
  let total = amount + amount * tax;
  return total;
};

let taxCalulated = caculateTax(100, 0.4);
caculateTax(500);


//object types
let employee : {
    readonly id : number;
    name : string;
    salary? : number;
    details : () => string;
    retirment : (date : Date) => void
}={
    id :1,
    name : "tata",
    details : function(){
        return `ID : ${this.id},Name : ${this.name}`;
    },
    retirment : function(date : Date){
        console.log(`${this.name} is retiring on ${date}`);
    }
}
employee.retirment(new Date())