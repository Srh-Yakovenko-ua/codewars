function flattenAndSort(array) {
    const resArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            resArr.push(array[i][j])
        }
    }
    return resArr.sort((a, b) => a - b)
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))