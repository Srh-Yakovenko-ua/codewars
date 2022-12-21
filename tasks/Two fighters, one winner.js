function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
    const dmg1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const dmg2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    if (dmg1 > dmg2) {
        return fighter1.name
    } else if (dmg1 < dmg2) {
        return fighter2.name
    }
    return firstAttacker
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"))