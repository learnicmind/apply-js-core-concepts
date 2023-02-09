function factorial(number){
    let result =1;
    for(let i = number; i >= 1; i--){
        result = result *1;
        console.log(i);
    }
    return result;
}
const number = 12;
const fact = factorial(number);
console.log('factorial of 20', number, fact);