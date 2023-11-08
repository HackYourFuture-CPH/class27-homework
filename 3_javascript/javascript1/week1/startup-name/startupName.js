const firstWords = ["Awsom" , "Good", "Innovative", "Easy", "Fun", "Global", "Green", "Logic" , "Advanced" , "Creative"];
const secondWords = ["world" , "tech" , "Corporation", "Studio", "Services" , "Center" , "Community" , "Electric" ,"Solutions", "Ventures"]
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const nameLength = startupName.length;
console.log(`startup name: ${startupName} 
it contains ${nameLength} characters`);