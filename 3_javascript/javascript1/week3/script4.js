
//Usage Limit

let activities = [];
let usageLimit = 120;

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = activities.reduce((sum, activity) => sum + activity.duration, 0);

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`);
  }
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 28);
addActivity("23/7-18", "Reading News", 20);

showStatus();