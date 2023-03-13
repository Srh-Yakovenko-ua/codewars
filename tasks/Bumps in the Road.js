function bump(x) {
    x = x.split('')
    const bumps = 'n';
    const max = 15

    let limit = 0;
    for (let i = 0; i < x.length; i++) if (x[i] === bumps) limit += 1
    return limit > max ? 'Car Dead' : 'Woohoo!'
}

console.log(bump('__nn_nnnn__n_n___n____nn__nnn')) // "Woohoo!"
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn')) // "Car Dead"