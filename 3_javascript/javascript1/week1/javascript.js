// exc. 1 ---------------------------------------------------------------------------------
console.log('------------- Age - ify(A future age calculator)-------------');

let yearOfBirth = 1976;
let yearFuture = 2076;
let age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`);
console.log('\n');

// exc. 2 -----------------------------------------------------------------------------------

console.log('----------- Goodboy-Oldboy (A dog age calculator) -----------');
let dogYearOfBirth = 2018;
let dogYearFuture = 2036;
let dogYear;

let shouldShowResultInDogYears;

let choice = prompt(`Do you wnat to know your dog's age based on dog years or human years calculation? \n 
Type the word "dog" or "human" please`);

if (choice === "dog") {
    shouldShowResultInDogYears = true;
    console.log(`You have chosen the word "${choice}".`);
    dogYear = (yearFuture - dogYearOfBirth) * 7;
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);

} else if (choice === "human") {
    shouldShowResultInDogYears = false;
    console.log(`You have chosen the word "${choice}".`);
    dogYear = yearFuture - dogYearOfBirth;
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);

} else {
    alert("You have not entered dog neither human. \n
     Please run the page again and enter one of them to perform the calculations");

  return;
}
console.log('\n');

// eXC. 3 -----------------------------------------------------------------------------------

console.log('----------- Housey pricey (A house price estimator) -----------');

let juliaHouse = {
    wide: 5, //m
    high: 11, //m
    deep: 8, //m
    gardenSizeInM2: 70, // 100M2
    housePricePaidByJulia: 1000000
};

let juliaHousePrice;

// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300; 
juliaHousePrice = (juliaHouse.wide * juliaHouse.high * juliaHouse.deep) * 2.5 * 1000 + (juliaHouse.gardenSizeInM2 * 300);

if (juliaHouse.housePricePaidByJulia > juliaHousePrice) {
    console.log(`Julia has paid more: She has paid: ${juliaHouse.housePricePaidByJulia} and the real price is: ${juliaHousePrice}`);
} else {
    console.log('Julia has paid less than Peter');
}

let peterHouse = {
    wide: 8, //m
    high: 10, //m
    deep: 10, //m
    gardenSizeInM2: 100, // M2
    housePricePaidByPeter: 2500000
};

let peterHousePrice;
peterHousePrice = (peterHouse.wide * peterHouse.high * peterHouse.deep) * 2.5 * 1000 + (peterHouse.gardenSizeInM2 * 300);

if (peterHouse.housePricePaidByPeter > peterHousePrice) {
    console.log(`Peter has paid more than Julia. He has paid ${peterHouse.housePricePaidByPeter} and the real price is ${peterHousePrice}`);
} else {
    console.log('Peter has paid less');
}

console.log('\n');

// eXC. 4 -----------------------------------------------------------------------------------

console.log('----------- Ez Namey (Startup name generator) Optional -----------');

let firstWords = [
    "Easy",
    "Awesome",
    "Glory",
    "Magic",
    "Green",
    "Powerfull",
    "Big",
    "Shiny",
    "Hello",
    "Sunny"
];

let secondWords = [
    "Corporate",
    "Businness",
    "Journey",
    "Cooperation",
    "Travel",
    "Trading",
    "Knowledge",
    "Steps",
    "Alpha",
    "Kayak"
];
const randomNumber = Math.floor(Math.random() * 10);

let startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log(`The startup: ${startupName} contains ${startupName.length} characters`);



