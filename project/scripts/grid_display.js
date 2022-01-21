let product_grid = document.getElementById("product_grid");

document.getElementById("ass_li").addEventListener("click", function () {
  let ass_sub_li = document.getElementById("ass_sub_li");
  ass_sub_li.style.display = "block";
});

document.getElementById("bag_li").addEventListener("click", function () {
  let bag_sub_li = document.getElementById("bag_sub_li");
  bag_sub_li.style.display = "block";
});

document.getElementById("cloth_li").addEventListener("click", function () {
  let cloth_sub_li = document.getElementById("cloth_sub_li");
  cloth_sub_li.style.display = "block";
});

document.getElementById("shoue_li").addEventListener("click", function () {
  let shoue_sub_li = document.getElementById("shoue_sub_li");
  shoue_sub_li.style.display = "block";
});

document.getElementById("mens_wear").addEventListener("click", function () {
  let mens_wear_data = JSON.parse(localStorage.getItem("mens_wear_data"));

  localStorage.setItem("current", JSON.stringify(mens_wear_data));
});

document.getElementById("womens_wear").addEventListener("click", function () {
  let womens_wear_data = JSON.parse(localStorage.getItem("womens_wear_data"));

  localStorage.setItem("current", JSON.stringify(womens_wear_data));
});

document.getElementById("everything").addEventListener("click", function () {
  let everything_data = JSON.parse(localStorage.getItem("everything_data"));
  console.log("everything");
  localStorage.setItem("current", JSON.stringify(everything_data));
});


let current = JSON.parse(localStorage.getItem("current"));

let low_to_high=document.getElementById("low_to_high");

low_to_high.addEventListener("click",function(){
 
  current.sort((a, b) => {
    return a.price - b.price;
});

append_grid_data(current)
})

let high_to_low=document.getElementById("high_to_low");

high_to_low.addEventListener("click",function(){
 
  current.sort((a, b) => {
    return  b.price-a.price;
});

append_grid_data(current)
})

function append_grid_data(arr) {
  product_grid.innerHTML=null;
  arr.forEach((el) => {
    let div = document.createElement("div");
    let img_div = document.createElement("div");
    img_div.id = "img_div";

    let img = document.createElement("img");
    img.src = el.img1;

    img_div.append(img);

    let brand = document.createElement("p");
    brand.innerText = el.brand;
    let name = document.createElement("p");
    name.innerText = el.name;
    let price = document.createElement("p");
    price.innerText = el.price;

    div.append(img_div, brand, name, price);
    div.addEventListener("click",function(){

      localStorage.setItem("current_product",JSON.stringify(el))
      location.href="product.html"
    })
    product_grid.append(div);
  });
}

append_grid_data(current);