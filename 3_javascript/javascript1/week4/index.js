let name = "";
let todos = [];

//extra command:fortune teller
let fortunes = ["You will land a job in Lego", "You will land a job in DC", "You will land a job in Bankdata", "You will land a job in Danske Bank", "You will land a job in Lunar", "You will land a job in Netcompany"]

function getReply(command) {
    let splittedCommand = command.split(" ");
    if (command.startsWith("Hello my name is ")) {
        name = splittedCommand[4];
        return `Nice to meet you ${name}`;
    } else if (command === "What is my name") {
        return name ? `Your name is ${name}` : "I don't know your name";
    } else if (command.startsWith("Add")) {
        todos.push(splittedCommand[1]);
        return `${splittedCommand.slice(1, -3).join(" ")} added to your todo`;
    } else if (command.startsWith("Remove")) {
        const indexToRemove = todos.indexOf(splittedCommand[1]);
        if (indexToRemove !== -1) {
            todos.splice(indexToRemove, 1);
            return `${splittedCommand.slice(1, -3).join(" ")} removed from your todo`;
        } else {
            return "Task not found in your todo.";
        }
    } else if (command.startsWith("What is on my todo?")){
        for (const todo of todos){
            console.log(`${todo} is in your todo.`)
        }
        return "You have nothing to do🦥";
    } else if (command.startsWith("What day is it today?")){
        const today = new Date();
        const formattedDay = today.toLocaleDateString('en-US', {day: 'numeric', month:'long', year:'numeric'});
        return `Today is ${formattedDay}`;
    } else if (command.startsWith("What is")){
        const mathExpression = command.slice(8);
        const result = eval(mathExpression);
        return result;
    } else if (command.startsWith("Set a timer for")) {
        const minutes = parseInt(command.match(/\d+/)[0], 10);
        setTimeout(() => console.log("Timer done"), minutes * 60 * 1000);
        return `Timer set for ${minutes} minutes`;
    } else if (command.startsWith("Tell me a fortune")){
        let randomFortune = Math.floor(Math.random()*fortunes.length);
        return fortunes[randomFortune];
    }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
//console.log(getReply("Remove fishing from my todo"));
//console.log(getReply("Remove singing in the shower from my todo"));
//console.log(todos);
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 4+4"));
console.log(getReply("Set a timer for 4 minutes "));
console.log(getReply("Tell me a fortune"));
