/* =========================================
   REVEAL ANIMATIONS
========================================= */

const reveals = document.querySelectorAll(
".journey-row, .project-card, .pillar-card, .gallery-grid img, .vision-content"
);

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("reveal");
            entry.target.classList.add("active");

        }

    });

},

{
    threshold:0.15
}

);

reveals.forEach(item => {

    item.classList.add("reveal");
    revealObserver.observe(item);

});

/* =========================================
   LIGHTBOX GALLERY
========================================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.classList.add("lightbox");

lightbox.innerHTML =
`<img src="" alt="">`;

document.body.appendChild(lightbox);

const lightboxImage =
lightbox.querySelector("img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});

/* =========================================
   PARALLAX BACKGROUND
========================================= */

const bg =
document.querySelector(".bg-layer");

window.addEventListener("scroll", () => {

    const y =
    window.pageYOffset;

    bg.style.transform =
    `translateY(${y * 0.08}px)`;

});

/* =========================================
   ACTIVE NAVIGATION LINKS
========================================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});

/* =========================================
   HERO IMAGE FLOAT EFFECT
========================================= */

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

    let direction = 1;

    setInterval(() => {

        heroImage.style.transform =
        `translateY(${direction * 8}px)`;

        direction *= -1;

    }, 3000);

}

/* =========================================
   GALLERY IMAGE STAGGER
========================================= */

galleryImages.forEach((img,index)=>{

    img.style.animationDelay =
    `${index * 0.05}s`;

});

/* =========================================
   SMOOTH BUTTON HOVER
========================================= */

const buttons =
document.querySelectorAll(
".btn-primary, .btn-secondary"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0px)";

    });

});

/* =========================================
   SUBTLE CIRCUIT MOVEMENT
========================================= */

const circuit =
document.querySelector(".circuit-overlay");

let offset = 0;

setInterval(() => {

    offset += 0.2;

    circuit.style.backgroundPosition =
    `${offset}px ${offset}px`;

}, 50);

/* =========================================
   EXPANDABLE PROJECTS
========================================= */

const projectCards =
document.querySelectorAll(".project-card.expandable");

projectCards.forEach(card => {

    const preview =
    card.querySelector(".project-preview");

    preview.addEventListener("click", () => {

        projectCards.forEach(other => {

            if(other !== card){

                other.classList.remove("active");

            }

        });

        card.classList.toggle("active");

    });

});
