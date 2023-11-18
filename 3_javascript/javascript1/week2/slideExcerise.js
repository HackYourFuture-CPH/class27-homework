//Excerise 3
for (let i = 10; i >= 0; i--) {
  if (i === 10) {
    console.log("OMG it started");
  } else if (i === 0) {
    console.log("Happy new year!");
  } else {
    console.log(i);
  }
}
//Exerice 3B
const friendList = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];
let count = 0;

for (let i = 0; i < friendList.length; i++) {
  const checkingFriendName = friendList[i];

  if (checkingFriendName.includes("a")) {
    count++;
  } else {
    console.log(checkingFriendName);
  }
}

console.log(`Number of friends with the letter 'a': ${count}`);
