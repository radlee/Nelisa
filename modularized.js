
var readAndMakeObject = function(file){
  var fs = require('fs');
  var data = fs.readFileSync(file, 'utf8');
  var listOfSplittedLines = data.split("\n").splice(1).filter(Boolean);
  var list =[];
  var listOfObjs = [];
  listOfSplittedLines.forEach(function(line){
    var splittedLine = line.split(",");
    list.push(splittedLine);
    var result = {
      Day : splittedLine[0],
      Date : splittedLine[1],
      Item : splittedLine[2],
      NumberSold : Number(splittedLine[3]),
      Price : splittedLine[4]
    }
    listOfObjs.push(result);
  })
  return listOfObjs;
}
var objArray = readAndMakeObject("files/week2.csv");

//Combine all same Items and make total items sold that week--------------

var getMostSellingProduct = function (listOfObjs){
  var totalProducts = [];
  var totalObjs = {};
  listOfObjs.forEach(function(item){
    var Item = item.Item;
    var number = item.NumberSold;
    if(totalObjs[Item] == undefined){
      totalObjs[Item] = 0;
    }
    totalObjs[Item] = totalObjs[Item] + number;
  })
  for(var key in totalObjs){
    var result = {
      Item : key,
      NumberSold : totalObjs[key]
    }
    totalProducts.push(result);
  }
  //Sort the list of all items sold in a week form small to big----------------
    var sortTheArray = function(list){
      list.sort(function(obj1, obj2){
        return obj1.NumberSold - obj2.NumberSold;
      })
    }
    sortTheArray(totalProducts)
    console.log(totalProducts);
    console.log("\n-------------------------------------------")
    console.log( " Least Popular Product is " + totalProducts[0].Item)
    console.log("-------------------------------------------")
    console.log("\n--------------------------------------------")
    console.log( " Most Popular Product is " + totalProducts[totalProducts.length-1].Item)
    console.log("-------------------------------------------")
}

getMostSellingProduct(objArray);


// console.log(obj.Price.replace(/R/g, ""));
