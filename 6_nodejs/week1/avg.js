import { createRequire } from "module";
const require = createRequire(import.meta.url);

//process

const args = process.argv;

function average(num1, num2, num3) {
  const avg = (num1 + num2 + num3) / 3;
  console.log(avg);
}
average(Number(args[2]), Number(args[3]), Number(args[4]));

//minimist

const minimist = require("minimist");

const minimistArgs = minimist(process.argv.slice(2));
const values = Object.keys(minimistArgs).filter((key) => key !== "_")
.map((key) => Number(minimistArgs[key]));

let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
const minimistAverage = sum / values.length;

console.log("Input values:", values);
console.log("Average:", minimistAverage);
