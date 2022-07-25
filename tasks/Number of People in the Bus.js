let number = function (busStops) {
    let total = 0;
    for (let i = 0; i < busStops.length; i++) {
        total += busStops[i][0] - busStops[i][1];
    }
    return total
}


console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))
console.log(number([[0, 0]]))
