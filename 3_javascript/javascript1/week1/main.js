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

//Housey Pricey

function  calculator(wide, deep, high, gardenSizeInM2, price){
    const volumeInMeters = wide*deep*high;
    const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    //return housePrice;
    if (price < housePrice){
        console.log("The house is cheaper than market value.")
    }else if (price > housePrice){
        console.log("The house is more expensive than market value.")
    }else{
        console.log("The price is equal to market value.")
    }
}

//function for Peter. Peter pays more than market value. :(
calculator(8, 10, 10, 100, 2500000)

//function for Julia. Julia pays less than market value. ^.^
calculator(5, 11, 8, 70, 1000000)