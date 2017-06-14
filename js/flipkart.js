
$(document).ready(function() {
  console.log(localStorage.getItem("cartItems"));

  $(".add-to-cart").on('click', function() {
    console.log('Button clicked');
    var imgurl = $(this).parent()[0].getElementsByClassName('im')[0].src;
    var name = $(this).parent()[0].getElementsByClassName('name')[0].innerHTML;
    var price = $(this).parent()[0].getElementsByClassName('price')[0].innerHTML;
    var item = {url:imgurl, name:name, price:price};
    localStorage.setItem("cartItems", JSON.stringify(item));

    location.href = "file:///C:/Users/HP%20PC/Documents/HTML/Flipkart/flipcart.html";
  });
});

