function predictAge(...ageArg) {
    const allAge = [...ageArg]

    let sum = 0;
    for (let i = 0; i < allAge.length; i++) {
        sum += allAge[i] * allAge[i]
    }
    return  Math.trunc(Math.sqrt(sum) / 2)
}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))