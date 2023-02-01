function gimme(triplet) {
    const copyTriplet = [...triplet].sort((a, b) => a - b)
    const center = Math.floor(copyTriplet.length / 2)


    return triplet.indexOf(copyTriplet.at(center))
}

console.log(gimme([5, 10, 14])) // 1
console.log(gimme([2.1, 3.2, 1.4])) // 0
