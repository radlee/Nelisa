
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
    console.log(totalProducts);
    console.log("\n-------------------------------------------")
    console.log( " Least Popular Product is " + totalProducts[0].Item)
    console.log("-------------------------------------------")
    console.log("\n--------------------------------------------")
    console.log( " Most Popular Product is " + totalProducts[totalProducts.length-1].Item)
    console.log("-------------------------------------------")
