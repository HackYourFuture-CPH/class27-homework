//What should happen if the provided arguments are not numbers (node avg.js 1 two hello 4)?
'use strict';
for (let j = 0; j < process.argv.length; j++) {
    console.log (j + ' -> ' + (process.argv[j]));
}

let newArrey = [];

if(process.argv.length -2 === 0 || process.argv.length -2 === 1){
  console.log("according to the rules of node.js, the choosen number should be equal or greater than 2.")  
} else {
    for (let j = 2; j < process.argv.length; j++) {
        console.log (j + ' -> ' + (process.argv[j]));
    }
}


//What about if no arguments are provided (node avg.js)?
let numArrey = [];
let sum =0;

function average(theNum){
for (i = 0; i < theNum.length; i++){
    sum =+ theNum[i];
}

let theAverege = sum / theNum.length;

console.log("the result is" + theAverege)
};