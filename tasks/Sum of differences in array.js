function sumOfDifferences(arr) {
    if (!arr.length || arr.length === 1) return 0

    const sort = arr.sort((a, b) => a - b)

    let sum = 0
    for (let i = 0; i < sort.length - 1; i++) {
        sum += sort[i + 1] - sort[i]
    }
    return sum
}

console.log(sumOfDifferences([1, 2, 10])) //9