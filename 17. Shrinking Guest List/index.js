//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Creating a Array
var gustList = ["Ali", "Haider", "Salar", "HIzzer"];
//Making variable for those guest who cant come
var dontCome = gustList[1];
//print the name of gust who cant come
console.log(dontCome, "you are not invited");
//Add or Remove Value from GustList Array
gustList.splice(2, 1, "Raza");
// Message Print for bigger Table 
console.log("Good news ! We have found a bigger Table for a dinner");
// Adding a new Value at starting index of Array
gustList.unshift("Saboor");
// Adding a new value at Ending index of Array
gustList.push("Ammar");
// Get a middle index of our gust list Array
var middleIndex = Math.floor(gustList.length / 2);
// Adding a new value at Middle index of Array
gustList.splice(middleIndex, 0, "Hassan");
// Print Mesage of Update list 
console.log("Updated List of our Gusts");
// Sinding a invatation mesage to our guests one by one with thier Names
gustList.forEach(function (oneguest) { return console.log("Hello! ".concat(oneguest, ", would you like to dinner with me ")); });
//inform that only two guests can be invited for dinner
console.log("unfortuntely, the nre dinner table is arrive on time, so i can only invide two guest with me");
// Using while-loop to remove guests from the array untill only two name remain
while (gustList.length > 2) {
    var removedGuest = gustList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner."));
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 guests");
gustList.forEach(function (invites) { return console.log("Luckly ".concat(invites, ", You are still invited to the dinner.")); });
// removing last two  guest 
gustList.pop();
gustList.pop();
console.log("Empty List", gustList);
