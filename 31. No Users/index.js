//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// Creating a Array
var userNames = ["Ammar", "Ali", "Raza", "Abbas", "Admin"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
// // using ForEach Loop on Array
