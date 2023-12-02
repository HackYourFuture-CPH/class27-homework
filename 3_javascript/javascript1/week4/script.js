// for (let i = 1 ; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(i,' even number');
//     } else {
//          console.log(i, " odd number");
//     }

// }

//FIBBONACI

function fibbonaci(n) {
  let fibboArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibboArray.push(fibboArray[i - 1] + fibboArray[i - 2]);
  }

  return fibboArray[fibboArray.length - 1];
}

console.log("the Fibbonacci number", fibbonaci(15));

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let lowerStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }

  return count;
}

console.log(getCount("aeiou")); // 5
console.log(getCount("nvwls")); // 0
console.log(getCount("this is a mix")); // 4

// Fizz buzz
// Create a function that prints the numbers from 1 to 100.
// But for multiples of three print Fizz instead of the number and
// for the multiples of five print Buzz. For numbers which are
// multiples of both three and five print FizzBuzz.

// When that works. Make the two number for multiples into
// parameters. So it can be called like this:

function fizzBuzz(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0) {
      if (i % num2 === 0) {
        console.log("FizzBuzz");
      } else {
        console.log("Fizz");
      }
    } else if (i % num2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(4, 12);

//  sentiment analyzer

function getSentimentScore(str) {
  const pozitive = ["super", "awesome", "good", "great", "happy", "pleasure"];
  const negative = [
    "sad",
    "angry",
    "unhappy",
    "bad",
    "awful",
    "terrible",
    "boring",
    "hate",
  ];
  let result = { score: 0, positiveWords: [], negativeWords: [] };

  const testStr = str.split(" ");

  for (let i = 0; i < testStr.length; i++) {
    if (pozitive.includes(testStr[i])) {
      result.score += 1;
      result.positiveWords.push(testStr[i]);
    }
    if (negative.includes(testStr[i])) {
      result.score -= 1;
      result.negativeWords.push(testStr[i]);
    }
  }
  return result;
}

const sentimentScoreObject = getSentimentScore(
  "I am mega super awesome happy bad angry"
);
const sentimentScoreObject2 = getSentimentScore("I hate doing boring stuff");

console.log(sentimentScoreObject); // score, positiveWords and negativeWords
console.log(sentimentScoreObject2);

// Credit card number formatter

function formatCreditCardNumber(cardNumber) {
  if (typeof cardNumber !== "number") {
    alert("This is not a correct card number, please check it and try again");
  } else {
    const cadrToStr = cardNumber.toString();
    const newCardNumber =
      `${cadrToStr.substr(0, 4)} ${cadrToStr.substr(4, 4)} ${cadrToStr.substr(8, 4)} ${cadrToStr.substr(12, 4)}`;
    return {
      original: cardNumber,
      formatted: newCardNumber,
    };
  }
}

const formattedCreditCardObject = formatCreditCardNumber(123456789012345);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/


// Character frequencies
// Write a function that counts the frequency of characters in a string:

function characterFrequency(str) {
    const allString = str.split('');
    let characters = [];
   
    for (let i = 0; i < allString.length; i++) {
      console.log(allString[i]);
      if (characters.includes(allString[i])) {
        console.log("includes");
        break;
      } else {
        let count = 0;
        for (let j = 0; j < allString.length; j++) {
          if (allString[i] == allString[j]) {
            count = count + 1;
            console.log("find letter", allString[i]);
          }
        }
          characters.push({ character: allString[i], count });
      }
    result = { characters: characters, length: characters.length };
    }
    return (result);
}
console.log(characterFrequency('happy'));
// {
//   characters: [
//     {character: 'a', count: 1},
//     {character: 'h',count: 1},
//     {character: 'p',count: 2},
//     {character: 'y',count: 1} ], length: 5}
