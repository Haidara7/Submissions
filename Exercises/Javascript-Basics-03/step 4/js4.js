var x = document.querySelector("#password");
var y = document.querySelector("#confirmation");
var q = document.querySelector("button");
q.addEventListener("click",test);
function test(){

if(x.value != y.value){
    x.style.borderColor = "red";
    y.style.borderColor = "red";

}else {x.style.borderColor = " ";
y.style.borderColor = " ";

}
}