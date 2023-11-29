//Voice assistant
let personName = "";
let toDoList = [];

function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    personName = command.split(" ")[4];
    console.log(`nice to meet you ${personName}`);
    return;
  }

  if (command === "What is my name") {
    if (personName === "") console.log("I dont have your name");
    else {
      console.log(personName);
    }
    return;
  }

  if (command.startsWith("Add") && command.endsWith("to my todo")) {
    // I did this part with for loop but i found easier way
    //let commandArr = command.split(" ");
    // for (let i = 1; i < commandArr.length - 3; i++) {
    //   if (i == commandArr.length - 4)
    // toDo += commandArr[i];
    //   else toDo += commandArr[i] + " "; }

    let toDo = "";
    toDo = command.substring(4, command.length - 11);
    toDoList.push(toDo);
    console.log(`${toDo} added to your todo`);
  }
  if (command.startsWith("Remove")) {
    let toRemove = "";
    toRemove = command.substring(7, command.length - 14);
  }

  if (command === "What is on my todo?") {
    let myList = "";
    for (let i = 0; i < myList.length; i++) {
      toDoList += myList + "and";
      if (i === myList.length - 1) toDoList += myList;
      else {
        toDoList += myList;
      }
      console.log((toDoList += myList + "and"));
    }
  }

  if (command === "What day is it today?") {
    let date = new Date();
    console.log(`Today is ${date}`);
  }
  if (command.startsWith("What is")) {
    let math = "";
    math = command.substring(8, command.length);
    console.log(eval(math));
  }

  if (command.startsWith("Set a timer for")) {
    let minutes = command.substring(16, command.length - 8);
    console.log(`Timer set for ${minutes} minutes`);
    setTimeout(() => {
      console.log("Timer done");
    }, Number(minutes) * 60 * 1000);
  }
}
getReply("Hello my name is Reza");
getReply("What is my name");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("Remove singing in the shower from my todo");
getReply("What day is it today?");
getReply("What is 3 + 4");
getReply("What is 3 * 24");
getReply("Set a timer for 1 minutes");
