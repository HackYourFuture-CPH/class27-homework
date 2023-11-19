// function min(a,b) which returns the least of two numbers a and b. for example: min(2,5)// 2, min(3, -1)//-1, min(1,1)//1 //

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

const result = min(2, 5);

console.log(result);

// min(2,5)// 2
// min(3, -1)//-1,
//min(1,1)//1
