function estimatePrice() {
  const wide = document.getElementById("wide").value;
  const deep = document.getElementById("deep").value;
  const high = document.getElementById("high").value;
  const gardenSizeInM2 = document.getElementById("gardenSize").value;
  const askedPrice = document.getElementById("askedPrice").value;
  const p = document.getElementById("price");
  let volumeInMeters = wide * deep * high;
  let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

  if (housePrice <= askedPrice) {
    p.innerHTML = `the price of this house is ${housePrice}. the price is good. buy it`;
  } else {
    p.innerHTML = `the price of this house is ${housePrice}. It is expensive.`;
  }
}
