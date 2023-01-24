function deleteNth(arr, n) {
    const repeat = n;
    const countRepeat = {}
    const finalResult = []

    for (let i = 0; i < arr.length; i++) {
        if (countRepeat[arr[i]]) {
            countRepeat[arr[i]] = countRepeat[arr[i]] + 1

        } else countRepeat[arr[i]] = 1

        if (countRepeat[arr[i]] <= repeat) finalResult.push(arr[i])
    }
    return finalResult
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) //, [1, 1, 3, 3, 7, 2, 2, 2])
console.log(deleteNth([20,37,20,21], 1)) //,  [20,37,21]

