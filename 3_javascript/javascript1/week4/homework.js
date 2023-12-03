// Voice assistant
    let userName = "";
    let todo = [];

function getReply(command) {
    let result;

    let task;
    let indRemoveTodo;
    console.log(command)
    
    // NAME
    if (command.includes('my name is')) {
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
      if (command.startsWith("Add")) {
        task = command.slice(4, command.length - 11);
          todo.push(task);
            // console.log(todo);
          return `${task} added to your todo`;
          
      } else if (command.startsWith("Remove")) {
        task = command.slice(7, command.length - 13);
          indRemoveTodo = todo.indexOf(task);
          if (indRemoveTodo == -1) {
              return `${task} is not in your todo list`
          } else {todo.splice(indRemoveTodo, 1);
              return `Removed ${task} from your todo`;
          }
          
        
      } else if (command.startsWith('What is on')) {
          result = todo.join(', ');
          return `Your todo list is: ${result}`;
      } 
      // return todo;
    
    }
    // console.log(task);
    
}
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
    console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
 
console.log(todo);