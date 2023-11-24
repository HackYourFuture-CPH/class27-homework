let activities = [];
const today = new Date()
date = today.toLocaleDateString('en-GB')
// Adding an activity
const addActivity = ( activity , duration) =>{
    activities.push({
        date: date,
        activity : activity,
        duration : duration
    })
}
addActivity("Youtube", 30);
addActivity("Instagram", 10);
addActivity("Telegram", 20);
console.log(activities)

// Show my status
const showStatus = () =>{
    let activitiesDuration = 0;
    const limmitedDuration = 90;
    for(const activity of activities){
        activitiesDuration += activity.duration;
    }
    if(activities.length === 0)
        return "Add some activities before calling showStatus"
    else if(activitiesDuration > limmitedDuration)
        return "You have reached your limit, no more smartphoning for you!"
    else return `You have added ${activities.length} activities in ${date}. They amount to ${activitiesDuration} min. of usage`
    
}
console.log(showStatus())
