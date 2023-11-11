 //hello... Hello... This is my first experience in Javascript :)

console.log("******    Age-ify (A future age calculator)    ******");
let myYearOfBirth = 1991;
let yearFuture = 2027;
let age = yearFuture - myYearOfBirth;

console.log("I\'ll be " + age + " years old in " + yearFuture + ".");
console.log("\n");



console.log("******    Goodboy-Oldboy (A dog age calculator)    ******");
let dogYearOfBirth = 2017;
let dogYearFuture = 2045;
// We have a conditional statement, so a "BOOLEAN variable" can represent (shouldShowResultInDogYears).
let shouldShowResultInDogYears = true;

 // According to the information in the txt:(1 human year = 7 dog year)
let dogAge = (dogYearFuture - dogYearOfBirth)*7;
let humanAge = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
    console.log("His dog will be " + dogAge + " dog years old in " + dogYearFuture + ".");
}

else {
 console.log("His dog will be " + humanAge + " human years old in " + dogYearFuture + ".");
}
console.log("/* His dog will be 28 human years old in 2045. */");
console.log("\n");


console.log("******    Housey pricey (A house price estimator)    ******");
//Peter:
var petersPreferredHouseWide = a;
var petersPreferredHouseDeep = b;
var petersPreferredHouseHigh = c;

let petersGardenSizeInM2 = 100; //m2
let petersPreferredHouseCosts = 2500000; //$

var a = 8; //m
var b = 10; //m
var c = 10; //m

var volumeInMeters = a * b * c;
const petersHousePrice = volumeInMeters * 2.5 * 1000 + petersGardenSizeInM2 * 300;
const petersPriceDifference = petersPreferredHouseCosts - petersHousePrice;
//We can consider the currency unit as the US Doller.
console.log("Peter is paying " + petersPriceDifference + " more than real price.");

//Julia:
var juliasPreferredHouseWide = x;
var juliasPreferredHouseDeep = y;
var juliasPreferredHouseHigh = z;

let juliasGardenSizeInM2 = 70; //m2
let juliasPreferredHouseCosts = 1000000; //$

var x = 5; //m
var y = 11; //m
var z = 8; //m

var volumeInMeters = x * y * z;
const juliasHousePrice = volumeInMeters * 2.5 * 1000 + juliasGardenSizeInM2 * 300;
const juliasPriceDifference = juliasPreferredHouseCosts - juliasHousePrice;
//We can consider the currency unit as the US Doller.
console.log("Julia is paying " + juliasPriceDifference + " less than real price.");
console.log("\n");


console.log("******    Ez Namey (Startup name generator) Optional    ******");
const firstWords =  [
    "Golden",
    "Amazing",
    "Brilliant",
    "Cute",
    "Inteligent",
    "Smart",
    "Silver",
    "Shine",
    "Alpha",
    "Fast"
];

const secondWords = [
    "Magic",
    "Mind",
    "Ocion",
    "Atlas",
    "Persian",
    "Maad",
    "Journey",
    "Team",
    "Engeener",
    "Code"
];

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(startupName);
console.log(startupName.length);
