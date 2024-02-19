//  Parse Arguments using process.argv
let avg;
function average() {
  let sum = 0;
  let count = 0;      
  if(process.argv.length < 5){
        console.log("please enter at least three numbers");
        return
  }
  for (let j = 2 ; j < process.argv.length; j++) {
    const num = parseInt(process.argv[j]);
    if(isNaN(num)){
        console.log(`${process.argv[j]} is not a number`);
        return
    };
    sum += num;
    count++
  };
  avg = sum / count;
  console.log(`avg: ${avg}`);
}
average()


//  Passing Arguments Using Yargs
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv))
    .options({
        'num1': {
            type: 'number',
            demandOption: true,
        },
        'num2': {
            type: 'number',
            demandOption: true,
        },
        'num3': {
            type: 'number',
            demandOption: true,
        }
    })
    .argv;

let yargsAvg = 0;

function calculateAvg() {
    const num1 = argv.num1;
    const num2 = argv.num2;
    const num3 = argv.num3;
    yargsAvg = (num1 + num2 + num3) / 3;
    console.log(yargsAvg);
}

calculateAvg();
