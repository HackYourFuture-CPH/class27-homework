let userName = null;
let todoList = [];
let timer;

function getReply(command) {
  const lowerCaseCommand = command.toLowerCase();

  if (lowerCaseCommand.includes("hello my name is")) {
    const nameStartIndex =
      lowerCaseCommand.indexOf("hello my name is") + "hello my name is".length;
    const userNameCandidate = command.slice(nameStartIndex).trim();

    if (
      userName === null ||
      userName.toLowerCase() !== userNameCandidate.toLowerCase()
    ) {
      userName = userNameCandidate;
      return `Nice to meet you, ${userName}!`;
    } else {
      return `You've already introduced yourself as ${userName}.`;
    }
  } else if (lowerCaseCommand === "what is my name") {
    return userName
      ? `Your name is ${userName}.`
      : "You haven't told me your name yet.";
  } else if (
    lowerCaseCommand.startsWith("add") &&
    lowerCaseCommand.includes("to my todo")
  ) {
    const todoStartIndex = lowerCaseCommand.indexOf("add") + "add".length;
    const todoEndIndex = lowerCaseCommand.indexOf("to my todo");
    const newTodo = command.slice(todoStartIndex, todoEndIndex).trim();

    todoList.push(newTodo);
    return `${newTodo} added to your todo.`;
  } else if (
    lowerCaseCommand.startsWith("remove") &&
    lowerCaseCommand.includes("from my todo")
  ) {
    const todoStartIndex = lowerCaseCommand.indexOf("remove") + "remove".length;
    const todoEndIndex = lowerCaseCommand.indexOf("from my todo");
    const todoToRemove = command.slice(todoStartIndex, todoEndIndex).trim();

    todoList = todoList.filter(
      (todo) => todo.toLowerCase() !== todoToRemove.toLowerCase()
    );
    return `Removed ${todoToRemove} from your todo.`;
  } else if (lowerCaseCommand === "what is on my todo") {
    const todoCount = todoList.length;
    const todoMessage =
      todoCount > 0
        ? `You have ${todoCount} todos: ${todoList.join(", ")}.`
        : "Your todo list is empty.";
    return todoMessage;
  } else if (lowerCaseCommand === "what day is it today") {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return `Today is ${formattedDate}.`;
  } else if (
    lowerCaseCommand.includes("what is") &&
    lowerCaseCommand.includes("+") &&
    lowerCaseCommand.includes("or what is")
  ) {
    try {
      const result = eval(
        command
          .replace("or", "||")
          .replace("and", "&&")
          .replace("what is", "")
          .replace("?", "")
      );
      return `${result}`;
    } catch (error) {
      return "Sorry, I couldn't perform the math calculation.";
    }
  } else if (lowerCaseCommand.startsWith("set a timer for")) {
    const timeRegex = /\d+/;
    const timeMatch = lowerCaseCommand.match(timeRegex);

    if (timeMatch) {
      const timeInMinutes = parseInt(timeMatch[0]);
      setTimer(timeInMinutes * 60 * 1000);
      return `Timer set for ${timeInMinutes} minutes.`;
    } else {
      return "I couldn't recognize the timer duration.";
    }
  } else {
    return "I'm sorry, I didn't understand that command.";
  }
}

function setTimer(duration) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Timer done");
  }, duration);
}

console.log(getReply("Hello my name is Youssef"));
console.log(getReply("Hello my name is youssef"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What day is it today"));
console.log(getReply("What is 3 + 3 or what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
