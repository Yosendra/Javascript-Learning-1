
// Prime -> whose factors are only 1 and itself
// Composite

// factors of 12: 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// Prime number
// 11 -> 1, 11
// 13 -> 1, 13

// Normal Version
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(number);
    }
}

// Optimized Version
function showPrimesOptimized(limit) {
    for (let i = 2; i <= limit; i++)
        if (isPrime(i))
            console.log(i);
}

function isPrime(number) {
    let half = number / 2;

    for (let i = 2; i <= half; i++)
        if (number % i === 0)
            return false;

    return true;
}

showPrimesOptimized(20);
// showPrimes(10);