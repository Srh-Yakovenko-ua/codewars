function countBy(x, n) {
    const result = []
    for (let i = x; i <= x * n; i+= x) {
        result.push(i)
    }
    return result
}

console.log(countBy(1,10) )
console.log(countBy(2,5))
