console.log("Javascript/week1");
//Age-ify (A future age calculator)
const yearOfBirth = 1992;
const yearFuture = 2024;
const age = yearFuture - yearOfBirth;
console.log(age);
console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
console.log(dogYear);
const dogYearsCompareToHuman = dogYear * 7;
console.log(dogYearsCompareToHuman);
function dogsAge(shouldShowResultInDogYears) {
    if (shouldShowResultInDogYears) {
        return console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
    }
        return console.log("Your dog will be " + dogYearsCompareToHuman + " dog years old in " + dogYearFuture); 
}

dogsAge(true);
dogsAge(false);

//Housey pricey (A house price estimator)

//House for Peter
const housePriceForPeter = 2500000;
let houseWideForPeter = 8;
let houseDeepForPeter = 10;
let houseHighForPeter =10;
let houseGardenSizeForPeter = 100;
const volumeInMetersForPeter = houseWideForPeter*houseDeepForPeter*houseHighForPeter;
const realHousePriceForPeter = volumeInMetersForPeter * 2.5 * 1000 +(houseGardenSizeForPeter*300);
console.log(realHousePriceForPeter);
if (housePriceForPeter > realHousePriceForPeter) {
    console.log("The house is too expensive.")
    }
    else {
    console.log("Good deal.")
    }

//House for Julia
const housePriceForJulia = 1000000;
let houseWideForJulia = 5;
let houseDeepForJulia = 11;
let houseHighForJulia = 8;
let houseGardenSizeForJulia = 70;
const volumeInMetersForJulia = houseWideForJulia*houseDeepForJulia*houseHighForJulia;
const realHousePriceForJulia = volumeInMetersForJulia * 2.5 * 1000 +(houseGardenSizeForJulia*300);
console.log(realHousePriceForJulia);
if (housePriceForJulia > realHousePriceForJulia) {
    console.log("The house is too expensive.")
    }
    else {
    console.log("Good deal.")
}

//Ez Namey (Startup name generator)
const firstWord = [
    "Funny",
    "Ambitious",
    "Intelligent",
    "Funny",
    "Warm-hearted",
    "Cheerful",
    "Unique",
    "Charming",
    "Attractive",
    "Pro-active"
];
const secondWord = [
    "Donkey",
    "Wagon",
    "Cow",
    "Window",
    "Badger",
    "Space",
    "Genius",
    "Hedgehog",
    "Plant",
    "Bees"
];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWord[randomNumber] + " " + secondWord[randomNumber];
console.log("The startup: " + startupName + " contains " + (startupName.length-1) + " characters");
