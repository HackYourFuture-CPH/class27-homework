let name = "";
let todos = [];
const getReply = (command) => {
  let splittedCommand = command.split(" ");
  // name ----------------------------------------------------------
  if (command.includes("my name is")) {
    let nameIndex = splittedCommand.indexOf("name");
    if (nameIndex + 2 < splittedCommand.length) {
      if (name === "") {
        name = splittedCommand[nameIndex + 2];
        return `nice to meet you ${name}`;
      } else {
        return `You've already told me your name, ${name}.`;
      }
    } else {
      return "I didn't catch your name. Please provide a name.";
    }
  }
  
  if (command.includes("what is my name")) {
    if (name !== "") {
      return `Your name is ${name}`;
    } else {
      return `You didn't tell me your name yet.`;
    }
  }
  
  // todo------------------------------------------------------------
  if(command.includes("todo")){
    if(command.includes('add')){
        let addIndex = splittedCommand.indexOf('add');
        let toIndex = splittedCommand.indexOf('to');
        todoItem = splittedCommand.slice(addIndex + 1 , toIndex).join(' ')
        todos.push(todoItem);
        return `${todoItem} added to your todos `
    }
    if(command.includes('remove')){
        let removeIndex = splittedCommand.indexOf('remove');
        let fromIndex = splittedCommand.indexOf('from')
        let itemToRemove = splittedCommand.slice(removeIndex + 1 , fromIndex).join(' ')
        for( const todo of todos){
            if(todo === itemToRemove){
                todos.splice(todos.indexOf(todo), 1);
                return `${todo} removed from your todo list.`
            }else{
                return `you didn't add ${itemToRemove} to your todo list.`
            }
        }
    }
    if(command === "waht is on my todo" || command === "show my todo list" ){
        let todoList = ""
        for(const todo of todos){
            todoList += `${todo}\n ` ;
        }
        return todoList;
    }

  }

//   date ------------------------------------------
    if(command.includes("what day is today")){
        const today = new Date();
        const options = {day: 'numeric' , month: 'long' , year: 'numeric'};
        const formatedDate = today.toLocaleDateString('en-US', options)
        return `today is ${formatedDate}`
    }
// math--------------------------------------------------------------

    if(command.includes("what is")){
        let mathResult;
        let num1 = parseInt(splittedCommand[2]);
        let num2 = parseInt(splittedCommand[4]);
        let oprator = splittedCommand[3]
        switch (oprator){
            case '+':
                mathResult = num1 + num2;
                break;
            case '-' :
                mathResult = num1 - num2;
                break;
            case '*' :
                mathResult = num1 * num2;
                break;
            case '/':
                mathResult = num1 / num2;
                break;
            default:
                return "Invalid operator. Supported operators are +, -, *, /";
        }
        return `the result is ${mathResult}`;
           
    }
    // timer--------------------------------------------------------
    if (command.includes("set timer for")) {
        const forIndex = splittedCommand.indexOf('for');
        const time = parseInt(splittedCommand[forIndex + 1]);
        setTimeout(() => {
            console.log('Timer done');
        }, time * 1000 * 60 ); 
    
        return(`Timer set for ${time} minutes`) ;  
    }
};
// name--------------------------------------------------------------
console.log(getReply("what is my name?"));
console.log(getReply("hello, my name is niloufar"));
console.log(getReply("hello, my name is Ali"));
console.log(getReply("what is my name?"));
// todo----------------------------------------------------------------
console.log(getReply("add fishing to my todo list"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("can you please add doing homeworks to my todo list?"));
console.log(getReply("remove fishing from my todos"));
console.log(getReply("remove shopping from my todos"));
console.log(getReply("show my todo list"));
// date-----------------------------------------------------------------
console.log(getReply("what day is today"));
// math------------------------------------------------------------------
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 5 - 3"));
// timer-----------------------------------------------------------------
console.log(getReply("please set timer for 2 minute"));