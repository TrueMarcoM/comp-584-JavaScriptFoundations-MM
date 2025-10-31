// EX1
var thisIsANewVariable = 10;
if ( thisIsANewVariable == 10 ) {
    // code block
}

// EX2
let firstName = `Marco`; //can also use quotation marks " "
let numberValue = 10.6;
let flagValue = true;

console.log(`My name is ${firstName}`);

// EX3
//the currentScore variable keeps track of the current score value of the game/program.
let currentScore = 95;

// EX4
console.log(`100` == 100);
console.log(`100` === 100);

// EX5
let isWeekend = false;
let schedule;

isWeekend == true ? schedule = "Day Off" : schedule = "Work day";
console.log(schedule);

// EX6
let userAge = 16;

if ( userAge >= 18 ) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// EX7
let hasPermission = true;
let itemCount = 3;

if ( hasPermission == true && itemCount < 5 ) {
    console.log("Ready to process");
}

// EX8
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// EX9
for (let i = 0; i <= 9; i++) {
    if (i == 7) {
        console.log("Found 7!");
        break;
    }
}

// EX10
let counter = 10;

do {
    console.log("Running once");
} while (counter > 11);

// EX11
function calculateArea(width, height) {
    return width * height;
}

let resultArea = calculateArea(5, 10);
console.log(resultArea);

// EX12
var fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));

// EX13
let originalData = [1, 2, 3, 4];

let  clonedData = originalData.slice();

console.log(clonedData);

//Slice performs a shallow copy of the array.
//You should be aware that if the array contains objects, only references are copied.
//Primitives (non arrays) are copied by value.

// EX 14 and 15
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

var dog = new Animal("Canine", "Woof");
var cat = new Animal("Feline", "Meow");

var animalArray = [dog, cat];

console.log(animalArray);