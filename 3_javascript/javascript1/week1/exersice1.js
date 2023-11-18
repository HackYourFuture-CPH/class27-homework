// You are talking to a friend who suddently looks at you 
// and asks: "How old will you be in 2045?" Hmm you remember 
// the year you were born and try to do some calculation:
// Born in 1987 + 3 that's 1990. 90 - 40 is 50 + 5 thats 58. 
// I will be 58! Wow that was painful! Let's fix that by making 
// some code that automatically does this!

let yearOfBirth = 1986;
let yearFuture = 2051;
let age;

age = yearFuture - yearOfBirth;

console.log(`You will be ${age} old in ${yearFuture}`);

// Goodboy-Oldboy (A dog age calculator)
// The same friend(who by the way loves dogs) asks how old his 
// dog will be in 2045. Hmm you think, lets make this into a
// product as well! Dogs age can either be measured in dog years
// or in human years, this we want to take into consideration!

const dogYearOfBirth = 2022;
const dogYearFuture = 2025;
let dogYear;

dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === false) {
  console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYear}`);
} else {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYear}`);
}


// Housey pricey (A house price estimator)
// Two of your friends are considering buying a house, but cannot 
// figure out what the right price should be. Your friends know the
// width, the height and the depth of the house and the garden
// size.Lets help them figure out if they paid too much:

const widthHouse = 8;
const heightHouse = 10;
const depthHouse = 10;
const gardenSize = 100;

//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const peterHouseParameters = {width: 8, heigth: 10, deep: 10, garden: 100, price: 2500000}
let housePricePeter = peterHouseParameters.width * peterHouseParameters.heigth* peterHouseParameters.deep * 2.5 * 1000 + peterHouseParameters.garden * 300;
console.log("house Price Peter", housePricePeter);
if (housePricePeter > peterHouseParameters.price) {
  console.log('Price too hight');
} else {
  console.log("Price is lower");
}


const juliaHouseParameters = {
  width: 5,
  heigth: 11,
  deep: 8,
  garden: 70,
  price: 1000000,
};
let housePriceJulia =
  juliaHouseParameters.width * juliaHouseParameters.heigth * juliaHouseParameters.deep * 2.5 * 1000 +
  juliaHouseParameters.garden * 300;
console.log("house Price Julia", housePriceJulia);

if (housePriceJulia > juliaHouseParameters.price) {
  console.log("Price too hight");
} else {
  console.log("Price is lower");
}

// Ez Namey (Startup name generator) Optional
// At a meetup you overhear a conversation between two developers. 
// It went something like this: "Man i wish picking a startup name 
// was easier! You need to be creative, funny and interesting, its 
// nearly impossible!" Another problem to solve, awesome!

const firstWords = ['Cool', 'Great', 'Maxi', 'Big', 'Digital', 'Awesome', 'Smart','Super'];
const secondWords = [
  "Corporate",
  "Businness",
  "Journey",
  "Cooperation",
  "Travel",
  "Corporation",
  "Sience",
  "Steps",
  "Alpha",
  "Comp",
];

const randomNumber = Math.floor(Math.random() * 10);
const newName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log(`The startup: "${newName}" contains ${newName.length} characters`)
// "The startup: "Easy Corporation" contains 16 characters"