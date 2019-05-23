var x = document.querySelector("input");
var y = document.querySelector("button");
y.addEventListener("click" , del);
function del()
{
var yes ;
if(confirm("yes or no")){
yes=document.getElementById("name").value = " ";
document.getElementById("surname").value=" " ;
document.getElementById("city").value= " ";

}
}

