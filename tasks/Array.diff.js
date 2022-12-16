function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
}

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,3], [1,2]))