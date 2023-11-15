//Weather wear //

function weatherWear(temperature) {
  let clothesToWear = "jackets, sweaters";
  clothesToWear = "jackets, sweaters";
  if (temperature <= 10) {
    return ` wear ${clothesToWear}`;
  } else if (temperature >= 10) {
    return `wear comfortable clothes`;
  } else {
    return "jackets, sweaters";
  }
}

console.log(weatherWear("clothesToWear"));
console.log(weatherWear(15));
