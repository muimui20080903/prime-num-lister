// n以下の素数を列挙するプログラム
// function getPrimeNums(max:number):number[] {
//     const primeNums :number[]= [];
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

// console.log(getPrimeNums(100));

// // 間違ったエラストテネスのふるい
// function getPrimeNums(max: number): number[] {
//     let primeNums: number[] = [];
//     for (let i = 2; i <= max; i++) { primeNums[i] = i; }
//     for (let i = 2; i <= Math.sqrt(max); i++) {
//         primeNums = primeNums.filter(e => e <= i || e % i !== 0);
//     }
//     return primeNums;
// }
// console.log(getPrimeNums(100));

// 正しいエラストテネスのふるい
function getPrimeNums(max: number): number[] {
    // 0からmaxまでの配列を作成
    let isPrime: boolean[] = new Array(max);
    let primeNums: number[] = [];
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
