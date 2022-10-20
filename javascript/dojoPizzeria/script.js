// function sandwichFactory(bread, protein, cheese, toppings) {
//   var sandwich = {};
//   sandwich.bread = bread;
//   sandwich.protein = protein;
//   sandwich.cheese = cheese;
//   sandwich.toppings = toppings;
//   return sandwich;
// }

// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);



// var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(p1);

// var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

// var p3 = pizzaOven("thin", "pesto", ["mozzarella"], ["chicken", "bacon"]);
// console.log(p3);

// var p4 = pizzaOven("cheese crust", "white sauce", ["mozzarella, feta"], ["chicken"]);
// console.log(p4);

// === pizzaOven ===

// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//   var pizza = {};
//   pizza.crustType = crustType;
//   pizza.sauceType = sauceType;
//   pizza.cheeses = cheeses;
//   pizza.toppings = toppings;
//   return pizza;
// }



var crustType = [
  "Thin", "Thick", "Stuffed"
];

var sauceType = [
  "Tomato", "Pesto", "BBQ"
];
var cheeseType = [
  "Mozzarella", "Cheddar", "Parmesean"
];

var toppings = [
  "Basil", "Spinach", "Olives"
];

function randomPizza(crustType, sauceType, cheeseType, toppings) {
  var pizza = [];
  crustType = crustType[Math.floor(Math.random() * crustType.length)];
  pizza.push(crustType + " Crust");
  sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
  pizza.push(sauceType + " Sauce");
  cheeseType = cheeseType[Math.floor(Math.random() * cheeseType.length)];
  pizza.push(cheeseType + " Cheese");
  toppings = toppings[Math.floor(Math.random() * toppings.length)];
  pizza.push(toppings + " Topping")

  console.log(pizza)
}
randomPizza(crustType, sauceType, cheeseType, toppings)

// function randomPizza(crustType, sauceType, cheeseType, toppings) {
//   var pizza = [];
//   crustType = crustType[Math.floor(Math.random() * crustType.length)];
//   pizza.push(crustType + " Crust");
//   sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
//   pizza.push(sauceType + " Sauce");
//   cheeseType = cheeseType[Math.floor(Math.random() * cheeseType.length)];
//   pizza.push(cheeseType + " Cheese");
//   toppings = toppings[Math.floor(Math.random() * toppings.length)];
//   pizza.push(toppings + " Topping")

//   console.log(pizza)
// }
// randomPizza(crustType, sauceType, cheeseType, toppings)