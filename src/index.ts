const argv = require('yargs').argv
const maxNumber:number=argv.number;

const sieveOfEratosthenes = function(maxNumber:number) {
   let primes:Array<number>=[];
   let isPrime:Array<boolean>=new Array(maxNumber + 1)
       .fill(true);
   isPrime[0]=false;
   isPrime[1]=false;

   for (let number:number=0, maximum:number=maxNumber+1; number < maximum; number++) {
        if (isPrime[number]) {
            primes.push(number);
            let nextNumber:number=number*number;
            while (nextNumber <= maxNumber) {
                isPrime[nextNumber]=false;
                nextNumber+=number;
            }
        }
    }
    return primes
}

console.log(sieveOfEratosthenes(maxNumber));

export default { sieveOfEratosthenes }
