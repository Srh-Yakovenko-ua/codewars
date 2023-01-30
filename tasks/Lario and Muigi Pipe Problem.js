function pipeFix(numbers){

    const newNumber = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        newNumber.push(i)
    }
    return newNumber
}

console.log(pipeFix([1,2,3,12])) //,[1,2,3,4,5,6,7,8,9,10,11,12])
console.log(pipeFix( [-1,4])) //),[-1,0,1,2,3,4]
