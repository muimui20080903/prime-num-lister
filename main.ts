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

// エラストテネスのふるい
function getPrimeNums(max: number): number[] {
    let primeNums: number[] = [];
    for (let i = 2; i <= max; i++) { primeNums[i] = i; }
    for (let i = 2; i <= Math.sqrt(max); i++) {
        primeNums = primeNums.filter(e => e <= i || e % i !== 0);
    }
    return primeNums;
}
console.log(getPrimeNums(100));