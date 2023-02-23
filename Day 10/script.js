/////////////////////////////////////// codewars ///////////////////////////////
// Square(n) Sum
// function squareSum(numbers) {
//    return numbers.map((num)=>num**2).reduce((sum,num)=>sum+num,0)
// }
// console.log(squareSum([1, 2, 2]));



// Counting sheep..
// function countSheeps(arrayOfSheep) {
//      return arrayOfSheep.filter((sheep)=>sheep).length
// }
// console.log(countSheeps([true, true, true, false,
//      true, true, true, true,
//      true, false, true, false,
//      true, false, false, true,
//      true, true, true, true,
//      false, false, true, true]));



// Calculate average
// function findAverage(array) {
//      return array.length ? (array.reduce((a,b)=>a+b))/array.length : 0;
// }
// console.log(findAverage([1, 2, 3]));



// Fake Binary
// function fakeBin(x) {
//    return Array.from(x).map(num=>num<5?0 : 1).join("")
// }
// console.log(fakeBin('45385593107843568'));



// Duplicate Encoder
// function duplicateEncode(word) {
//      return word.toUpperCase().split("").map((a,i,c)=> c.indexOf(a) === c.lastIndexOf(a) ? "(" : ")").join("")
// }
// console.log(duplicateEncode("(( @"));



////////////////////////////////////////leetcode///////////////////////////////////////////////
// Difference Between Element Sum and Digit Sum of an Array
// let arr = [1,2,3,4];
// var differenceOfSum = function (nums) {
//      return Math.abs((arr.reduce((a, b) => a + b)) - arr.join("").split("").reduce((a, b) => +a + +b))
// };
// console.log(differenceOfSum(arr));




// create - target - array -in -the - given - order
// var createTargetArray = function (nums, index) {
//      let target = [];
//      for (let i = 0; i < index.length; i++) {
//           target.splice(index[i], 0, nums[i])
//      }

//      return target
// };




// shuffle - string
// let s = "codeleet", indices = [4 , 5, 6, 7, 0, 2, 1, 3], t = (Array(s.length )) ;
// var restoreString = function (s, indices) {
// for(let i=0;i<indices.length;i++)
// {
//      t[indices[i]] = s[i];
// }
// return t.join("");
// };