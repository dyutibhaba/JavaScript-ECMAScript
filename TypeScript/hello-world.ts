var fn = () => 'response';

var v : number; //mentioned type of variable    
var b : boolean; //postfix type declaration 
var a : string;



v = 3;
b = true;
a = 'bhaba';


var myArr : number[];
myArr = [2,3];
myArr = [];
myArr.push(3);

v = myArr.pop();

//Tuple
var tup : [number, string];
tup = [2, 'sipu'];


var add = function(a : number, b : number, d = 9, c?:number) : number {
    if(c != undefined){
        console.log(a+b+d+c);
    } else 
         console.log(a+b+d);
  return 0;       
}

add(3, 2, 2,2);

