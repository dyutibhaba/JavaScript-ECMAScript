/*jshint esversion: 6 */
//OOP
/*
Procedural vs Object oriented
var model = 'Skoda';
var color = 'white';
function getCar(model, color) {

}

*/



/*1. capability to model a problem through objects
Relations between objects 
-> Association : Object's capability to refer another object (tie-up)
-> Aggregation : Object's capability to embed other independent objects (collection)
-> Composition : Object's capability to embed other dependent objects
*/
let johnSmith = {
    firstName: "John",
    lastName: "Smith",
    address: { //Composition - meta object
    street: "123 Duncannon Street",
    city: "London",
    country: "United Kingdom"
    }
   };

   let nickSmith = {
    firstName: "Nick",
    lastName: "Smith",
    address: { //Composition
    street: "321 Oxford Street",
    city: "London",
    country: "United Kingdom"
    }
   };

   johnSmith.parent = nickSmith; //Association
   
   let company = {
    name: "ACME Inc.",
    employees: []
   };

//Aggregation
company.employees.push(johnSmith);
company.employees.push(nickSmith); 

console.log(company);

/*2. its support of a few principles that grant modularity and code reuse.
Encapsulation: capability to concentrate into a single entity data and code that manipulates it, hiding its internal details
example - localStorage */
//without object
let basicSalary = 30000;
let overtime = 10;
let rate = 20;
//many parameters, not good practice 
function getWage(basicSalary, overtime, rate) {
    return basicSalary + (overtime * rate);
}
//object oriented way - Encapsultation
let employee = {
    basicSalary : 30000,
    overtime : 10,
    rate : 20,
    getWage(basicSalary, overtime, rate){
        return basicSalary + (overtime * rate);
    }
};

employee.getWage(); //no parameters, so best practice as Uncle Bob says The best fucntions are those with no parameters

/*
Inheritance: mechanism by to eleiminates redundant code
Elements: TextBox   Select    Checkbox
events: click() focus()


Polymorphism: capability to process objects differently based on their data type or structure
render() method in select, checkbox, textbox

Abstraction: hidding complexity
Simpler Interface, Impact of changes (lcoal variables let keyword)
*/


const circle = {
    radius:1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

const circle2 = {
    radius:1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();

//Factory or constructor fucntion - Inheritance
//repeating the same variables with different names is not a good practice

