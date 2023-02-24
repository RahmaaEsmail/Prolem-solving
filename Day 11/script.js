////////////////////////////////codewars/////////////////////////
// Count by X
// function countBy(x, n) {
//    let z = [];
//    for(let i = x ; i<=x*n ;i=i+x)
//     z.push(i);
//    return z;
// }
// console.log(countBy(2, 5));




// Tribonacci Sequence
// function tribonacci(signature, n) {
    // first solution
    //    let tri = [...signature];
    //    if (n ==0)  return [];
    //    if(n==1 ) return [tri[0]];
    //    for(let i = 3 ;i<n;i++)
    //     tri[i] = tri[i-1]+tri[i-2]+tri[i-3];
    //   return tri;


    // second solution
    // for (var i = 0; i < n - 3; i++) { // iterate n times
    //     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
    // }
    // return signature.slice(0,n)
// }
// console.log(tribonacci([1, 1, 1], 1));



// Count the number of Duplicates
// function duplicateCount(text) {
//     return text.toLowerCase().split("").filter((val,i,arr)=>{
//         return (arr.indexOf(val) !== i && arr.lastIndexOf(val) ==i) ;
//     }).length;
// }
// console.log(duplicateCount("aabc"));

