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
