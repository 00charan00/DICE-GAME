function roll(){
var ran1=Math.floor(Math.random()*6)+1;
var imgsrc1=`images/dice${ran1}.png`;
var ran2=Math.floor(Math.random()*6)+1;
var imgsrc2="images/dice"+ran2+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);
if(ran1>ran2)
{
    document.querySelector("h3").innerHTML="Player 1 Won The Game!";
}
else if(ran1<ran2)
{
    document.querySelector("h3").innerHTML="Player 2 Won The Game!";
}
else{
    document.querySelector("h3").innerHTML="Match Draw!";
}
}