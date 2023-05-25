var nav=document.getElementById("nav");
var header=document.getElementById("header");
window.addEventListener('scroll',navBg);
function navBg(){
    const list=header.classList;
    list.add("bg-dark")
}