// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


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

//Call make_greate  function to modify  magician names
let great_magicians = make_great(magician_names);

// Call show_magician that show
show_magicians(great_magicians)