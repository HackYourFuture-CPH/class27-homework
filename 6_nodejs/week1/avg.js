const args = process.argv.slice(2);

if(args.length === 0){
    console.log("No arguments provided");
}else{
    let sum = 0;
    let count = 0;
    for(let i = 0; i < args.length; i++){
        const num = parseFloat(args[i]);
        if(!isNaN(num)){
            sum += num;
            count++;
        }else{
            console.log("Invalid number: " + args[i]);
        }
    }
    if(count > 0){
        const avg = sum / count;
        console.log(`Average: ${avg}`);
    }else{
        console.log("No valid numbers provided");
    }
}