let dogYearOfBirth = 2017;
        let dogYearFuture = 2027;
        const shouldShowResultInDogYears = true;
        let dogYear = dogYearFuture - dogYearOfBirth;
        if (shouldShowResultInDogYears) {
            console.log("Your dog will be " + dogYear * 7 + " dog years old in 2027.");
        } else {
            console.log("Your dog will be " + dogYear + " human years old in 2027.");
        }