
//Voice assistant - Create a function called getReply(command). The function should return a response that corresponds to the command!

let getNameString = [];
let getNameStringJustName = [];
let toDoList = ['reading materials', 'doing exercises'];
let getTimer = [];
function getReply(Command) {

    switch (Command) {
        case 'Hello my name is Katayoun': //Command.include('Hello my name is') Katayoun': //should be changed to check for typing twice
            getNameString = Command.split(" ");
            return `Nice to meet you ${getNameString[4]}!`;
            break;

        case 'What is my name?':
            if (getNameString[4]) {
                return `Your name is ${getNameString[4]}`;
            } else {
                alert('You did not tell me your name. press OK and giv me your name plz.');
                getNameStringJustName = prompt('What is your name?');
                return 'Nice to meet you ' + getNameStringJustName + '!';
            }
            break;

        case 'Add fishing to my todo':
            toDoList.push('fishing');
            console.log('Fishing added to your todo list');
            return (toDoList);
            break;

        case 'Add singing to my todo':
            toDoList.push('singing in the shower');
            console.log('Singing added to your todo list');
            return (toDoList);
            break;

        case 'Remove fishing from my todo':
            let index = toDoList.indexOf('fishing');
            if (index !== -1) {
                toDoList.splice(index, 1);
            }
            return 'Fishing removed from your todo list';
            break;

        case 'What is on my todo?':
            console.log('Here is my todo list:');
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i + 1}: toDoList[i]`);
            }
            return (toDoList); //document.write ??
            break;

        case 'What day is it today?':
            let dateOfToday = new Date();
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return `Today is ${dateOfToday.toLocaleDateString('en-GB', options)}`; //fx. 30 August 2019
            break;

        case 'What is 3 * 4?':
            return `The result of mulitiplication of 3 and 4 is ${mulitply(3, 4)}`;
            break;

        case 'Set a timer for 1 minute':
            getTimer = Command.split(" ");
            console.log(`Timer set for ${getTimer[4]} minute/s`);
            let countDown = 60 * getTimer[4];
            let id = setInterval(countDownTimer, 1000);

            function countDownTimer() {
                countDown--;
                if (countDown >= 0) {
                    console.log(countDown);
                } else {
                    clearInterval(id);
                    return 'Timer done'; //Why I cannot see the result ?!
                }
            }
            break;

        default:
            return 'Dont you have any more order?'; //What if it is an alert and should also get returned??!!
    }
}

function mulitply(n1, n2) {
    //when I assigne const to n1, I would get n error!!?
    let n3 = n1 * n2;
    return n3;
}

console.log(getReply('Hello my name is Katayoun'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 * 4?'));
console.log(getReply('Set a timer for 1 minute'));


