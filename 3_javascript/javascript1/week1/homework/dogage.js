
const shouldShowResultInDogYears = true;
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear * 15 + " dogs years old in 2027"
  );
} else {
  console.log("Your dog will be 70 human years old in 2027");
}