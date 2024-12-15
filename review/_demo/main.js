/*
### การเขียนฟังก์ชัน 2 แบบหลักๆ

1. Function Declaration / Named Function
2. Function Expression / มักถูกเขียนในรุปของ Anonymous Function

*/

/*
การใช้งานฟังก์ชันต้อง
1.ประกาศฟังก์ชัน => กำหนดชื่อ, input
2.เรียกใช้งาน
*/

//1.Define
function sayHi(name, lastName) {
    console.log(`Hello ${name}, ${lastName}`);
}

// 2-Call
sayHi('John', 'Doe')
sayHi('Pavit', 'D')

// RETURN VALUE ผลลัพธ๋ที่ได้จากการ run function จนเสร็จ
// add(5,6) == Return Valur, FN result

function add(x, y) {
    let result = x + y;

    return result;
}
let r = add(5,6); // reusable result
console.log(r);

console.log(add(5,6))// one time use'

function isEven (n){
    // if (n % 2 == 0) {
    //     return true;
    // }else {
    //     return false;
    // }

    // if (n % 2 == 0) {
    //     return true;
    // }
    // return false;
    return n % 2 == 0;
    // return(expression)
    // return 6 % 2 == 0; (true)
    // return 5 % 2 == 0; (false)
}

console.log(isEven(5));

// Checkpoint #1
// - Declare : ประกาศ
// - Params : รับ input
// - Return : เข้าใจเรื่อง Return
// -Call : รันฟังก์ชัน

// #### FN EXPRESSION
 let a = 5 * 2 + 7;
 // variable = expression
 /*
expression
-single value : 7
-combine expression : 7 + 2
-FN result : add(7,2)
 */

let myFunc = add;
let z = console.log;
// FORMAT : variable = FN(FN EXPRESSION)

console.log(myFunc(2, 5));
z('Hi');

const sayHello = function (name){
    console.log('Hi'+name);
}

sayHello('Expression');
//1. function add () {}
//2A. let add = function () {}
//2B. let add = () => {}