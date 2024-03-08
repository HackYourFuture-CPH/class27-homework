const args = process.argv.slice(2);

const numbers = args.map(Number).filter(num => !isNaN(num));

if (nembers.length > 0) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    console.log(average);
} else {
    console.log("Please provide numeric arguments to calculate the average.");
}

if (numbers.length === 0) {
    console.log("Please provide numbers as arguments");
} else {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum /numbers.length;
    console.log(average);
}

//Optional Modifications

args.forEach(arg => {
    const number = Number(arg);
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        nonNumerics.push(arg);
    }
});



