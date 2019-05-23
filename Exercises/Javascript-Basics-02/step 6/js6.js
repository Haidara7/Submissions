var jpg1 =document.querySelector('#image1');
var jpg2 =document.querySelector('#image2');
var jpg3 =document.querySelector('#image3');
var jpg4 =document.querySelector('#image4');
var jpg5 =document.querySelector('#image5');

jpg1.addEventListener("mouseover",x);
jpg2.addEventListener("mouseover",x);
jpg3.addEventListener("mouseover",x);
jpg4.addEventListener("mouseover",x);
jpg5.addEventListener("mouseover",x);


function x (s5){
    if (s5.target.id == "image1")
    {    s5.target.src = "images/image1_2.jpg" 
var jpg1 =document.querySelector("image1")
}
else if(s5.target.id == "image2"){
s5.target.src = "images/image2_2.jpg"
    
}
else if (s5.target.id == "image3"){
    s5.target.src ="images/image3_2.jpg"
}
else if (s5.target.id == "image4"){
s5.target.src = "images/image4_2.jpg"
}
else if (s5.target.id== "image5")
{
    s5.target.src = "images/image5_2.jpg"
}
}



jpg1.addEventListener("mouseout",x1);
jpg2.addEventListener("mouseout",x1);
jpg3.addEventListener("mouseout",x1);
jpg4.addEventListener("mouseout",x1);
jpg5.addEventListener("mouseout",x1);


function x1 (s5){
    if (s5.target.id == "image1")
    {    s5.target.src = "images/image1.jpg" 
var jpg1 =document.querySelector("image1")
}
else if(s5.target.id == "image2"){
s5.target.src = "images/image2.jpg"
    
}
else if (s5.target.id == "image3"){
    s5.target.src ="images/image3.jpg"
}
else if (s5.target.id == "image4"){
s5.target.src = "images/image4.jpg"
}
else if (s5.target.id== "image5")
{
    s5.target.src = "images/image5.jpg"
}
}
