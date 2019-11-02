/*jshint esversion: 6 */
/*
Just like .map(), .reduce() also runs a callback for each element of an array. 
What’s different here is that reduce passes the result of this callback (the accumulator) 
from one array element to the other.

reduce() is an easy way to generate a single value or object from an array.
*/
var pilots = [
  { id: 10, name: "Poe Dameron", years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: "Tallissan Lintra", years: 16 },
  { id: 99, name: "Ello Asty", years: 22 }
];

var totoalYrs = pilots.reduce(
  (accumulator, pilots) => accumulator + pilots.years,
  0
);

console.log(totoalYrs);
