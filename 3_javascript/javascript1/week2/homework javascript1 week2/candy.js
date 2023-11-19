//Candy helper optional //

const boughtCandyPrices = [];

const amountToSpend = Math.random() * 100;

const candyPricePalette = [
  {
    type: "sweet",
    price: 0.5,
  },
  {
    type: "chocolate",
    price: 0.07,
  },
  {
    type: "toffee",
    price: 1.1,
  },
  {
    type: "chewing-gum",
    price: 0.2,
  },
];
function addCandy(candyType, weight) {
  for (let i = 0; i < candyPricePalette.length; i++) {
    if (candyType === candyPricePalette[i].type) {
      boughtCandyPrices.push(candyPricePalette[i].price * weight);
      break;
    }
  }
}
function canBuyMoreCandy() {
  let sum = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    sum += boughtCandyPrices;
  }
  if (amountToSpend > sum) {
    return "You can buy more, so please do!";
  } else {
    return "Enough candy for you!";
  }
}
addCandy("sweet", 20);

console.log(candyPricePalette);
console.log(amountToSpend);
console.log(boughtCandyPrices.length);
console.log(canBuyMoreCandy());
