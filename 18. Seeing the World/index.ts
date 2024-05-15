//18. Seeing the World: Think of at least five places in the world you’d like to visit.

//Making a Array of Countries and Print its Orignal Order.
let countriesToVisit: string[] =["canada", "denmark","Brazil", "Argentina"];
console.log("Orginal Order", countriesToVisit);

//Print the Array in Alphabetical order without modifying the Actual Array List.
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the Array is still in Oraginal order
console.log("Still in Orgnal order:", countriesToVisit);

//Print the Array in Reversed Order without modifing the Actual Array.
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Show that the Array is still in Oraginal order
console.log("Still in Orignal order:", countriesToVisit);

// change the Orginal Array Order now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());

//Print the Array to show that its back ti its Orginal order.
console.log("Back to Orginal Array :", countriesToVisit.reverse());

//Print  the Array to show that its order has been changed in Alphabetcial order.
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//changed again the Orginal Array Order now in reverse order again
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
