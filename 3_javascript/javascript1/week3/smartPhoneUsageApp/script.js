// Adding an activity
let activities = [];
const addActivity = (date , activity , duration) =>{
    activities.push({
        date: date,
        activity : activity,
        duration : duration
    })
}
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-19", "Instagram", 40);
addActivity("23/7-20", "Telegram", 50);

// Show my status
const showStatus = () =>{
    let actinitiesDuration = 0;
    for(const activity of activities){
        actinitiesDuration += activity.duration;
    }

    return activities.length === 0
    ? "Add some activities before calling showStatus"
    : `You have added ${activities.length} activities. They amount to ${actinitiesDuration} min. of usage`
}
console.log(showStatus())