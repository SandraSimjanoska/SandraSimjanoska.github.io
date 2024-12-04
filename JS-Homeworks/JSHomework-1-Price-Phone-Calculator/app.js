//Homework exersice: Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

let phonePrice = 119.95;
// to declare the variable tax we need to covert the 5% to decimal, because JavaScript would interpret 5 as a number;
let tax = 5 / 100;
// 5/100=0.05;
let numberOfPhones = 30;

let totalPriceOfThePhonesBeforeTax = phonePrice * numberOfPhones;
let totalTax = totalPriceOfThePhonesBeforeTax * tax;
let priceOfThePhonesWithTax = totalPriceOfThePhonesBeforeTax + totalTax;

console.log("This is the price of the phones with tax:");
console.log(priceOfThePhonesWithTax);
