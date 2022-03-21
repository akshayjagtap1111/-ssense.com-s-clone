function header() {
  return `
    <div id="nav_right">
    <ul>
      <li id="mens_wear"> <a href="mens_wear.html">MENSWEAR</a></li>
      <li id="womens_wear"> <a href="womens_wear.html">WOMENSWEAR</a></li>
      <li id="everything"> <a href="everything_else.html">EVERYTHING ELSE</a></li>
      <li> <a href="sale.html">SALE</a></li>
      <li>SEARCH</li>
    </ul>
  </div>

  <a href="index.html"><div id="nav_mid">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ssense_logo.svg/1200px-Ssense_logo.svg.png"
        alt=""
      />
    </div></a>

  <div id="nav_left">
  <ul>
   <li>ENGLISH</li>
   <li> <a href="login.html" id="log_in">LOGIN</a> </li>
   <li> <a href="wishlist.html" id="wishlist"> WISHLIST</a></li>
   <li> <a href="shopping_bag.html" id="shopping_bag"> SHOPPING BAG</a></li>
  </ul>
  </div>
    `;
}

export default header;
