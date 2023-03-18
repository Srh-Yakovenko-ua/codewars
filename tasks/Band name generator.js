function bandNameGenerator(str) {
    const firstUpper = str[0].toUpperCase()

    if (str.charAt(0) === str.charAt(str.length - 1)) {
       return  firstUpper + str.substring(1).repeat(2)
    }

    return `The ${firstUpper}${str.substring(1)}`
}

console.log(bandNameGenerator('knife')) // 'The Knife'
console.log(bandNameGenerator('sandles')) // 'Sandlesandles'
