/*jshint esversion: 6 */
//comment
console.log('Hello World');
//Variables
//cannot be a reserved word
//Should be meaningful
//cannot start with a number
//cannot contain a space or a number
//variales are case-sensitive
//camel case
let name;
name = 'Bhaba';
console.log(name);

//constants
//let maxRating = 5;
//maxRating = 10;
const maxRating = 5;
console.log(maxRating);

//Premitive Types
let myName = 'Modi'; //String literal
let age = 60; //Number literal
let isNextPM = true; //Boolean literal
let temprature; //= undefined; //by default if not intitalized the value set to undefined
console.log("Temprature is: "+temprature);
let papuPosition = null; //use when not sure of initial value but later 

//Reference Types
//objects
//let person = {}; //object lieteral
let person = {
    name: 'Modi',
    age: '60'
};

console.log(person);
//Dot notation
person.name = 'Narendra Modi';
//or Bracket Notation
person['name'] = 'Narendra Damodar Modi';
//case for using bracket notation
let selection = 'name';
person['selection'] = 'Mary';
console.log(person.name);

//Arrays - a datastructure used to store a list of items
let selectedLangs = ['js', 'java'];
console.log(selectedLangs);
console.log(selectedLangs[0]);
selectedLangs[3] = 100; //Dynamic size & element type change, i.r, not smae type
console.log(selectedLangs);
selectedLangs[4] = true;
console.log(selectedLangs.length);

//Functions - set of instructions that performs a task or a calculations
function greet(name, lastName) { //parameter
    console.log('Greetings...'+name+' '+lastName);
}

greet('Bhaba'); //argument


function square(number) {
    return number * number;
}

let number = square(2);
console.log(square(2));




