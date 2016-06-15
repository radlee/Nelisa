var readAndMakeObject = function(file){
  var fs = require('fs');
  var data = fs.readFileSync(file, 'utf8');
  var listOfSplittedLines = data.split("\n").splice(1).filter(Boolean);
  var list =[];
  var listOfObjs = [];
  listOfSplittedLines.forEach(function(line){
    var splittedLine = line.split(";");
    list.push(splittedLine);
    var quantity = splittedLine[3];
    var costPerItem  = splittedLine[4].replace(/R/g, "");
    var totalCost = splittedLine[5].replace(/R/g, "");
    var costPerItem  = costPerItem.replace(",", ".");
    var totalCost = totalCost.replace(",", ".");
    var result = {
      Shop : splittedLine[0],
      Date : splittedLine[1],
      Item : splittedLine[2],
      Quantity : quantity,
      CostPerItem : costPerItem,
      TotalCost : totalCost
    }
    listOfObjs.push(result);
  })
  var objArray = listOfObjs;
  return listOfObjs;
}
var objArray = readAndMakeObject("../files/purchases.csv");

var makePurchasesTotalCosts = function(objects){
  var weekl1Purchases = [];
  var weekl2Purchases = [];
  var weekl3Purchases = [];
  var weekl4Purchases = [];
  var week0 =new Date('31-Jan');
  var week1 =new Date('7-Feb');
  var week2 =new Date('14-Feb');
  var week3 =new Date('21-Feb');
  var week4 =new Date('1-Mar');
  objects.forEach(function(item){
      if(new Date(item.Date) < week1 && new Date(item.Date) >week0){
        var result ={
          Item : item.Item,
          TotalCost : parseFloat(item.TotalCost)
        }
        weekl1Purchases.push(result)
      }
      if(new Date(item.Date) < week2 && new Date(item.Date) >= week1){
        var result ={
          Item : item.Item,
          TotalCost : parseFloat(item.TotalCost)
        }
        weekl2Purchases.push(result)
      }
      if(new Date(item.Date) < week3 && new Date(item.Date) >= week2){
        var result ={
          Item : item.Item,
          TotalCost : parseFloat(item.TotalCost)
        }
        weekl3Purchases.push(result)
      }
      if(new Date(item.Date) >= week3){
        var result ={
          Item : item.Item,
          TotalCost : parseFloat(item.TotalCost)
        }
        weekl4Purchases.push(result)
      }
  })
  // console.log("\nWeekly Purchases Week1\n");
  // console.log(weekl1Purchases);
  //Merge same Item names, Add totals and Sort the Array ---
  var totalSales = [];
  var totalSalesObjs = {};
  weekl1Purchases.forEach(function(item){
    var Item = item.Item;
    var Price = item.TotalCost;
    if(totalSalesObjs[Item] == undefined){
      totalSalesObjs[Item] = 0;
    }
    totalSalesObjs[Item] = totalSalesObjs[Item] + Price;
  })
  for(var key in totalSalesObjs){
    var result = {
      Item : key,
      TotalCost : totalSalesObjs[key]
    }
    totalSales.push(result);
  }
  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.TotalCost - obj2.TotalCost;
    })
  }
  sortTheArray(totalSales)

  console.log("\nTotal Costs in Week 1 -- > [CORRECT SUMS OF COSTS FOR WEEK1]\n")
  console.log(totalSales)
}

var purchasesCosts =  makePurchasesTotalCosts(objArray);
