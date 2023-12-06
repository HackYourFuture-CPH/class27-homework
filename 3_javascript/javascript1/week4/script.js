let assistantData = {
  name: "",
  todos: [],
  timer: null,
};

function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    const name = command.replace("Hello my name is", "").trim();
    assistantData.name = name;
    return `Nice to meet you ${name}`;
  } else if (command === "What is my name") {
    return assistantData.name
      ? `Your name is ${assistantData.name}`
      : "I don't know your name.";
  } else if (command.startsWith("Add")) {
    if (command.includes("to my todo")) {
      const todo = command.replace("Add", "").replace("to my todo", "").trim();
      assistantData.todos.push(todo);
      return `${todo} added to your todo`;
    } else if (command.includes("to the list")) {
      const match = command.match(
        /Add (.+) tomorrow at (\d{2}:\d{2}) to the list/
      );
      if (match) {
        const eventName = match[1].trim();
        const eventTime = match[2].trim();
        const eventDateTime = new Date(`tomorrow ${eventTime}`);
        assistantData.todos.push(
          `${eventName} at ${eventDateTime.toLocaleTimeString()}`
        );
        return `${eventName} added to your todo list for tomorrow at ${eventTime}`;
      }
    }
  } else if (command.startsWith("Remove")) {
    if (command.includes("from my todo")) {
      const todoToRemove = command
        .replace("Remove", "")
        .replace("from my todo", "")
        .trim();
      assistantData.todos = assistantData.todos.filter(
        (todo) => todo !== todoToRemove
      );
      return `Removed ${todoToRemove} from your todo`;
    }
  } else if (command === "What is on my todo?") {
    const todoCount = assistantData.todos.length;
    const todoList =
      todoCount > 0 ? assistantData.todos.join(" and ") : "nothing";
    return `You have ${todoCount} todos - ${todoList}`;
  } else if (command === "What day is it today?") {
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return currentDate.toLocaleDateString("en-US", options);
  } else if (command.startsWith("What is")) {
    try {
      const result = eval(command.replace("What is", "").trim());
      return result.toString();
    } catch (error) {
      return "Sorry, I couldn't calculate that.";
    }
  } else if (command.startsWith("Set a timer for")) {
    const timeInMinutes = parseInt(
      command.replace("Set a timer for", "").replace("minutes", "").trim()
    );
    assistantData.timer = setTimeout(() => {
      console.log("Timer done");
      assistantData.timer = null;
    }, timeInMinutes * 60 * 1000);
    return `Timer set for ${timeInMinutes} minutes`;
  }

  return "I'm sorry, I didn't understand you, could you repeat the command one more time?";
}

console.log(getReply("Hello my name is Ihor"));
console.log(getReply("What is my name"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("Set a timer for 2 minutes"));
console.log(getReply("Add The meeting tomorrow at 09:25 to the list"));
