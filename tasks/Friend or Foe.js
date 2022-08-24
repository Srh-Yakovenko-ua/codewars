function friend(friends) {
    return friends.filter(l => l.length === 4)
}



console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']))
console.log(friend(['Ryan', 'Kieran', 'Mark']))
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']))