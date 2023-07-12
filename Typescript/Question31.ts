let users = ["Adil", "Omer", "Omar"];

if(users.length === 0) {
    console.log("We need to find some users!");

} else {
    for (let User of users) {
        console.log(`Welcome ${User}!`);
    }
}

//Emptying the array

users = [];

if(users.length === 0) {
    console.log("We need to find some users!");
}