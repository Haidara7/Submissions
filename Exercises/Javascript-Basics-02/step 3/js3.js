var x = document.createElement("div");
var y = document.querySelector("div");
document.body.appendChild(x);

var r= document.querySelector("input");
r.addEventListener("keyup",go);
function go (){
x.innerHTML=r.value;
}