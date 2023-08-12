let num = prompt("Enter number");

function isPrime(num) {
    let isPrime = true;
    for (let divider = 2; divider < num; divider++) {
        if(num % divider == 0) {
            return false;
        }
    }
    return true;
}

function printPrime(num) {
    for (let n = 2; n <= num; n++){
        isPrime(n);
    }
    
}

// alert(isPrime(+num))
// console.log(isPrime(+num))