function countPositivesSumNegatives(input) {
    if (!input || input.length < 1) return []
    let positive = 0
    let negative = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            negative += input[i]

        } else positive++

    }
    return [positive, negative]
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [pos , neg]