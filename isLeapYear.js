// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// }


function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
    
}

const isMyYearLeapYear = isLeapYear(1923);
console.log('my year is leap year', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(2024);
console.log('her year is leap year', isHerYearLeapYear);