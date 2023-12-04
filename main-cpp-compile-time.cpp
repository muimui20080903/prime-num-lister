#ifndef N
#  define N 100
#endif

struct primes_compile_time {
  int primes[N+1];
  constexpr primes_compile_time() : primes() {
    bool sieve[N+1] = {false};
    int* ptr = primes;
    for (int i = 2; i <= N; i++) {
      if (!sieve[i]) {
        *ptr++ = i;
        if (int j = 0; __builtin_mul_overflow(i, i, &j))
          break;
        else for (; j <= N; j += i)
          sieve[j] = true;
      }
    }
  }
};

int main() {
  volatile constexpr primes_compile_time P;
}
