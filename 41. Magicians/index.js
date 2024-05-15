//40. 
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Difine a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an Array containing magicians names
var magician_name = ["David Blaine", "David Copperfield", "Zach King"];
//Calling  the function to print each magician name
show_magicians(magician_name);
