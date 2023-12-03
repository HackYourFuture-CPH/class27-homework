//Speech Recognition Assistant + homeworks commands

const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;


let p = document.createElement("p");


recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
    .map(result=>result[0])
    .map(result => result.transcript)
    .join("");

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){

        if(text.includes("hello")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "Hi";
            texts.appendChild(p);
        }

        if(text.includes("my name is Benjamin")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "Nice to meet you, Benjamin";
            texts.appendChild(p);
        }

        if(text.includes("what is my name")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "Your name is Benjamin";
            texts.appendChild(p);
        }

        if(text.includes("add fishing to my to-do")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "fishing added to your to-do";
            texts.appendChild(p);
        } 

        if(text.includes("add singing in the shower to my to-do")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "fishing added to your todo";
            texts.appendChild(p);
        }
        
        if(text.includes("remove fishing from my to-do")){
                p = document.createElement("p");
                p.classList.add("reply");
                p.innerText = "Removed fishing from your todo";
                texts.appendChild(p);
        }

        if(text.includes("what is on my to-do")){
            p = document.createElement("p");
            p.classList.add("reply");
            p.innerText = "You have 2 todos: fishing and singing in the shower";
            texts.appendChild(p);
        }
    
        if(text.includes("what day is it today")){
            p = document.createElement("p");
            const date = new Date().toLocaleString(undefined, {month: "long", day: "numeric"})
            p.classList.add("reply");
            p.innerText = "Today is " + date;
            texts.appendChild(p);
    }
        p = document.createElement("p");
    }
    console.log(e);
})

recognition.addEventListener("end", () => {
    recognition.start();
})
recognition.start();

//Class exercises (26/11/2023) 
/*
const users = [];

users.push({
    name: "username",
    email: "gdhd@s.com",
    age: 20,
    hasAgreedTerms: true

})
users.push({
    name: "secondUser",
    email: "hd@s.com",
    age: 10,
    hasAgreedTerms: false

})
console.log(users);
for(let i=0; i < users.length; i++){
    const user = users[i];
    console.log(user.name)
}

for(const user of users){
    console.log(user.name)
}

for(const user of users){
    if(user.hasAgreedTerms){
        console.log(user.name);
    }}
for(const user of users){
    if(user.age >=18);
    console.log(user.name)
}

const numbers = [1,2,3,4,5];
for (let i = numbers.length-1; i>=0; i--){
    console.log(numbers[i])
}

const usersFromDB = [];

usersFromDB.push({
    name: "name",
    email: "d@s.com",
    age: 30,
    hasAgreedTerms: true

})
usersFromDB.push({
    name: "name2",
    email: "ll@s.com",
    age: 8,
    hasAgreedTerms: false

})

function printUsers(inputUsers){
    for (const user of inputUsers){
        console.log(user.name)
    }
}

printUsers(usersFromDB);

const numbers2 = [1,2,3,4,5,6,7,8,9,];
console.log(numbers2.reverse());
console.log(numbers2);


//const numbers = [];
function printNumbers() {
    for (let i = 1; i <= 20; i ++) {
      console.log(i);
    }
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
      }
    for (let i = 1; i <= 20; i+= 2) {
        console.log(i);
    }
  }
  printNumbers()
  
  function printNumbers2 (number) {
    for (let i = 0; i <= number; i++) {
        const resultNum = i % 2 == 0 ? "even" : "odd";
        console.log(`This number is ${resultNum}`)
    }
  }
  printNumbers2(20);

  for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {

    }
  }

  const numbers3 = [];
  const even = [];
  const odd = []; 
  //const result = i % 2 === 0 ? "even" : "odd"; (!!!!read about that)
    for (let i = 1; i < 21; i++){
    numbers3.push(i+1);
    if (i % 2 === 0){
        even.push(i);
    } else {
        odd.push(i);
    }
  }
  console.log(numbers3);
  console.log(even, "even");
  console.log(odd, "odd");

  /*function fibonacciSequence(n) {
    return n <= 1 ? n : fibonacciSequence(n - 1) + fibonacciSequence(n - 2);  
}
  fibonacciSequence(5);
  

  function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));


function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));


function fib(n) {
    const fibs = [0, 1];

    for (let i = 2; i <+ n; i++) {
        fibs.push(fibs[i - 1] + fibs[i - 2]);   
    }
    return fibs[n];
}
for (let i = 0; i < 20; i++) {
    console.log(fib(i));
}
*/
