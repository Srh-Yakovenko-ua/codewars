function digitize(n) {
return String(n).split('').reverse().map(Number)

}

console.log(digitize(35231))