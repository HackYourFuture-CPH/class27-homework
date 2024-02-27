// Voice Assistant
let savedName = null;
let todos = [];

function getReply(command) {
  const Regex = /Hello my name is (.+)/i;
  const matchName = command.match(Regex);
  const commandLower = command.toLowerCase();
  if (matchName) {
    // Check name already saved------------------
    const name = matchName[1];
    if (savedName === name) {
      return `Welcome back, ${name}!`;
    } else {
      savedName = name;
      return `Nice to meet you, ${name}!`;
    }
  } else if (commandLower.includes("what is my name")) {
    // Check name & ask --------------------------
    if (savedName) {
      return `Your name is ${savedName}.`;
    } else {
      return "I don't know your name yet.";
    }
  } else if (commandLower.startsWith("add ")) {
    //add todos list-----------------------------
    const todo = command.slice(4).replace("to my todo", "").trim();
    todos.push(todo);
    return `${todo} added to your todo`;
  } else if (commandLower.startsWith("remove ")) {
    const todo = command.slice(7).replace("from my todo", "").trim();
    const index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${todo} from your todo`;
    } else {
      return `${todo} is not in your todo list.`;
    }
    //add 4 minutes timer-------------------------
  } else if (commandLower.includes("set a timer for 4 minutes")) {
    return setTimer();
  } else if (commandLower.startsWith("open website ")) {
    const website = command.slice(13).trim();
    return `Visit the website: <a href="${website}" target="_blank">${website}</a>`;
  } else {
    return "I'm sorry, I didn't understand that command.";
  }
}

// (function)------what is today date?---------------------------
function getCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${day}. of ${month} ${year}`;
}
console.log(getCurrentDate());

//(function)------set timer----------------
let timer;
function setTimer(minutes) {
  clearTimeout(timer);

  timer = setTimeout(() => {
    //using anonymous function(()=>{....},4000)
    console.log("Timer done");
  }, minutes * 60 * 1000);

  return `Timer set for ${minutes} minutes.`;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(setTimer(4));
console.log(getReply("Open website www.example.com"));

//Simple Arithmetic Calculation-----------  //there is somthing wrong in this code it does't work.
let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let res = document.getElementById("result");

document.getElementById("add").addEventListener("click", function () {
  res.value = parseInt(n1.value) + parseInt(n2.value);
});

document.getElementById("sub").addEventListener("click", function () {
  res.value = parseInt(n1.value) - parseInt(n2.value);
});

document.getElementById("mul").addEventListener("click", function () {
  res.value = parseInt(n1.value) * parseInt(n2.value);
});

document.getElementById("div").addEventListener("click", function () {
  res.value = parseInt(n1.value) / parseInt(n2.value);
});
