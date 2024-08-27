let menu_icon = document.querySelector(".menu_icon");
let side_bar = document.querySelector(".side_bar");

menu_icon.onclick = function(){
    menu_icon.classList.toggle("active");
    side_bar.classList.toggle("active");
}