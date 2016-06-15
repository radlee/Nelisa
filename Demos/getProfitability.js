module.exports = function(listOfObjs){

  var getSales = require("../getSales");
  var getCosts = require("../getCosts");

  var objArray = getCosts("files/purchases.csv");
  console.log("Purchases Costs -- >")
  console.log(objArray);
  var objArray2 = getSales("files/week1.csv");
  console.log("Weekly Sales -- >")
  console.log(objArray2);

  var calculate = function(array1, array2){
    var theList = [];
    array1.forEach(function(item){
      array2.forEach(function(item2){
        if(item.Item === item2.Item){
          var profit = parseFloat(item2.Sales) - parseFloat(item.TotalCost);
          var result = {
            Item : item.Item,
            Profit : profit
          }
          theList.push(result);
        }
      })
    })
    console.log("\n< -- Profits -- >")

    var sortTheArray = function(list){
      list.sort(function(obj1, obj2){
        return obj1.Profit - obj2.Profit;
      })
    }
    sortTheArray(theList)
    console.log(theList)

  }


  calculate(objArray, objArray2);

}
