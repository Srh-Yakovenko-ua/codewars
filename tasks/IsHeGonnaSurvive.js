function hero(bullets, dragons) {
    if (bullets >= dragons * 2) {
        return true
    }
    return false
};

console.log(hero(10, 5))
console.log(hero(7, 4))
console.log(hero(4, 5))
console.log(hero(100, 40))
