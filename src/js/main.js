import resumePdf from '../files/Resume-Constantin-Iordan.pdf?url'

function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';

        container.appendChild(particle);
    }
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('[data-role="section"]');

    function updateActiveNavigation() {
        const scrollPositionTop = window.scrollY;
        const scrollPositionBottom = scrollPositionTop + window.innerHeight;
        
        let currentSection = null;
        
        sections.forEach(section => {
            if (currentSection) {
                return;
            }

            const sectionTop = section.offsetTop;
            const sectionBottom = section.offsetHeight + sectionTop;

            if (
                (scrollPositionTop >= sectionTop && sectionBottom > scrollPositionTop ) ||
                (scrollPositionTop <= sectionTop && scrollPositionBottom >= sectionBottom)
            ) {
                currentSection = section.dataset.sectionName;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavigation);

    updateActiveNavigation();
}

function initResumeButton() {
    const resumeLink = document.querySelector('[data-action="view-resume"]');

    if (resumeLink) {
        resumeLink.href = resumePdf;
    }
}

createParticles();
initNavigation();
initResumeButton();