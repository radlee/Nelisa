var assert = require("assert");
var getMostPopularProduct = require("../getMostPopularProduct");
var getLeastPopularProduct = require("../getLeastPopularProduct");
var readAndMakeObjects = require("../readAndMakeObjects");

var listOfObjects = readAndMakeObjects("files/week1.csv");


describe("\nProcessing Nelisa's Data -- |\n", function(){
  it("should return the Most popular product sold each week", function(){
    assert.equal(getMostPopularProduct(listOfObjects), "Most Popular Product is Coke 500ml" );
  });
  it("should return the Least popular product sold each week", function(){
    assert.equal(getLeastPopularProduct(listOfObjects), "Least Popular Product is Shampoo 1 litre" );
  });
});
