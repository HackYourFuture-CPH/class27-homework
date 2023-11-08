const firstWords = [
  "Incredible",
  "intelligent",
  "Innovative",
  "Optimistic",
  "Logic",
  "Advanced",
  "Creative",
];
const secondWords = [
  "Tech",
  "Savy",
  "Corporate",
  "developers",
  "Upgraded",
  "Global",
  "Advanced",
];
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const nameLength = startupName.length;
console.log(`startup name: ${startupName} 
it contains ${nameLength} characters`);
