function longest(s1, s2) {
// return [...new Set(s1 + s2)].sort().join('')

    let setArr = [];
    let concatArr = s1.concat(s2);
    let array = concatArr.split('').sort();

    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!setArr.includes(array[i])) {
            setArr.push(array[i]);
        }
    }
    return setArr.join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'))