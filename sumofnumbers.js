function sumOfNumbers(numbers) {
    let sum = 0;
    for (var i = 0; i <= numbers; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
sumOfNumbers(10);

function add(numbers){
    let sum = 0;
    for(var i = 0; i <= numbers; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
add(23);