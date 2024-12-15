const isLeapYear = (year) => {
    if(year % 100 == 0){
        if (year % 400 == 0) return `${year} is 400 leap years`;
        else return `${year} is not 400 leap years`;
    }else {
        if (year % 4 == 0) return `${year} is leap years`;
        else return `${year} is not leap years`;
    }
} 

const isLeapYear3 = (year) => {
    if(year % 100 === 0){
        return year % 400 === 0;
    }
    return year % 4 === 0;
}

const isLeapYear4 = year =>  year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;  
//#2
// const isLeapYear2 = (year) => {
//     if (year % 400 == 0){
//         return true;
//     } else if (year % 100 == 0){
//         return false;
//     } else if (year % 4 == 0){
//         return true;
//     }
//     return false
// } 

//#3
// if (year % 400 == 0){
//     return true;
// }
// if (year % 100 == 0){
//     return false;
// }
// if (year % 4 == 0){
//     return true;
// }

//#4
// if(year % 100 === 0){
//     return year % 400 === 0;
// }
// return year % 4 === 0;

//#5
// let isLeapYear4 = year =>  year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;  

console.log ('Case1')
console.log(isLeapYear(36));
console.log(isLeapYear(1233));
console.log(isLeapYear(1300));
console.log(isLeapYear(2000));

console.log ('Case3')
console.log(isLeapYear3(36));
console.log(isLeapYear3(1233));
console.log(isLeapYear3(1300));
console.log(isLeapYear3(2000));

console.log ('Case4')
console.log(isLeapYear4(36));
console.log(isLeapYear4(1233));
console.log(isLeapYear4(1300));
console.log(isLeapYear4(2000));