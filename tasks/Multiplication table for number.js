function multiTable(number) {
    let res = ''
    for (let i = 1; i <= 10; i++) {
        res += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    return res
}

console.log(multiTable(5))
console.log(multiTable(1))