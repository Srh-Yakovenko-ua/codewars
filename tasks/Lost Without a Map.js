function maps(x) {
    let newMaps = x.map(item => {
        return item * 2
    });
    return newMaps;
}

console.log(maps([1, 2, 3]))
console.log(maps([4, 1, 1, 1, 4]))
console.log(maps([2, 2, 2, 2, 2, 2]))
