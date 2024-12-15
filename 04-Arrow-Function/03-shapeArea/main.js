const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // *undefined เพราะใน arrow function ถ้ามี{}ต้องใส่ returnด้วยเสมอ

  const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **10.26