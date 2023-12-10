# !/usr/bin/env ruby
# n以下の素数を列挙するプログラム

max = 100
is_prime = Array.new(100, true)
prime_num = []
is_prime[0] = false
is_prime[1] = false
for i in 2..max do 
    if is_prime[i] == false
        next
    end
    prime_num.push(i)
    for j in (i*i).step(max,i) do
        is_prime[j] = false
    end
end
puts prime_num
