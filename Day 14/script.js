///////////////////////////CODEWARS/////////////////////////
// Unique In Order
// var uniqueInOrder = function (iterable) {
//     let arr = Array.isArray(iterable) ? iterable : iterable.split("");
//     return arr.map((item,i,arr)=>{
//      return  arr[i] != arr[i+1] ? arr[i] : ''
//     }).filter(item=>item !='')
// }
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));



// Remove the minimum
// function removeSmallest(numbers) {
//     numbers = numbers.slice(0)
//     numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
//     return numbers
// }
// console.log(removeSmallest([1,2,3,4,5]));



// Grasshopper - Grade book
// function getGrade(s1, s2, s3) {
//     return (s1 + s2 + s3) / 3 >= 90 && (s1 + s2 + s3) / 3 <=100 ? "A" :
//     (s1 + s2 + s3) / 3 >= 80 && (s1 + s2 + s3) / 3 < 90 ? "B" :
//     (s1 + s2 + s3) / 3 >= 70 && (s1 + s2 + s3) / 3 < 80 ? "C" :
//     (s1 + s2 + s3) / 3 >= 60 && (s1 + s2 + s3) / 3 < 70 ? "D" :
//      "F"
// }
// console.log(getGrade(82, 85, 87));



// function is_same(name1, name2) {
//     return name1 === name2 ? "متشابهتين" : "غير متشابهتين"
// }
// console.log(is_same("omar","omer"))


// remove last letter and return the string
// function deleteLastChar(word) {
//    let newStr = word.split("")
//    newStr.pop();
//     return newStr.join("")
// }
// console.log(deleteLastChar("coderhub"));



// Remove String Spaces
// function noSpace(x) {
//     return x.trim().replaceAll(/\s/g,"")
// }
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));

// Find the first non - consecutive number
// function firstNonConsecutive(arr) {
//     let c = 0 , x;
//    for (let i = 0 ; i<arr.length-1;i++) {
//        if(arr[i+1]-1 == arr[i]){
//            continue;
//        }
//       else {
//            c++;
//         x = arr[i + 1];
//         break;
//       }
//    }
//    return  c == 0 ? null : x;
// }
// console.log(firstNonConsecutive([1, 2, 3, 4 , 5 , 7 , 8]));



// Testing 1 - 2 - 3
// var number = function (array) {
//     return array.map((item, i, arr) => `${i + 1}: ${array[i]}`)
// }
// console.log(number(["a", "b", "c"]));
