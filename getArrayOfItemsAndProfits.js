module.exports = function(array1, array2){
  var theList = [];
  array1.forEach(function(object1){
    array2.forEach(function(object2){
      if(object1.Item === object2.Item){
        var profit = parseFloat(object1.Sales) - parseFloat(object2.TotalCost);
        var result = {
          Item : object1.Item,
          Profit : profit
        }
        theList.push(result);
      }
    })
  })

  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.Profit - obj2.Profit;
    })
  }
  sortTheArray(theList)
  return theList;
}
