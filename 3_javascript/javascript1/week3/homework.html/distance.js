function calculateTravelTime(travelInformation) {
    const speed = travelInformation.speed;
    const distance = travelInformation.destinationDistance;
  
    const timeInHours = distance / speed;
  
    const hours = Math.floor(timeInHours);
    const minutes = Math.floor((timeInHours * 60) % 60);
  
    const timeFormatted = hours + " hours and " + minutes + " minutes";
  
    return timeFormatted;
  }
  
  const travelInformation = {
      speed: 50,
      destinationDistance: 432,
    };
    
    const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime);
  