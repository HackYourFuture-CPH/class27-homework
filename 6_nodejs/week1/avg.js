//calculate the average of the numbers as command line arguments.
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum / numbers.length;
}

//retrieves the command line arguments
const args = process.argv.slice(2);
const average = calculateAverage(args);
console.log(average);
