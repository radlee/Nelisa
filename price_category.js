
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
      Item : splittedLine[2],
      Sold : Number(splittedLine[3]),
      Price : parseInt(splittedLine[4].replace(/R/g, ""))
    }
    listOfObjs.push(result);
  });
  return listOfObjs;
}
var objArray = readAndMakeObject("files/week2.csv");

//Merge the same products, multiply and add -------

var getMostSellingProduct = function (listOfObjs){
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

var listOfItems = getMostSellingProduct(objArray);

console.log(listOfItems);
//
// console.log(listOfTotalCosts);
//



//Categorizing -----------------
//
// var categories = [];
// var totalFruits = 0;
// var totalCandy =0;
// var totalCoolDrinks =0;
// var totalDairy =0;
// var totalCanned =0;
// var totalGifts =0;
// var totalFood =0;
// var totalBakery =0;
// var totalBeauty =0;
// //Categorizing--------------------
// listOfItems.forEach(function(item){
//   if(item.Item == "Bananas - loose"){
//     totalFruits += item.Price;
//   }
//   if(item.Item == "Apples - loose"){
//     totalFruits += item.Price;
//   }
//   if(item.Item == "Mixed Sweets 5s"){
//     totalCandy += item.Price;
//   }
//   if(item.Item == "Heart Chocolates"){
//     totalCandy += item.Price;
//   }
//   if(item.Item == "Coke 500ml"){
//     totalCoolDrinks += item.Price;
//   }
//   if(item.Item == "Fanta 500ml"){
//     totalCoolDrinks += item.Price;
//   }
//   if(item.Item == "Cream Soda 500ml"){
//     totalCoolDrinks += item.Price;
//   }
//   if(item.Item == "Imasi"){
//     totalDairy += item.Price;
//   }
//   if(item.Item == "Milk 1l"){
//     totalDairy += item.Price;
//   }
//   if(item.Item == "Gold Dish Vegetable Curry Can"){
//     totalCanned += item.Price;
//   }
//   if(item.Item == "Chakalaka Can"){
//     totalCanned += item.Price;
//   }
//   if(item.Item == "Valentine Cards"){
//     totalGifts += item.Price;
//   }
//   if(item.Item == "Rose (plastic)"){
//     totalGifts += item.Price;
//   }
//   if(item.Item == "Iwisa Pap 5kg"){
//     totalFood += item.Price;
//   }
//   if(item.Item == "Top Class Soy Mince"){
//     totalFood += item.Price;
//   }
//   if(item.Item == "Bread"){
//     totalBakery += item.Price;
//   }
//   if(item.Item == "Soap Bar"){
//     totalBeauty += item.Price;
//   }
//   if(item.Item == "Shampoo 1 litre"){
//     totalBeauty += item.Price;
//   }
// })
// // console.log("\n Categories --- ");
// var fuit = {Category : "Fruit", Price : totalFruits};
// categories.push(fuit);
// var candy = {Category : "Candy", Price : totalCandy}
// categories.push(candy);
// var drink = {Category : "CoolDrink", Price : totalCoolDrinks}
// categories.push(drink);
// var dairy = {Category : "Dairy", Price : totalDairy}
// categories.push(dairy);
// var can = {Category : "Canned", Price : totalCanned}
// categories.push(can);
// var gift = {Category : "Gifts", Price : totalGifts}
// categories.push(gift);
// var food = {Category : "Food", Price : totalFood}
// categories.push(food);
// var bakery = {Category : "Bakery", Price : totalBakery}
// categories.push(bakery);
// var beauty = {Category : "Beauty", Price : totalBeauty}
// categories.push(beauty);
//
// var sortTheArray = function(list){
//   list.sort(function(obj1, obj2){
//     return obj1.Sold - obj2.Sold;
//   })
// }
// sortTheArray(categories)
// console.log(categories)
//
// console.log("The Most porpular Category is " + categories[categories.length-1].Category);
// console.log("The Least porpular Category is " + categories[0].Category);
