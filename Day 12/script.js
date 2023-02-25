///////////////////////////////////////codewars//////////////////////////////
// Reversed sequence
// const reverseSeq = n => {
//     let arr = []
//     for(let i=n;i>=1;i--)
//      arr.push(i);
//     return arr;
// };
// console.log(reverseSeq(5));



// If you can't sleep, just count sheep!!
// var countSheep = function (num) {
//     let x='';
//     for(let i =1;i<=num;i++)
//         x += `${i} sheep...`;
//     return x;
// }
// console.log(countSheep(1));



// Replace With Alphabet Position
// function alphabetPosition(text) {
//     let newTxt = text.replace(/[^a-zA-Z]+/g, '');
//     console.log(newTxt);
//     let arr = []
//     for (let i = 0; i < newTxt.length; i++) {
//         if (newTxt.charCodeAt(i) >= 65 && newTxt.charCodeAt(i) <= 90)
//             arr.push(newTxt.charCodeAt(i) - 64);
//         else
//             arr.push(newTxt.charCodeAt(i) - 96);
//     }
//     return arr.join(" ");
// }
// console.log(alphabetPosition("*l+b<?^<"));



// Sum without highest and lowest number
// function sumArray(array) {
//     if (array == null) {
//         return 0;
//     } else if (array.length < 2) {
//         return 0;
//     } else {
//         array = array.sort(function (a, b) { return a - b; });
//         var total = 0;
//         for (var i = 1; i < array.length - 1; i++) {
//             total += array[i];
//         }
//         return total;
//     }
// }
// console.log(sumArray(null));



// Grasshopper - Personalized Message
// function greet(name, owner) {
//     return name === owner ? "Hello boss" : "Hello guest";
// }
// console.log(greet('Greg', 'Daniel'));


