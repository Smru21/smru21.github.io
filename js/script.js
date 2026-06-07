/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            'rgba(246,242,232,0.96)';

        navbar.style.boxShadow =
            '0 4px 20px rgba(0,0,0,0.08)';

    } else {

        navbar.style.background =
            'rgba(246,242,232,0.85)';

        navbar.style.boxShadow =
            'none';
    }
});


/* ===================================
   FADE-IN ON SCROLL
=================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    },

    {
        threshold: 0.15
    }

);


const animatedElements = document.querySelectorAll(
    '.timeline-item, .pillar-card, .focus-card, .project-wrapper'
);

animatedElements.forEach(el => {
    observer.observe(el);
});


/* ===================================
   LIGHTBOX FOR ALL IMAGES
=================================== */

const images = document.querySelectorAll('img');

const lightbox = document.createElement('div');

lightbox.id = 'lightbox';

document.body.appendChild(lightbox);


images.forEach(image => {

    image.addEventListener('click', () => {

        lightbox.classList.add('active');

        const img = document.createElement('img');

        img.src = image.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);

    });

});


lightbox.addEventListener('click', () => {

    lightbox.classList.remove('active');

});


/* ===================================
   ACTIVE NAV LINK
=================================== */

const sections = document.querySelectorAll('section');

const navLinks =
    document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') ===
            `#${current}`
        ) {

            link.classList.add('active');

        }

    });

});


/* ===================================
   HERO PARALLAX
=================================== */

window.addEventListener('scroll', () => {

    const heroImage =
        document.querySelector('.hero-image img');

    if (!heroImage) return;

    const offset =
        window.scrollY * 0.08;

    heroImage.style.transform =
        `translateY(${offset}px)`;

});


/* ===================================
   SMOOTH TIMELINE REVEAL
=================================== */

const timelineItems =
    document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {

    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';

});

const timelineObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = '1';

                    entry.target.style.transform =
                        'translateY(0)';

                    entry.target.style.transition =
                        'all 0.8s ease';

                }

            });

        },

        {
            threshold: 0.2
        }

    );

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});


/* ===================================
   TYPEWRITER HERO EFFECT
=================================== */

const title = document.querySelector('.hero h2');

if (title) {

    const text = title.textContent;

    title.textContent = '';

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            title.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }

    }

    setTimeout(typeWriter, 500);

}


