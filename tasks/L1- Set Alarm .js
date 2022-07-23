function setAlarm(employed, vacation) {
    return (employed && !vacation) ? true : false;
}

// function setAlarm(employed, vacation) {
//
//     if (employed === true && vacation === true) {
//         return false;
//     } else if (employed === false || vacation === true) {
//         return false;
//     } else {
//         return true;
//     }
//
// }
console.log(setAlarm(true, true))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))
console.log(setAlarm(true, false))


