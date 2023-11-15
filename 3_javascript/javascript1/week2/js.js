// Flight booking fullname function & Formal fullname


function getFullname(firstname , surname, sex=false, useformalname=false){
    if (useformalname && sex){
        return "Lady " + firstname + " " + surname;
    } else if (useformalname) {
        return "Lord " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}

const fullname1= getFullname("Youssef", "Topaji" ,false, true);
const fullname2= getFullname("Benjamin","Hughes", false, false);

console.log(fullname1);
console.log(fullname2);



// Weather Wear 

function temperatureOut(temperature){
    if (temperature > 40){
        return "Do not go outside if you don't want to be grilled"
    }
    else if (temperature > 20){
        return "You should wear t-shirt and remember to apply sunscreen";
    } else if (temperature < 20 && temperature > 15){
        return "You should wear a sweater";
    }else {
        return "You should wear a Jacket"
    }
}
const clothesToWear = temperatureOut(45);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"