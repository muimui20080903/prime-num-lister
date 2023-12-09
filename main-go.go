// n以下の素数を列挙するプログラム
package main

import "fmt"

func main() {
	max := 100
	primeNums := getPrimeNum(max)
	fmt.Println(primeNums)
}

func getPrimeNum(max int) []int {
	var isPrime = make([]bool, max+1)
	var primeNumbers []int
	for i := 0; i <= max; i++ {
		isPrime[i] = true
	}
	isPrime[0] = false
	isPrime[1] = false
	for j := 2; j <= max; j++ {
		if isPrime[j] == false {
			continue
		}
		primeNumbers = append(primeNumbers, j)
		for k := j * j; k <= max; k += j {
			isPrime[k] = false
		}
	}
	return primeNumbers
}
