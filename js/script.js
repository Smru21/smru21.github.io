/* =========================================
   REVEAL ANIMATIONS
========================================= */

const reveals = document.querySelectorAll(
".journey-row, .pillar-card, .gallery-grid img, .vision-content"
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
   LIGHTBOX GALLERY (with caption)
========================================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.classList.add("lightbox");

lightbox.innerHTML =
`<button class="lightbox-close">&times;</button>
<img src="" alt="">
<div class="lightbox-caption"></div>`;

document.body.appendChild(lightbox);

const lightboxImage =
lightbox.querySelector("img");

const lightboxCaption =
lightbox.querySelector(".lightbox-caption");

const lightboxClose =
lightbox.querySelector(".lightbox-close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

        lightboxCaption.textContent =
        image.getAttribute("data-caption") || "";

    });

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightboxImage){
        return;
    }

    lightbox.classList.remove("active");

});

lightboxClose.addEventListener("click", (e) => {

    e.stopPropagation();

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
   PROJECT EXPAND TO FULL PAGE
========================================= */

const projectData = {

    kalanadam:{

        title:"KĀLANĀDAM",

        shortDesc:"Smart School Bell & Announcement Assistant",

        image:"images/kalanadam_main.jpg",

        body:`
            <p>
                A fully autonomous school bell and announcement system
                designed for schools. Built around ESP32 with RTC
                scheduling, SD card audio playback, touchscreen controls,
                and offline reliability.
            </p>

            <p>
                This is placeholder text describing the design process,
                challenges faced, and the impact of the system on daily
                school operations. Replace with your own detailed writeup.
            </p>

            <ul>
                <li>ESP32 Architecture</li>
                <li>Touch Interface</li>
                <li>RTC Timekeeping</li>
                <li>Audio Scheduling</li>
            </ul>
        `

    },

    tesla:{

        title:"Tesla Coil",

        shortDesc:"High Voltage Physics Demonstration",

        image:"images/tesla_coil.jpg",

        body:`
            <p>
                Designed and built a working Tesla Coil for exhibitions
                and science demonstrations. Used to explain resonance,
                transformers, wireless energy transfer and
                electromagnetism.
            </p>

            <p>
                Placeholder text — add details about the build process,
                components used, voltage achieved, safety measures and
                audience reactions during demonstrations.
            </p>

            <ul>
                <li>Resonant Transformer Design</li>
                <li>High Voltage Safety</li>
                <li>Spark Gap Tuning</li>
                <li>Live Demonstrations</li>
            </ul>
        `

    },

    water:{

        title:"Water Level Controller",

        shortDesc:"Automated Water Management System",

        image:"images/WaterLevelController.jpeg",

        body:`
            <p>
                Embedded automation system that monitors tank levels and
                automatically controls pumps to maintain water supply.
            </p>

            <p>
                Placeholder text — describe the sensor setup, control
                logic, enclosure design and real-world deployment
                results here.
            </p>

            <ul>
                <li>Sensor-Based Monitoring</li>
                <li>Automatic Pump Control</li>
                <li>Overflow Protection</li>
                <li>Low-Maintenance Design</li>
            </ul>
        `

    },

    wind:{

        title:"Wind Turbine Study",

        shortDesc:"Renewable Energy Research",

        image:"images/wind_blades.jpg",

        body:`
            <p>
                Student research project studying coastal wind energy
                generation, blade efficiency and practical turbine
                construction.
            </p>

            <p>
                Placeholder text — add details about wind data collected,
                blade design iterations, generator selection and overall
                research findings.
            </p>

            <ul>
                <li>Coastal Wind Data Analysis</li>
                <li>Blade Design & Testing</li>
                <li>Generator Integration</li>
                <li>Field Research</li>
            </ul>
        `

    }

};

const projectCards =
document.querySelectorAll(".project-card");

const projectOverlay =
document.querySelector(".project-overlay");

const projectExpandedImage =
projectOverlay.querySelector(".project-expanded-image img");

const projectExpandedTitle =
projectOverlay.querySelector(".project-expanded-text h3");

const projectExpandedShortDesc =
projectOverlay.querySelector(".project-expanded-text .short-desc");

const projectExpandedBody =
projectOverlay.querySelector(".expanded-body");

const projectClose =
projectOverlay.querySelector(".project-close");

projectCards.forEach(card => {

    card.addEventListener("click", (e) => {

        e.stopPropagation();

        const id = card.getAttribute("data-id");

        const data = projectData[id];

        if(!data){
            return;
        }

        projectExpandedImage.src = data.image;
        projectExpandedImage.alt = data.title;

        projectExpandedTitle.textContent = data.title;

        projectExpandedShortDesc.textContent = data.shortDesc;

        projectExpandedBody.innerHTML = data.body;

        projectOverlay.classList.add("active");

    });

});

projectClose.addEventListener("click", (e) => {

    e.stopPropagation();

    projectOverlay.classList.remove("active");

});

projectOverlay.addEventListener("click", (e) => {

    if(e.target === projectOverlay){

        projectOverlay.classList.remove("active");

    }

});
