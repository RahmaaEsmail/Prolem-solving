// حساب مابعد الفاصلة.
// function Decimal_places(num) {
//        if(Number.isInteger(+num)) {
//         return 0;
//        }
//        else {
//         let x = num.split(".");
//         return +x[1].length;
//        }
    
// }
// console.log(Decimal_places("2.653"));


// String Repeat
// function repeatStr(n, s) {
//     return s.repeat(n);
// }


// Thinkful - Logic Drills: Traffic light
// function updateLight(current) {
//     return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : "";
// }
// console.log(updateLight("yellow"));



// تحويل النسبة المئوية
// function convertPercent(percentage) {
//     let x = percentage.split("");
//     x.pop();
//    return +x.join("")/100;
// }
// console.log(convertPercent("9%"));



// count Characteres in string
// function count(string) {
//    let x= string.split("");
//    let obj = {};
//   for(let i of x) {
//     obj[i] = obj[i] ? obj[i]+1  : 1
//    }
//    return obj;
// }
// console.log(count("asa"));


// Return Negative
// function makeNegative(num) {
//    return num < 0 ? num : num*-1;
// }
// console.log(makeNegative(-3));


// لعناصر المتشابهة في المصفوفة
// function get_duplicate_elements(arr) {
//     return arr.filter((item, index, arr) => arr.indexOf(item) != index)
// }
// console.log(get_duplicate_elements([3, -9, -9, -4]));