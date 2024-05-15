//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let six = 6;
let ten = 10;
let nine = 9;
let fruits = ["Apple","Mango","WaterMelon"];

//test for equality and inquality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//tests using lowercase funtion
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical tests

// Equal to
console.log("\nIs six is equal to ten?");
console.log(six == ten);

// Not Equal to
console.log("\nIs six is not equal to ten");
console.log(six != ten );

//Greater than 
console.log("\nIs six is greater then zero?");
console.log(six > 0);

// Less then 
console.log("\nIs ten is less than 6");
console.log(ten < 6);

// Greater than or Equal to
console.log("\nIs nine is greater than or equal to 5?");
console.log(9 >= 5);

// Less than or Equal to
console.log("\nIs six is less than or equal to 5?");
console.log(9 <= 5);

//tests using "and" & "or" Operators

//Using &&
console.log("\nten is not equal to six and ten is greater than 6");
console.log(ten != 6 && 10 > 6);

console.log("\nten is not equal to six and ten is greater than 6");
console.log(ten != 6 && 10 > 30);

// Using || (OR)
console.log("\n 10 is greater than 40 OR  10 is  equal to 10");
console.log(10 > 40 || 10 == 10);

console.log("\n 10 is greater than 40 OR  10 is not equal to 10");
console.log(10 > 40 || 10 != 10);

//Test Weather an item is include in array
console.log("\nIs Mango is include in my Array");
console.log(fruits.includes("Mango"));

console.log("\nIs Mango is not include in my Array");
console.log(!fruits.includes("Mango"));