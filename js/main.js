var imgs = ["photos/dumplings1.jpg","photos/dumplings2.jpg","photos/dumplings3.jpg","photos/banna fritters.jpg","photos/beef patty.jpg","photos/jerk chicken.jpg","photos/rice.jpg","photos/roti.jpg"]
var zebra = 0;
var clickCount = 0;
function nextImg(){
  clickCount++;
if(clickCount === 3){
  clickCount = 0;
  var random = Math.round(Math.random() * imgs.length - 1 )
  $("#img").attr("src", imgs[random])
  zebra = random;
}else{
  zebra++;
  if( zebra >imgs.length-1){
  zebra =0;
  }
  $("#img").attr("src", imgs[zebra]);
  }
}
function prevImg(){
 zebra--;
 if( zebra <0){
 zebra=imgs.length-1;
 }
  $("#img").attr("src", imgs[zebra]);
}
$(document).ready(function(){
 $("#right").on("click",nextImg);
 $("#left").on("click",prevImg);
 $("#right").mouseover(function(){
   $("#right").css("background-color", "rgb(234, 32, 39)")
 })
 $("#right").mouseout(function(){
   $("#right").css("background-color", "rgb(87, 88, 187)")
 });
 $("#left").mouseover(function(){
   $("#left").css("background-color", "rgb(234, 32, 39)")
 })
 $("#left").mouseout(function(){
   $("#left").css("background-color", "rgb(87, 88, 187)")
 });
});
/*"all.ico","Bacardi.ico","facebook.ico","globe.ico",*/
