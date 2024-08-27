let menu_icon = document.querySelector(".menu_icon");
let side_bar = document.querySelector(".side_bar");
let over_flow = document.querySelector("html");

// menu_icon to slide side bar
menu_icon.onclick = function(){
    menu_icon.classList.toggle("active");
    side_bar.classList.toggle("active");
    over_flow.classList.toggle("active");
}

// click document to close menu_icon & side bar
document.onclick = function(e){
    // console.log(e.target);
    if(!menu_icon.contains(e.target)){
        menu_icon.classList.remove("active");
        side_bar.classList.remove("active");
        over_flow.classList.remove("active");
    }
}