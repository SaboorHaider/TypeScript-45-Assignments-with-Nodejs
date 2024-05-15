//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// Creating a Array
let userNames = ["Ammar" , "Ali" , "Raza" , "Abbas" , "Admin"];

//Remove All value from Array 
userNames = []

//If statment for checking lenght of our Array is Empty
if (userNames.length === 0) {
    console.log("We need to find some users!");
    
} else {
// If Array is not empty use ForEach loop on Array.    
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
                    
        }else {console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
    
}











// // using ForEach Loop on Array
