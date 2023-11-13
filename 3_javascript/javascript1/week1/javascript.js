 //hello... Hello... This is my first experience in Javascript :)

console.log("******    Age-ify (A future age calculator)    ******");
const myYearOfBirth = 1991;
const yearFuture = 2027;
const age = yearFuture - myYearOfBirth;

console.log("I\'ll be " + age + " years old in " + yearFuture + ".");




console.log("******    Goodboy-Oldboy (A dog age calculator)    ******");
const dogYearOfBirth = 2017;
const dogYearFuture = 2045;
// We have a conditional statement, so a "BOOLEAN variable" can represent (shouldShowResultInDogYears).
const shouldShowResultInDogYears = true;

 // According to the information in the txt:(1 human year = 7 dog year)
const dogAge = (dogYearFuture - dogYearOfBirth)*7;
const humanAge = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
    console.log("His dog will be " + dogAge + " dog years old in " + dogYearFuture + ".");
}

else {
 console.log("His dog will be " + humanAge + " human years old in " + dogYearFuture + ".");
}


console.log("******    Housey pricey (A house price estimator)    ******");
//Peter:
const petersPreferredHouseWide = 8; //m
const petersPreferredHouseDeep = 10; //m
const petersPreferredHouseHigh = 10; //m

const petersGardenSizeInM2 = 100; //m2
const petersPreferredHouseCosts = 2500000; //$


const peterVolumeInMeters = petersPreferredHouseWide * petersPreferredHouseDeep * petersPreferredHouseHigh;
const petersHousePrice = peterVolumeInMeters * 2.5 * 1000 + petersGardenSizeInM2 * 300;
//We can consider the currency unit as the US Doller.
if(petersHousePrice<= petersPreferredHouseCosts){
console.log("As a good deal for Peter");
}
else{
    console.log("Too expensive deal for Peter"); 
}
//Julia:
const juliasPreferredHouseWide = 5; //m
const juliasPreferredHouseDeep = 11; //m
const juliasPreferredHouseHigh = 8; //m

const juliasGardenSizeInM2 = 70; //m2
const juliasPreferredHouseCosts = 1000000; //$

const juliaVolumeInMeters = juliasPreferredHouseWide * juliasPreferredHouseDeep * juliasPreferredHouseHigh;
const juliasHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliasGardenSizeInM2 * 300;

//We can consider the currency unit as the US Doller.
if(juliasHousePrice<= juliasPreferredHouseCosts){
console.log("such a good deal for Julia");
}
else{
    console.log("Too expensive deal for Julia");   
}

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
const firstOneWord = firstWords[randomNumber];
const secondOneWord = secondWords[randomNumber];
const startupName = firstOneWord + secondOneWord;
const numberOfCharacter = firstOneWord.length + secondOneWord.length;

console.log("The startup: " + startupName + " contains " + numberOfCharacter + " characters");