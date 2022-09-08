function sumTwoSmallestNumbers(numbers) {
    let value = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                value = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = value
            }
        }

    }
    return numbers[0] + numbers[1]

}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

// function sumTwoSmallestNumbers(numbers) {
//   let [firstMin,secondMin] = numbers.sort((a,b) => a - b)
//     return firstMin + secondMin
// }

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))