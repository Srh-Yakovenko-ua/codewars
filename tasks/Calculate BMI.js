function bmi(weight, height) {
    let bmiResult = weight / (height ** 2)

    if (bmiResult <= 18.5) {
        return `Underweight`;
    } else if (bmiResult <= 25) {
        return `Normal`;
    } else if (bmiResult <= 30) {
        return `Overweight`;
    } else {
        return `Obese`;
    }
}


console.log(bmi(80, 1.80))
console.log(bmi(44, 1.80))
console.log(bmi(134, 1.80))

