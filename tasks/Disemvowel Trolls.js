function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')

}

console.log(disemvowel('This website is for losers LOL!'))