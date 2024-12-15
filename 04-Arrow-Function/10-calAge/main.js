// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

const isLeapYear = (leapYear) => {
    if(leapYear % 100 === 0){
        if(leapYear % 400 === 0){return 29;}
        else {return 28;}
    } else if (leapYear % 4 === 0) {return 29;}
    else return 28;
}

let calAge = (birthYear, thisYear) => {
    let sum = 0;
    for (let i = birthYear; i <= thisYear ; i++) {
        for (let j = 1;  j <= 7; j++) {
            sum += 31
        }
        for (let j = 1;  j <= 4; j++) {
            sum += 30
        }
        sum += isLeapYear(i);
    }
    return sum
}
