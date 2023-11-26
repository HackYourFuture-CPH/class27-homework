//Item array removal
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
  
  
  // Write some code here
  names.splice(1,1);
  // Code done
  
  console.log(names);

  //When will we be there??

function timeCalculator(speed, destinationDistance){
    const  timeHour = Math.floor((destinationDistance / speed)%60);
    const timeMin = Math.round((destinationDistance % speed) / speed * 60);
    console.log(timeHour + '  hours and '+ timeMin + ' minutes.');
}

console.log(timeCalculator(50, 432));
console.log(timeCalculator(60, 98));
