console.log("anonymous");

//#1 : Named fn,FN declaration
// function add () {}



//#2 : Anonymous

(function(x, y) {
    console.log(x+y);
})(10, 7);

//VARIABLE = EXPRESSION
let myVar = ((5*2*20) / 2) % 7;

// VARIABLE = FN (FN == EXPRESSION)
// const myFunc = function (x, y) {return x + y;};
// const a = console.log;
// a('hi')

//ARROW FUNCTION

// A: Shortest
// let a = x => x + 2;
// let b =(x, y) => x + y;

// // B: Bracket ต้องใส่returnเสทอ
// let c = (x, y) => {
//     let result = x + y;
//     return result;
// }

