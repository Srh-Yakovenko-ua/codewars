function smallEnough(a, limit) {

    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) return false
    }
    return true

}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))