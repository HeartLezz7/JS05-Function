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

alert(`${num} is prime number?`)
alert(`${isPrime(num)} `)