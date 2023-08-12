{ 
// GLOBAL - SCOPE เกี่ยวกับการเข้าถึงตัวแปร 

// console.log("scope");

// let msg = 'Hi';
    
// function sayHi () {
//     // FUNCTION SCOPE
//     let msg = 'Hello';
//     console.log(`## ${msg}`);        
// }

// sayHi()

// console.log(msg);

//variable : message = identifier
//rule of identifier 
//  1.ในscopeเดียวกันห้ามใช้ variable ซ้ำกัน

let message = 'h'; //globalvariableเป็นส่วนกลางใครเอาไปใช้ก็ได้
// let message = 'a';

//เหตุผลที่เลิกการใช้ var เพราะไม่มืrule of identifier เลยสามารถตั้งvariableซ้ำได้จึงมีโอกาสเกิดbugได้ง่ายในกรณีที่โปรแกรมซับซ้อนมากขึ้น
//varจะเชื่อฟังfunction
var myVar = 5;
var myVar = 10;


//function : sayHi = identifier
function sayHi(m) {
    let message = 'a';//ถือเป็น localscope จะใช้variableนี้ได้แค่ในscopeของมันเท่านั้นหรือก็คือใช้ได้แค่ในfunction
    console.log(m);
}

}