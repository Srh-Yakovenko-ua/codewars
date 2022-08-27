function checkExam(array1, array2) {
    let totalScore = 0

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) totalScore += 4
        if (array1[i] !== array2[i] && array2[i] !== '') totalScore -= 1
    }
    return totalScore < 0 ? 0 : totalScore
}

