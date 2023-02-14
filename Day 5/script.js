// leetcode how-many-numbers-are-smaller-than-the-current-number

// First Solution
// var smallerNumbersThanCurrent = function (nums) {
    // let ans = [];
    // for (let i = 0; i < nums.length; i++) {
    //     let c = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i != j && nums[j] < nums[i])
    //             c++;
    //     }
    //     ans.push(c);
    //     return ans;
    // }
// };
// let arr = [6, 5, 4, 8];
// console.log(smallerNumbersThanCurrent(arr));

// second solution
// var smallerNumbersThanCurrent = function (nums) {
//     let sorted = [...nums].sort((a,b=>a-b));
//     return nums.map(num => sorted.indexOf(num))
// }



// Two Sum 
// first solution

// var twoSum = function (nums, target) {
//     let arr =[];
//     for(let i=0;i<nums.length;i++) {
//         for (let j=1;j<nums.length;j++)
//         {
//             if (i!=j&&nums[i] + nums[j] === target) {
//                 arr=[i,j];
//                 return arr;
//             }
//         }
//     }
//     return arr;
// };
// let arr = [2, 5, 5, 11];
// console.log(twoSum(arr,10));


// another solution
// const twoSum = function (nums, target) {
//     let map = new Map();
//     for(let i=0;i<nums.length;i++)
//     {
//         let reminder = target - nums[i];
//         if(map.has(reminder)) return [map.get(reminder),i];
//         map.set(nums[i],i)
//     }
//     return map;
// }
// const arr = [3,2,4], t = 6;
// console.log(twoSum(arr,t));


