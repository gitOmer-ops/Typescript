// Q2

const name1 = "Eric";
console.log("Hello $(Eric), would you like to leaarn some python today?");


//Q3

const name2 = "Omer"

console.log(`Hello ${name2.toLowerCase()}, would you like to learn some Python today?`);
console.log(`Hello ${name2.toUpperCase()}, would you like to learn some Python today?`);
console.log(`Hello ${toTitleCase(name2)}, would you like to learn some Python today?`);

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


//Q4

console.log("Pain once said, 'Those who do not understand true pain can never understand true peace'");


//Q5

const author2 ="Chuck Palahniuk";
const quote2 = "We all die. The goal isn’t to live forever, the goal is to create something that will";
const message = `${author2} said, "${quote2}`;

console.log(message);


//Q6

const name3 = "\t     Moosa\n";
console.log("Name with whitespaces");
console.log(name3);

const nameStripped = name3.trim();
console.log("Name without whitespaces");
console.log(nameStripped);


//Q7

console.log(`Addition: ${7 + 1}`);
console.log(`Subtraction: ${10 - 2}`);
console.log(`Multiplication: ${8 * 1}`);
console.log(`Division: ${16 / 2}`);


//Q8

console.log(5 + 3);
console.log(4 + 4);
console.log(2 + 6);
console.log(7 + 1);


//Q9

const favorite_number = 9;
console.log(`My favorite number is ${favorite_number}`);


//Q11

const friends = ["Moosa", "Aashir", "Saim", "Areeb", "Inaya"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);


//Q12

const friends_msg = ["Moosa", "Aashir", "Saim", "Areeb", "Inaya"];

console.log(`Good Morning, ${friends[0]}`);
console.log(`Good Morning, ${friends[1]}`);
console.log(`Good Morning, ${friends[2]}`);
console.log(`Good Morning, ${friends[3]}`);
console.log(`Good Morning, ${friends[4]}`);


//Q13

const transport = [
  "Favorite mode of transport: Motorcycle",
  "Favorite Bike: Kawasaki H2",
  "Production Year: 2015 - present",
  "Engine: Liquid-cooled, 4-stroke In-Line Four with Supercharger",
  "Driveline: Chain Drive",
  "Transmission: 6 speed manual",
  "Reason for being my favorite bike: The bike has speed and is fuel type instead of electric"
];

console.log(transport[0]);
console.log(transport[1]);
console.log(transport[2]);
console.log(transport[3]);
console.log(transport[4]);
console.log(transport[5]);
console.log(transport[6]);


//Q14 + 15 + 16

const guest_list3 = ["Zohaib Mansoor", "Shoaib Mansoor", "Naufal Mansoor"];

console.log(`Hello, ${guest_list3[0]}! I am hosting a dinner tomorrow night and i would appreciate it if you were a part of it`);
console.log(`Hello, ${guest_list3[1]}! I am hosting a dinner tomorrow night and i would appreciate it if you were a part of it`);

guest_list3.pop();
guest_list3.push("Faizan Masood");
console.log(`Hello, ${guest_list3[2]}! I am hosting a dinner tomorrow night and i would appreciate it if you were a part of it`);

guest_list3.unshift("Maaz MAnsoor");
guest_list3.splice(Math.floor(guest_list3.length / 2), 0, "Mansoor Alam");
guest_list3.push("Masood Alam");
guest_list3.forEach((guest) => {
  console.log(`Dear ${guest}, i invite you to out dinner tomorrow, i do hope you come`);
});


//Q17

while(guest_list3.length > 2){
let removedGuest = guest_list3.pop();
console.log(`Sorry ${removedGuest}, there was a change in the plan and i cannot invite you anymore`);
};

guest_list3.forEach((guest) => {
  console.log(`${guest}, you are still invited to dinner`);
});




