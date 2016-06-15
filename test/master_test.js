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


var listOfObjects = readAndMakeObjects("files/week1.csv");

describe("\nProcessing Nelisa's Data -- |\n", function(){
  it("should return the Most popular product sold each week", function(){
    assert.equal(getMostPopularProduct(listOfObjects), "Most Popular Product is Coke 500ml" );
  });
  it("should return the Least popular product sold each week", function(){
    assert.equal(getLeastPopularProduct(listOfObjects), "Least Popular Product is Shampoo 1 litre" );
  });
  //Category ---------------------------------------------------------------
  it("should return the Most porpular Category sold each week", function(){
    assert.equal(getMostPopularCategory(listOfObjects), "The Most porpular Category is CoolDrink");
  });
  it("should return the Least porpular Category sold each week", function(){
    assert.equal(getLeastPopularCategory(listOfObjects), "The Least porpular Category is Gifts");
  });
  //Profitability-----------------------------------------------------------------
  it("should return the Most Profitable Product sold each week", function(){
    assert.equal(getMostProfitableProduct(objArray1, objArray2), "The Most Profitable Product is Iwisa Pap 5kg");
  });
  it("should return the Most Profitable Category sold each week", function(){
    assert.equal(getMostProfitableCategory(arrayOfProfits), "The Most Profitable Category is Food");
  });
});
