
let cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];

let nav_cart_count = document.getElementById("shopping_bag");

nav_cart_count.innerText = `SHOPPING BAG (${cart_arr.length})`;