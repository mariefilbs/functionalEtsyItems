//1. Show me how to calculate the average price of all items.
//A. The average price is $23.63
var findAvg = function (items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    /*console.log(items.length);*/
  var temp = items[i].price;
  total = total + temp;
  /*console.log(total);*/
}
  var avgValue = (total / items.length);
  var result = avgValue.toFixed(2);
  /*console.log(result);*/

  return result;
}

var answer1 = document.getElementById("answer1");
answer1.innerHTML = "The average price is $" + findAvg(items);


//2.Show me how to get an array of items that cost between $14.00 and $18.00 USD
//A. 1970s Coors Banquet Glass Beer Pitcher
//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//   Hand Painted Colorful Feather Glass
 var costBetween = function (items) {
   var newArray = [];
   for (var i = 0; i < items.length; i++) {
     if (items[i].price > 14 && items[i].price < 18) {
       newArray.push(items[i].title);
       //console.log(newArray);
 }
} return newArray;
}

var answer2 = document.getElementById("answer2");
answer2.innerHTML = costBetween(items);

//3.Which item has a "GBP" currency code? Display it's name and price.
//  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
var findGBP = function (items) {
  for(var i = 0; i < items.length; i++) {
    if (items[i].currency_code === "GBP") {
   return items[i].title;
  }
 }
}
var answer3 = document.getElementById("answer3");
answer3.innerHTML = findGBP(items) + " cost £18.";


//4. Display a list of all items who are made of wood.
//

var woodItems = function (items) {
  var woodArray = [];
  for(var i = 0; i < items.length; i++) {
    if(items[i].materials.includes ("wood")) {
    woodArray.push(items[i].title);
    }
  }return woodArray;
}

var answer4 = document.getElementById("answer4");
answer4.innerHTML = woodItems(items) + " is made of wood.";

//5.Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var eightMats = function (items) {
  var eightArray =[];
  for(var i = 0; i < items.length; i++){
    if(items[i].materials.length > 8) {
      eightArray.push(items[i].title);
    }
  } return eightArray;
}

var answer5 = document.getElementById("answer5");
answer5.innerHTML = eightMats(items);
//6. How many items were made by their sellers?
