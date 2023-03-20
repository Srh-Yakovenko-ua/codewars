function meeting(s) {
    const upper = s.toUpperCase()
    let copyStr = upper.split(';')
    for (let i = 0; i < copyStr.length; i++) {
        copyStr[i] = copyStr[i].split(':').reverse()
    }

    let copySrtSort = copyStr.sort()

    let resultMeeting = ''
    for (let i = 0; i < copySrtSort.length; i++) {
        resultMeeting += `(${copySrtSort[i][0]}, ${copySrtSort[i][1]})`
    }

    return resultMeeting


}

//console.log(meeting('Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'))
console.log(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"))
//"(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)
// "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"