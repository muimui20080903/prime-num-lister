# !/usr/bin/env ruby
# n以下の素数を列挙するプログラム

# max = 100
# is_prime = Array.new(100, true)
# prime_num = []
# is_prime[0] = false
# is_prime[1] = false
# for i in 2..max do 
#     if is_prime[i] == false
#         next
#     end
#     prime_num.push(i)
#     for j in (i*i).step(max,i) do
#         is_prime[j] = false
#     end
# end
# puts prime_num

# -------------------------------------------------
# ChatGPTのサンプルコード
def generate_primes_up_to_n(n)
    # 0, 1は素数ではないので除外
    is_prime = [false, false] + [true] * (n - 1)
  
    # 2~nまでループし、jの倍数をfalseに
    (2..Math.sqrt(n)).each do |j|
      next unless is_prime[j]
  
      (j * j..n).step(j) do |k|
        is_prime[k] = false
      end
    end
  
    # 素数のリストを返す
    is_prime.each_index.select { |i| is_prime[i] }
  end
  
  # 例: 100以下の素数を列挙
  n = 100
  primes_list = generate_primes_up_to_n(n)
  puts "#{n}以下の素数: #{primes_list.join(', ')}"
