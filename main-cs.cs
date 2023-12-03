using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace getPrimeNumber
{
    class program
    {
        static void Main(string[] args)
        {
            int max = 100;
            // 長さがmax+1で要素がすべてtrueの配列を用意
            bool[] isPrime = new bool[max + 1];
            for (int i = 0; i <= max; i++)
            {
                isPrime[i] = true;
            }
            // 0,1は素数ではないので除外
            isPrime[0] = false;
            isPrime[1] = false;
            // 0~maxまでループし、jの倍数をfalseに
            for (int j = 2; j <= max; j++)
            {
                for (int k = j; k * j <= max; k++)
                {
                    isPrime[k * j] = false;
                }
            }
            // isPrimeがtrueのlを出力
            for (int l = 0; l <= max; l++)
            {
                if (isPrime[l] == true)
                {
                    Console.Write(l + ",");
                }
            }
        }
    }
}