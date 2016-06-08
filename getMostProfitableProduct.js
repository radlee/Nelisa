module.exports = function(listOfObjs){
  var totalProducts = [];
  var totalObjs = {};
  listOfObjs.forEach(function(item){
    var Item = item.Item;
    var Price = Number(item.Price.replace(/R/g, ""));
    if(totalObjs[Item] == undefined){
      totalObjs[Item] = 0;
    }
    totalObjs[Item] = totalObjs[Item] + Price;
  })
  for(var key in totalObjs){
    var result = {
      Item : key,
      Price : totalObjs[key]
    }
    totalProducts.push(result);
  }
  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.Price - obj2.Price;
    })
  }
  sortTheArray(totalProducts);
  totalProducts[totalProducts.length-1].Item
  return "The Most Profitable Product is " + totalProducts[totalProducts.length-1].Item;
}
