function solve(s) {
    s = s.split('')

    let lowerRes = 0
    let upperRes = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) lowerRes += 1
        else upperRes += 1
    }

    return upperRes < lowerRes || lowerRes === upperRes ? s.join('').toLowerCase() : s.join('').toUpperCase()

}

console.log(solve('code')) // code
console.log(solve('CODe')) // CODE