function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * ไม่ทำการเพราะการเรียกใช้function ต้องใส่()ด้วย
console.log(sayHi(10)); // **มีการ alert เพราะมีfunction มีการเรียกใช้งานและผ่านเงื่อนไขของ if แต่จะlogค่าออกมาได้จะเป็นundefindedเพราะไม่มีการreturnค่าออกมา