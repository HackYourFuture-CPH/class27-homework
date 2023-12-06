// Voice assistant
    let userName = "";
    let todo = [];

function getReply(command) {
    let result;
    console.log(command)
    
    // NAME
    if (command.includes('my name is')) {
        // result = nameOfuser(command);
        const ind = command.lastIndexOf("name is");
        userName = command.slice(ind + 8, command.length);
        return `Nice to meet you ${userName}`;
    }
    else if (command.includes('hat is my name?')) {
        if (userName !== '') {
            console.log(userName);
            return `Your name is ${userName}`;
        } else {
            return 'Tell me what is your name';
        }
    }
    //TODO
    else if (command.includes('my todo')) {
        result = todoList(command);
        return result;
    }
    // DATE TODAY

    else if (command.startsWith("What day is it today?")) {
        const today = new Date();
        const options = { day: "numeric", month: "long", year: "numeric" };
        const formatedDate = today.toLocaleDateString('en-US', options)
        return `today is ${formatedDate}`
    }
    
    else if (command.includes("what is")) {
        result = calculation(command);
        return result;
    }

    // SET A TIMER
    else if (command.includes('Set a timer for')) {
        result = timerOn(command);
        return result;
    }

    //HOW TO MAKE
    else if (command.includes('how to make')) {
        result = makeCoffee(command);
        return result;
    }    
}

//todo list 
function todoList(command) {
     if (command.startsWith("Add")) {
       task = command.slice(4, command.length - 11);
       todo.push(task);
       // console.log(todo);
       return `${task} added to your todo`;
     } else if (command.startsWith("Remove")) {
       task = command.slice(7, command.length - 13);
       indRemoveTodo = todo.indexOf(task);
       if (indRemoveTodo == -1) {
         return `${task} is not in your todo list`;
       } else {
         todo.splice(indRemoveTodo, 1);
         return `Removed ${task} from your todo`;
       }
     } else if (command.startsWith("What is on")) {
       result = todo.join(", ");
       return `Your todo list is: ${result}`;
     }
}

// calculation
function calculation(command) {
     const commandInArray = command.split(" ");
     const num1 = parseInt(commandInArray[2]);
     const num2 = parseInt(commandInArray[4]);
     const operator = commandInArray[3];
     switch (operator) {
       case "+":
         result = num1 + num2;
         break;
       case "-":
         result = num1 - num2;
         break;
       case "*":
         result = num1 * num2;
         break;
       case "/":
         result = num1 / num2;
         break;
       default:
         return "Invalid operator. Supported operators are +, -, *, /";
     }
     return `the result is ${result}`;
}

// Timer
function timerOn(command) {
    const commandInArray = command.split(" ");
    const ind = commandInArray.indexOf("for");
    const num = Number(commandInArray[ind + 1]);
    const period = commandInArray[ind + 2].slice(0, 3);
    switch (period) {
        case "sec":
            setTimeout(() => { 
                alert("Timer done");
              }, num * 1000);
              return `Timer set for ${num} second.`;

        case "min":
              setTimeout(() => {
                alert("Timer done");
              }, num * 1000 * 60);
              return `Timer set for ${num} minutes.`;

        case "hou":
              setTimeout(() => {
                alert("Timer done");
              }, num * 1000 * 60 * 24);
              return `Timer set for ${num} hour.`;
          }
}

    //HOW TO MAKE coffee
function makeCoffee(command) {
        const commandInArray = command.split(" ");
        const ind = commandInArray.indexOf("make");
        const coffe = commandInArray[ind+2];
        switch (coffe) {
          case "espresso":
            return "You need 1.5 ounces of espresso for single shot";
          case "latte":
            return "You need 1/3 espresso 2/3 milk and a little foam";
          case "mocha":
            return "You need 1/3 espresso, 2/3 milk, 1-2 tbsp chokolate and a little foam";
          case "cappucchino":
            return "You need 1/3 espresso 1/3 milk and 1/3 foam";
          case "americano":
            return "Take 1 part espresso and 2-3 parts hot water";
          case "tea":
            return "all hot water with steeped tea leaves";
          default:
            return "Its a new dish for me, better use Google";
        }
    }

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 5"));
console.log(getReply("Set a timer for 1 minute"));
console.log(getReply("how to make a espresso"));
