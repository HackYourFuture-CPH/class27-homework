// Peter
let widthInM2= 8;
let depthInM2= 10;
let heightInM2= 10;
let gardenSizeInM2 = 100;
const house1= 2500000;

const volumeInMeters = widthInM2 * depthInM2 * heightInM2; 
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);

if ((house1-housePrice)>0){
    console.log("The house price for Peter is expensive, and it should be no more than "+ housePrice);
} else {
    console.log("The house price for Peter is cheap.")
};

// Julia

const house2= 1000000;
widthInM2= 5;
depthInM2= 11;
heightInM2= 8;
gardenSizeInM2= 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);
if ((house2-housePrice)>0){
    console.log("The house price for Julia is expensive, and it should be no more than "+ housePrice)
} else{
    console.log("The house price for Julia is cheap.")
}