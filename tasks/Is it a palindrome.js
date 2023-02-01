function isPalindrome(x) {
    return String(x).toLowerCase() === String(x).toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('hello')) // false
console.log(isPalindrome('Abba')) // false