// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName2 = "Abdul Saboor";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
