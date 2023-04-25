function shortenToDate(longDate) {
    const newDate = longDate.split(',')
    newDate.length = 1


    return newDate[0]

}

console.log(shortenToDate('Friday May 2, 9am')) // "Friday May 2"