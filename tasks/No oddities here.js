function noOdds( values ){
    const noOddsValues = []
    for (let i = 0; i < values.length; i++) {
        if(values[i] % 2 === 0){
            noOddsValues.push(values[i])
        }
    }
    return noOddsValues
}

console.log(noOdds([0,1,2,3])) // [0,2]