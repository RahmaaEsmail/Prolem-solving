// List Filtering
// function filter_list(l) {
//     return l.filter(ele=>typeof ele !="string");
// }
// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); 

// Rock Paper Scissors!
// const rps = (p1, p2) => {
//     if ((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || ((p1 === "rock" && p2 === "scissors"))) {
//         return "Player 1 won!";
//     }
//     else if ((p1 === "scissors" && p2 === "rock") || (p1 === "rock" && p2 === "paper") || ((p1 === "paper" && p2 === "scissors"))) {
//         return "Player 2 won!";
//     }
//     else {
//         return "Draw!";
//     }
// };
// console.log(rps('rock', 'scissors'));


// Area or Perimeter
// const areaOrPerimeter = function (l, w) {
//     return l === w ? l*w : (l+w)*2;
// };


// Expressions Matter
// function expressionMatter(a, b, c) {
//     return Math.max((a + b) * c, (b + c) * a, a + b + c, (b * c) + a, a * b * c);
// }
// console.log(expressionMatter(10,5,6));


// Regex validate PIN code
// function validatePIN(pin) {
//     let regex = /^\d+$/g;
//     return  regex.test(pin) && (pin.length == 4 || pin.length == 6) ? true : false; 
// }
// console.log(validatePIN("66y3"));
