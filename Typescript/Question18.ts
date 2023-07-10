let placesToVisit = ["Sweden", "London", "Dubai", "Norway", "Austrailia"];

console.log("Original order: ");
console.log(placesToVisit);

console.log("\nAlphabetical Order(without changing the original list): ");
console.log([...placesToVisit].sort());

console.log("\nStill in th original order: ");
console.log(placesToVisit);

console.log("\nReverse Aphabetical Order(without changing the original list): ");
console.log([...placesToVisit].sort().reverse());

console.log("\nStill in the original order: ");
console.log(placesToVisit);

console.log("\nReverse Order: ");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nReverse Order again(back to the original): ");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nSort in Alphabetical Order: ");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\nSort in Reverse Alphabetical Order: ");
placesToVisit.sort().reverse();
console.log(placesToVisit);
