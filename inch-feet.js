// const myInches = 67;
// const myFeet = myInches / 12;
// console.log('my height:', myFeet);


function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 120;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);