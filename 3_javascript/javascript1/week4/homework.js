// Voice assistant

function getReply(command) {
    let result;
    switch: 
    
}
// getReply(command);


// Vowel count

function getCount(str) {
    const vowes = ["a", "e", "i", "o", "u"];
    const strArray = str.split("");
    let count = 0;

    for (let i = 0; i < strArray.length; i++){
        if (vowes.includes(strArray[i])) {
            count += 1;
        }
    }
    return count;
}
console.log(getCount('abracadara'));

// Square Every Digit
// Welcome.In this kata, you are asked to square every digit of a
//  number and concatenate them.
// For example, if we run 9119 through the function, 811181 will
//  come out, because 92 is 81 and 12 is 1.(81 - 1 - 1 - 81)
// Example #2: An input of 765 will / should return 493625 because
// 72 is 49, 62 is 36, and 52 is 25.(49 - 36 - 25)
// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
    const numToStr = num.toString();
    let result = '';
    let squareToStr;
    for (let i = 0; i < numToStr.length; i++) {
        const square = numToStr.substr(i, 1) * numToStr.substr(i, 1);
        squareToStr = square.toString();
        result = result+squareToStr;
    }
  return Number(result);
}

console.log(squareDigits(3212));

// Highest and Lowest
// In this little assignment you are given a string of space separated numbers,
//     and have to return the highest and lowest number.

function highAndLow(numbers) {
    const numbersArray = numbers.split(" ");
    let highest = numbersArray[0];
    let lowest = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++){
        if (Number(numbersArray[i]) > highest) {
            highest = numbersArray[i];
        } else if (Number(numbersArray[i]) < lowest) {
            lowest = numbersArray[i];
        }
    }
    return (highest + ' ' + lowest);
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // return 42 -5"