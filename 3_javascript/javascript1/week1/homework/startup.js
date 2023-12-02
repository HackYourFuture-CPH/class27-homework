const firstWords = [
    "nice",
    "easy",
    "great",
    "big",
    "cool",
    "pink",
    "worrior",
    "classy",
    "funny",
    "smth",
  ];
  const secondWords = [
    "smart",
    "wonderful",
    "cozy",
    "shoe",
    "car",
    "cleaning",
    "pencil",
    "eight",
    "elephant",
    "groomer",
  ];
  const randomNumber = Math.floor(Math.random() * 10);

  const startupName =
    firstWords[randomNumber] + " " + secondWords[randomNumber];
  const length = startupName.length;
  console.log(
    "The startup: " +
      '"' +
      startupName +
      '"' +
      " contains " +
      length +
      " characters"
  )
  document.getElementById("startup").style.color = "blue"