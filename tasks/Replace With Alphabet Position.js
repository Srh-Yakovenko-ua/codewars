function alphabetPosition(text) {
    text = text.toLowerCase();
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = [];

    for (let i = 0; i < text.length; i++) {
        const idx = alpha.indexOf(text[i]);

        if (idx === -1) continue
        else alphaArr.push(idx + 1)
    }

    return alphaArr.join('')
}


console.log(alphabetPosition('The sunset sets at twelve o\' clock.'))