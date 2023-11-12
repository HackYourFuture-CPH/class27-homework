const yearOfBirth = 1987;
const yearFuture = 2045;

const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture + ".");
//2

const dogYearOfBirth = 2010;
const dogYearFuture = 2045;
const shouldShowResultInDogYears = true;

const dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = shouldShowResultInDogYears
  ? dogAgeInHumanYears * 7
  : dogAgeInHumanYears;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " +
      dogAgeInDogYears +
      " dog years old in " +
      dogYearFuture +
      "."
  );
} else {
  console.log(
    "Your dog will be " +
      dogAgeInHumanYears +
      " human years old in " +
      dogYearFuture +
      "."
  );
}
//3

const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterActualPrice = 2500000;

const peterVolumeInMeters = peterWidth * peterDepth * peterHeight;

const peterExpectedPrice =
  peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;

if (peterActualPrice > peterExpectedPrice) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter is getting a good deal for the house.");
}

const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

const juliaVolumeInMeters = juliaWidth * juliaDepth * juliaHeight;

const juliaExpectedPrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;

if (juliaActualPrice > juliaExpectedPrice) {
  console.log("Julia is paying too much for the house.");
} else {
  console.log("Julia is getting a good deal for the house.");
}
// comment log
