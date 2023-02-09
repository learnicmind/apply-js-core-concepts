function mileToKilo(miles){
    const kilometer = miles*1.609;
    return kilometer;
}
const mile = 2;
const totalKilo = mileToKilo(mile);

console.log('1 kilo means:', totalKilo);