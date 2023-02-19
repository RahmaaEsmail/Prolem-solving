// codeWars

// Convert a Boolean to a String
// function booleanToString(b) {
//    return b.toString()
// }
// console.log(booleanToString(true));



// Convert number to reversed array of digits
// function digitize(n) {
//     return Array.from(String(n), num => +num).reverse();
// }
// console.log(digitize(35231));



// Grasshopper - Summation
// var summation = function (num) {
//     return (num*(num+1)/2);
// }
// console.log(summation(8));



// You only need one - Beginner
// function check(a, x) {
//     return a.includes(x);
// }
// console.log(check([66,45,"Rahma"],66));



// Shortest Word
// function findShort(s) {
//     return Math.min(...s.split(" ").map(word => word.length))
// }
// console.log(findShort("Let's travel abroad shall we"));



// String ends with?
// function solution(str, ending) {
//     return str.endsWith(ending)
// }
// console.log(solution("abcde","abc"));



// Function 1 - hello world
// const greet = () => "hello world!"



// Convert a String to a Number!
// const stringToNumber = function (str) {
//     return +str;
// }



// Growth of a Population
// function nbYear(p0, percent, aug, p) {
//     let c=1;
//     let x = (p0 * (percent / 100)) + aug + p0;
//     while (x<p) {
//         x = Math.floor((x * (percent / 100)) +x + aug);
//         c++
//     }
//     return c;
// }
// console.log(nbYear(1500000, 0.25, 1000, 2000000));