module.exports = function(theList){
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
  //Categorizing-------------------------
  theList.forEach(function(item){
    if(item.Item == "Bananas - loose"){
      totalFruits += item.Profit
    }
    if(item.Item == "Apples - loose"){
      totalFruits += item.Profit
    }
    if(item.Item == "Mixed Sweets 5s"){
      totalCandy += item.Profit
    }
    if(item.Item == "Heart Chocolates"){
      totalCandy += item.Profit
    }
    if(item.Item == "Coke 500ml"){
      totalCoolDrinks += item.Profit
    }
    if(item.Item == "Fanta 500ml"){
      totalCoolDrinks += item.Profit
    }
    if(item.Item == "Cream Soda 500ml"){
      totalCoolDrinks += item.Profit
    }
    if(item.Item == "Amasi"){
      totalDairy += item.Profit
    }
    if(item.Item == "Milk 1l"){
      totalDairy += item.Profit
    }
    if(item.Item == "Gold Dish Vegetable Curry Can"){
      totalCanned += item.Profit
    }
    if(item.Item == "Chakalaka Can"){
      totalCanned += item.Profit
    }
    if(item.Item == "Valentine Cards"){
      totalGifts += item.Profit
    }
    if(item.Item == "Rose (plastic)"){
      totalGifts += item.Profit
    }
    if(item.Item == "Iwisa Pap 5kg"){
      totalFood += item.Profit
    }
    if(item.Item == "Top Class Soy Mince"){
      totalFood += item.Profit
    }
    if(item.Item == "Bread"){
      totalBakery += item.Profit
    }
    if(item.Item == "Soap Bar"){
      totalBeauty += item.Profit
    }
    if(item.Item == "Shampoo 1 litre"){
      totalBeauty += item.Profit
    }
  });

  var fuit = {Category : "Fruit", Profit : totalFruits};
  categories.push(fuit);
  var candy = {Category : "Candy", Profit : totalCandy}
  categories.push(candy);
  var drink = {Category : "CoolDrink", Profit : totalCoolDrinks}
  categories.push(drink);
  var dairy = {Category : "Dairy", Profit : totalDairy}
  categories.push(dairy);
  var can = {Category : "Canned", Profit : totalCanned}
  categories.push(can);
  var gift = {Category : "Gifts", Profit : totalGifts}
  categories.push(gift);
  var food = {Category : "Food", Profit : totalFood}
  categories.push(food);
  var bakery = {Category : "Bakery", Profit : totalBakery}
  categories.push(bakery);
  var beauty = {Category : "Beauty", Profit : totalBeauty}
  categories.push(beauty);

  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.Profit - obj2.Profit;
    })
  }
  sortTheArray(categories);

  return "The Most Profitable Category is " + categories[categories.length-1].Category;
}
