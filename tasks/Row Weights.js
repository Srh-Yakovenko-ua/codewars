function rowWeights(array){
  let weightFirstTeam = 0
  let weightSecondTeam = 0

    for (let i = 0; i < array.length; i++) {
        if(i % 2 === 0){
            weightFirstTeam += array[i]
        }else {
            weightSecondTeam += array[i]
        }
    }
    return [weightFirstTeam , weightSecondTeam]
}

console.log(rowWeights([50,60,70,80])) // , [120,140]
console.log(rowWeights([0])) // , [120,140]