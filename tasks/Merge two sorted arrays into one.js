function mergeArrays(arr1, arr2) {
    const newArrSort = [...arr1, ...arr2].sort((a, b) => a - b)
    const setArr = new Set(newArrSort)

    return Array.from(setArr)
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))