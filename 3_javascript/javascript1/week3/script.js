// ________________warmup excercise : The time it will take to arrive at your destination _________________

function travelInformation(speedInkmperh, destinationDistanceInkm) {

    let timeToRichToTheDestination = (destinationDistanceInkm / speedInkmperh);
    const hours = Math.trunc(timeToRichToTheDestination); //same result with const hours (~~timeToRichToTheDestination) to cuts all fractional digits
    let minutes = (timeToRichToTheDestination - hours) * 60;
    const rminutes = Math.ceil(minutes); // To round up the minutes
    return ('Your travel takes ${hours} hours & ${rminutes} minutes'); // It doesn't give a result for ${hours} & ${rminutes} !!!!!
};

const travelTime = travelInformation(50, 432);
console.log(travelTime);


// ______ warmup excercise : how much time a tv series have taken as a percentage of an average lifespan of 80 years_______

function logOutSeriesText(TVSeriestiltle, daysToWatch) {

    const tookDaysOfLife = (80 * 365) / daysToWatch;
    let percentFromlife = (daysToWatch * 100) / tookDaysOfLife;
    let rPercentOfLife = percentFromlife.toPrecision(4); // To have just 4 digits and only 3 digits after decimal point
    return (`${TVSeriestiltle} took ${rPercentOfLife} % of my life`);
};

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

// --------------------------------Save a note:
const notes = [];

function saveNote(content, id) { // content parameter is a string and id is a number
    let note = { content: content, id: id };
    notes.push(note);
    return notes;
};

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Washing dishes", 3);
saveNote("Ironing clothes", 4);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}, ........]


//------  Get a note  ----------------------------------

function getNote(id) {

    if (id <= notes.length || typeof id !== 'string') {
        let noteT = notes.find(item => item.id == id);
        return (noteT.content); //f.x  id=1 => "Pick up groceries"
    } else {

        return (alert(`Are you kidding me? :O A number !!
        Run the program again and enter a number between 1 and ${notes.length}`));
        //Why I get 'Undefind' after this alert message? :/
    }
}

const getId = prompt(`Enter a number between 1 and ${notes.length}`, 1);
const theRelevantNoteToTheGivenId = getNote(getId);
alert(theRelevantNoteToTheGivenId);


//--------  Log out notes  -----------------------------

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} `);
    }
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//--------- Unique feature --------------------------------
//
//What can it be?





//-------------------CactusIO-interactive (Mange smart phone usage app) optional ----------------------

/* PART1: 
adding smartphone activities and see a status on how your smartphone usage is going 
(via push method to save objects in activity aaray)*/

const activities = [];  // [{}]  or  just [] is enough?

function addActivity(activity, date, duration) {  //date: string, activity: string; duration: minutes

    let activitiesDataDuration = { activity: activity, date: date, duration: duration };
    activities.push(activitiesDataDuration);
    return activities;
}

let gottenActivity;
let gottenDate;
let gottenDuration;

gottenActivity = prompt('add an activity fx. Youtube', 'Youtube');
gottenDate = prompt('add a date fx. 23/7-2023', '23/7-2023');
gottenDuration = prompt('Enter a number as activity duration hours fx.', 30);
addActivity(gottenActivity, gottenDate, gottenDuration);

gottenActivity = prompt('add an activity fx. Instagram', 'Instagram');
gottenDate = prompt('add a date fx. 23/7-2023', '23/7-2023');
gottenDuration = prompt('Enter a number as activity duration hours fx.', 40);
addActivity(gottenActivity, gottenDate, gottenDuration);

gottenActivity = prompt('add an activity fx. Facebook', 'Facebook');
gottenDate = prompt('add a date fx. 23/7-2023', '23/7-2023');
gottenDuration = prompt('Enter a number as activity duration hours fx.', 25);
addActivity(gottenActivity, gottenDate, gottenDuration);

console.log(activities);

/*activities = [   //activities array looks kike this
    {
        activity: 'Youtube',
        date: '23/7-2023',
        duration: 30,
    },
    {
        activity: 'Instagram',
        date: '23/7-2023',
        duration: 40,
    },
    {
        activity: 'facebook',
        date: '23/7-2023',
        duration: 25,
    };
];*/

/* PART2: 
Smartphone usage and showing the status -----------------------------------------------*/

function showStatus() {

    console.log(`You have added ${activities.length} activities`);
    if (activities.length === 0) {
        console.log(`You have not added any activities. 
        Add some activities before requesting to see the status of activities`);

    } else {
        for (let i = 0; i < activities.length; i++) {
            console.log(`Activities ${i + 1}: ${activities[i].activities}`);
        }
    };

    let totalSmartphoneUsagedurationInMinuits = 0;
    for (let j = 0; j < activities.length; j++) {
        totalSmartphoneUsagedurationInMinuits = totalSmartphoneUsagedurationInMinuits + (activities[j].duration) * 60;
        //Unfortunately, I cannot understand what the problem is with this code !!!
    }

    console.log(`Activities amounth to ${totalSmartphoneUsagedurationInMinuits} min. of usage`);

    /* PART 3: Usage limit - Showing a message wheh you have reached the smartphone usage limitation */
    if (totalSmartphoneUsagedurationInMinuits > 180) {     // Usage limitation is 180 min.
        console.log(`The usage limitation is 180 min. 
        You have reached your limit => no more smartphoning for you!`);
    };

    return;
}

showStatus();

// ----------------------------------------------------------------------------------------------


//___just a little class excercise ________________________________________________________

/*
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
    console.log(bird);
};*/