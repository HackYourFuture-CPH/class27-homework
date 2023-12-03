//Voice assistant (function)
let userName = [" "];
let todoList = [ ];

function getReply(command){
    const command_1 = "Hello my name is";
    const command_2 = "What is my name";
    const command_3 = "Add fishing to my todo";
    const command_4 = "Add singing in the shower to my todo";
    const command_5 = "Remove fishing from my todo";
    const command_6 = "What is on my todo?";
    const command_7 = "What day is it today?";
    const command_8 = "What is ";
    const command_9 = "Set a timer for 4 minutes";
    const command_10 = "Remind me my favorite book";

    if (command.includes(command_1)){
        userName = command.slice(command_1.length);
        return `Nice to meet you ${userName}`;    
    } else if (command.slice(command_1.length) === userName){
        return `I already know you ${userName}`;
    } 
    /*I wanted to push name to a userName array 
    (so it can remember that) and makes the second statement works 
    but I could not make it works, unfortunately 
    */ 
    
    if (command.includes(command_2)){
        return `Your name is ${userName}`;
    } else if (userName === " "){
        return "I don't know you. Please, tell me your name";
    }
   
    if (command.includes(command_3)){
        todoList[0] = "Fishing";
        return `${todoList[0]} added to your todo`;
    }

    if (command.includes(command_4)){
        todoList[1] = "Singing in the shower";
        return `${todoList[1]} added to your todo`;
    }

    if (command.includes(command_5)){
        delete todoList[0];
        return "Removed fishing from your todo";
    }

    if (command.includes(command_6)){
        return `You have ${(Object.values(todoList).length)} todos - ${Object.values(todoList)} in the shower`;
    }
    
    if (command.includes(command_7)){
        const date = new Date().toLocaleString(undefined, {month: "long", day: "numeric"})
        return "Today is " + date;
    }

    if (command.includes(command_8)){
        let a = (command.slice(command_8.length)).split(" ");
        if (a.includes('+')){
            const result = Number(a[0]) + Number(a[a.length - 1]);
            return result;
        } else if (a.includes('*')){
            const result = Number(a[0]) * Number(a[a.length - 1]);
            return result;
        }  
    }  

    if (command.includes(command_9)){
        const forIndex = command.indexOf("for");
        const time = parseInt(command[forIndex + 1]);
        setTimeout(() => {
            console.log("Timer done");}, time * 60 * 1000); 
        return (`Timer set for ${time} minutes`); get
    }
    /* I am not sure that I did timer correctly. 
    The return also shows NaN in the string where I was trying to get an index 
    of 4 minutes. Couldn't figure it out.
    */

    if (command.includes(command_10)){
        const favoriteBook = "Antoine de Saint Exupery - 'The Little Prince'";
        return "Your favorite book is " + favoriteBook;    
    }
}

console.log(getReply("Hello my name is Benjamin")); 
console.log(getReply("Hello my name is Viki")); 
console.log(getReply("What is my name?")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo")); 
console.log(getReply("Remove fishing from my todo")); 
console.log(getReply("What is on my todo?")); 
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Remind me my favorite book"));


//Voice Assistant (version 2) + homeworks commands
/*const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good morning");
    }
    else if(hr == 12) {
        speak("Good Day");
    }
    else if(hr > 12 && hr <= 16) {
        speak("Good Afternoon");
    }
    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Voice Assistant");
    speak("Goin online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    getReply(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})


function getReply(command) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I do not understand what you said, please, try again";
    
    if(message.includes("hi") || command.includes("hello")) {
        const finalText = "Hello, what is your name";
        speech.text = finalText;
    }
    else if(command.includes("my name is benjamin")) {
        const finalText = "Nice to meet your, Benjamin";
        speech.text = finalText;
    }
    else if(command.includes('what is my name')) {
        const finalText = "Your name is Benjamin";
        speech.text = finalText;
    }

    else if(command.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if (command.includes('what day is it today')) {
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        console.log(d);
        const finalText = `${da}. Of ${mo} ${ye}`;
        speech.text = finalText;
    }


    else {
        window.open(`https://www.google.com/search?=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak.text = finalText;
    }
    speech.volume = 1;
    speech. pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
*/