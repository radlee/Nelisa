module.exports = function(array1, array2){
  var theList = [];
  array1.forEach(function(item){
    array2.forEach(function(item2){
      if(item.Item === item2.Item){
        var profit = parseFloat(item.Sales) - parseFloat(item2.TotalCost);
        var result = {
          Item : item.Item,
          Profit : profit
        }
        theList.push(result);
      }
    })
  })

  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.Profit - obj2.Profit;
    });
  }
  sortTheArray(theList)
  return "The Most Profitable Product is " + theList[theList.length-1].Item
}
