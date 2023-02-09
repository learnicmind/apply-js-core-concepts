function isEven(number){
    const remainder = number % 2;
    console.log(remainder);
}
isEven(53);

function isOdd(number1){
    const remainder = number1 % 2;
    if (remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven = isOdd(32);
console.log(myNumberIsEven);

const herNumberIsEven = isOdd(33);
console.log(herNumberIsEven);




