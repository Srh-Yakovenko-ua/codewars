// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
//
// }
function disemvowel(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

console.log(disemvowel('This website is for losers LOL!'))