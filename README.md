# prime-num-lister
複数の言語で「n以下の素数を列挙するプログラム」を作成してみる  
気に入った言語を勉強する  
JSとTSは書いたことある

# 言語
- [JavaScript](./main-js.js)
- [TypeScript](./main-ts.ts)
- [C#](./main-cs.cs)
- [Golang](./main-go.go)
- Rust
- Ruby

---
misskeyのフォロワーに教えてもらったこの方法で実装する  
[本当は遅い「似非エラトステネスの篩」の罠](https://zenn.dev/noodlewhale/articles/c5b069237ee72a)
```
import sys

# limit 以下の全ての素数を返す
def list_primes(limit):
    primes = []
    is_prime = [True] * (limit + 1)
    is_prime[0] = False
    is_prime[1] = False

    for p in range (0, limit + 1):
        if not is_prime[p]:
            continue
        primes.append(p)
        for i in range(p*p, limit + 1, p):
            is_prime[i] = False

    return primes


if __name__ == '__main__':
    n = int(sys.argv[1])
    print(len(list_primes(n)))
    ```