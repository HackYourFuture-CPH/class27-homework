function weather(temp) {
    if (temp >= 20) {
      return "U sholud wear shorts and t-shirt";
    } else if (temp <= 15) {
      return "U should wear a sweater";
    } else {
      return "Wear what u think is accurate for the weather";
    }
  }

  console.log(weather(17));
  console.log(weather(25));
  console.log(weather(12));