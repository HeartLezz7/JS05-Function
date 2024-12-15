// ให้เขียนฟังก์ชันคำนวณค่า factorial

let calFac = (num) => {
    let fac = 1;
    for (let i = 1; i<=num; i++){
        fac *= i 
    }
    return fac;
}