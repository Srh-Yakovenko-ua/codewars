function paperwork(n, m) {
  let clearPapper = (n > 0 && m > 0) ? n * m : 0;
  return clearPapper
}

console.log(paperwork(5,5))
console.log(paperwork(5,-5))
console.log(paperwork(-5,-5))
console.log(paperwork(5,0))