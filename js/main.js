//array.map(), array.reduce(), array.forEach, array.filter()


/****************************************************************************************************************
Question 1: Show me how to calculate the average price of all items.

Please console.log the average. The average price is $23.62

*****************************************************************************************************************/

// create an array to store list of prices of each item
var priceArray = [];

// call a function to store price of each item from item list into my array
var priceList = items.forEach(function(x) {
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
Question 3: Show me how to find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

*****************************************************************************************************************/

// go through item list and search for items matching a GBP currency code. Return matching item(s).
var currencyGBP = items.filter(function(x) {
    return x.currency_code === "GBP";
});

// spit out only the name of item and the price
var itemGBP = currencyGBP.map(function(y) {
  return y.title + " $" + y.price;
});

console.log(itemGBP);


/****************************************************************************************************************
Question 4: Show me how to find which items are made of wood. Please console.log the ones you find.

*****************************************************************************************************************/

// search list of items
// within that list of items, specifically search for materials
// when searching each materials property, need items that match wood
// return items that are made of wood and store in a variable
// console.log variable

items.forEach(function(a) {
  a.materials.forEach(function(b){
    if (b === "wood") {
      console.log(a.title);
    };
  });
});


/****************************************************************************************************************
Question 5: Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

*****************************************************************************************************************/










/****************************************************************************************************************
Question 6: Show me how to calculate how many items were made by their sellers

*****************************************************************************************************************/
