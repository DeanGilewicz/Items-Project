/****************************************************************************************************************
Show me how to calculate the average price of all items.

Please console.log the average. The average price is $23.62

*****************************************************************************************************************/

// create an array to store list of prices of each item
var priceArray = [];

// call a function to store price of each item from item list into my array
var priceList = items.forEach (function(x) {
  priceArray.push(x.price);
});

// total the prices of each item that are in my array and store in a diferent variable
var total = priceArray.reduce(function(a, b) {
  return a + b;
});

// divide the total price by the number of items in my array
var avg = total / priceArray.length;

// convert the output to only show to 2 decimal places
console.log("The average price is $" + avg.toFixed(2));

/****************************************************************************************************************
Show me how to calculate the average price of all items.

Please console.log the average. The average price is $23.62

*****************************************************************************************************************/
