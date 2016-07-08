var express = require('express');
var fs = require("fs");
var exphbs = require("express-handlebars");
var handlebars = require('handlebars');
var app = express();


var weeklyStats = function(weekPath, purchasesPath){
  var readAndMakeObjects = require("../readAndMakeObjects");
  var getMostPopularProduct = require("../getMostPopularProduct");
  var getLeastPopularProduct = require("../getLeastPopularProduct");
  var getMostPopularCategory = require("../getMostPopularCategory");
  var getLeastPopularCategory = require("../getLeastPopularCategory");
  var getMostProfitableCategory = require("../getMostProfitableCategory");
  var getMostProfitableProduct = require("../getMostProfitableProduct");
  var getArrayOfItemsAndProfits = require("../getArrayOfItemsAndProfits");
  var getSales = require("../getSales");
  var getCosts = require("../getCosts");

  var listOfObjects = readAndMakeObjects(weekPath);

  // Weekly Sales and Weekly Purchases Lists Of Objects ----
  var objArray1 = getSales(weekPath);
  var objArray2 = getCosts(purchasesPath);

  var arrayOfProfits = getArrayOfItemsAndProfits(objArray1, objArray2);
  var mostPopularCategory = getMostPopularCategory(listOfObjects);
  var mostPopularProduct = getMostPopularProduct(listOfObjects);
  var leastPopularProduct = getLeastPopularProduct(listOfObjects);
  var leastPopularCategory = getLeastPopularCategory(listOfObjects);
  var mostProfitableProduct = getMostProfitableProduct(objArray1, objArray2);
  var mostProfitableCategory = getMostProfitableCategory(arrayOfProfits);

}

var data = weeklyStats("../files/week1.csv","../files/purchases.csv")

data = { key : [mostPopularProduct, leastPopularProduct, mostPopularCategory, leastPopularCategory, mostProfitableProduct, mostProfitableCategory]};
var dataWeek2 = { key : [mostPopularProductWeek2, leastPopularProductWeek2, mostPopularCategoryWeek2, leastPopularCategoryWeek2, mostProfitableProductWeek2, mostProfitableCategoryWeek2]};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// create a route
app.get('/', function(req, res){
    res.render( "home",data)
});
app.get('/week1', function(req, res){
    res.render( "week1", data)
});
app.get('/week2', function(req, res){
    res.render( "week2", dataWeek2)
});
//start the server
var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('App listening at http://%s:%s', host, port);
});
