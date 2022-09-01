function XO(str) {
    let value = 0;
    str.split``.forEach(x => {
        if ('x' === x.toLowerCase()) {
            value += 1
        }
        if ('o' === x.toLowerCase()) {
            value -= 1
        }

    })
    return value === 0
}

console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('ooom'))