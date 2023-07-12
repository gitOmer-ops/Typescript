var current_users = ["George", "Caytlin", "Katie", "Michael", "Modric"];
var new_users = ["Sarah", "Michael", "Ruby", "Kishimoto", "Tabata"];
var _loop_1 = function (new_user) {
    var usernameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (usernameTaken) {
        console.log("The username ".concat(new_user, " is already taken, please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is avilable."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
