// A Future Age Calculator
let yearOfBirth = 1997;
let yearFuture = 2030;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + "years old in " + yearFuture);

// A Dog Age Calculator
let dogYearOfBirth = 2019;
let dogYearFuture = 2030;
let dogHumanYear = dogYearFuture - dogYearOfBirth;
let dogYear = dogHumanYear * 7;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + "human years old in " + dogYearFuture);
}else{
    console.log("Your dog will be " + dogHumanYear + "dog years old in" + dogYearFuture )
}

// A House Price Estimatior
let wide = 8;
let deep = 10;
let height = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = wide * deep * height;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);

// Startup Name Generator 
const firstWords = ["Awsom" , "Good", "Innovative", "Easy", "Fun", "Global", "Green", "Logic" , "Advanced" , "Creative"];
const secondWords = ["world" , "tech" , "Corporation", "Studio", "Services" , "Center" , "Community" , "Electric" ,"Solutions", "Ventures"]
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const nameLength = startupName.length;
console.log(startupName + " contains " + nameLength + "characters");