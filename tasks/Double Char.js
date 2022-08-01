function doubleChar(str) {
    return str.split('').map(x => x + x).join('')
}

console.log(doubleChar("abcd"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("1337"))


;