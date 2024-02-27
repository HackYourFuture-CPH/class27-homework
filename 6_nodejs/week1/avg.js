// create a file which calculate the average of the numbers provided as command line arguments

const arguments = process.argv.slice(2);

if (arguments.length === 0) {
//if no arguments are provided
  console.log("No arguments provided");
} else {
  const sum = arguments.reduce((acc, val) => {
    const num = parseInt(val);
//if the provided arguments are not numbers
    return isNaN(num) ? acc : acc + num; 
  }, 0);

  const filteredArgs = arguments.filter((val) => !isNaN(parseInt(val)));
  const average = sum / filteredArgs.length;
  console.log(average);
}