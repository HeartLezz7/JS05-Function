let num = prompt("Enter number");

function isPrime(n) {
    let isPrime = true;
    for (let divider = 2; divider < n; divider++) {
        if(n % divider == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


function printPrime(num) {
    let primeNumber = '';
    for (let n = 2; n <= num; n++){
        if(isPrime(n)) {primeNumber += `${n},`}
    }
    return primeNumber.slice(0,(primeNumber.length-1));
}

console.log(printPrime(num));