// n以下の素数を列挙するプログラム
fn main(){
    let max = 100;
    let prime_numbers = get_prime_number(max);
    println!("{:?}",prime_numbers);
}

fn get_prime_number(max:usize) -> Vec<usize>{
    let mut is_prime = vec![true; max];
    let mut prime_numbers = Vec::new();
    is_prime[0] = false;
    is_prime[1] = false;
    for i in 2..max{
        if is_prime[i] == false {continue;}
        prime_numbers.push(i);
        for j in((i*i)..max).step_by(i){
            is_prime[j] = false;
        }
    }
    prime_numbers
}
