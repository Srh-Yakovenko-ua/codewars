function grow(x){
    return x.reduce((accum, item) => accum * item)
}

console.log(grow([1, 2, 3]))
console.log(grow([4, 1, 1, 1, 4]))
console.log(grow([2, 2, 2, 2, 2, 2]))