///////////////////////////// leetcode /////////////////////
// 1- isIsomorphic

// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;

//   const mapa = new Map();
//   const mapb = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (mapa.has(s[i])) {
//       if (mapa.get(s[i]) !== t[i]) {
//         return false;
//       }
//     } else {
//       mapa.set(s[i], t[i])
//     }

//     if (mapb.has(t[i])) {
//       if (mapb.get(t[i]) !== s[i]) {
//         return false;
//       }
//     } else {
//       mapb.set(t[i], s[i])
//     }
//   }
//   return true
// };




// 2- Concatenation of Array

// var getConcatenation = function(nums) {
//     for(let i=0;i<nums.length;i++)
//     {
//         nums.push(nums[i]);
//     }
//     return nums
// }
// console.log(getConcatenation(nums));




// 3- Shuffle the Array

// let X=1;
// let operations = ["X++","++X","--X","X--"]
// var finalValueAfterOperations = function(operations) {
//     for(let i = 0;i<operations.length;i++)
//     {
//         if(operations[i]==="--X")
//           --X;
//         if(operations[i]==="X--")
//           X--;
//         if(operations[i]==="++X")
//          ++X;
//         if(operations[i]==="X++")
//          X++;
//     }
//     return X-1;
// };
// console.log(finalValueAfterOperations(operations));


/////////////////////////////hackerrank////////////////////

// 1- Reverse string

// let s="A man, a plan, a canal: Panama"
// var isPalindrome = function(s) {
// let newStr = s.replace(/[^A-Z0-9]+/gi,"").toLowerCase();
// return newStr.split("").reverse().join("")===newStr ?true:false
// };