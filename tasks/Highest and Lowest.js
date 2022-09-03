function highAndLow(numbers) {
    const arrayNumbers = numbers.split(' ')
    let max = +arrayNumbers[0]
    let min = +arrayNumbers[0];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if(arrayNumbers[i] > max){
            max = +arrayNumbers[i]
        }
        if(arrayNumbers[i] < min){
            min = +arrayNumbers[i]
        }
    }
    return `${min} ${max}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))