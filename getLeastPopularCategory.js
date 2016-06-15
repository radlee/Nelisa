module.exports = function(listOfItems){
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
    if(item.Item == "Amasi"){
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
  return "The Least porpular Category is " + categories[0].Category;
}
