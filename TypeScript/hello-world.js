var fn = function () { return 'response'; };
var v; //mentioned type of variable    
var b; //postfix type declaration 
var a;
v = 3;
b = true;
a = 'bhaba';
var myArr;
myArr = [2, 3];
myArr = [];
myArr.push(3);
v = myArr.pop();
//Tuple
var tup;
tup = [2, 'sipu'];
var add = function (a, b, d, c) {
    if (d === void 0) { d = 9; }
    if (c != undefined) {
        console.log(a + b + d + c);
    }
    else
        console.log(a + b + d);
    return 0;
};
add(3, 2, 2, 2);
