var x = document.querySelector('.red');
var y = document.querySelector('.blue');
var z = document.querySelector('.green');
var p = document.getElementById('text');

x.addEventListener('click',function(){
    p.style.color='red';
})
y.addEventListener("click",function(){
    p.style.color="blue";

})
z.addEventListener("click",function(){
    p.style.color="green";
})