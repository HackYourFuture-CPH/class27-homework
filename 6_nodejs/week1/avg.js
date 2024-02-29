//calculate the average of the numbers as command line arguments.
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum / numbers.length;
}

//retrieves the command line arguments
const arguments = process.argv.slice(2);
const average = calculateAverage(arguments);
console.log(average);

//--------Optional question--------------------------------------
//arguments are mix of numbers and string
function printNumbersAndStrings(args) {
  if (args.length === 0) {
    console.log("There is no arguments.");
    return;
  }
  const numbers = [];
  const strings = [];
  for (let i = 0; i < args.length; i++) {
    const num = parseFloat(args[i]);
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      strings.push(args[i]);
    }
  }
  console.log("Numbers:", numbers);
  console.log("Strings:", strings);
}

const arguments1 = process.argv.slice(2);
printNumbersAndStrings(arguments1);
