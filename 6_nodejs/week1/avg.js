let num1 = parseFloat(process.argv[2]);
let num2 = parseFloat(process.argv[3]);
let num3 = parseFloat(process.argv[4]);

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  let avg = (num1 + num2 + num3) / 3;
  console.log(avg);
} else {
  console.log("Please provide 3 valid numbers, and you will get the avg :D");
}
