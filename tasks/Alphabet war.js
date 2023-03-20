function alphabetWar(fight) {
    const leftSide = {w: 4, p: 3, b: 2, s: 1}
    const rightSide = {m: 4, q: 3, d: 2, z: 1}

    fight = fight.split('')


    let leftScore = 0
    let rightScore = 0
    const keyLeft = Object.keys(leftSide)
    const keyRight = Object.keys(rightSide)
    for (let i = 0; i < fight.length; i++) {
        if (keyLeft.includes(fight[i])) leftScore += leftSide[fight[i]]
        if (keyRight.includes(fight[i])) rightScore += rightSide[fight[i]]
    }

    if (rightScore > leftScore) return 'Right side wins!'
    if (leftScore > rightScore) return 'Left side wins!'
    return 'Let\'s fight again!'


}

console.log(alphabetWar('"zdqmwpbs"')) //"Let's fight again!"
console.log(alphabetWar('zzzzs')) //"Right side wins!"
console.log(alphabetWar('wwwwww')) //"Left side wins!"