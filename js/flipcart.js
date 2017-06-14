$(document).ready(function(){
   var x = localStorage.getItem('cartItems');
   var parsedOutput = JSON.parse(x);
   console.log(JSON.parse(x));
   $(document).find('.item-image').attr('src',parsedOutput.url);
   $(document).find('.item-price').html(parsedOutput.price);
   $(document).find('.item-name').html(parsedOutput.name);
})