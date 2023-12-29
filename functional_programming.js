/*FUNCTIONAL PROGRAMMING 
(Data exists outside of functions, and functions only work on that data.)*/

var currencyOne=100;
var currencyTwo=0;
var exchangeRate=1.2;

function convertCurrency(amount,rate)
{
    return amount*rate;
}

currencyTwo=convertCurrency(currencyOne,exchangeRate);

console.log(currencyTwo);
