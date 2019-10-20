/*jshint esversion: 6 */
//function is a javascript object
function message() {
    alert("Greetings Linda!");
}
console.log(typeof message);                   // => function
console.log(message instanceof Object);        // => true

//Function definitions
function doSomething(){
    console.log('OK. doing...'); //printing 
}
//doSomething();


function calculate(x, y){
    return x * y; //returning
}
//calculate(4, 4);


//Function Expressions
var calculate = function(x, y){
    return x * y;
};
//var val = calculate(4, 4);

//"this" Keyword
//When a function is called without an owner object, the value of this becomes the global object.
//When a function used in object env, its called method

//Example



//To prompt for user i/p 
//var username = prompt("Whats your name");
//output ??
function myFunction(x, y) {
    
    if (y === undefined) {
        //alert(y);
        y = 0;
    } else {
        x = 0;
    }  
    return x * y;
}
//alert(myFunction(5));


function action(){
    console.log('action is called');
}

//here, we are passing the function/behavior as parameter to greet()
function greet(action){
    action();
}

greet(action);

