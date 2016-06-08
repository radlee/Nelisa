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
  });
  console.log(listOfObjs);
  return listOfObjs;
}
var objArray = readAndMakeObject("files/week2.csv");

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
  });
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
    });
  }
  sortTheArray(totalProducts)
  console.log(totalProducts);
  return totalProducts;
}

var listOfItems = getMostSellingProduct(objArray);

console.log("Start HERE");
console.log(listOfItems);

var categories = [];
var totalFruits = 0;
var totalCandy =0;
var totalCoolDrinks =0;
var totalDairy =0;
var totalCanned =0;
var totalGifts =0;
var totalFood =0;
var totalBakery =0;
var totalBeauty =0;
//Categorizing--------------------
listOfItems.forEach(function(item){
  if(item.Item == "Bananas - loose"){
    totalFruits += item.NumberSold
  }
  if(item.Item == "Apples - loose"){
    totalFruits += item.NumberSold
  }
  if(item.Item == "Mixed Sweets 5s"){
    totalCandy += item.NumberSold
  }
  if(item.Item == "Heart Chocolates"){
    totalCandy += item.NumberSold
  }
  if(item.Item == "Coke 500ml"){
    totalCoolDrinks += item.NumberSold
  }
  if(item.Item == "Fanta 500ml"){
    totalCoolDrinks += item.NumberSold
  }
  if(item.Item == "Cream Soda 500ml"){
    totalCoolDrinks += item.NumberSold
  }
  if(item.Item == "Imasi"){
    totalDairy += item.NumberSold
  }
  if(item.Item == "Milk 1l"){
    totalDairy += item.NumberSold
  }
  if(item.Item == "Gold Dish Vegetable Curry Can"){
    totalCanned += item.NumberSold
  }
  if(item.Item == "Chakalaka Can"){
    totalCanned += item.NumberSold
  }
  if(item.Item == "Valentine Cards"){
    totalGifts += item.NumberSold
  }
  if(item.Item == "Rose (plastic)"){
    totalGifts += item.NumberSold
  }
  if(item.Item == "Iwisa Pap 5kg"){
    totalFood += item.NumberSold
  }
  if(item.Item == "Top Class Soy Mince"){
    totalFood += item.NumberSold
  }
  if(item.Item == "Bread"){
    totalBakery += item.NumberSold
  }
  if(item.Item == "Soap Bar"){
    totalBeauty += item.NumberSold
  }
  if(item.Item == "Shampoo 1 litre"){
    totalBeauty += item.NumberSold
  }
})
console.log("\n Categories --- ");
var fuit = {Category : "Fruit", NumberSold : totalFruits};
categories.push(fuit);
var candy = {Category : "Candy", NumberSold : totalCandy}
categories.push(candy);
var drink = {Category : "CoolDrink", NumberSold : totalCoolDrinks}
categories.push(drink);
var dairy = {Category : "Dairy", NumberSold : totalDairy}
categories.push(dairy);
var can = {Category : "Canned", NumberSold : totalCanned}
categories.push(can);
var gift = {Category : "Gifts", NumberSold : totalGifts}
categories.push(gift);
var food = {Category : "Food", NumberSold : totalFood}
categories.push(food);
var bakery = {Category : "Bakery", NumberSold : totalBakery}
categories.push(bakery);
var beauty = {Category : "Beauty", NumberSold : totalBeauty}
categories.push(beauty);

var sortTheArray = function(list){
  list.sort(function(obj1, obj2){
    return obj1.NumberSold - obj2.NumberSold;
  })
}
sortTheArray(categories)
console.log(categories)

console.log("The Most porpular Category is " + categories[categories.length-1].Category);
console.log("The Least porpular Category is " + categories[0].Category);
