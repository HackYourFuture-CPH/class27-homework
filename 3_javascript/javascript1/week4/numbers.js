function squareDigits(num) {
    if (!Number.isInteger(num)) {
        console.log("Invalid number")
        return
    }
    const convertNumberToString = num.toString()
    const strNumberInt = parseInt(convertNumberToString) // this returns integer so it's number  
    const converIntToString = strNumberInt.toString()
    let result = []
    for (let i = 0; i < converIntToString.length; i++) {
        const squaredNum = Number(converIntToString[i]) * Number(converIntToString[i])
        
        result.push(squaredNum)
    }
    const joinedArray = parseInt(result.join(''))
    console.log(joinedArray)
      return joinedArray
}



