//Age-ify
let yearOfBirth = 1995;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture)


//Goodboy-Oldboy
let dogYearOfBirth = 2023;
let dogYearFuture = 2027;
let dogYear = 7;
let shouldShowResultInDogYears = true;
let dogAge = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears === true){
    console.log("Your dog will be " + dogAge*dogYear + " dog years old in " + dogYearFuture)
}else{
    console.log("Your dog will be " + dogAge +" human years old in " + dogYearFuture)
}

