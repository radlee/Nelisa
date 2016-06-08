
var readAndMakeObject = function(file){
  var fs = require('fs');
  var data = fs.readFileSync(file, 'utf8');
  var listOfSplittedLines = data.split("\n").splice(1).filter(Boolean);
  var list =[];
  var listOfObjs = [];
  listOfSplittedLines.forEach(function(line){
    var splittedLine = line.split(";");
    list.push(splittedLine);

    var qua = splittedLine[3];
    var cost  = splittedLine[4].replace(/R/g, "");
    var total = splittedLine[5].replace(/R/g, "");

    var result = {
      Shop : splittedLine[0],
      Date : splittedLine[1],
      Item : splittedLine[2],
      Quantity : parseInt(qua),
      Cost : parseInt(cost),
      TotalCost : parseInt(total)
    }
    listOfObjs.push(result);
  })
  // console.log(listOfObjs);
  return listOfObjs;
}
var objArray = readAndMakeObject("files/purchases.csv");

var totalProducts = [];
var totalObjs = {};
objArray.forEach(function(item){
  var Item = item.Item;
  var TotalCost  = item.TotalCost;
  if(totalObjs[Item] == undefined){
    totalObjs[Item] = 0;
  }
  totalObjs[Item] = totalObjs[Item] + TotalCost;
})
for(var key in totalObjs){
  var result = {
    Item : key,
    TotalCost : totalObjs[key]
  }
  totalProducts.push(result);
}
var sortTheArray = function(list){
  list.sort(function(obj1, obj2){
    return obj1.TotalCost - obj2.TotalCost;
  })
}
sortTheArray(totalProducts)
console.log(totalProducts);
console.log("\nMost Profitable Product is " + totalProducts[totalProducts.length-1].Item);
