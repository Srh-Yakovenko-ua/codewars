function DNAStrand(dna) {
    const DNA = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    }
    return dna.split('').map(el => DNA[el]).join('')

}

console.log(DNAStrand('ATTGC'))