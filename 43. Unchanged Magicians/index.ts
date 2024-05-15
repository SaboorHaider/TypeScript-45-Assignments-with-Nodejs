//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names


//Difine a function to show magicians names 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Fuction to make magicians  great through .map() it will modify Array
function make_great(magicians:string[]){
    return magicians.map(name =>`The Great ${name}`);
}

// Define an Array of magicians names
let magician_names = ["David Blaine","Dynamo","Zach King"];

//Making a copy of Original Array through .slice() function.
let copy_magician_names = magician_names.slice();

//Modify the copy Array to include The Great with their names.
let copy_great_magicians = make_great(copy_magician_names);

// /Show both Array Original and Copied
show_magicians(magician_names)
show_magicians(copy_great_magicians)
