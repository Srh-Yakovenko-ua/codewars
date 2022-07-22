let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(1))
console.log(isSquare(25))
console.log(isSquare(26))