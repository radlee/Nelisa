var assert = require("assert");
var getMostPopularProduct = require("../getMostPopularProduct");
var getLeastPopularProduct = require("../getLeastPopularProduct");
var getMostPopularCategory = require("../getMostPopularCategory");
var getLeastPopularCategory = require("../getLeastPopularCategory");
var getMostProfitableCategory = require("../getMostProfitableCategory");
var getMostProfitableProduct = require("../getMostProfitableProduct");
var readAndMakeObjects = require("../readAndMakeObjects");

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
    assert.equal(getMostProfitableProduct(listOfObjects), "The Most Profitable Product is Shampoo 1 litre");
  });
  it("should return the Most Profitable Category sold each week", function(){
    assert.equal(getMostProfitableCategory(listOfObjects), "The Most Profitable Category is Food");
  });
});
