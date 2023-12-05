let userName = "";
const todoList = [];
let timerId;

function getReply(command) {
  if (command.toLowerCase().includes("hello my name is")) {
    const name = command.split(" ").slice(-1)[0];
    userName = name;
    return `Nice to meet you, ${userName}!`;
  } else if (command.toLowerCase() === "what is my name") {
    return userName
      ? `Your name is ${userName}.`
      : "I do not know your name yet.";
  } else if (command.toLowerCase().startsWith("add fishing to my todo")) {
    todoList.push("fishing");
    return "Fishing added to your todo.";
  } else if (
    command.toLowerCase().startsWith("add singing in the shower to my todo")
  ) {
    todoList.push("singing in the shower");
    return "Singing in the shower added to your todo.";
  } else if (command.toLowerCase().startsWith("remove fishing from my todo")) {
    const index = todoList.indexOf("fishing");
    if (index !== -1) {
      todoList.splice(index, 1);
      return "Removed fishing from your todo.";
    } else {
      return "Fishing is not in your todo list.";
    }
  } else if (command.toLowerCase() === "what is on my todo?") {
    const todoCount = todoList.length;
    const todos = todoCount > 0 ? todoList.join(" and ") : "No todos.";
    return `You have ${todoCount} todo${todoCount !== 1 ? "s" : ""}: ${todos}`;
  } else if (command.toLowerCase() === "what day is it today?") {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return `Today is ${today.toLocaleDateString("en-US", options)}.`;
  } else if (command.toLowerCase().startsWith("what is")) {
    try {
      const result = eval(command.toLowerCase().replace("what is", "").trim());
      return `The result is ${result}.`;
    } catch (error) {
      return "Sorry, I could not understand the math expression.";
    }
  } else if (command.toLowerCase().startsWith("set a timer for")) {
    const time = parseInt(command.toLowerCase().match(/\d+/)[0]);
    if (!isNaN(time) && time > 0) {
      timerId = setTimeout(() => {
        console.log("Timer done.");
      }, time * 60 * 1000);
      return `Timer set for ${time} minute${time !== 1 ? "s" : ""}.`;
    } else {
      return "Please provide a valid time for the timer.";
    }
  } else {
    return "I do not understand that command.";
  }
}

// Example usage:
// const response = getReply('Hello my name is Benjamin');
// console.log(response);

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("What day is it today?")); // "Day is stated"
console.log(getReply("Please provide a valid time for the timer.")); // "Timer set"
