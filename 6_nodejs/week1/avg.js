import { createRequire } from "module";
const require = createRequire(import.meta.url);

const args = process.argv;

function avg(args) {
    let sum = 0;
    for (let i = 2; i < args.length; i++) {
        sum += +args[i];
    }

    if (sum > 0) {
        const avg = sum / (args.length - 2);  
        console.log(avg);
    } else {
        console.log('Please insert numbers');
    }
};

avg(args);