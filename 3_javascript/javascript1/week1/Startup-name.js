const firstWords = ["Easy", "Awesome", "Corporate", "Super", "Good"];
        const secondWords = ["Corporation", "City", "Working", "Power", "World"];
        const randomNumber = Math.floor(Math.random() * 5);     
        let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
        console.log(startupName);
        let length = startupName.length
        console.log("The startup: " + startupName + " contains " + length + " characters.");