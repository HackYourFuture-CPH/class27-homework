
// Weather wear

function clothesToWear(temperature) {
    if (temperature >= 25) {
      return "It's hot! Wear light clothing and sunglasses.";
    } else if (temperature >= 15) {
      return "It's mild. A t-shirt and jeans should be fine.";
    } else if (temperature >= 5) {
      return "It's cool. Consider wearing a sweater or jacket.";
    } else {
      return "It's cold! Bundle up with a coat, scarf, and gloves.";
    }
  }
  
  
  const temperature = 20;
  const outfitSuggestion = clothesToWear(temperature);
  console.log(outfitSuggestion);