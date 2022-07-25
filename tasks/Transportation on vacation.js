function rentalCarCost(d) {
    let rent = 40;

    if (d < 3) {
        return d * rent
    } else if (d >= 3 && d < 7) {
        return d * rent - (rent * 0.5)
    } else if (d >= 7) {
        return (d * rent) - (rent * 1.25)
    }

}

console.log(rentalCarCost(1))
console.log(rentalCarCost(2))

console.log(rentalCarCost(3))
console.log(rentalCarCost(4))
console.log(rentalCarCost(5))
console.log(rentalCarCost(6))

console.log(rentalCarCost(7))
console.log(rentalCarCost(8))