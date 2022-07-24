function updateLight(current) {
    let green = 'green';
    let yellow = 'yellow';
    let red = 'red';
    if (current === 'green') {
        return yellow;
    } else if (current === 'yellow') {
        return red;
    } else {
        return green;
    }
}