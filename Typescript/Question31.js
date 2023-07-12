var users = ["Adil", "Omer", "Omar"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var User = users_1[_i];
        console.log("Welcome ".concat(User, "!"));
    }
}
//Emptying the array
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
