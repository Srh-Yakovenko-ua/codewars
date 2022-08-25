function find_average(array) {
    if (array.length === 0) return 0

    let sum = 0
    array.map(num => {
        sum += num
    })
    return sum / array.length
}

console.log(find_average([1, 1, 1]))
console.log(find_average([1, 2, 3]))
console.log(find_average([1, 2, 3, 4]))