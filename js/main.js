/****************************************************************************************************************
Question 1: Show me how to calculate the average price of all items. Please console.log the average. The average price is $23.62

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

// filter through item list
// look at item price
// use a condition to get price of item between 2 values
// spit out the items that match the condition

var selectedCost = items.filter(function(x) {
  return x.price >=14.00 && x.price <=18.00;

});

console.log("Items that cost between $14.00 USD and $18.00 USD:");
console.log(selectedCost);


/****************************************************************************************************************
Question 3: Show me how to find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

*****************************************************************************************************************/

// filter through item list
// look at currency code
// use a condition to match GBP currency code for items
// return matching item(s) but only display item name and price

var currencyGBP = items.filter(function(x) {
    return x.currency_code === "GBP";
});

var itemGBP = currencyGBP.map(function(y) {
  return y.title + " $" + y.price;
});

console.log(itemGBP);


/****************************************************************************************************************
Question 4: Show me how to find which items are made of wood. Please console.log the ones you find.

*****************************************************************************************************************/

// search list of items
// within list of items, specifically search through materials property
// use a condition to see if item material propery has a value of wood
// return items that are made of wood and display item names

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

// filter through item list
// look at materials array length
// use a condition to cheeck if material array length is qual or greater than 8 for each item
// return items that match this condition

var material_num = items.filter(function(a) {
  return a.materials.length >= 8;
  });

console.log(material_num);


/****************************************************************************************************************
Question 6: Show me how to calculate how many items were made by their sellers

*****************************************************************************************************************/

// filter through item list
// look at who_made property
// add condition to see if who_made property has a value of i_did
// return items that match the condition
// spit out the number of items not what the items are

var sellerMade = items.filter(function(x) {
    return x.who_made === "i_did";
});

console.log(sellerMade.length + " were made by their sellers");
