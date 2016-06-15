module.exports = function(file){
    var fs = require('fs');
    var data = fs.readFileSync(file, 'utf8');
    var listOfSplittedLines = data.split("\n").splice(1).filter(Boolean);
    var list =[];
    var listOfObjs = [];
    listOfSplittedLines.forEach(function(line){
      var splittedLine = line.split(",");
      list.push(splittedLine);
      var result = {
        Item : splittedLine[2],
        Sold : Number(splittedLine[3]),
        Price : parseInt(splittedLine[4].replace(/R/g, ""))
      }
      listOfObjs.push(result);
    });
  //Merge the same products, multiply and add -------
    var salesMadePerWeek = [];
    var totalObjs = {};
    listOfObjs.forEach(function(item){
      var Item = item.Item;
      var Price = item.Price;
      var totalSales = Price * item.Sold;
      if(totalObjs[Item] == undefined){
        totalObjs[Item] = 0;
      }
      totalObjs[Item] = totalObjs[Item] + totalSales;
    });
    for(var key in totalObjs){
      var result = {
        Item : key,
        Sales: totalObjs[key]
      }
      salesMadePerWeek.push(result);
    }
    var sortTheArray = function(list){
      list.sort(function(obj1, obj2){
        return obj1.Sales - obj2.Sales;
      });
    }
    sortTheArray(salesMadePerWeek)
    return salesMadePerWeek;
}
