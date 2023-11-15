//calcutation of future age.
const yearOfBirth = 1996;
const yearFuture = 2023;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + "years old in " + yearFuture);

// a dog age is calculation.
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const humanDogYear = dogYear * 7;
const shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture + "."
  );
} else {
  console.log(
    "Your dog will be " +
      humanDogYear +
      " dog years old in " +
      dogYearFuture +
      "."
  );
}

//A house price estimator
//Peter's house
const PeterVolumeInMeters = 8 * 10 * 10;
const PeterGardenSizeInM2 = 100;
const peterActualPrice = 2500000;
const PeterHousePrice =
  PeterVolumeInMeters * 2.5 * 1000 + PeterGardenSizeInM2 * 300;
console.log(PeterHousePrice); //checking the price of house paid by peter.

if (peterActualPrice < PeterHousePrice) {
  console.log(PeterHousePrice + " too much");
} else {
  console.log(PeterHousePrice + " too little");
}

//Julia's House
const juliaVolumeInMeters = 5 * 11 * 8;
const JuliaGardenSizeInM2 = 70;
const JuliaActualPrice = 1000000;
const JuliaHousePrice =
  juliaVolumeInMeters * 2.5 * 1000 + JuliaGardenSizeInM2 * 300;
console.log(JuliaHousePrice);

if (JuliaActualPrice < JuliaHousePrice) {
  console.log(JuliaHousePrice + " too much");
} else {
  console.log(JuliaHousePrice + " too little");
}
//Ez Namey(Startup name generator)
const firstWords = [
  "Mission",
  "Vission",
  "Spotlight",
  "Live A life",
  "Grandma",
  "Shubh magal",
  "Goldeger",
  "Too Much",
  "Rachin",
  "Startup",
];
const secondWords = [
  "Chef",
  "Hot Chilly",
  "Samarth",
  "GPL",
  "YO Chef",
  "Water Tank",
  "Terminal",
  "Good Luck",
  "First Bank",
  "Logout",
];
const randomNumber = Math.floor(Math.random() * 10);

const startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

console.log("My Startup Company Name is " + startupName + ".");
