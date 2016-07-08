var assert = require("assert");
var getMostPopularProduct = require("../getMostPopularProduct");
var getLeastPopularProduct = require("../getLeastPopularProduct");
var getMostPopularCategory = require("../getMostPopularCategory");
var getLeastPopularCategory = require("../getLeastPopularCategory");
var getMostProfitableCategory = require("../getMostProfitableCategory");
var getMostProfitableProduct = require("../getMostProfitableProduct");
var readAndMakeObjects = require("../readAndMakeObjects");
// var categorizePurchases = require("../categorizePurchases");

var getArrayOfItemsAndProfits = require("../getArrayOfItemsAndProfits");

var getSales = require("../getSales");
var getCosts = require("../getCosts");
// Weekly Sales and Weekly Purchases Lists Of Objects ----
var objArray1 = getSales("./files/week1.csv");
var objArray2 = getCosts("./files/purchases.csv");

//Use the two arrays, objArray1 and objArray2 that have total Sales and Costs for the Week
//in the module arrayOfProfits which will give the total profit of each item
//for the week
var arrayOfProfits = getArrayOfItemsAndProfits(objArray1, objArray2);


var listOfObjects = readAndMakeObjects("files/week1.csv", "files");

describe("\n<--| Processing Nelisa's Data |-->\n", function(){
  it("should return the Most popular product sold each week", function(){
    assert.deepEqual(getMostPopularProduct(listOfObjects), {Description: 'Most Popular Product', Item: 'Coke 500ml', Quantity: 54 } );
  });
  it("should return the Least popular product sold each week", function(){
    assert.deepEqual(getLeastPopularProduct(listOfObjects), {Description: 'Least Popular Product', Item: 'Shampoo 1 litre', Quantity: 3 });
  });
  //Category ---------------------------------------------------------------
  it("should return the Most porpular Category sold each week", function(){
    assert.deepEqual(getMostPopularCategory(listOfObjects), {Description: 'Most Popular Category', Category: 'Cool Drink', Quantity: 109 });
  });
  it("should return the Least porpular Category sold each week", function(){
    assert.deepEqual(getLeastPopularCategory(listOfObjects), {Description: 'Least Popular Category', Category: 'Gifts', Quantity: 0 });
  });
  //Profitability-----------------------------------------------------------------
  it("should return the Most Profitable Product sold each week", function(){
    assert.deepEqual(getMostProfitableProduct(objArray1, objArray2), {Description: 'Most Profitable Product',Item: 'Fanta 500ml', Profit: "R90.00" });
  });
  it("should return the Most Profitable Category sold each week", function(){
    assert.deepEqual(getMostProfitableCategory(arrayOfProfits), {Description: 'Most Profitable Category', Category: 'Beauty', Profit: "R63.00" });
  });
});
