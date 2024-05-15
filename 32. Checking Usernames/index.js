// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Array of Current Users
var currentUser = ["Ali", "Raza", "Saboor", "Ammar", "Abbas"];
// Array of New Users
var newUsers = ["Salar", "Haider", "Raza", "Zaid", "Ammar"];
//Loop through newUsers to check for usernames avaibility
newUsers.forEach(function (new_one_user) {
    //Mking a Condition for username already exist and save in our condition variable
    var ourCondition = currentUser.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    //print Different message using IF-Else Statments
    if (ourCondition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available!"));
    }
});
