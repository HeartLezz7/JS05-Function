let x = 1;
function func() {
  console.log(x); // * ไม่ได้เพราะไม่มีการรับค่าparameterเข้ามาโปรแกรมเลยไม่สามารถหาค่าXเจอได้
  let x = 2;
}
func();