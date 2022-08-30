function getMiddle(s) {
    let averageLength = Math.floor(s.length / 2)

    const middleValue = s.length % 2 === 0 ?
        s[averageLength - 1] + s[averageLength] :
        s[averageLength]

    return middleValue
}

console.log(getMiddle('test'))
console.log(getMiddle('testing'))