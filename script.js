//==============================
// HERO SLIDER
//==============================

const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

setInterval(changeSlide, 4000);

//==============================
// MOBILE MENU
//==============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

//==============================
// ACTIVE MENU
//==============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

        navbar.classList.remove("show");

    });

});

//==============================
// STICKY HEADER
//==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.padding = "0";

        header.style.background = "#ffffff";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.12)";

    }else{

        header.style.background = "#ffffff";

    }

});

//==============================
// BACK TO TOP BUTTON
//==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//==============================
// SCROLL ANIMATION
//==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-item");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});

//==============================
// PRODUCT CARD HOVER
//==============================

document.querySelectorAll(".product-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

//==============================
// GALLERY EFFECT
//==============================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});

console.log("Honest Enterprise Website Loaded Successfully");