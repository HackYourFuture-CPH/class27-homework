//future age calculator

let yearOfBirth = 1996; 
let yearFuture = 2050;
let age = yearFuture - yearOfBirth;
console.log ( "You will be " + age + " years old in " + yearFuture + ".");

//dog age calculator

let dogYearOfBirth = 2019;
let dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log( "your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}
else {
    let humanYears = dogYear * 7;
    console.log ("Your dog will be " + humanYears + " human years old in " + dogYearFuture);
}

//Housey pricey (A house price estimator)

let peterHouseWide = 8;
let peterHouseDeep = 10;
let peterHouseHeigh = 10;
let peterGardenSize = 100;
let peterHouseCost = 2500000;

let peterVolume = peterHouseWide * peterHouseHeigh * peterHouseDeep;
let peterHousePrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;

if (peterHousePrice > peterHouseCost) {
    console.log ( "Peter is paying too much.");
}
else if (peterHousePrice < peterHouseCost) {
    console.log ("Peter is paying too little.");
}
else {
    console.log ("Peter is paying the right amount.");
}

let juliaHouseWide = 5;
let juliaHouseDeep = 11;
let juliaHouseHeigh = 8;
let juliaGardenSize = 70;
let juliaHouseCost = 1000000;

let juliaVolume = juliaHouseWide * juliaHouseHeigh * juliaHouseDeep;
let juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (juliaHousePrice > juliaHouseCost) {
    console.log ("Julia paying too much.");
}
else if (juliaHousePrice < juliaHouseCost) {
    console.log( "Julia paying too little.");
}
else {
    console.log( "Julia paying the right amount.");
}

//Ez Namey (Startup name generator) Optional

const firstWords = ["Easy", "Corporate", "Global", "Awesome", "Digital", "Smart", "Global", "Future", "Inovation", "Magnificent" ];
const secondWords = [ "Tech", "Corporation", "Foundation", "Solution", "Industries", "Knowlages", "World", "Post", "Power", "Vision"];
const randomIndexFirst = Math.floor(Math.random() * 10);
const randomIndexSecond = Math.floor(Math.random() * 10);
const startupName = `${firstWords[randomIndexFirst]} ${secondWords[randomIndexSecond]}`;
console.log ("My startup name " + startupName + ".");