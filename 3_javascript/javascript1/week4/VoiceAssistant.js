// Create a function called getReply(command). 
//The function should return a response that corresponds to the command!

// These are the commands you should be able to give the voice assistant:

// Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
// What is my name - should respond with the name of the person.
// What if the name has not yet been mentioned?
// Add fishing to my todo - Should respond with "fishing added to your todo". 
//Should add fishing to a list of todos
// Add singing in the shower to my todo - Should add singing in the shower to a list of todos
// Remove fishing from my todo - Should respond with "Removed fishing from your todo"
// What is on my todo? - should respond with the todos. Fx you have 2 todos - 
//fishing and singing in the shower
// What day is it today? - Should respond with the date in a human readable format. 
//E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
// Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
// Add one or more command to your voice assistant




let userName = ""; // متغیر جهت ذخیره نام کاربر
let todos = []; // لیست وظایف کاربر
function getReply(command) {
    const lowerCommand = command.toLowerCase(); // تبدیل دستور به حروف کوچک
    
    if (lowerCommand.startsWith("hello my name is")) {
        const name = command.substring(17);
        userName = name;
        return Nice to meet you ${name};
    } else if (lowerCommand === "what is my name") {
        if (userName) {
            return Your name is ${userName};
        } else {
            return "I don't know your name yet.";
        }
    } else if (lowerCommand.startsWith("add") && lowerCommand.endsWith("to my todo")) {
        const task = command.substring(4, command.length - 12);
        todos.push(task);
        return ${task} added to your todo;
    } else if (lowerCommand.startsWith("remove") && lowerCommand.endsWith("from my todo")) {
        const taskToRemove = command.substring(7, command.length - 12);
        todos = todos.filter(task => task.toLowerCase() !== taskToRemove.toLowerCase());
        return Removed ${taskToRemove} from your todo;
    } else if (lowerCommand === "what is on my todo") {
        const todoCount = todos.length;
        if (todoCount === 0) {
            return "You have no todos.";
        } else {
            const todoList = todos.join(" and ");
            return You have ${todoCount} todos - ${todoList};
        }
    } else if (lowerCommand === "what day is it today") {
        const currentDate = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    } else if (lowerCommand.startsWith("what is")) {
        try {
            const result = eval(command.substring(8));
            return result.toString();
        } catch (error) {
            return "I couldn't understand the math expression.";
        }
    } else if (lowerCommand.startsWith("set a timer for")) {
        const timeInMinutes = parseInt(command.match(/\d+/)[0]);
        setTimeout(() => {
            console.log("Timer done");
        }, timeInMinutes * 60 * 1000);
        return Timer set for ${timeInMinutes} minutes;
    } else {
        return "I don't understand this command.";
    }
}
// مثاله
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));