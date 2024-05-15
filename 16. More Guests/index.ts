//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.


//Creating a Array
let guestList = ["Ali", "Haider", "Salar", "HIzzer"];

//Making variable for those guest who cant come
let dontCome = guestList[1];

//print the name of gust who cant come
console.log(dontCome, "you are not invited");

//Add or Remove Value from guestList Array
guestList.splice(2, 1, "Raza");

// Message Print for bigger Table 
console.log("Good news ! We have found a bigger Table for a dinner");

// Adding a new Value at starting index of Array
guestList.unshift("Saboor");

// Adding a new value at Ending index of Array
guestList.push("Ammar")

// Get a middle index of our gust list Array
let middleIndex:number = Math.floor(guestList.length / 2);

// Adding a new value at Middle index of Array
guestList.splice(middleIndex, 0, "Hassan");

// Print Mesage of Update list 
console.log("Updated List of our Gusts");

// Sinding a invatation mesage to our guests one by one with thier Names
guestList.forEach(oneguest => console.log(`Hello! ${oneguest}, would you like to dinner with me `));
