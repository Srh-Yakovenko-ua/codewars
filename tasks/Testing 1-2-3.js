const number = function (array) {
    return array.map((t, index) => `${index + 1}: ${t}`)
}
console.log(number(['a', 'b', 'c']));
console.log(number([]));
