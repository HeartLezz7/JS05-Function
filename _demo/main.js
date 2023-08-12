//test push , feedback branch
//update solution

function soundOfBird () {
    console.log("เสียงงง นกกรงหัวจุกมันริก");
    console.log("จกกกกกกกกกก");
    for (let i = 1; i <= 10; i++){
        console.log("กวิ๊ก ๆๆๆๆๆๆๆ");
    }
}
function isPrime(n) {
    // let n = 5 ;
    let isPrime = true;
    for (let divider = 2; divider < n; divider++) {
        if(n % divider == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}