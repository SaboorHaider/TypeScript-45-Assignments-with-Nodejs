//4. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
// Define a function
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich  with the folloing items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
//Calling athe function 3 times with 3 different number of argument.
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Mayo", "Cucumber", "Egg");
makeSandwich("Bread", "Mayo", "Olives", "Fried egg", "cheese", "Roast beef");
