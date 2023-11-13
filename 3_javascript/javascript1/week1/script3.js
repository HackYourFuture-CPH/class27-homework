function calculateHousePrice(width, height, depth, gardenSize) {
    let volume = width * height * depth;
    let housePrice = volume * 2.5 * 1000 + gardenSize * 300;
    return housePrice;
  }
  
  function comparePrices(expectedPrice, actualPrice, personName) {
    if (expectedPrice > actualPrice) {
      return personName + " is paying too much for the house.";
    } else {
      return personName + " isn't paying too much for the house.";
    }
  }
  
    let peterWidth = 8;
    let peterHeight = 10;
    let peterDepth = 10;
    let peterGardenSize = 100;
    let peterActualPrice = 2500000;
    
    let juliaWidth = 5;
    let juliaHeight = 8;
    let juliaDepth = 11;
    let juliaGardenSize = 70;
    let juliaActualPrice = 1000000;
    
    let expectedPeterPrice = calculateHousePrice(peterWidth, peterHeight, peterDepth, peterGardenSize);
    let expectedJuliaPrice = calculateHousePrice(juliaWidth, juliaHeight, juliaDepth, juliaGardenSize);
  
    
    
    console.log(comparePrices(expectedPeterPrice, peterActualPrice, "Peter"));
    console.log(comparePrices(expectedJuliaPrice, juliaActualPrice, "Julia"));