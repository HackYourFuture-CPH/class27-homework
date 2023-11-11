 //calcutation of future age.
let yearOfBirth = 1996;
let yearFuture = 2023;
let age = yearFuture - yearOfBirth;
console.log("You will be " +age+ "years old in "+ yearFuture );

// a dog age is calculation.
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const humanDogYear = dogYear*7;
const shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
}else {
    console.log("Your dog will be " + humanDogYear +" dog years old in " + dogYearFuture + ".");
}

//A house price estimator 
//Peter's house 
let PeterVolumeInMeters = 8*10*10;
let PeterGardenSizeInM2 = 100;
let peterActualPrice = 2500000;
const PeterHousePrice = PeterVolumeInMeters* 2.5 * 1000 + PeterGardenSizeInM2 * 300;
console.log(PeterHousePrice);//checking the price of house paid by peter.

if (peterActualPrice < PeterHousePrice){
    console.log(PeterHousePrice + " too much");
}else{
    console.log(PeterHousePrice + " too little");

}

//Julia's House
let juliaVolumeInMeters = 5*11*8;
let JuliaGardenSizeInM2 = 70;
let JuliaActualPrice = 1000000;
const JuliaHousePrice = juliaVolumeInMeters* 2.5 * 1000 + JuliaGardenSizeInM2 * 300;
console.log(JuliaHousePrice);

if (JuliaActualPrice < JuliaHousePrice){
    console.log(JuliaHousePrice + " too much");
}else{
    console.log(JuliaHousePrice + " too little");

}
