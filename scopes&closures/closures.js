var a = 10;

function ouuter(){
    var b = 20;
    var inner = function(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    }
    //inner();

}
var innerFunc1 = ouuter();

innerFunc1(); //this function remenbers its scope + its body of execution

var innerFunc2 = ouuter();

innerFunc2(); //this function remenbers its scope + its body of execution