function distinct(a) {
    return [...new Set(a)];
}

console.log(distinct([1,1,2,2,3,4,5,55,5,5,5,555,555,5]))