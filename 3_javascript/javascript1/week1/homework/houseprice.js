const volumeInMetersPeter = 8 * 10 * 10;
const volumeInMetersJulia = 5 * 11 * 8;
const gardenSizeInM2Peter = 100;
const gardenSizeInM2Julia = 70;

const housePriceOfPeter =
  volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
const housePriceOfJulia =
  volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

if (housePriceOfPeter > 2500000) {
  console.log("Peter paid less for the house.");
} else {
  console.log("Peter paid more for the house.");
}
if (housePriceOfJulia > 1000000) {
  console.log("Julia paid less for the house.");
} else {
  console.log("Julia paid more for the house.");
}