function sortByLength (array) {
    return array.sort((a,b) => a.length < b.length ? -1 : 1)
}

console.log(sortByLength(["Beg", "Life", "I", "To"]))