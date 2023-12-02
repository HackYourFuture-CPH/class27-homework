let nameSet = new Set();
let presentationArr = "Hello my name is Helena";
let name = presentationArr.split(" ").pop();
let toDoList = [];

function getReply(command) {
     
    if (!nameSet.has(command)) {
        nameSet.add(command);
        console.log(`Hello my name is ${name}`);
    } else {
        console.log(`${name} is already present.`);
        return;
    }
    
   
    if (command === "What is my name?") {
        if (name !== "") {
          console.log(`Your name is ${name}`);
        } else {
          console.log("It would be great to know you. Please present yourself.");
        }
        return;
      }

   
        let item = "fishing";
    if (command === "Add fishing to my toDoList") {
        toDoList.push(item);
        console.log(`${item} added to toDoList`);
        console.log(toDoList);
        return ;
    }
    

    let item1 = "singing in the shower";
    if (command === "Add singing in the shower to my todo"){
        toDoList.push(item1);
        console.log(`${item1} added to toDoList`);
        console.log(toDoList);
        return ;
    }


    if (command === "Remove fishing from your todo"){
        toDoList.shift(item);
        console.log(`${item} removed from toDoList`);
        console.log(toDoList);
        return;
      }


    if (command === "What is on my toDoList?") {
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i + 1}: ${toDoList[i]}`) ;
        }
        return;
    }


    const today = new Date();
    new Date(today);
    if (command === "What day is it today?") {
        const formatedDate = today.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const part = formatedDate.split(" ");
        const month = part.shift() ;
        const year = part.pop();
        const day = part.pop();
        console.log(`${day} of ${month} ${year}`);
        return ;
    }

    

    if (command === "what is 3 + 3?") {
        const a = 3 ;
        const b = 3 ;
        const plus = a + b ;
        console.log(plus) ;
        return ;
    }
    

    if (command === "what is 4 * 12?") {
        const a = 4 ;
        const b = 12 ;
        const multiplide = a * b ;
        console.log(multiplide) ;
        return ;
    } 

    if (command === "Set a timer for 4 minutes"){
        setTimeout(function() {
  console.log("Timer done");
}, 4 * 60 * 1000);

console.log("Timer set for 4 minutes");
    }
}


getReply("Hello my name is Helena");
getReply("Hello my name is Helena"); 
getReply("What is my name?");
getReply("Add fishing to my toDoList");
getReply("Add singing in the shower to my todo");
getReply("Removed fishing from your todo");
getReply("What is on my toDoList?");
getReply("What day is it today?");
getReply("what is 3 + 3?");
getReply("what is 4 * 12?");
getReply("Set a timer for 4 minutes");

