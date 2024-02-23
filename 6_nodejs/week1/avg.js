// getting arguments from command line
("use strict");
for (let j = 0; j < process.argv.length; j++) {
  console.log(j + " -> " + process.argv[j]);
}
/*
node avg.js i am node
hello
0 -> C:\Program Files\nodejs\node.exe (index 0=file nema)
1 -> C:\Users\kyous\Desktop\HYF1\Homeworks\class27-homework\6_nodejs\week1\avg.js (index 1=file patha)
2 -> i
3 -> am
4 -> node
*/

// Warmup excercise -----------------------------------------------------
//calculate the average of the numbers provided as command line arguments

let numbersArray = [];

if (process.argv.length - 2 === 0 || process.argv.length - 2 === 1) {
  console.log("No number or only one is provided. Insert minimun 2 numbers.");
} else {
  for (let j = 2; j < process.argv.length; j++) {
    // Checks if the parsed number is NaN (Not-a-Number)
    if (isNaN(process.argv[j])) {
      console.log(
        `${process.argv[j]} is at least one of your invalid inputs. Insert valid numbers.`
      );
    } else {
      const number = parseFloat(process.argv[j]);
      numbersArray.push(number); // Convert string arguments to numbers
    }
  }
}
averageCululation(numbersArray);

// Calculate the average
function averageCululation(theAvg) {
  let sum = 0;
  for (let i = 0; i < theAvg.length; i++) {
    sum += theAvg[i];
  }
  let average = sum / theAvg.length;
  console.log("The average of given numbers is:", average);
}
