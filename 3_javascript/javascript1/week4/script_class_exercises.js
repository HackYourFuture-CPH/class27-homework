
//  Fibonacci Series ---------------------------------------------

let fResult;
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    fResult = fibonacci(n - 1) + fibonacci(n - 2);
    return fResult;
  }

}
const number = 10;
console.log(fibonacci(number));


//Fizz buzz --------------------------------------------------------

let numberArray = [];
function fizzBuzz(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`The number is ${i} => FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`The number is ${i} => Fizz`);
    } else if (i % 5 === 0) {
      console.log(`The number is ${i} => Buzz`);
    } else {
      numberArray.push(i);
    }
  }
}

fizzBuzz(4, 15);
console.log(numberArray);


// Build a sentiment analyzer - figures out how positive/negative a sentence is  -----------------

const positiveWordsArray = ['super', 'happy', 'awesome', 'healthy'];
const negativeWordsArray = ['bad', 'ugly', 'sad', 'noisy', 'messy'];
let positiveWords = [];
let negativeWords = [];
let noWords = [];
let pSum = 0;
let nSum = 0;

function getSentimentScore(scentence) {

  let words = scentence.split(" "); //Converting a scentenc to an array of words


  for (let i = 0; i < words.length; i++) {
    if (positiveWordsArray.includes(words[i])) {
      pSum = pSum + 1;
      positiveWords.push(words[i]);
    } else if (negativeWordsArray.includes(words[i])) {
      nSum = nSum + 1;
      negativeWords.push(words[i]);
    } else {
      noWords.push(words[i]);
    }
  }

  const score = pSum - nSum;

  const result = {
    score: score,
    positiveWords: positiveWords,
    negativeWords: negativeWords
  };

  return result;
}

console.log(noWords);
let scentence = prompt('Enter a scentence');
let sentimentScoreObject = getSentimentScore(scentence);
console.log(sentimentScoreObject);


// Making tan array of numbers fx. 1 to 20 and the making to arrays of odd and even numbers   ----------------

let oddArray = [];
let evenArray = [];
let myArray = [];
for (let i = 1; i < 21; i++) {
  myArray.push(i);
}
console.log(myArray);

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    evenArray.push(i);

  } else {
    oddArray.push(i);
  }
}
console.log(evenArray, 'even');
console.log(oddArray, 'odd');


// Credit card number formatter --------------------------------------------
// credit card numbers are seperated with a space. Fx inputting 123456789 would show 1234 5678 9

function formatCreditCardNumber(n1) {

  if (n1 === number) {

    const string_n1 = number.toString(n1); //to convert number to string
    const formattedNumber = string_n1.slice(0, 4) + " " + string_n1.slice(4, 8) + " " + string_n1.slice(8);
    //  =>  original: 123456789   formatted: "1234 5678 9"

    const newNumber = {
      originalNumber: n1,
      formattedNumber: formattedNumber,
    };

    return newNumber;

  } else {
    const message = console.log('The value you have entered is not a number. Enter a number plz.');
    return message;
  }
}
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);



/*
// Character frequencies ---------------------------------------------------------

let count = 0;
const charArray = [
  {
    character: ' ';
    charFrequency: 0
  }

];
const charactersCount = [];
let charFrequency = 0;

function getCharacterFrequencies(word) {
  const word = word.toLowerCase();
  //const characterInWord = word.split('') //split('') return the characters and assigns them to an array >>> new array >>> charactersInWord
  for (i = 0; i < word.length; i++) {
    //letter = characterInWord[i];
    if (word[i].match(/[a-zA-Z0-9]/)) {
      charArray.character.push(word[i]);
      charFrequency = charFrequency + 1;

      count = count + 1;
      //}

      //}
      const characters = {

        character: character,
        count: count(theWord[i]),


      }
    }

    console.log(getCharacterFrequencies('happy'));

/*characters: [
  {
    character: 'a',
    count: 1
  },
  {
    character: 'h',
    count: 1
  },
  {
    character: 'p',
    count: 2
  },
  {
    character: 'y',
    count: 1
  }
], length: 5
}
*/

// Return the number (count) of vowels in the given string  (KATA)  ***********************************

// Link to my profile in CodeWar:    https://www.codewars.com/users/katayouny  

const vowelArray = ['a', 'e', 'i', 'o', 'u'];
function getCount(str) {
  let arrayOfVowelLetters = [];
  let toLower = str.toLowerCase();
  let letters = toLower.split("");
  for (let i = 0; i < letters.length; i++) {
    if (vowelArray.includes(letters[i])) {
      arrayOfVowelLetters.push(letters[i]);
    }
  }
  return arrayOfVowelLetters.length;
}
const str = 'i have these books';
const vowels = getCount(str);
console.log(vowels);

// ********************************************************************************************


// square every digit of a number and concatenate them anad giv the new number (KATA) 

const inputNumber = 423;
const sqr = [];
let newNum;
const newNumber = squareDigits(inputNumber);
console.log(newNumber);

function squareDigits(theNumber) {

  const str = theNumber.toString();
  for (let i = 0; i < str.length; i++) {
    newNum = parseInt(str[i]);
    sqr.push(newNum ** 2);
  }
  const result = +(sqr.join(''));//+ to get the result as numeric
  return result;
}

// ********************************************************************************************

//A string of space separated numbers, and have to return the highest and lowest number (KATA)
//EXAMPLE: highAndLow("1 2 3 4 5");  // return "5 1"
//Output string must be two numbers separated by a single space, and highest number is first.

let result = [];
function highAndLow(numbers) {
  let str = numbers.split(' '); //string array of string numbers
  let nStr = [];//integer array from string number array
  let minItem = str[0];
  let maxItem = str[0];
  let newResult;

  for (let j = 0; j < str.length; j++) {
    nStr.push(parseInt(str[j]));
  }

  for (let i = 0; i < str.length; i++) {

    if (nStr[i] > maxItem) {
      maxItem = nStr[i];
    }
    if (nStr[i] < minItem) {
      minItem = nStr[i];
    }
  }
  newResult = maxItem + ' ' + minItem;
  return newResult;
}

result = highAndLow("1 2 3 4 5");
console.log(result);

