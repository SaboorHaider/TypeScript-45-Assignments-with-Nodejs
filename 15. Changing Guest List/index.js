//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var gustList = ["Ali", "Abbas", "Saqib",];
var dontCome = gustList[2];
console.log(dontCome, "you are not invited");
gustList.splice(2, 1, "Raza");
gustList.forEach(function (gust) { return console.log("Hello ".concat(gust, ",would you like to dinner with me?")); });
