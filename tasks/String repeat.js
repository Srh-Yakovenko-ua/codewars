function repeatStr(n, s) {
    let out = '';
    for (let i = 0; i < n; i++) {
        out += s
    };

    return out
}

console.log(repeatStr(3, "*"))
console.log(repeatStr(5, "#"))
console.log(repeatStr(2, "ha "))
