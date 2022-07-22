function makeNegative(num) {
    return (num < 0) ? num : -num;

}

console.log(makeNegative(43))
console.log(makeNegative(0)) // минус в нуле не играет роли
console.log(makeNegative(-312))