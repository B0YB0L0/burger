let modol_container = document.querySelector('.modol-container');
let modol = document.querySelector('.modol');
let btns = document.querySelectorAll('.btn');
let btn1 = document.querySelector('.btn1');

btns.forEach((btn)=>{
    btn.onclick=()=>{
        modol_container.style.display = "flex";
    }
}) 

btn1.onclick=()=>{
    modol_container.style.display = "none";
}

modol_container.onclick=()=>{
    modol.style.display = "flex";
}

window.onclick=(e)=>{
    if(e.target == modol_container){
        modol_container.style.display = "none";
    }
}

// let input = document.querySelector(".input");
// let btn = document.querySelector(".btn5");
// let parent = document.querySelector(".parent");

// btn.addEventListener("click", () => {
//     parent.classList.toggle("active");
//     input.focus();
// });



