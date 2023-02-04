//////////////////////////// leetcode//////////////////////
// 1-Find pivot index

// var pivotIndex = function(nums) {
//         let sum = 0,left=0;
//     nums.forEach(i => {
//         sum += i;
//     });
//         for(let i=0;i<nums.length;i++)
//     {
//         let right = sum - nums[i] - left ;
//         if(left === right)
//          return i;
//         left += nums[i];
//     }

//         return -1;
//     };


///////////////////////// Hackerrank//////////////////////
// 2-Template literals

// function sides(literals, ...expressions) {
//     // const [a,b]=expressions;
//     let a=expressions[0];
//     let b=expressions[1]
//     let s1 = (b+Math.sqrt(Math.pow(b,2)-(16*a)))/4;
//     let s2 = (b-Math.sqrt(Math.pow(b,2)-(16*a)))/4;
//     let arr = [s1,s2]
//     return arr.sort((a,b)=>a-b)
// }


// 3-Try ,Catch

// function reverseString(s) {
//     try {
//         return s.split("").reverse().join("");
//     }
//     catch (error)
//     {
//         console.log(error.message);
//         console.log(s);
//     }
//     }
//     console.log(reverseString(1234));