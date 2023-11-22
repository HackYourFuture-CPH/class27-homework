//Javascript warmup (week3)

//Exercise 1 - Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  const index = names.indexOf("Ahmad");
  if (index !==-1) {
    names.splice(index, 1);
  }
  console.log(names);

//Exercise 2 - When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

function timeToDrive(travelInformation) {
    let timeTotal = (travelInformation.destinationDistance / travelInformation.speed) * 60;
    let hour = Math.floor(timeTotal / 60);
    let minute = Math.floor(timeTotal % 60);
    return `${hour} hours ${minute} minutes`;
  }
  
  const travelTime = timeToDrive(travelInformation);
  console.log(travelTime);
  
  //Series duration of my life
  const seriesDurations = [
    {
      title: "Friends",
      days: 3,
      hours: 23,
      minutes: 0,
    },
    {
      title: "Black Books",
      days: 4,
      hours: 6,
      minutes: 30,
    },
    {
      title: "The Good Doctor",
      days: 7,
      hours: 18,
      minutes: 21,
    },
  ];
  const averageLifespan = 80;
  const averageLifespanInMinutes = averageLifespan * 365 * 24 * 60;
  const timeForEachTypeOfSeriesInMinutes = seriesDurations.days * 24 + seriesDurations.hours * 60 + seriesDurations.minutes; 
  function logOutSeriesText() {
    
  }
  
  logOutSeriesText());// logs out the text found above