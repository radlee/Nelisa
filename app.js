var handlebars = require('handlebars');
var fs = require("fs");
var readAndMakeObjects = require("./readAndMakeObjects");
var listOfObjects = readAndMakeObjects("files/week3.csv", "files");
var getMostPopularProduct = require("./getMostPopularProduct");
var getLeastPopularProduct = require("./getLeastPopularProduct");
var getMostPopularCategory = require("./getMostPopularCategory");
var getLeastPopularCategory = require("./getLeastPopularCategory");
var getMostProfitableCategory = require("./getMostProfitableCategory");
var getMostProfitableProduct = require("./getMostProfitableProduct");
var getArrayOfItemsAndProfits = require("./getArrayOfItemsAndProfits");

var getSales = require("./getSales");
var getCosts = require("./getCosts");
// Weekly Sales and Weekly Purchases Lists Of Objects ----
var objArray1 = getSales("./files/week3.csv");
var objArray2 = getCosts("./files/purchases.csv");
var arrayOfProfits = getArrayOfItemsAndProfits(objArray1, objArray2);

var mostPopularCategory = getMostPopularCategory(listOfObjects);
var mostPopularProduct = getMostPopularProduct(listOfObjects);
var leastPopularProduct = getLeastPopularProduct(listOfObjects);
var leastPopularCategory = getLeastPopularCategory(listOfObjects);
var mostProfitableProduct = getMostProfitableProduct(objArray1, objArray2);
var mostProfitableCategory = getMostProfitableCategory(arrayOfProfits);

var source = fs.readFileSync('./bootstrap.hbs', "utf8");

var template = handlebars.compile(source);
var data = { key : [mostPopularProduct, leastPopularProduct, mostPopularCategory, leastPopularCategory, mostProfitableProduct, mostProfitableCategory]};

fs.writeFileSync('index.html', template(data));
