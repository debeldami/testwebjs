var num1 = Math.floor(Math.random()*6) + 1;
var num2 = Math.floor(Math.random()*6) + 1;

var win = document.querySelector("h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

if(num1 > num2){
    win.textContent = "player one win";
}else if(num2 > num1){
    win.textContent = "player two win";
}else{
    win.textContent = "draw";
}

var dice1 = "images/dice"+num1+".png";
var dice2 = "images/dice"+num2+".png";


img1.setAttribute("src",dice1);
img2.setAttribute("src",dice2);