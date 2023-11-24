let activities = [];
// Adding an activity
const addActivity = ( activity , duration) =>{
    let today = new Date()
    date = today.toLocaleDateString('en-GB')
    activities.push({
        date: date,
        activity : activity,
        duration : duration
    })
}
addActivity("Youtube", 30);
addActivity("Instagram", 40);
addActivity("Telegram", 50);
console.log(activities)
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

// Usage limit
const limittedActivities = [
    {
        title: "Youtube",
        time: 30
    },
    {
        title: "Instagram",
        time: 30
    },
    {
        title: "Telegram",
        time: 30
    },
  
]  
if(activities.activity === limittedActivities.title && activities.duration < limittedActivities.time){
    console.log(showStatus());
}else{
    console.log("You have reached your limit, no more smartphoning for you!")
}
