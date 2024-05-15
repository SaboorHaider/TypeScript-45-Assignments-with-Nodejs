//19.  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList:string[] = ["Haider","Abbas","Raza"];


// guestList.forEach(guest => {
//     console.log(`Dear ${guest}, You are invited to dinner`);
// });

let lenghtGuest: number = guestList.length;

console.log(`We are inviting total ${lenghtGuest} guest.`);