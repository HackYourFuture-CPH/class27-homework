
//Flight booking & Formal fullname function

function getFullname(firstname, surname, useFormalName = false, isWoman = false) {
    if (firstname === "" || surname === "") {
      return "Invalid input: Both firstname and surname must be provided.";
    }
  
    let fullName = firstname + " " + surname;
  
    if (useFormalName) {
      if (isWoman) {
        fullName = "Ms. " + fullName;
      } else {
        fullName = "Lord " + fullName;
      }
    }
  
    return fullName;
  }
  
  const fullname1 = getFullname("Benjamin", "Hughes");
  const fullname2 = getFullname("Benjamin", "Hughes", true);
  
  console.log(fullname1); 
  console.log(fullname2);
  
  const fullname3 = getFullname("Alice", "Johnson", true, true);
  console.log(fullname3);
  
  
