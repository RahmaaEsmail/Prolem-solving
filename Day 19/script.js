// Ones and Zeros
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(""),2);
// };
// console.log(binaryArrayToNumber([0, 0, 1, 0]));


// Is it a palindrome ?
// function isPalindrome(x) {
//     let y = x.toLowerCase();
//     return (x.trim().toLowerCase().split("").reverse().join("") === y);
// };
// isPalindrome("Abba")


// Calculate BMI
// function bmi(weight, height) {
//     let m = weight / height**2;
//     return m <= 18.5 ? "Underweight" : m <= 25.0 ? "Normal" : m <= 30.0 ? "Overweight" : "Obese";
// }
// console.log(bmi(80, 1.80));


// Digit * Digit
// function squareDigits(num) {
//    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
// }
// console.log(squareDigits(squareDigits(9119)));


// A Needle in the Haystack
// function findNeedle(haystack) {
//     return `found the needle at position ${haystack.indexOf("needle")}`
// }
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));



// Find the unique number
// function findUniq(arr) {
//     return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item))
// }
// console.log(findUniq([0, 0, 0.55, 0, 0]));