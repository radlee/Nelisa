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
  //Categorizing--------------------
  listOfItems.forEach(function(item){
    if(item.Item == "Bananas - loose"){
      totalFruits += Number(item.Price.replace(/R/g, ""))
    }
    if(item.Item == "Apples - loose"){
      totalFruits += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Mixed Sweets 5s"){
      totalCandy += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Heart Chocolates"){
      totalCandy += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Coke 500ml"){
      totalCoolDrinks += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Fanta 500ml"){
      totalCoolDrinks += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Cream Soda 500ml"){
      totalCoolDrinks += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Imasi"){
      totalDairy += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Milk 1l"){
      totalDairy += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Gold Dish Vegetable Curry Can"){
      totalCanned += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Chakalaka Can"){
      totalCanned += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Valentine Cards"){
      totalGifts += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Rose (plastic)"){
      totalGifts += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Iwisa Pap 5kg"){
      totalFood += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Top Class Soy Mince"){
      totalFood += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Bread"){
      totalBakery += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Soap Bar"){
      totalBeauty += Number(item.Price.replace(/R/g, ""));
    }
    if(item.Item == "Shampoo 1 litre"){
      totalBeauty += Number(item.Price.replace(/R/g, ""));
    }
  })
  var fuit = {Category : "Fruit", Price : totalFruits};
  categories.push(fuit);
  var candy = {Category : "Candy", Price : totalCandy}
  categories.push(candy);
  var drink = {Category : "CoolDrink", Price : totalCoolDrinks}
  categories.push(drink);
  var dairy = {Category : "Dairy", Price : totalDairy}
  categories.push(dairy);
  var can = {Category : "Canned", Price : totalCanned}
  categories.push(can);
  var gift = {Category : "Gifts", Price : totalGifts}
  categories.push(gift);
  var food = {Category : "Food", Price : totalFood}
  categories.push(food);
  var bakery = {Category : "Bakery", Price : totalBakery}
  categories.push(bakery);
  var beauty = {Category : "Beauty", Price : totalBeauty}
  categories.push(beauty);

  var sortTheArray = function(list){
    list.sort(function(obj1, obj2){
      return obj1.Price - obj2.Price;
    })
  }
  sortTheArray(categories)
  return "The Most Profitable Category is " + categories[categories.length-1].Category;
}
