//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names
//Difine a function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Fuction to make magicians  great through .map() it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array of magicians names
var magician_names = ["David Blaine", "Dynamo", "Zach King"];
//Making a copy of Original Array through .slice() function.
var copy_magician_names = magician_names.slice();
//Modify the copy Array to include The Great with their names.
var copy_great_magicians = make_great(copy_magician_names);
// /Show both Array Original and Copied
show_magicians(magician_names);
show_magicians(copy_great_magicians);
