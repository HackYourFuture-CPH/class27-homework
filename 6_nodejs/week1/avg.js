const args = process.argv;

function average(num1, num2, num3) {
  const avg = (num1 + num2 + num3) / 3;
  console.log(avg);
}
average(Number(args[2]), Number(args[3]), Number(args[4]));
