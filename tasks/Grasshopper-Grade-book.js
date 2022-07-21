function getGrade(s1, s2, s3) {
    let sum = (s1 + s2 + s3) / 3

    if (sum >= 90 && sum <= 100) {
        return 'A'
    } else if (sum >= 80 && sum < 90) {
        return 'B'
    } else if (sum >= 70 && sum < 80) {
        return 'C'
    } else if (sum >= 60 && sum < 70) {
        return 'D'
    } else {
        return 'F'
    }

}

console.log(getGrade(95,90,93))
console.log(getGrade(100,85,96))
console.log(getGrade(92,93,94))
console.log(getGrade(84,79,85))

console.log(getGrade(84,79,85))
console.log(getGrade(70,70,70))
console.log(getGrade(66,62,68))
console.log(getGrade(58,59,60))

// должен сложить 3 элемента разделить на 3 и вывести букву в диапозоне
