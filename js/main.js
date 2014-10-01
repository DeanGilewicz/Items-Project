//array.map(), array.reduce(), array.forEach, array.filter()


/****************************************************************************************************************
Question 1: Show me how to calculate the average price of all items.

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
Question 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

*****************************************************************************************************************/

// use a function that allows to select specific range and return items matching that condition
var selectedCost = items.filter(function(x) {
  return x.price >=14.00 && x.price <=18.00;

});

console.log("Items that cost between $14.00 USD and $18.00 USD:");
console.log(selectedCost);


/****************************************************************************************************************
Question 3: Show me how find the item with a "GBP" currency code and print its name and price.

*****************************************************************************************************************/

// go through item list
// search "GBP" currency mode
// return matching item
// show name and price
