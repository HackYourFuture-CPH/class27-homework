// getFullName function
const getFullname = (firstname , surname , useFormalName = false , areYouMale = true) =>{
    if(firstname!== "" && surname !== "" && firstname.trim() !== "" , surname.trim() !== ""){
        if(useFormalName && areYouMale){
            console.log("lord " + firstname + " " + surname);
        }else if(useFormalName && !areYouMale){
            console.log("lady " + firstname + " " + surname);
        }else{
            console.log(firstname + " " + surname);
        }
    }else{
        console.log("provide a valid value for firstname and surname")
    }
}
getFullname("Niloufar" , "Khaefi" , true, false);
getFullname("Mohammad" , "Basiri" , true);
getFullname("Armin" , "Basiri", false );
getFullname(" " , " ", true );

// Event Application
const getEventDay = (daysUntilEvent) =>{
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayIndex = today.getDay();
    const eventDayIndex = (dayIndex + daysUntilEvent) % 7;
    console.log(`The event will be held on a ${weekdays[eventDayIndex]}`);
}
getEventDay(9); 
getEventDay(5); 

// weather wear
const clothesToWear = (temperature) => {
    if(temperature >= 20){
        console.log("It is very hot. shorts and T-shirt is a good choise");
    }else if(temperature >= 10){
        console.log("It is warm. jeans and shirt is good");
    }else if(temperature>=5){
        console.log("It is cool .wear jeans and long sleeve");
    }
    else{
        console.log("It is cold. Make sure to have jacket with you");
    }
}
clothesToWear(15);
clothesToWear(2);
clothesToWear(25);
