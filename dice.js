var randomNumber1=Math.floor((Math.random()*6)+1);
var randomsrc="dice"+randomNumber1+".png";
var i1=document.querySelectorAll("img")[0];
i1.setAttribute("src",randomsrc);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomsrc2="dice"+randomNumber2+".png";
var i2=document.querySelectorAll("img")[1];
i2.setAttribute("src",randomsrc2);

if(randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML="🎉PLAYER 1 WINS🎉";
}
else if(randomNumber1<randomNumber2)
{
	document.querySelector("h1").innerHTML="🎉PLAYER 2 WINS🎉";
}
else
{
	document.querySelector("h1").innerHTML="DRAW";
}
