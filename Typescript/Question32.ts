let current_users = ["George", "Caytlin", "Katie", "Michael", "Modric"];
let new_users = ["Sarah", "Michael", "Ruby", "Kishimoto", "Tabata"];

for(let new_user of new_users) {
    let usernameTaken = current_users.some(
       (current_user) => current_user.toLowerCase() === new_user.toLowerCase() 
    );

    if(usernameTaken) {
        console.log(`The username ${new_user} is already taken, please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is avilable.`);
    }
}