function predictAge(...age) {
    const allAge = age

    let result = 0;
    for (let i = 0; i < allAge.length; i++) {
        result += allAge[i] * allAge[i]
    }
    return  Math.trunc(Math.sqrt(result) / 2)
}


console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))