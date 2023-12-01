
let name = '';
let todos = [];
let timer;

function getReply(command) {
  if (command.startsWith('Hello my name is')) {
    name = command.replace('Hello my name is', '');
    return `Nice to meet you ${name}.`;
  }

  if (command === 'What is my name') {
    if (name) {
      return `Your name is ${name}.`;
    } else {
      return "I'm sorry, but I don't know your name.";
    }
  }

  if (command.startsWith('Add')) {
    const todo = command.replace('Add', '').replace('to my todo', '');
    todos.push(todo);
    return `${todo} added to your todo.`;
  }

  if (command.startsWith('Remove')) {
    const todo = command.replace('Remove', '').replace('from my todo', '');
    const index = todos.indexOf(todo);
    
    if (index > -1) {
      todos.splice(index, 1);
      return `Removed ${todo} from your todo.`;
    } else {
      return `${todo} is not in your todo.`;
    }
  }

  if (command === 'What is on my todo?') {
    const todoList = todos.join(' and ');

    if (todos.length === 0) {
      return 'Your todo list is empty.';
    } else {
      return `You have ${todos.length} todos - ${todoList}.`;
    }
  }

  if (command === 'What day is it today?') {
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-UK', options);

    return `Today is ${formattedDate}.`;
  }

  if (command.startsWith('What is')) {
    try {
      const result = eval(command.replace('What is', ''));
      return result.toString();
    } catch (error) {
      return 'Sorry, I cannot perform this calculation.';
    }
  }

  if (command.startsWith('Set a timer for')) {
    const time = command.replace('Set a timer for', '').replace('minutes', '');
    const minutes = parseInt(time);

    if (!isNaN(minutes)) {
      timer = setTimeout(() => {
        console.log('Timer done');
      }, minutes * 60000);

      return `Timer set for ${minutes} minutes.`;
    } else {
      return 'Invalid timer format. Please use numbers.';
    }
  }

  return "Sorry, I didn't understand that command.";
}


console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name')); 
console.log(getReply('Add fishing to my todo')); 
console.log(getReply('Add singing in the shower to my todo')); 
console.log(getReply('Remove fishing from my todo')); 
console.log(getReply('What is on my todo?')); 
console.log(getReply('What day is it today?')); 
console.log(getReply('What is 3 + 3')); 
console.log(getReply('Set a timer for 4 minutes')); 