// ===============================
// SIDEBAR TOGGLE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// ===============================
// CLOSE SIDEBAR WHEN CLICKING LINK
// ===============================

const sidebarLinks =
document.querySelectorAll(".sidebar-links a");

sidebarLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

});

// ===============================
// CLOSE SIDEBAR WHEN CLICKING OUTSIDE
// ===============================

document.addEventListener("click", (e) => {

    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {

        sidebar.classList.remove("active");

    }

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const hiddenElements = document.querySelectorAll(
`
.about,
.dashboard-card,
.project-card,
.experience-card,
.contact-card,
.contact
`
);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===============================
// ACTIVE MENU LINK
// ===============================

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop =
section.offsetTop - 200;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

sidebarLinks.forEach((link) => {

link.classList.remove("active-link");

if(
link.getAttribute("href") ===
`#${current}`
){

link.classList.add("active-link");

}

});

});

// ===============================
// HERO FLOATING EFFECT
// ===============================

const dashboards =
document.querySelectorAll(".dashboard");

window.addEventListener("mousemove",(e)=>{

const x =
(window.innerWidth / 2 - e.clientX) / 50;

const y =
(window.innerHeight / 2 - e.clientY) / 50;

dashboards.forEach((card,index)=>{

const speed =
(index + 1) * 0.4;

card.style.transform =
`translate(${x * speed}px, ${y * speed}px)`;

});

});

// ===============================
// DASHBOARD HOVER EFFECT
// ===============================

const dashboardCards =
document.querySelectorAll(
".dashboard-card"
);

dashboardCards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});

// ===============================
// BUTTON GLOW EFFECT
// ===============================

const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn"
);

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow =
"0 0 25px rgba(212,224,222,.35)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow =
"none";

});

});

// ===============================
// SMOOTH PAGE LOAD
// ===============================

window.addEventListener("load",()=>{

document.body.style.opacity = "1";

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"Sanika Raul Portfolio Loaded Successfully 🚀"
);