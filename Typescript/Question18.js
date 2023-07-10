var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Sweden", "London", "Dubai", "Norway", "Austrailia"];
console.log("Original order: ");
console.log(placesToVisit);
console.log("\nAlphabetical Order(without changing the original list): ");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nStill in th original order: ");
console.log(placesToVisit);
console.log("\nReverse Aphabetical Order(without changing the original list): ");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
