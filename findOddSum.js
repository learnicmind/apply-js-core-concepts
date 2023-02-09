function getSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


function getOddNumbersOfAnArray(numbers){
    const oddNumber = [];
    for(let i =0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}


const myNumbers = [23,34,45,23,78,98,47,89];
const oddNumber = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumber);
const oddNumberSum = getSum(oddNumber);
console.log('odd number sum', oddNumberSum);