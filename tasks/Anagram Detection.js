let isAnagram = function (test, original) {
    const t = test.toLowerCase().split('').sort().join('');
    const o = original.toLowerCase().split('').sort().join('');

    return t === o
};
console.log(isAnagram('Twoo', 'WooT')) // true
//console.log(isAnagram("foefet", "toffee")) // true
