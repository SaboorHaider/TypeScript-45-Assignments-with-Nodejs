//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
//Define a function to create a car object with options...
function create_car(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model...
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add adiditional option to the car object...
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Calling the function to create object...
var my_car = create_car("Kia", "Sportage", "color: black", "sunroof: True");
//Print the variable to stored correctly in the car  Object
console.log(my_car);
