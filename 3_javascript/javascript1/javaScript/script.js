//Calculate age based on year of birth and future year.//
let yearOfBirth = 1990;
let yearFuture = 2045;
let age = (yearFuture - yearOfBirth);
//log the calculated age to console//
console.log(age);
//Dog Age Calculator//
let dogYearOfBirth = 2017
let dogYearFuture = 2027
let dogYear
let shouldShowResultInDogYears = true; //boolean

if (shouldShowResultInDogYears) {
dogYear = (dogYearFuture - dogYearOfBirth) * 7;

}
console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
console.log("Your dog will be " + dogYear + "dog years old in " + dogYearFuture);

//Price House Estimator//

//Peter's house details//
let houseWidthPeter = 8;
let houseDepthPeter = 10;
let houseHeightPeter = 10;
let gardenSizeInM2Peter = 100;
let houseCostPeter = 2.500000;

//Julia's house details//
let houseWidthJulia = 5;
let houseDepthJulia = 11;
let houseHeightJulia = 8;
let gardenSizeInM2julia = 70;
let houseCostJulia = 1.000000;

//Calculate the volume of houses with the formula below//

let volumePeter = houseWidthPeter * houseDepthPeter * houseHeightPeter;
let volumeJulia = houseWidthJulia * houseDepthJulia * houseHeightJulia;

//Claculate house pricing using the following formula//
let housePricePeter = volumePeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
let housePriceJulia = volumeJulia * 2.5 * 1000 + gardenSizeInM2julia * 300;

//Decide if Peter and Julia are paying too much/little//
console.log("Peter's house should cost " + housePricePeter);
console.log("Julia's house should cost " + housePriceJulia);
console.log("Peter is paying too " + (houseCostPeter > housePricePeter ? "much" : "little."));
console.log("Julia is paying too " + (houseCostJulia > housePriceJulia ? "much" : "little."));

//Startup Name Generator//
let firstWords = ["Easy", "Awesome", "Corporate", "Dynamic", "Innovatiove", "Quantum", "NextGen", "Virtual", "DIGIT"]
let secondWords = ["Solutions", "Tech", "Strategy", "Ventures", "Concepts", "Analytics", "Logistics", "Networks", "Hub", "Works"]


//To generate a random number of elements//
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

//Use the random number to select from each array//
let firstWord = firstWords[randomNumber1];
let secondWord = secondWords[randomNumber2];

let startupName = `${firstWord} ${secondWord}`;
let startupNameLength = startupName.length;


console.log(`The startup: "${startupName}" contains ${startupNameLength} characters.`);



