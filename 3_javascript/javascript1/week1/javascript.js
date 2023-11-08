console.log('------------- Age - ify(A future age calculator)-------------');

let yearOfBirth = 1976;
let yearFuture = 2076;
let age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture);
console.log('\n');


console.log('----------- Goodboy-Oldboy (A dog age calculator) -----------');
let dogYearOfBirth = 2018;
let dogYearFuture = 2036;
let dogYear;

shouldShowResultInDogYears: Boolean;

let choice = prompt("Do you wnat to know your dog age based on Dog years or Human years calculation? \n Type the word dog or human please");

if (choice == 'dog') {
    let shouldShowResultInDogYears = (choice === 'true');
    console.log('You have chosen the word ' + choice);
    console.log('Your dog age calculation based on dog years: ');
    dogYear = (yearFuture - dogYearOfBirth) * 7;
    console.log('Your dog will be ' + dogYear + ' dog years old in ' + dogYearFuture);
} else if (choice == 'human') {
    console.log('You have chosen the word ' + choice);
    console.log('Your dog age calculation based on human years: ');
    dogYear = yearFuture - dogYearOfBirth;
    console.log('Your dog will be ' + dogYear + ' human years old in ' + dogYearFuture);
} else {
    console.log('You have not entered dog neither human. \n Please run the page again and enter one of them to perform the calculations');
}
console.log('\n');


console.log('----------- Housey pricey (A house price estimator) -----------');

let JuliaHouse = {
    wide: 5, //m
    high: 11, //m
    deep: 8, //m
    gardenSizeInM2: 70, // 100M2
    housePricePaidByJulia: 1000000
};

let JuliaHousePrice;

// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300; 
JuliaHousePrice = (JuliaHouse.wide * JuliaHouse.high * JuliaHouse.deep) * 2.5 * 1000 + (JuliaHouse.gardenSizeInM2 * 300);

if (JuliaHouse.housePricePaidByJulia > JuliaHousePrice) {
    console.log('Julia has paid more: ' + ' She has paid: ' + JuliaHouse.housePricePaidByJulia + 'and the real price is: ' + JuliaHousePrice);
} else {
    console.log('Julia has paid less than Peter');
}

let PeterHouse = {
    wide: 8, //m
    high: 10, //m
    deep: 10, //m
    gardenSizeInM2: 100, // M2
    housePricePaidByPeter: 2500000
};

let PeterHousePrice;
PeterHousePrice = (PeterHouse.wide * PeterHouse.high * PeterHouse.deep) * 2.5 * 1000 + (PeterHouse.gardenSizeInM2 * 300);

if (PeterHouse.housePricePaidByPeter > PeterHousePrice) {
    console.log('Peter has paid more than Julia. ' + ' He has paid ' + PeterHouse.housePricePaidByPeter + ' and the real price is ' + PeterHousePrice);
} else {
    console.log('Peter has paid less');
}

console.log('\n');

/* if (JuliaHouse.housePricePaidByJulia > PeterHousePrice.housePricePaidByPeter) {
    console.log('Julia has paid more than Peter');
}
else if (JuliaHouse.housePricePaidByJulia == PeterHousePrice.housePricePaidByPeter) {
    console.log('Julia anad Peter has paid the same amount of ' + JuliaHouse.housePricePaidByJulia);
} else {
    console.log('Peter has paid more than Julia');
}*/


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
console.log("The startup: " + startupName + " contains " + startupName.length + " characters");



