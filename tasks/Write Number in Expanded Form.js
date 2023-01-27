const expandedForm = n => n.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
console.log(expandedForm(70304)) // 70000 + 300 + 4
console.log(expandedForm(42)) //  '40 + 2');