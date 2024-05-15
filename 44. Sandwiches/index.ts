//4. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich


// Define a function
function makeSandwich (...items:string[]){
    console.log("\nMaking a Sandwich  with the folloing items:\n");

    items.forEach(singleItem => console.log(singleItem));
    
    console.log("\nNow Enjoy Sandwich");
        
}
//Calling athe function 3 times with 3 different number of argument.


makeSandwich("Bread","Butter");

makeSandwich("Chicken" ,"Mayo","Cucumber","Egg") ;