module.exports = function (listOfObjs){
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
  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.NumberSold - obj2.NumberSold;
    })
  }
  sortTheArray(totalProducts)
  return "Least Popular Product is " + totalProducts[0].Item;
}
