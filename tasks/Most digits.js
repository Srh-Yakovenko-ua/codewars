function findLongest(array) {
    const length = array.map(x => String(x).length)
    return array[length.indexOf(Math.max(...length))]


}

console.log(findLongest([9002, 9000, 8, 800, 9001]))
console.log(findLongest([1, 10, 100]))