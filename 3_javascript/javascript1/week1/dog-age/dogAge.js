let dogYearOfBirth = 2020;
let dogYearFuture = 2027;
let dogHumanYear = dogYearFuture - dogYearOfBirth;
let dogYear = dogHumanYear * 7;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogHumanYear + " human years old in " + dogYearFuture
  );
}
