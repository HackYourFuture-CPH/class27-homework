
function getCount(str) {
   
    const vowels = ["a", "e", "i", "o", "u"];
    let count2 = 0;
   
     for(let i = 0; i < str.length; i++) {
     
         if (vowels.includes(str[i].toLowerCase())) {
             count2++;
         }
     }
     console.log(count2, "count2");
 
     return count2;
 }