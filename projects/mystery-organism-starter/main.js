// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function for creating pAequor objects
const pAequorFactory = function (specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) identicalBases++;
      }
      return `specimen #${this.specimenNum} and #${pAequor.specimenNum} have ${(
        (identicalBases / this.dna.length) *
        100
      ).toFixed(2)}% DNA in common`;
      // const similarities = this.dna.reduce((acc, curr, index, arr) => {
      //   if (arr[index] === pAequor.dna[index]) return acc + 1;
      //   else return acc;
      // }, 0);
      // const percentOfDNAShared = (
      //   (similarities / this.dna.length) *
      //   100
      // ).toFixed(2);
      // return `specimen #${this.specimenNum} and #${pAequor.specimenNum} have ${percentOfDNAShared}% DNA in common`;
    },
    willLikelySurvive() {
      let identical = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          identical++;
        }
      }
      return ((identical / this.dna.length) * 100).toFixed(2) >= 60;
      // const cOrG = this.dna.filter((el) => el === "C" || el === "G");
      // return cOrG.length / this.dna.length >= 0.6;
    },
  };
};
const pa1 = pAequorFactory(1, mockUpStrand());
const pa2 = pAequorFactory(2, mockUpStrand());
console.log("compared: ", pa1.compareDNA(pa2));
console.log("Will Survive: ", pa1.willLikelySurvive());

const survives = [];
let count = 1;
while (survives.length < 30) {
  const newPa1 = pAequorFactory(count, mockUpStrand());
  if (newPa1.willLikelySurvive()) survives.push(newPa1);
  count++;
}

console.log(survives);
