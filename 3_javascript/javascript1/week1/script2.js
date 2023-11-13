let firstWords = ["Eazy", "Awesome", "Corporate", "Innovative", "Global", "Dynamic", "Text", "Creative", "Fusion", "Spark"];
let secondWords = ["Tech", "Solutions", "Labs", "Innovations", "Hub", "Network", "Edge", "Forge", "Nest", "Wave"];

let randomIndexFirst = Math.floor(Math.random() * 10);
let randomIndexSecond = Math.floor(Math.random() * 10);

let startupName = firstWords[randomIndexFirst] + " " + secondWords[randomIndexSecond];
let nameLength = startupName.length;

console.log("The startup: " + startupName + " contains " + nameLength + " characters");

