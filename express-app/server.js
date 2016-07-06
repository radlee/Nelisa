var express = require('express');
var fs = require("fs");
var app = express();
var exphbs = require("express-handlebars");
var handlebars = require('handlebars');
var readAndMakeObjects = require("../readAndMakeObjects");
var listOfObjects = readAndMakeObjects("../files/week1.csv");
var getMostPopularProduct = require("../getMostPopularProduct");
var getLeastPopularProduct = require("../getLeastPopularProduct");
var getMostPopularCategory = require("../getMostPopularCategory");
var getLeastPopularCategory = require("../getLeastPopularCategory");
var getMostProfitableCategory = require("../getMostProfitableCategory");
var getMostProfitableProduct = require("../getMostProfitableProduct");
var getArrayOfItemsAndProfits = require("../getArrayOfItemsAndProfits");
var getSales = require("../getSales");
var getCosts = require("../getCosts");
// Weekly Sales and Weekly Purchases Lists Of Objects ----
var objArray1 = getSales("../files/week1.csv");
var objArray2 = getCosts("../files/purchases.csv");

var arrayOfProfits = getArrayOfItemsAndProfits(objArray1, objArray2);
var mostPopularCategory = getMostPopularCategory(listOfObjects);
var mostPopularProduct = getMostPopularProduct(listOfObjects);
var leastPopularProduct = getLeastPopularProduct(listOfObjects);
var leastPopularCategory = getLeastPopularCategory(listOfObjects);
var mostProfitableProduct = getMostProfitableProduct(objArray1, objArray2);
var mostProfitableCategory = getMostProfitableCategory(arrayOfProfits);
var data = { key : [mostPopularProduct, leastPopularProduct, mostPopularCategory, leastPopularCategory, mostProfitableProduct, mostProfitableCategory]};
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// create a route
app.get('/sales/week1', function(req, res){
    res.render("home", data)
});
//start the server
var server = app.listen(3000, function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('Example app listening at http://%s:%s', host, port);
});
