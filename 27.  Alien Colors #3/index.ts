//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
 
 // Verison 1
let alienColor = "green";

if(alienColor === "green"){ console.log("(Verison 1)You shot down green you have earned 5 points.");
}else if(
    alienColor === "yellow"
){
    console.log("You shot down yellow you have earned 10 points. ")
}else if ( alienColor === "red"){
    console.log("You shot down red you have earned 15 points.");
};

// Verison 2
let alienColor2 = "yellow";

if(alienColor2 === "green"){ console.log("You shot down green you have earned 5 points.");
}else if(
    alienColor2 === "yellow"
){
    console.log("(Verison 2)You shot down yellow you have earned 10 points. ");
}else if ( alienColor2 === "red"){
    console.log("You shot down red you have earned 15 points.");
}

 // Verison 3
let alienColor3 = "red";

if(alienColor3 === "green"){ console.log("You shot down green you have earned 5 points.");
}else if(
    alienColor3 === "yellow"
){
    console.log("You shot down yellow you have earned 10 points. ");
}else if ( alienColor3 === "red"){
    console.log("(Verison 3)You shot down red you have earned 15 points.")
};
