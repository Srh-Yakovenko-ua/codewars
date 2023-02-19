function evenNumbers(array, number) {
    let evenNumbers = array.filter(x => x % 2 === 0);
    console.log(evenNumbers.slice(-number))
    return evenNumbers.slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))


