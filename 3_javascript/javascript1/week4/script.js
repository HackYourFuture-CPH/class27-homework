

let userName = ""; // Variable to store the user's name
let todos = [];  // Array to store the user's todo list

function getReply(command) {
  const words = command.toLowerCase().split(" ");// Convert the command to lowercase and split it into an array of words
  const commandLower = command.toLowerCase();// Convert the command to lowercase

   // Check if the command is a greeting and includes the user's name
  if (
    words.includes("hello") &&
    words.includes("my") &&
    words.includes("name") &&
    words.includes("is")
  ) {
    const nameIndex = words.indexOf("is") + 1; // Find the index of the word "is"
    const name = words.slice(nameIndex).join(" "); // Get the words after "is" and join them to form the user's name

    if (userName === "") {  // Check if the user's name has already been set
      userName = name; // Set the user's name
      return "Nice to meet you " + " " + userName;// Return a greeting message 
    } else {
      return "Nice to meet you again "  + userName;
    }
      // Check if the command is asking for the user's name
  } else if (command.toLowerCase().includes("what is my name")) {
    if (userName !== "") { // Check if the user's name has been set
      return "Your name is  " + userName; // Return the user's name
    } else {
      return "You have not told me your name yet";
    }
  }


// Check if the command is adding an item to the todo list
  if (commandLower.startsWith("add ")) {
    const todo = command.slice(4).replace("to my todo", "").trim(); // Extract(Витягніть) the todo item from the command
    todos.push(todo); // Add the todo item to the todo list array
    return `${todo} added to your todo`;
  } 
   
  // Check if the command is removing an item from the todo list
  else if (commandLower.startsWith("remove ")) {
    const todo = command.slice(7).replace("from my todo", "").trim();// Extract the todo item from the command
    const index = todos.indexOf(todo);// Find the index of the todo item in the todo list array
    if (index !== -1) {// Check if the todo item exists in the todo list
      todos.splice(index, 1);// Remove the todo item from the todo list array
      return "Removed " + todo +  "from your todo";
    } else {
      return todo +  " is not in your todo list.";
    }
  } 
    // Check if the command is asking for the items on the todo list
  else if (commandLower.includes("what is on my todo")) {
    const itemCount = todos.length;// Get the number of items in the todo list
    if (itemCount === 0) {// Check if the todo list is empty
      return "Your todo list is empty";
    } else {
      const items = todos.join(", ");// Join the items in the todo list array with commas
      return items + " are on your todo list";
    }
  }
  
//Gives the current date
  if (command.toLowerCase().includes("what day is it today?")) {
    const date = new Date();// Get the current date
    const options = { year: "numeric",
    month: "long",
    day: "numeric" };// Set the options for formatting the date
    return "Today is " + date.toLocaleDateString("en-US", options);
  } else if (command.toLowerCase().startsWith("what is ")) {
    const expression = command.substring(8);// Extract the expression from the command
    let result;
    try {
      result = eval(expression);// Evaluate (оцінити)the expression using the eval() function
    } catch (error) {
      return "Invalid expression";
    }
    return result.toString();
  } else if (command.toLowerCase().startsWith("set a timer for ")) {
    const minutesIndex = command.indexOf("for")+4; // Find the index of the start of the timer duration in the command
    const minutes = parseInt(command.substring(minutesIndex).split(" ")[0]);// Extract the timer duration from the command and convert it to minutes
    setTimeout(() => {
      console.log("Timer done");
    }, minutes * 60000);// Set a timeout for the specified number of minutes
    return "Timer set for " + minutes + " minutes";
  } else {
    return "Invalid command";
  }
}



// Test cases
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));

console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 5 + 5"));
console.log(getReply("Set a timer for 2"));


