$(document).ready(function(){
  
var array=["writes","codes","breathes","works","thinks","is","lives","plays","flies","plots world domination","smiles","kills time","wonders"];

  $('.centrefix').fadeIn(3000, function(){
    $('.iconcolors').fadeIn(3000, function(){
      setInterval(fadechanges,10000);
    });
  });

function fadechanges() {
  $('.animated').animate({'opacity':0},1000,function(){
      $(this).text(array[Math.floor(Math.random()*array.length)]);
    }).animate({'opacity':1},1000);
}

});
