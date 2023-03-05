// function number_sum(num) {
//     return num * (num + 1) / 2;
// }
// console.log(number_sum(13));


// sum_two_smallest_nums
// function sum_two_smallest_nums(arr) {
//     arr.sort((a, b) => a - b)
//     return arr[0]+arr[1];
// }
// console.log(sum_two_smallest_nums([2, 5, 6, 7, 3]));


// stringCheck
// function stringCheck(value) {
//     for(let i=0;i<value.length;i++) {
//         if(value[i]===value[i+1])
//           return true;
//         else
//           return false;
//     }
// }
// console.log(stringCheck(['Hi', 'By']));


// input_type
// function input_type(value) {
//     return isNaN(value)? "string": Number.isInteger(+value) ? "integer" : "double";
// }
// console.log((input_type("hello")));
// console.log(input_type("12"));
// console.log(input_type("12.13"));


// Transportation on vacation
// function rentalCarCost(d) {
//    return d<3 ? d*40 : d>=3 && d<7 ? (d*40)-20 : (d*40)-50;   
// }
// console.log(rentalCarCost(1));
// console.log(rentalCarCost(2));
// console.log(rentalCarCost(3));
// console.log(rentalCarCost(4));
// console.log(rentalCarCost(5));
// console.log(rentalCarCost(6));
// console.log(rentalCarCost(7));
// console.log(rentalCarCost(8));



// Your order,please
// function order(words) {
//     return words.split(" ").sort((a, b) => a.match(/\d/)-b.match(/\d/)).join(" ")
// }
// console.log(order("is2 Thi1s T4est 3a"));
