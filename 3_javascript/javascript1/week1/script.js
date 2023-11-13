//Age-ify (A future age calculator)

const yearOfBirth = 1995;
const yearFuture = 2045;
console.log(typeof yearFuture);
const curentYear = 2023;
const age = curentYear - yearOfBirth;
console.log(age);
const futureAge = yearFuture - yearOfBirth;
console.log(futureAge);
console.log(`You will be ${futureAge} years old in ${yearFuture}`);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2018;
const dogYearFuture = 2045;
const dogYear = 2023;
const result = dogYear - dogYearOfBirth;
const dogFutureAge = dogYearFuture - dogYear + result;
console.log(dogFutureAge);
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
  console.log(`Your dog will be ${dogFutureAge} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogFutureAge} human years old in ${dogYearFuture}`);
}

//Housey pricey (A house price estimator)

const volumeInMetersPeter = 8 * 10 * 10;
const thePricOfTheHousePeterWants = 2500000;
const gardenSizeInM2Peter = 100;
const calculatedHousePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
if (thePricOfTheHousePeterWants > calculatedHousePricePeter) {
  console.log("too expensive");
} else if (thePricOfTheHousePeterWants === calculatedHousePricePeter) {
  console.log("price is good");
} else {
  console.log("cheap");
}

const volumeInMetersJulia = 5 * 11 * 8;
const thePriceOfTheHouseJuliaWants = 1000000;
const gardenSizeInM2Julia = 70;
const calculatedHousePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
if (thePriceOfTheHouseJuliaWants > calculatedHousePriceJulia) {
  console.log("too expensive");
} else if (thePriceOfTheHouseJuliaWants === calculatedHousePriceJulia) {
  console.log("price is good");
} else {
  console.log("cheap");
}

//Ez Namey (Startup name generator) Optional

const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Nice",
  "Great",
  "Big",
  "Team",
  "Prety",
  "Beautiful",
  "Brilliant",
];
const secondWords = [
  "Hope",
  "Vestas",
  "Dansk",
  "Fotex",
  "Rema",
  "Jysk",
  "Ikea",
  "Lidl",
  "Aldi",
  "Asus",
];

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(`The startup: ${startupName} contains ${startupName.length} characters`);
