function capitalize(s) {
    return [s.split('').map((el, i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join(''),
        s.split('').map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el.toLowerCase()).join('')]
};

console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))