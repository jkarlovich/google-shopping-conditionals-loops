var data = require('../products.json');

//  Write your solutions below
/*  1.) Go through the items and find all results that have kind of
shopping#product. Print the count of these results. Where else is this count
information stored in the search results?*/

var total = 0;

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].kind === 'shopping#product') {
    total++;
  }
}
console.log(total);

//  Answer: count stored in data.currentItemCount

//  2.) Print the title all items with a backorder availability in inventories.

//  Option for if only one inventory array
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability === 'backorder') {
    console.log(data.items[i].product.title);
  }
}

//  Option for if multiple inventory items in array

for (var i = 0; i < data.items.length; i++) {
  for (var j = 0; j < data.items[i].product.inventories.length; j++) {
    if (data.items[i].product.inventories[j].availability === 'backorder') {
      console.log(data.items[i].product.title);
    }
  }
}


//  3.) Print the title all items with more than one image link.

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title);
  }
}

//  4.) Print all "Cannon" products in the items (careful with case sensitivity).

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon') {
    console.log(data.items[i].product.title);
  }
}

//  5.) Print all items that have an author name of "eBay" and are brand "Canon".

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name === 'eBay') {
    console.log(data.items[i].product.title);
  }
}

//  6.) Print all the products with their brand, price, and an image link*/

//  Option if only one item in inventories array, note took instuctions to mean
//  only needed to print one image link

for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.title);
  console.log(data.items[i].product.brand);
  console.log(data.items[i].product.inventories[0].price);
  console.log(data.items[i].product.images[0]);
}

//  Option if mulitple items in inventories array
for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.title);
  console.log(data.items[i].product.brand);
  for (var j = 0; j < data.items[i].product.inventories.length; j++) {
    console.log(data.items[i].product.inventories[j].price);
    console.log(data.items[i].product.images[j]);
  }
}

console.log(data.items);
