//Test 1

let Name = "Yamamoto";
let hasName = Boolean(Name);

console.log("Does the person have a name?", hasName);

//Test2

let Age = 12;
let isAdult = Age >= 18;

console.log("Is this person an adult?", isAdult);

//Test 3

let num1 = 27;
let num2 = 7;
let isEqual = num1 === num2;

console.log("is num1 equal to num2?", isEqual);

//Test 4

let age: number = 14;
let isUnderage = age <= 18;

console.log("Is this peson underage?", isUnderage);

//Test5

let Province= "Sindh";
let isProvince = Boolean(Province);

console.log("Is Sindh a province?", isProvince);

//Test 6

let text = "Typescript is hard";
let isLongText = text.length > 20;

console.log("Is the text longer than 20 characters?", isLongText);

//Test 7

let array = [2, 3, 4, 9];
let isLongArray = array.length > 3;

console.log("Does this array have more than three numbers?", isLongArray);

//Test 8

let arr = [2, 4, 9, 15];
let IsEmptyArray = array.length === 0;

console.log("Is the Array Empty?", IsEmptyArray);

//Test 9

let number = 7;
let isEven = number % 2 === 0;
console.log("Is the number even?", isEven);

//Test 10

let message: string = "Hello, world!";
let containsHello: boolean = message.includes("Hello");
console.log("Does the message contain 'Hello'?", containsHello);