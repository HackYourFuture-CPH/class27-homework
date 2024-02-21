// Function to calculate average of inputs with process
function averageInput(){
    const inputs = process.argv.slice(2)
    let total = 0;
    if (inputs.length < 3) {
        console.log('Please type three numbers.');
    } else {
        let allNumbers = true;
        inputs.forEach(input => {
            if (isNaN(parseInt(input))){
                console.log('Please type numbers only.');
                allNumbers = false;
            }else{
                total += parseInt(input);
            }
        });
        if (allNumbers){
            let result = total/3;
            console.log(result.toFixed(2));
            }
        }
}

averageInput();
