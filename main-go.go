package main

import "fmt"

func main() {
        max := 100
        primeNums := getPrimeNum(max)
        fmt.Println(primeNums)
}
func getPrimeNum(max int) []int {
        var isPrime = make([]bool, max+1)
        for i := 0; i <= max; i++ {
                isPrime[i] = true
        }
        isPrime[0] = false
        isPrime[1] = false
        for j := 2; j*j <= max; j++ {
                for k := j; k*j <= max; k++ {
                        isPrime[k*j] = false
                }
        }
        var primeNums []int
        for l := 0; l <= max; l++ {
                if isPrime[l] {
                        primeNums = append(primeNums, l)
                }
        }
        return primeNums
}