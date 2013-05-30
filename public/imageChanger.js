
//$('#wrap1').css('background-image', 'url(res.jpg)');
//
//var a = document.getElementById('wrap1');
//a.style.backgroundImage =  myImage;


var bgArr = ["pic1.fw.png", "res.jpg", "pic1.fw.png", "res.jpg"];
var bgIndex = 0;



function nextbg()
{

$("#wrap1").css("background-image", "url("+bgArr[bgIndex]+")");
bgIndex++;

  if (bgIndex >= bgArr.lenght) {
	bgIndex = 0;
    }
}
  
  

var intervalHandle = setInterval(nextbg,60000);



  



 

















//
//
//
//
//var imageArray = ["pic1.png","pic2.png","pic3.png","pic4.png","pic5.png","pic6.png","res.jpg"];
//
//var imageIndex = 0;
//
//function changeImage() {
//    myImage.setAttribute("src",imageArray[imageIndex]);
//    imageIndex++;
//    if (imageIndex >= imageArray.length) {
//        imageIndex = 0;
//    }
//}
//
//// setInterval is also in milliseconds
//var intervalHandle = setInterval(changeImage,3000);
//
//
//myImage.onmouseover =  function() {
//    clearInterval(intervalHandle);
//};
//
////
////<script>
////      <!--
////      function changeImage() {
////        newImage = "url(images/image41.gif)";
////        document.getElementById('Good').style.backgroundIm  age = newImage;
////      }
////      //-->
////   
//
//
//
//
