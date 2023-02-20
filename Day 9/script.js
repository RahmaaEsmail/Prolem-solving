// codewars

// MakeUpperCase
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }



// Isograms
// function isIsogram(str) {
//     return new Set(str.toUpperCase()).size === str.toUpperCase().length;
// }
// console.log(isIsogram("isIsogram"));



// DNA to RNA Conversion
// function DNAtoRNA(dna) {
    //////////// first solution //////////
    // for (let char of dna) {
    //      if(char==="T")
    //       char="U";
    // }
    // return dna;

    //////////// second solution //////////
    // return dna.replaceAll("T", "U")
// }
// console.log(DNAtoRNA("GCAT"));



// Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//     return n>0 && m>0 ? n*m : 0
// }



// How good are you really ?
// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > Math.floor(classPoints.reduce((a, b) => a + b) / classPoints.length) ;
// }
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));



// Beginner Series #3 Sum of Numbers
// function getSum(a, b) {
    //////////// fisrt solution //////////
    // if(a===b)
    //  return a;
    // let sum = 0;
    // let arr = Array.of(a,b)
    // for(let i =Math.min(...arr) ;i<=Math.max(...arr);i++)
    //  sum+=i;
    //  return sum;

    //////////// second solution //////////
    // let max = Math.max(a,b),
    //     min = Math.min(a,b);
    //     return (max-min + 1) * (max + min ) /2
// }
// console.log(getSum(-1,2));



// Keep Hydrated!
// function litres(time) {
//     return Math.floor(time * 0.5);
// }
// console.log(litres(3));



// Simple multiplication
// function simpleMultiplication(number) {
//     return number % 2 ? number * 9 : number * 8;
// }
// console.log(simpleMultiplication(8));



// Will you make it ?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >= distanceToPump ;
// };
// console.log(zeroFuel(50,25,2));
// console.log(zeroFuel(100, 50, 1));