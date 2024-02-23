//warmup
let avg = 0;
for (let j = 2; j < process.argv.length; j++) {
  const a = parseInt(process.argv[2]);
  const b = parseInt(process.argv[3]);
  const c = parseInt(process.argv[4]);
  avg = (a + b + c) / 3;
}
console.log(avg);
