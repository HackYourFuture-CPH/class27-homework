console.log("Javascript/week1");
//Age-ify (A future age calculator)
const yearOfBirth = 1992;
let yearFuture = 2024;
const age = yearFuture - yearOfBirth;
console.log(age);
console.log("You will be " + age + " years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
console.log(dogYear);
let dogYearsCompareToHuman = dogYear * 7;
console.log(dogYearsCompareToHuman);
shouldShowResultInDogYears = true;
shouldShowResultInDogYears = false;
function test(shouldShowResultInDogYears) {
    if (shouldShowResultInDogYears) {
        return console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
    }
        return console.log("Your dog will be " + dogYearsCompareToHuman + " dog years old in " + dogYearFuture); 
}

test(true);
test(false);

//Housey pricey (A house price estimator)

//House for Peter
const housePriceForPeter = 2500000;
let houseWideForPeter = 8;
let houseDeepForPeter = 10;
let houseHighForPeter =10;
let houseGardenSizeForPeter = 100;
const volumeInMetersForPeter = 8*10*10*2.5*1000;
console.log(volumeInMetersForPeter);
const realHousePriceForPeter = volumeInMetersForPeter+(houseGardenSizeForPeter*300);
console.log(realHousePriceForPeter);
console.log("The real price for Peter during calculation is " + realHousePriceForPeter + ", and it means that he is paying much more " + "(" + housePriceForPeter + ")" + " for the house with those parameters.");

//House for Julia
const housePriceForJulia = 1000000;
let houseWideForJulia = 5;
let houseDeepForJulia = 11;
let houseHighForJulia = 8;
let houseGardenSizeForJulia = 70;
const volumeInMetersForJulia = 5*11*8*2.5*1000;
console.log(volumeInMetersForJulia);
const realHousePriceForJulia = volumeInMetersForJulia+(houseGardenSizeForJulia*300);
console.log(realHousePriceForJulia);
console.log("The real price for Julia during calculation is " + realHousePriceForJulia + ", and it means that she is paying much less " + "(" + housePriceForJulia + ")" + " for the house with those parameters.");


//Ez Namey (Startup name generator)
let firstWords = [
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
let secondWords = [
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
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup: " + startupName + " contains " + startupName.length + " characters");
