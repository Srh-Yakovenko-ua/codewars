function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}