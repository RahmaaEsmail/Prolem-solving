// CodeWars

// Convert boolean values to strings 'Yes' or 'No'.
// function boolToWord(bool) {
//     return bool === true ? "Yes" : "No";
// }



// Are You Playing Banjo ?
// function areYouPlayingBanjo(name) {
//     return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo("Rahma"));



// Even or Odd
// function evenOrOdd(number) {
//    return number % 2 ===0 ? "Even" : "Odd";
// }



// Opposites Attract 
// function lovefunc(flower1, flower2) {
//     return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0) ? true : false;
// }
// console.log(lovefunc(1,4));
// console.log(lovefunc(2, 2));
// console.log(lovefunc(0, 1));
// console.log(lovefunc(0, 0));



// Count of positives / sum of negatives
// function countPositivesSumNegatives(input) {
//     if (input == null || input.length < 1) {
//         return [];
//     }
//     let positiveArray = input.filter((num) => num> 0).length;
//     let sumNegtaive = input.filter((number)=> number<0).reduce((sum,num)=> sum+num);
//     return [positiveArray , sumNegtaive];
// }
// let arr = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
// console.log(countPositivesSumNegatives(arr));



// Sum Arrays
// function sum(numbers) {
//     "use strict";
//     return numbers.reduce((sum, num) => sum + num,0);
// };
// console.log(sum([1,2]));



// Find the smallest integer in the array
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return !args.length || args === null ? 0 : Math.min(...args);
//     }
// }
// let small = new SmallestIntegerFinder();
// console.log(small.findSmallestInt([]));



// Sum of positive 
// function positiveSum(arr) {
//    return arr.filter((positive)=> positive>0).reduce((a,b)=>a+b,0);
// }
// console.log(positiveSum([0]));



// Invert values
// function invert(array) {
//    return array.map((num)=>num*=-1);
// }
// console.log(invert([1, -2, 3, -4, 5]));



// Odd or Even ?
// function oddOrEven(array) {
//     return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }
// console.log(oddOrEven([0,1,5]));