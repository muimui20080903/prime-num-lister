// n以下の素数を列挙するプログラム
using System;
using System.Collections.Generic;

namespace prime
{
    class Program
    {
        static void Main(string[] args)
        {
            int max = 100;
            // 長さがmaxの配列を用意
            bool[] isPrime = new bool[max];
            // 0,1は素数ではないので除外
            isPrime[0] = false;
            isPrime[1] = false;
            for(int i = 2; i < max; i++)
            {
                isPrime[i] = true;
            }
            // 2~maxまでループし、jの倍数をfalseに
            for (int j = 2; j < max; j++)
            {
                if (isPrime[j] == false) continue;
                for (int k = 2; k * j < max; k++)
                {
                    isPrime[k * j] = false;
                }
            }
            // 素数を表示
            for(int i = 0; i < max; i++)
            {
                if (isPrime[i]) Console.Write($"{i} ");
            }
            Console.WriteLine();
        }
    }
}