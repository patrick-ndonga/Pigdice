$(document).ready(function(){
  $("#play1").click(function(){
    $(".hide1").fadeIn();
    $(".clause1").fadeIn();
  });
  $("#play2").click(function(){
    $(".hide2").fadeIn();
    $(".clause2").fadeIn();
  });

  var name1 , accrueRoll1, total1,  name2 , accrueRoll2, total2  ;

 total1 = 0;
 accrueRoll1 = 0;
 total2 = 0;
 accrueRoll2 = 0;

 $(".roll1").click(function() {
  randomNo = Math.floor(Math.random() * 6) + 1;

  if (randomNo === 1) {
    alert("Oops, you rolled a 1");
    accrueRoll1 = 0;
    $("#count1").text(accrueRoll1);
    total1 += accrueRoll1;
    $("#total1").text(total1);
    $(".hide1").hide();
  } else {
    $("#Roll1").text(randomNo);
    accrueRoll1 += randomNo;
    $("#count1").text(accrueRoll1);
  }

});
$("#hold1").click(function(){
   total1 += accrueRoll1;
   $("#total2").text(totalPoints2);
   accrueRoll1 = 0;
   $(".hide1").hide();
});
//Player 2//
$(".roll2").click(function() {
  randomNo = Math.floor(Math.random() * 6) + 1;

  if (randomNo === 1) {
    alert("Oops, you rolled a 1");
    accrueRoll2 = 0;
    $("#count2").text(accrueRoll2);
    total2 += accrueRoll2;
    $("#total2").text(total2);
    $(".hide2").hide();
  } else {
    $("#Roll2").text(randomNo);
    accrueRoll2 += randomNo;
    $("#count2").text(accrueRoll2);
  }
  $("#hold2").click(function(){
     total2 += accrueRoll2;
     $("#total2").text(totalPoints2);
     accrueRoll2 = 0;
     $(".hide2").hide();
  });

});
});
