// CodeWars

// Exes and Ohs
// function XO(str) {
// fisrt solution

//     let x=0;
//     let o=0;
//     for (let i = 0; i < str.length;i++) {
//         if (str[i].toLowerCase() ==="x")
//        x++;
//         if (str[i].toLowerCase() ==="o")
//        o++;
//    }
//        return x === o || (x === 0 && o === 0)


// second solution
//    return str.toLowerCase().split("x").length === str.toLowerCase().split("o").length;
// }



// Is this a triangle ?
// function isTriangle(a, b, c) {
//     return a + b > c && a + c > b && c + b > a;
// }


// descendingOrder
// function descendingOrder(n) {
// First solution
//     let str = n.toString();
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i]);
//     }
//     return +(arr.reverse().sort((a, b) => b - a).join(""))

// second solution
// return String(n).split("").reverse().sort((a,b)=>b-a).join("");
// }


// Sum of two lowest positive integers
// function sumTwoSmallestNumbers(numbers) {
//     let sorted = numbers.sort((a,b)=>a-b);
//     console.log(sorted);
//     return sorted[0] + sorted[1]
// }


// Friend
// function friend(friends) {
//     return friends.filter((friend) => friend.length===4)
// }
// let friends = ["Ryan", "Kieran", "Jason", "Yous"];
// console.log(friend(friends));


// Find the next perfect square!
// function findNextSquare(sq) {
//     let sq2 = (Math.sqrt(sq)) +1 ; 
//     return (Math.sqrt(sq) % 1 === 0) ? Math.pow(sq2,2) : -1;

// }
// console.log(findNextSquare(121));
// console.log(findNextSquare(625));
// console.log(findNextSquare(114));
