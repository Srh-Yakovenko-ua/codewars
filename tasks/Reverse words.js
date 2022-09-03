function reverseWords(str) {
    return str.split(' ').map(words => words.split('').reverse().join('')).join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('a b c d'))