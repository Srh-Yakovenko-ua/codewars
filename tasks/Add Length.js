function addLength(str) {
const copySrt = str.split(' ')
    for (let i = 0; i < copySrt.length; i++) {
        copySrt[i] = `${copySrt[i]} ${copySrt[i].length}`
    }
    return copySrt
}

console.log(addLength('apple ban')) // 5 3