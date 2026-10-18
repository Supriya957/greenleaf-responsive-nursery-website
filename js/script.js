
/* ==========================================
   GREENLEAF NURSERY
   JavaScript
========================================== */

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// NEWSLETTER VALIDATION
// ===============================

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

e.preventDefault();

const email = newsletterForm.querySelector("input");

const emailValue = email.value.trim();

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailValue===""){

alert("Please enter your email.");

email.focus();

return;

}

if(!emailPattern.test(emailValue)){

alert("Please enter a valid email address.");

email.focus();

return;

}

alert("🎉 Thank you for subscribing to GreenLeaf!");

newsletterForm.reset();

});

}


// ===============================
// HERO BUTTON EFFECT
// ===============================

const shopBtn = document.querySelector(".btn");

if(shopBtn){

shopBtn.addEventListener("mouseover",()=>{

shopBtn.style.transform="scale(1.05)";

});

shopBtn.addEventListener("mouseout",()=>{

shopBtn.style.transform="scale(1)";

});

}


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2e7d32";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

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


// ===============================
// SIMPLE FADE-IN ANIMATION
// ===============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";
section.style.transition="all 0.8s ease";

observer.observe(section);

});


// ===============================
// FEATURED PLANT BUTTONS
// ===============================

const buttons=document.querySelectorAll(".plant-card button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

alert("🌿 Plant details will be available on the Plants page.");

});

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("GreenLeaf Nursery Website Loaded Successfully!");


/* ===============================
   CONTACT FORM VALIDATION
=============================== */

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const subject=document.getElementById("subject").value.trim();

const message=document.getElementById("message").value.trim();

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""||email===""||phone===""||subject===""||message===""){

alert("Please fill in all fields.");

return;

}

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

if(phone.length<10){

alert("Please enter a valid phone number.");

return;

}

alert("🌿 Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}

