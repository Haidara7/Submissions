var x = document.querySelector("p");
var y = document.querySelectorAll("a");


y[0] = document.getElementById("show").addEventListener("click",function(){ myfunction(false) });
y[1] = document.getElementById("hide").addEventListener("click",function(){ myfunction(true) });

function myfunction(isHiden){
   
    if (!isHiden){
        x.style.display = "block";
    }
    else if (isHiden) {
        x.style.display = "none";
    }
}