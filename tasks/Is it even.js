function testEven(n) {
    if (n % 2 === 0) {
        return true
    }
    return false
}

console.log(testEven(0))
console.log(testEven(-4))
console.log(testEven(3))
console.log(testEven(0.5))
console.log(testEven(2))