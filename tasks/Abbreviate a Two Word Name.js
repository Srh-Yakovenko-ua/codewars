function abbrevName(name){
    const abbRev = name.split(" ")
    return  `${abbRev[0][0]}.${abbRev[1][0]}`.toUpperCase()

}



console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))