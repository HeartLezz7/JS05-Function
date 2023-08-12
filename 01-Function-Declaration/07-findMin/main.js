// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

function max(a = 0, b = 0, c = 0, d = 0) {
    if (a > b && a > c && a > d){return a}
    else if (b > a && b > c && b > d){return b}
    else if (c > a && c > b && c > d){return c}
    else if (d > a && d > c && d > c){return d}
    return;
}


max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9