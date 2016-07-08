var express = require('express');
var fs = require("fs");
var exphbs = require("express-handlebars");
var handlebars = require('handlebars');
var app = express();

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


var weeklyStats = function(weekPath, purchasesPath){
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

  return [mostPopularProduct, leastPopularProduct, mostPopularCategory, leastPopularCategory, mostProfitableProduct, mostProfitableCategory];
}

var dataWeek1 = weeklyStats("../files/week1.csv","../files/purchases.csv")
var dataWeek2 = weeklyStats("../files/week2.csv","../files/purchases.csv")
var dataWeek3 = weeklyStats("../files/week3.csv","../files/purchases.csv")
var dataWeek4 = weeklyStats("../files/week4.csv","../files/purchases.csv")

var weekstats = {
  week1: dataWeek1,
  week2: dataWeek2,
  week3: dataWeek3,
  week4: dataWeek4
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// create a route
app.get('/', function(req, res){
    res.render( "home")
});
app.get('/sales/:week_name', function(req, res){
  var weekname = req.params.week_name;
    res.render( "weeklyStats", {key: weekstats[weekname] });
});

//start the server
var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('App listening at http://%s:%s', host, port);
});
