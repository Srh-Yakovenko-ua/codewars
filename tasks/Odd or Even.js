function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum % 2 != 0 ? 'odd' : 'even';
}


console.log(oddOrEven([0, 1, 2, 3, 1]));
console.log(oddOrEven([1, 10, 15]));