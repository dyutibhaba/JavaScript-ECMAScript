/*jshint esversion: 6 */

//JS Lexical scoping
let f;
if (true) {
  let a = 10;
  f = () => {
    console.log(a); //10 is available inside f()
  };
}
console.dir(f);
f();
