//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Making a function
function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
;
// Calling a Function with by defualt values
makeShirt();
// Calling a function with meduim size and default message.
makeShirt("Meduim");
// calling a function  now with Small size and also Different Print message.
makeShirt("small", "Sometimes you win, sometimes you learn.");
