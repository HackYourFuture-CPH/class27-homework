
// __________________ The Last Class Excercises ______________________


// 1.Let’s try to write a function that will check if an element is in an array…

function checkIfArray(arr) {

    const result = Array.isArray(arr);

    if (result) {
        console.log(`[${arr}] is an array.`);
    } else {
        console.log(`[${arr}] is not an array.`);
    }

}

const fruitsArray = ["Apple", "Orange", "grape"];
checkIfArray(fruitsArray);



//2. Create an array of ingredients you would like to have on a pizza. Pick least favorite of them and remove it

const pizzatopping = ["green pepper", "chedar cheez", "garlic", "oninon", "peperoni", "mashrooms", "ice berg"];
console.log(pizzatopping)
const lastItem = pizzatopping.pop();
console.log(pizzatopping);




//3. Create an array of objects representing 3 people, each with a name and an age. 
// Find the average age of the people in the array.

let peopleArrayOfObjects = [

    {
        name: "John",
        age: 30,
    },

    {
        name: "Robert",   // alert(peopleArrayOfObjects[2].name)  ===> Robert
        age: 35,
    },

    {
        name: "Sara",
        age: 22,
    }

];
console.log(peopleArrayOfObjects);


// __________________ Class Excercise ______________________

let pizza = {

    name: "Peperoni",
    description: "Pizza is in normal size and with extra Mayo sauce on",
    price: "35 kr."
}

pizza.ingredients = ["peperoni", "pepper", "tomato", "cheez", "onion", "mashrooms"];

let key = prompt("Do you want corn as topping on your pizza? \n Plz answer with Yes or No");
// "error" "ReferenceError: topping is not defined   ????????????

// access by variable
alert(pizza[key]);   //?????


/*if (t === "yes") {
    let pizza.topping === "yes";
} else {
    let pizza.topping === "No";
}*/


function printIt() {

    for (let key in pizza) {
        // keys
        console.log(key);  // name, description, price, ingredients, topping
        // values for the keys
        console.log(pizza[key]); // peperoni, normal, 35 kr., ???, ???
    }
}

printIt();



// __________________ Class Excercise ______________________

function lessorgreater(n1, n2) {

    if (n1 < n2) {
        return (n1 + ' is less than ' + n2);

    } else {
        return (n2 + ' is less than ' + n1);

    }
}

const result = lessorgreater(5, 7);
console.log(result);



// __________________ Class Excercise ______________________

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    // keys
    console.log(key);  // name, age, isAdmin
    // values for the keys
    console.log(user[key]); // John, 30, true
}

/*result:

"name"
"John"

"age"
30

"isAdmin"
true

*/

// _______________________________________________________

