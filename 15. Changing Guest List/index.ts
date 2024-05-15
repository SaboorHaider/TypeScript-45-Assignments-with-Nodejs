//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let gustList = ["Ali", "Abbas", "Saqib",];

let dontCome = gustList[2];

console.log(dontCome, "you are not invited");

gustList.splice(2, 1, "Raza");

gustList.forEach(gust =>console.log(`Hello ${gust},would you like to dinner with me?`));