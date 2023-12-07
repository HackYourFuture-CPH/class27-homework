function randomizeOptions() {
  var options = document.querySelectorAll(".option");
  options = Array.from(options);
  options.sort(() => Math.random() - 0.5);

  var parent = document.querySelector("form");
  options.forEach((option) => {
    parent.appendChild(option);
  });
}

document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateAnswers();
  });

function validateAnswers() {
  var correctAnswer = document.getElementById("correctAnswer").value;
  var options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.classList.remove("correct-answer", "wrong-answer");
    if (option.name === correctAnswer) {
      option.classList.add("correct-answer");
    } else {
      option.classList.add("wrong-answer");
    }
  });
}
