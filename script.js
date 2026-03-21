
let novel = document.getElementById("HOME");

if(novel){  

    let images = [
        "https://i.pinimg.com/originals/9e/38/fe/9e38fe743e185c7fd4788d3ca239624e.jpg",
        "https://th.bing.com/th/id/OIP.41SpFKIEdH1_QT3V5I5EAgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.ODsqukN0M3Urf9FKfYMDUQHaLn?w=199&h=313&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ];

    let i = 0;

    function changeBg(){
        novel.style.backgroundImage = `url(${images[i]})`;
        i++;

        if(i >= images.length){
            i = 0;
        }
    }

    setInterval(changeBg, 3000);
    changeBg();
}

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

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    if(themeBtn)
        themeBtn.textContent = "Light";
    }

if(themeBtn){
    themeBtn.onclick = function(){

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeBtn.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "Night";
            localStorage.setItem("theme", "light");
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




function next(){
    let name= document.getElementById("name").value
    let email= document.getElementById("email").value


if(name ==="" || email ===""){
    document.getElementById("error1").innerText = "veuillez remplir tous les champs."
    
}
else{

document.getElementById("error1").innerText = "";
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "block";
}


}

function back(){
    document.getElementById("two").style.display = "none"
    document.getElementById("one").style.display = "block"
}

function submitForm(){
    let message = document.getElementById("message").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmation").value


    if(message === "" || password === "" || confirmPassword === ""){
        document.getElementById("error2").innerText = "veuillez remplir tous les champs."
        return false
    } 


    if(password != confirmPassword){
        document.getElementById("error2").innerText = "Les mots de passe ne correspondent pas."
        return false
    }
    
    
        document.getElementById("error2").innerText = ""
        document.getElementById("success").innerText = "Votre message a été envoyé avec succès !"
        
    

    setTimeout(function(){
        location.reload()
    },3000)

    return false;


}



const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {
    const id = btn.dataset.id;

    let count = localStorage.getItem(id) || 0;
    btn.querySelector("span").innerText = count;

    if(localStorage.getItem(id + "_liked")){
        btn.classList.add("liked");
    }

    btn.addEventListener("click", function(){

        if(localStorage.getItem(id + "_liked")){
            count--;
            localStorage.removeItem(id + "_liked");
            btn.classList.remove("liked");
        } else {
            count++;
            localStorage.setItem(id + "_liked", true);
            btn.classList.add("liked");
        }

        localStorage.setItem(id, count);
        btn.querySelector("span").innerText = count;
    });
});