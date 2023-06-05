function sortGiftCode(code){

    return [...code].sort((a , b) => a.localeCompare(b)).join('')

}

console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')) //'abcdefghijklmnopqrstuvwxyz'