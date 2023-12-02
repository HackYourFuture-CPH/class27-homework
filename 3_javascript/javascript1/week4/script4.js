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
    // fibboArray[0] = 0;
    // fibboArray[1] = 1;

    for (let i = 2; i < n; i++) {
        fibboArray.push(fibboArray[i - 1] + fibboArray[i - 2]);
        console.log(fibboArray);
    }

    return fibboArray[fibboArray.length-1];
}

console.log('the Fibbonacci number', fibbonaci(15));




function getCount(str){
    const vowels = ['a','e','i','o','u'];
    let lowerStr = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerStr.length; i++){
        if (vowels.includes(lowerStr[i])){
            count++;
        }
    }

    return count;
}

console.log(getCount("aeiou"));  // 5
console.log(getCount("nvwls"));  // 0
console.log(getCount("this is a mix")) // 4