function combat(health, damage) {
    return health - damage <= 0 ? 0 : health - damage
}

console.log(combat(100, 5))
console.log(combat(20, 30))