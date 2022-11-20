function accum(s) {
    return s.split('')
        .map((a, i) => {
            return a.toUpperCase() + a.toLowerCase().repeat(i)
        }).join('-')


}

console.log(accum('ZpglnRxqenU'))
console.log(accum('NyffsGeyylB'))