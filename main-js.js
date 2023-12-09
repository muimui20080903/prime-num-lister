// // n以下の素数を列挙するプログラム
// "use strict";
// function getPrimeNums(max) {
//     const primeNums = [];
//     for (let i = 2; i <= max; i++) {
//         let isPrime = true;
//         for (const primeNum of primeNums) {
//             if (i % primeNum === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) primeNums.push(i);
//     }
//     return primeNums;
// }
// const primeNums = getPrimeNums(100);
// console.log(primeNums);

// 正しいエラストテネスのふるい
`use strict`;
function getPrimeNums(max) {
    // 0からmaxまでの配列を作成
    let isPrime= new Array(max);
    let primeNums = [];
    // 0と1は素数ではないのでfalse
    isPrime[0] = false;
    isPrime[1] = false;
    // 2からmaxまでの数を順にチェック
    for (let i = 2; i < max; i++) {
        if (isPrime[i] === false) continue;
        primeNums.push(i);
        // iの倍数を素数から除外
        for (let j = i; j < max; j += i) {
            isPrime[j] = false;
        }
    }
    return primeNums;
}
console.log(getPrimeNums(100));
