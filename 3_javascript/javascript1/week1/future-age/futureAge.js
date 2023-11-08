function calculateAge(){
    const yearOfBirth = document.getElementById("yearOfBirth").value;
    const yearFuture = document.getElementById("yearFuture").value;
    const p = document.getElementById("yourAge");
    let yourAge = yearFuture - yearOfBirth;
    p.innerHTML = `You will be ${yourAge} years old in ${yearFuture}`
}