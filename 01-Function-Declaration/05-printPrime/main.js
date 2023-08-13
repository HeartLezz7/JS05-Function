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
    let pp = '';
    for (let n = 2; n <= num; n++){
        if(isPrime(n)) {pp += n}
    }
    return pp;
}