const hello = [
  "Hello human! what's up?",
  "hi, how are you doing?",
  "What's up?",
  "Ahoy matey! How are ye?",
  "What's shaking?",
];

// Store voices
let voices = [];
// UI elements
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
const processing = document.getElementById("processing");

// Wait on voices to be loaded before fetching list
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
};

// Speech to Text
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let toggleBtn = null;
if (typeof SpeechRecognition === "undefined") {
  startBtn.remove();
  result.innerHTML =
    "<strong>Your browser does not support Speech API. Please download latest Chrome version.<strong>";
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // If true, the silence period is longer
  recognition.interimResults = true;
  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const recognitionResult = event.results[current];
    const recognitionText = recognitionResult[0].transcript;

    if (recognitionResult.isFinal) {
      processing.innerHTML = "processing ...";

      const reply = getReply(recognitionText);
      const p = document.createElement("p");
      p.innerHTML = `<strong>You said:</strong> ${recognitionText} </br><strong>Benjamin said:</strong> ${reply}`;
      processing.innerHTML = "";
      result.appendChild(p);

      readOutLoud(reply);
    } else {
      processing.innerHTML = `listening: ${recognitionText}`;
    }
  };
  let listening = false;
  toggleBtn = () => {
    if (listening) {
      recognition.stop();
      startBtn.textContent = "Start listening";
    } else {
      recognition.start();
      startBtn.textContent = "Stop listening";
    }
    listening = !listening;
  };
  startBtn.addEventListener("click", toggleBtn);
}

// Processor
function getReply(rawText) {
  let text = rawText.replace(/\s/g, "").replace(/\'/g, "");
  text = text.toLowerCase();
  let reply = null;

  if (text.includes("hello") || text.trim() == "hi" || text.includes("hey")) {
    reply = getRandomItemFromArray(hello);
  } else if (text.includes("Hello, my name is Angel")) {
    reply = "Nice to meet you,Angel.";
  } else if (text.includes("what is my name") || text.includes("human")) {
    reply = "Angel";
  } else if (
    text.includes("Add fishing to my todo") ||
    text.includes("baking") ||
    text.includes("Painting")
  ) {
    reply = "fishing added to your todo";
  } else if (
    text.includes("Add singing in the shower to my todo") ||
    text.includes("baking") ||
    text.includes("Painting") ||
    text.includes("fishing")
  ) {
    reply = "singing added to your todo";
  } else if (
    text.includes("remove fishing from my todo") ||
    text.includes("baking") ||
    text.includes("Painting") ||
    text.includes("singing")
  ) {
    reply = "fishing removed from my todo";
  } else if (
    text.includes("What is on my todo?") ||
    text.includes("baking") ||
    text.includes("Painting") ||
    text.includes("singing")
  ) {
    reply = "You have 3 todos";
  } else if (text.includes("whattimeisit")) {
    reply = new Date().toLocaleTimeString();
  } else if (text.includes("whatdayisittoday")) {
    reply = new Date().toLocaleDateString();
  } else if (text.includes("play") && text.includes("despacito")) {
    reply = "Opened it in another tab";
    window.open(
      "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      "_blank",
      "noopener"
    );
  } else if (text.includes("Calculate") && text.includes("calculator")) {
    reply = "Open it in another tab";
    window.open(
      "https://www.google.com/search?q=calculator&rlz=1CDGOYI_enUA909UA916&oq=calculator&aqs=chrome..69i57j69i60j0i512j0i20i263i512j0i512l6.2927j0j7&hl=en-GB&sourceid=chrome-mobile&ie=UTF-8",
      "_blank",
      "noopener"
    );

    // setting Timer //
    count = 0;
    let func = function (e) {
      console.log(e);
      if (e > 240000) {
        console.log("Timer stopped after 240000ms");
        if (e > 240000) {
          count++;

          // Restarting the timer again
          console.log("Timer restarts");
          timer.restart(func);
        }
        if (count > 2) {
          timer.stop();
          console.log("count > 2 so timer is stopped");
        }
      }
    };
    let timer = timer(func);
  } else if (text.includes("flip") && text.includes("coin")) {
    reply = Math.random() < 0.5 ? "heads" : "tails";
  } else if (text.includes("bye") || text.includes("stop")) {
    reply = "Bye!!";
    toggleBtn();
  }

  if (!reply) {
    window.open(
      `http://google.com/search?q=${rawText.replace("search", "")}`,
      "_blank",
      "noopener"
    );
    return `I found some information for ${rawText}`;
  }

  return reply;
}

function getRandomItemFromArray(array) {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}

console.log(getReply("Hello my name is Angel")); // "Nice to meet you angel"
console.log(getReply("What is my name?")); // "Your name is Angel"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Remove fishing from my todo")); // "fishing removed from your to do"
console.log(getReply("What is on my todo?")); // "should respond with the todos"
console.log(getReply("What day is it today?")); // "Should respond with the date in a human readable format."
console.log(getReply("Calculate")); // "Should be able to do simple math."
console.log(getReply("set timer")); // "Should set timer

// Set the text and voice attributes.
function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1.8;
  speech.voice = voices[3];

  window.speechSynthesis.speak(speech);
}
