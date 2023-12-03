// n以下の素数を列挙するプログラム
"use strict";
function getPrimeNums(max) {
    const primeNums = [];
    for (let i = 2; i <= max; i++) {
        let isPrime = true;
        for (const primeNum of primeNums) {
            if (i % primeNum === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeNums.push(i);
    }
    return primeNums;
}
const primeNums = getPrimeNums(100);
console.log(primeNums);