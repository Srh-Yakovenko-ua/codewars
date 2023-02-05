function duplicateCount(text){
   const copyText = [...text.toLowerCase()]

    const duplicate = {}
    for (let i = 0; i < copyText.length; i++) {
        if(duplicate[copyText[i]]){
            duplicate[copyText[i]] += 1
        }else {
            duplicate[copyText[i]] = 1
        }
    }
    let duplicateCount = 0;
    for (const key in duplicate) {
        if(duplicate[key] > 1){
            duplicateCount += 1
        }
    }
   return duplicateCount
}

console.log(duplicateCount("aabBcde")) // 2
console.log(duplicateCount("Indivisibilities")) // 2
console.log(duplicateCount("Indivisibility")) // 2
