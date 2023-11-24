
// When will we be there?

function calculateTravelTime(speed, distance) {
    
    const totalTimeInHours = distance / speed;

    
    const hours = Math.floor(totalTimeInHours);
    const minutes = Math.round((totalTimeInHours - hours) * 60);

    
    const formattedTime = `${hours} hours and ${minutes} minutes`;

    return formattedTime;
}
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation.speed, travelInformation.destinationDistance);
console.log(travelTime);