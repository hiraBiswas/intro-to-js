//To see the type of variable

// var price = 10;
// console.log(typeof price);

// var price2 = '1000.56';
// console.log(typeof price2);


// var isHappy=true;
// console.log(typeof isHappy);


var num1= .1;
var num2=.2;
var sum= num1+num2;
//it will show the result .300000004
//console.log(sum);

//fix the number what i want to show after point
sum=sum.toFixed(2);
//it will show only two number after point but it is string
//console.log(sum);

//to make the vale of sum again numeric(float) 
sum=parseFloat(sum);
console.log(sum);
