function shortcut (string) {
    return string.split(/[aeiou]/g).join('')

}

console.log(shortcut('how are you today?'))