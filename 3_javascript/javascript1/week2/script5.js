
// Candy


const candyPrices = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    'chewing-gum': 0.03,
  };
  
  const boughtCandyPrices = [];
  let amountToSpend = Math.random() * 100;
  
  function addCandy(candyType, weight) {
    const pricePerGram = candyPrices[candyType];
    if (pricePerGram !== undefined) {
      const totalPrice = pricePerGram * weight;
      boughtCandyPrices.push(totalPrice);
      amountToSpend -= totalPrice;
      console.log('Added ${weight} grams of ${candyType} candy to your cart.');
    } else {
      console.log('Invalid candy type: ${candyType}');
    }
  }
  
  function canBuyMoreCandy() {
    let totalSpent = 0;
    for (const price of boughtCandyPrices) {
      totalSpent += price;
    }
    return totalSpent < amountToSpend;
  }
  
  addCandy('sweet', 20);
  addCandy('chocolate', 30);
  addCandy('toffee', 15);
  
  if (canBuyMoreCandy()) {
    console.log('You can buy more, so please do!');
  } else {
    console.log('Enough candy for you!');
  }
  