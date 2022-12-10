function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const position = alphabet.indexOf(letter)
    return `Position of alphabet: ${position + 1}`
}

console.log(position('a'))
console.log(position('c'))