// Item array removal
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
  names.splice(1,1);
  console.log(names); 

//   When will we be there
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  const arrivalTime = (travelInformation) =>{
    let time = travelInformation.destinationDistance / travelInformation.speed;
    let hour = Math.floor(time)
    let minute = Math.floor((time - hour) * 60);
    return `${hour} hours and ${minute} minutes`
  }
  const travelTime = arrivalTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes

//   Series duration of my life
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Breaking Bad",
      days: 2,
      hours: 3,
      minutes: 40,
    },
    {
      title: "Stranger Things",
      days: 4,
      hours: 5,
      minutes: 11,
    },
  ];
  const seriesDurationsOfMyLife = (seriesDurations) =>{
    let result = ""
    for(const seriesDuration of seriesDurations){
       let totalMinutesOfSeries =  (seriesDuration.days * 24 *60) + (seriesDuration.hours *60) + seriesDuration.minutes;
       const myAverageLifeInMinuets = 80 * 365 * 24 * 60;
       let percentage =(totalMinutesOfSeries / myAverageLifeInMinuets) * 100
       result += `${seriesDuration.title} took ${percentage.toFixed(3)}% of my life.\n`
    }   
    return result; 
  }
  console.log(seriesDurationsOfMyLife(seriesDurations))