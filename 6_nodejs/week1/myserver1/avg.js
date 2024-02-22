// avg.js

// Function to calculate the average of numbers
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => {
    const parsedNum = parseFloat(num);
    if (!isNaN(parsedNum)) {
      return acc + parsedNum;
    } else {
      return acc; // Ignore non-numeric values
    }
  }, 0);
  return sum / numbers.length;
}

// Extract numbers from command line arguments (ignoring first two arguments which are 'node' and the script name)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: node avg.js <numbers>");
} else {
  const numbers = args.map(Number); // Convert arguments to numbers
  const filteredNumbers = numbers.filter((num) => !isNaN(num)); // Filter out non-numeric values
  if (filteredNumbers.length === 0) {
    console.log("No valid numbers provided.");
  } else {
    const average = calculateAverage(filteredNumbers);
    console.log("Average:", average);
  }
}
