let navBar=document.querySelector('nav');
let menuLinks=document.getElementById('menu-links');
let menu=document.querySelector('full-menu');

function toggleMenu(){
    menuLinks.classList.toggle('full-menu');

}

window.onscroll=function(){
    if(window.scrollY > 0){
        navBar.style.background="#eefff9";
    }
    else{
        navBar.style.background="transparent";   
    }
 
}