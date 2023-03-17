const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}

function high(x) {

    const copyString = x.split(' ')

    const score = {}
    for (let i = 0; i < copyString.length; i++) {
        for (let j = 0; j < copyString[i].length; j++) {
            if (score[i]) {
                score[i] += alphabet[copyString[i][j]]

            } else score[i] = alphabet[copyString[i][j]]
        }
    }

    let maxIndex = 0;
    let maxScore = 0;

    for (const key in score) {
        if (score[key] > maxScore) {
            maxScore = score[key];
            maxIndex = key;
        }
    }

    return copyString[maxIndex]

}

console.log(high('man i need a taxi up to ubud')) //taxi
console.log(high('take me to semynak')) //taxi
console.log(high('what time are we climbing up the volcano')) //volcano