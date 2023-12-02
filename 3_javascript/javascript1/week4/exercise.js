for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even")
    }else {
            console.log(i + " is odd")
        }
}

for (let i = 0; i >= -20; i--) {
     if (i % 2 === 0) {
        console.log(i + " is even")
    }else {
            console.log(i + " is odd")
        }
}


//fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let position = 10;
console.log(`The Fibonacci number at position ${position} is ${fibonacci(position)}`);


//Fibonacchi 2

function fib(n) {
    let a = 0;
    let b = 1;
    let f = 1;

    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f; 
    }
    return n > 0 ? f : a;
}
console.log(fib(55));
console.log(fib(12));
console.log(fib(28));

//Reallife Example

function processData(data) {
    const result = {
        uniqueUserIds: [],
        todosCount: {
            completed: 0,
            uncompleted: 0
        },
        userId10Todos: []
    };

const userIdsSet = new Set();
data.forEach(item => {
    userIdsSet.add(item.userId);

    if (item.completed) {
        result.todosCount.completed += 1;
    } else {
        result.todosCount.uncompleted += 1;
    }

    if (item.userId === 10) {
        result.userId10Todos.push(item.title);
    }
});

result.uniqueUserIds = Array.from(userIdsSet);
return result;
}

const mockData = [
    { userId: 8, title: "todo1", completed: false },
    { userId: 10, title: "todo2", completed: true},
    { userId: 10, title: "todo3", completed: false},
];

console.log(processData(mockData));

//Voice assistant

let userName = "";
let todos = [];

function getReply(command) {
    const commandLower = command.toLowerCase();

    if (commandLower.startsWith("hello my name is")) {
        const newName = commandLower.replace("hello my name is ", "");
        if (userName && userName !== newName) {
            return `You have already introduced yourself as ${userName}.`;
        } else {
            userName = newName;
            return `Nice to meet you ${userName.charAt(0).toUpperCase() + userName.slice(1)}`;
        }
    }

    if (commandLower === "what is my name?") {
        return userName ? `Your name is ${userName}` : "I don't know your name yet.";
    }

    if (commandLower.startsWith("add ")) {
        const todo = command.slice(4).replace("to my todo", "").trim();
        todos.push(todo);
        return `${todo} added to your todo`;
    }

    if (commandLower.startsWith("remove ")) {
        const todo = command.slice(7).replace("from my todo", "").trim();
        const index = todos.indexOf(todo);
        if (index !== -1) {
            todos.splice(index, 1);
            return `Removed ${todo} from your todo`;
        } else {
            return `${todo} is not in your todo list.`;
        }
    }

    if (commandLower === "what day is it today?") {
        const today = new Date();
        return `${today.getDate()} of ${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}`;
    }

    const mathMatch = commandLower.match(/what is (\d+) (\+|\-|\*|\/) (\d+)/);
    if (mathMatch) {
        const a = parseInt(mathMatch[1], 10);
        const operator = mathMatch[2];
        const b = parseInt(mathMatch[3], 10);
        return eval(`${a} ${operator} ${b}`); // Be cautious with eval!
    }

    if (commandLower.startsWith("set a timer for")) {
        const timerMatch = commandLower.match(/set a timer for (\d+) minutes?/);
        if (timerMatch) {
            const duration = parseInt(timerMatch[1], 10);
            setTimeout(() => {
                console.log("Timer done");
            }, duration * 60000);
            return `Timer set for ${duration} minutes`;
        }
    }

    return "Command not recognized.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What day is it today?"));
