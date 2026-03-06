let images = [
"https://i.pinimg.com/originals/9e/38/fe/9e38fe743e185c7fd4788d3ca239624e.jpg",
"https://th.bing.com/th/id/OIP.41SpFKIEdH1_QT3V5I5EAgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
"https://th.bing.com/th/id/OIP.ODsqukN0M3Urf9FKfYMDUQHaLn?w=199&h=313&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
];

let i = 0;
let novel = document.getElementById("HOME");

function changeBg(){
    novel.style.backgroundImage = `url(${images[i]})`;
    i++;

    if(i >= images.length){
        i = 0;
    }
}

setInterval(changeBg, 3000);
changeBg();



const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu a");

menuToggle.addEventListener("click", function(){

    menu.classList.toggle("show");

    
    if(menu.classList.contains("show")){
        menuToggle.textContent = "X";
    } else {
        menuToggle.textContent = "☰";
    }

});



menuLinks.forEach(link => {
    link.addEventListener("click", function(){

        menu.classList.remove("show");
        menuToggle.textContent = "☰";

    });
});



const themeBtn = document.getElementById("themebtn");

if(themeBtn){
    themeBtn.onclick = function(){

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeBtn.textContent = "Light";
        } else {
            themeBtn.textContent = "Night";
        }

    };
}

let a = 0
let b = 0
let c=  0 

setInterval(function(){
    if(a < 100000){
        a = a + 1000;
        document.getElementById("V").innerText = a + " +";
    }

    if(b < 50000){
        b = b + 500;
        document.getElementById("VI").innerText = b + " +";
    }


    if(c < 45000){
        c = c + 750;
        document.getElementById("VA").innerText = c + " +";
    }
}, 1000);