var guest_list3 = ["Zohaib Mansoor", "Shoaib Mansoor", "Naufal Mansoor"];
console.log("Hello ".concat(guest_list3[0], ", I am hosting a dinner tomorrow night and i would appreciate it if you were a part of it"));
console.log("Hello ".concat(guest_list3[1], ", I am hosting a dinner tomorrow night and i would appreciate it if you were a part of it"));
guest_list3.pop();
guest_list3.push("Faizan Masood");
console.log("Hello, ".concat(guest_list3[2], "! I am hosting a dinner tomorrow night and i would appreciate it if you were a part of it"));
guest_list3.unshift("Maaz MAnsoor");
guest_list3.splice(Math.floor(guest_list3.length / 2), 0, "Mansoor Alam");
guest_list3.push("Masood Alam");
guest_list3.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", i invite you to out dinner tomorrow, i do hope you come"));
});
while (guest_list3.length > 2) {
    var removedGuest = guest_list3.pop();
    console.log("Sorry ".concat(removedGuest, ", there was a change in the plan and i cannot invite you anymore"));
}
;
guest_list3.forEach(function (guest) {
    console.log("".concat(guest, ", you are still invited to dinner"));
});
