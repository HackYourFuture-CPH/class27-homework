const firstWords = ["Easy","Smart","Quick","Little","Big","Nice","Great","Brilliant","Beautiful","Global"];
const secondWords = ["Corporate","Fellow","Folk","Crazy","Photo","Brain","Pen","Book","Chemistry","Window"];
const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber]+" "+ secondWords[randomNumber];
const length = startupName.length;
console.log("The startup: " + "\"" + startupName + "\"" + " contains " + length + " characters");