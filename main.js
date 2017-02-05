//1. Show me how to calculate the average price of all items.
//A. The average price is $23.63
var answer1 = document.getElementById("answer1");

var findAvg = function (items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    /*console.log(items.length);*/
  var temp = items[i].price;
  total = total + temp;
  /*console.log(total);*/
  var avgValue = (total / items.length);
 } answer1.innerHTML = "The average price is $" + avgValue.toFixed(2);
}
findAvg(items);


//Reworked my logic ^^^
  /*var avgValue = (total / items.length);
  var result = avgValue.toFixed(2);
  console.log(result);
  return result;
}
var answer1 = document.getElementById("answer1");
answer1.innerHTML = "The average price is $" + findAvg(items);*/


//2.Show me how to get an array of items that cost between $14.00 and $18.00 USD
//A. 1970s Coors Banquet Glass Beer Pitcher
//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//   Hand Painted Colorful Feather Glass
var answer2 = document.getElementById("answer2");

 var costBetween = function (items) {
   for (var i = 0; i < items.length; i++) {
     if (items[i].price > 14 && items[i].price < 18) {
       answer2.innerHTML += "<p>" + items[i].title + "</p>";
  }
 }
}
 costBetween(items);

//3.Which item has a "GBP" currency code? Display it's name and price.
//  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
var answer3 = document.getElementById("answer3");

var findGBP = function (items) {
  for(var i = 0; i < items.length; i++) {
    if (items[i].currency_code === "GBP") {
      answer3.innerHTML = items[i].title + " cost " + "&pound" + items[i].price;
    }
  }
}
findGBP(items);


//4. Display a list of all items who are made of wood.
//
var answer4 = document.getElementById("answer4");

var woodItems = function (items) {
  //var woodArray = [];
  for(var i = 0; i < items.length; i++) {
    if(items[i].materials.includes ("wood")) {
      answer4.innerHTML += "<p>" + items[i].title + " is made of wood." + "</p>";
    }
  }
}
 woodItems(items);


//5.Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var answer5 = document.getElementById("answer5")

function eightMats(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].materials.length >= 8) {
      answer5.innerHTML += items[i].title + " has " + items[i].materials.length + " materials:" ;

//Run through another for loop WITH A NEW COUNT to get the list of materials;
    for (var y = 0; y < items[i].materials[y].length; y++) {

//Added the <p> tags to line break the list
      answer5.innerHTML += "<p>" + items[i].materials[y] + "</p";
      }
    }
  }
}
eightMats(items);
//stuck on #5 for a while

//6. How many items were made by their sellers?
var answer6 = document.getElementById("answer6");

var sellerMade = function (items) {
  var whoMade =[];
  for (var i = 0; i < items.length; i++){
    if(items[i].who_made.includes("i_did")) {
      whoMade.push(items[i].title);
      answer6.innerHTML = whoMade.length + " items were made by their seller."
    }
  }
}
sellerMade(items);


//reworked my logic ^^^
    /*whoMade.push(items[i].title);
    /*console.log(whoMade);
    }
  }
  return whoMade.length;
}
answer6.innerHTML = sellerMade(items) + " items were made by their seller."*/
