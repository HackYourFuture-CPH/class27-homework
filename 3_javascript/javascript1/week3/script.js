// ________________warmup excercise : The time it will take to arrive at your destination _________________

function travelInformation(speedInkmperh, destinationDistanceInkm) {

    let timeToRichToTheDestination = (destinationDistanceInkm / speedInkmperh);
    const hours = Math.trunc(timeToRichToTheDestination); //same result with const hours (~~timeToRichToTheDestination) to cuts all fractional digits
    let minutes = (timeToRichToTheDestination - hours) * 60;
    const rminutes = Math.ceil(minutes); // To round up the minutes
    return (`Your travel takes ${hours} hours & ${rminutes} minutes`); // It doesn't give a result for ${hours} & ${rminutes} !!!!!
}

const travelTime = travelInformation(50, 432);
console.log(travelTime);


// ______ warmup excercise : how much time a tv series have taken as a percentage of an average lifespan of 80 years_______

function logOutSeriesText(TVSeriestiltle, daysToWatch) {

    const tookDaysOfLife = (80 * 365);
    let percentFromlife = (daysToWatch * 100) / tookDaysOfLife; //claculating percentage
    let rPercentOfLife = percentFromlife.toPrecision(4); // To have just 4 digits and only 3 digits after decimal point
    //.toFixed(3) method rounds the number to 3 decimal places
    totalPercentOfLife = totalPercentOfLife + rPercentOfLife;
    return (`${TVSeriestiltle} took ${rPercentOfLife} % of my life. And alle of them took `);

};
let totalPercentOfLife = 0;

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 9,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 19,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 27,
        hours: 12,
        minutes: 0,
    },
];


for (let i = 0; i < seriesDurations.length; i++) {
    let result = logOutSeriesText(seriesDurations[i].title, seriesDurations[i].days);
    console.log(result);
    // Could you please tell me how I can add the 3 percentages and make a subtotal of them? :), Thank you.
};



// _________Homework : Smart-ease / NOnoN0nOYes (Note taking app) / create a simple and easy notepad__________

// ---------Save a note  ---------------------------------

const notes = [];

function saveNote(content, id) { // content parameter is a string and id is a number
    let note = { content: content, id: id };
    notes.push(note);
};

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Washing dishes", 3);
saveNote("Ironing clothes", 4);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}, ........]


//------  Get a note  ----------------------------------

function getNote(id) {

    if (typeof id === number) {  //typeof id !== 'string'
        let theTask = notes.find(item => item.id == id);
        return (theTask); //f.x  id=1 => "Pick up groceries"
    } else {

        return (alert(`You should enter only a number!
        Run the program again and enter a number between 1 and ${notes.length}`));
        //Why do I get 'Undefined' message? :/
    }
};

const getId = prompt(`Enter a number between 1 and ${notes.length} `, 1);
const theRelevantNoteToTheGivenId = getNote(getId);
alert(theRelevantNoteToTheGivenId);


//--------  Log out notes  -----------------------------

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} `);
    }
};

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//--------- Unique feature --------------------------------

//What can it be fx.? :)


// -----------CactusIO-interactive (Smart phone usage app) optional -------------------

//PART1: Adding an activity ______________________________________

const activities = []; // [{}]

function addActivity(date, activity, duration) {  //date: string, activity: string; duration: minutes

    let activitiesDataDuration = { date: date, activity: activity, duration: duration };
    //a little trick to save some time and lines,
    //if the variable and the object key are the same you can write it just once and not twice. like this:
    //let activitiesDataDuration = { activity, date, duration };

    activities.push(activitiesDataDuration); // no need to write:   return activities;
}

let gottenDate;
let gottenActivity;
let gottenDuration;

gottenDate = prompt('add a date fx. 23/7-2023', '23/7-2023');
gottenActivity = prompt('add an activity fx. Youtube', 'Youtube');
gottenDuration = prompt('Enter a number as activity duration hours fx.', 30);
addActivity(gottenDate, gottenActivity, gottenDuration);

gottenDate = prompt('add a date fx. 23/7-2023', '23/7-2023');
gottenActivity = prompt('add an activity fx. Instagram', 'Instagram');
gottenDuration = prompt('Enter a number as activity duration hours fx.', 40);
addActivity(gottenDate, gottenActivity, gottenDuration);

gottenDate = prompt('add a date fx. 23/7-2023', '23/7-2023');
gottenActivity = prompt('add an activity fx. Facebook', 'Facebook');
gottenDuration = prompt('Enter a number as activity duration hours fx.', 15);
addActivity(gottenDate, gottenActivity, gottenDuration);

console.log(activities);

// PART2: Adding an activity ____________________________________

function showStatus(activities) {

    if (activities.length === 0) {
        console.log(`You have not added any activities. 
        Add some activities before to request seeing the status of activities`);
        //Should I call the function again???

    } else {
        console.log(`You have added ${activities.length} activities`);
        for (let i = 0; i < activities.length; i++) {
            console.log(`Activities ${i + 1}: ${activities[i].activity}`);
        }

        let totalSmartphoneUsagedurationInMinuits = 0;
        for (let j = 0; j < activities.length; j++) {
            totalSmartphoneUsagedurationInMinuits = totalSmartphoneUsagedurationInMinuits + (+activities[j].duration);
            //Why it gives a different digit whenever I run the codes???

            //Since the value from the prompt is always a string, 
            //adding the value will result in a different output than you might expect. :) 
            //Instead of the default 85, the value will be 0304015. 
            //To fix this, you need to cast the 'duration' value to a Number type. 
            //You can achieve this by either using Number(activities[j].duration) or simply adding a + sign as in +activities[j].duration.
        }
        console.log(`Activities amount to ${totalSmartphoneUsagedurationInMinuits} min. of usage on ${activities.date}`);
        // ${activities.date} can also be used like ${activities["date"]}

        // PART 3: Usage limit ____________________________________

        console.log(`The usage limitation per day is 180 min.`)
        if (totalSmartphoneUsagedurationInMinuits > 180) {
            console.log('You have reached your limit, no more smartphoning for you!');
        } else {
            console.log(`You still have not reached your limit. You can use your smartphoning for
            ${180 - totalSmartphoneUsagedurationInMinuits} more min.`);
        }
    };
}
showStatus(activities);