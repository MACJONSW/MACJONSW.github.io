// ==========================================
// Configuration Loader & Data Renderer
// ==========================================
let siteConfig = null;

async function loadConfiguration() {
    try {
        const response = await fetch('config.json');
        siteConfig = await response.json();
        renderPageContent();
    } catch (error) {
        console.error('Error loading configuration:', error);
        // Fallback to default content if config fails to load
    }
}

function renderPageContent() {
    if (!siteConfig) return;

    // Update document title and meta
    document.title = siteConfig.personal.title;
    document.querySelector('meta[name="description"]').content = siteConfig.personal.description;

    // Get sections configuration
    const sections = siteConfig.sections || {};

    // Render sections based on configuration
    if (sections.hero !== false) {
        renderHeroSection();
    } else {
        hideSection('home');
    }

    if (sections.about !== false) {
        renderAboutSection();
    } else {
        hideSection('about');
    }

    if (sections.skills !== false) {
        renderSkillsSection();
    } else {
        hideSection('skills');
    }

    if (sections.experience !== false) {
        renderExperienceSection();
    } else {
        hideSection('experience');
    }

    if (sections.projects !== false) {
        renderProjectsSection();
    } else {
        hideSection('projects');
    }

    if (sections.awards !== false) {
        renderAwardsSection();
    } else {
        hideSection('awards');
    }

    if (sections.contact !== false) {
        renderContactSection();
    } else {
        hideSection('contact');
    }

    // Render Footer (always visible)
    renderFooter();

    // Update navigation brand
    document.querySelector('.nav-brand a').textContent = siteConfig.personal.name;

    // Update navigation menu based on visible sections
    updateNavigationMenu(sections);
}

function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'none';
    }
}

function updateNavigationMenu(sections) {
    const navMenu = document.querySelector('.nav-menu');
    const navItems = navMenu.querySelectorAll('.nav-item');

    // Map of section IDs to their corresponding nav items
    const sectionMap = {
        'home': 'home',
        'about': 'about',
        'skills': 'skills',
        'experience': 'experience',
        'projects': 'projects',
        'awards': 'awards',
        'contact': 'contact'
    };

    // Hide nav items for disabled sections
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        if (link) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                const sectionKey = Object.keys(sectionMap).find(key => sectionMap[key] === sectionId);

                if (sectionKey && sections[sectionKey] === false) {
                    item.style.display = 'none';
                }
            }
        }
    });
}

function renderHeroSection() {
    const hero = siteConfig.hero;
    const heroContent = document.querySelector('.hero-content');

    heroContent.querySelector('.hero-title').innerHTML = `
        ${hero.greeting} <span class="gradient-text">${hero.name}</span>
    `;

    heroContent.querySelector('.hero-description').textContent = hero.description;

    // Update buttons
    const buttonsContainer = heroContent.querySelector('.hero-buttons');
    buttonsContainer.innerHTML = hero.buttons.map(btn => `
        <a href="${btn.link}" class="btn btn-${btn.type}">${btn.text}</a>
    `).join('');

    // Update social links
    const socialLinksContainer = heroContent.querySelector('.social-links');
    socialLinksContainer.innerHTML = siteConfig.socialLinks.map(social => `
        <a href="${social.url}" target="_blank" aria-label="${social.platform}">
            <i class="${social.icon}"></i>
        </a>
    `).join('');

    // Initialize typing effect with configured texts
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new TypeWriter(typedElement, hero.typedTexts, 2000);
    }
}

function renderAboutSection() {
    const about = siteConfig.about;
    const aboutSection = document.querySelector('#about .about-content');

    // Update image
    const imgElement = aboutSection.querySelector('img');
    imgElement.src = siteConfig.personal.photo;
    imgElement.alt = siteConfig.personal.name;

    // Update text content
    const aboutText = aboutSection.querySelector('.about-text');
    aboutText.querySelector('h3').textContent = about.subtitle;

    // Update paragraphs
    const paragraphsHtml = about.paragraphs.map(p => `<p>${p}</p>`).join('');
    const h3Element = aboutText.querySelector('h3');
    h3Element.insertAdjacentHTML('afterend', paragraphsHtml);

    // Remove old paragraphs if any
    const oldParagraphs = aboutText.querySelectorAll('p');
    oldParagraphs.forEach((p, index) => {
        if (index >= about.paragraphs.length) {
            p.remove();
        }
    });

    // Update stats
    const statsContainer = aboutText.querySelector('.about-stats');
    statsContainer.innerHTML = about.stats.map(stat => `
        <div class="stat-item">
            <h4>${stat.number}</h4>
            <p>${stat.label}</p>
        </div>
    `).join('');
}

function renderSkillsSection() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = siteConfig.skills.map((skill, index) => `
        <div class="skill-card" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
}

function renderExperienceSection() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = siteConfig.experience.map((exp, index) => `
        <div class="timeline-item" data-aos="${index % 2 === 0 ? 'fade-right' : 'fade-left'}">
            <div class="timeline-icon">
                <i class="${exp.icon}"></i>
            </div>
            <div class="timeline-content glass-card">
                <div class="timeline-date">${exp.date}</div>
                <h3>${exp.title}</h3>
                <h4>${exp.organization}</h4>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

function renderProjectsSection() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = siteConfig.projects.map((project, index) => `
        <div class="project-card glass-card" data-aos="zoom-in" data-aos-delay="${(index + 1) * 100}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    ${project.demoLink ? `<a href="${project.demoLink}" class="project-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderAwardsSection() {
    const awardsGrid = document.querySelector('.awards-grid');
    awardsGrid.innerHTML = siteConfig.awards.map((award, index) => `
        <div class="award-card glass-card" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <div class="award-icon">
                <i class="${award.icon}"></i>
            </div>
            <h3>${award.title}</h3>
            <p class="award-date">${award.date}</p>
            <p>${award.description}</p>
        </div>
    `).join('');
}

function renderContactSection() {
    const contact = siteConfig.contact;
    const contactSection = document.querySelector('#contact');

    // Update title
    contactSection.querySelector('.section-title').textContent = contact.title;

    // Update text content
    const contactText = contactSection.querySelector('.contact-text');
    contactText.querySelector('h3').textContent = contact.subtitle;
    contactText.querySelector('p').textContent = contact.description;

    // Update contact info
    const contactInfo = contactText.querySelector('.contact-info');
    contactInfo.innerHTML = contact.info.map(item => `
        <div class="contact-item">
            <i class="${item.icon}"></i>
            <a href="${item.link}" ${item.link.startsWith('http') ? 'target="_blank"' : ''}>${item.text}</a>
        </div>
    `).join('');
}

function renderFooter() {
    const footer = document.querySelector('.footer-content');
    footer.querySelector('p').textContent = siteConfig.footer.copyright;

    const footerLinks = footer.querySelector('.footer-links');
    footerLinks.innerHTML = siteConfig.footer.links.map((link, index) => `
        ${index > 0 ? '<span>·</span>' : ''}
        <a href="${link.url}" ${link.url.startsWith('http') ? 'target="_blank"' : ''}>${link.text}</a>
    `).join('');
}

// ==========================================
// Particle Background System
// ==========================================
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    init() {
        this.resize();

        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(102, 126, 234, 0.5)';
            this.ctx.fill();
        });

        // Draw connections
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// Typing Effect
// ==========================================
class TypeWriter {
    constructor(element, texts, period = 2000) {
        this.element = element;
        this.texts = texts;
        this.period = period;
        this.txt = '';
        this.textIndex = 0;
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        const fullTxt = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.textContent = this.txt;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

// ==========================================
// Smooth Scroll Navigation
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                const navToggle = document.getElementById('navToggle');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}

// ==========================================
// Navbar Scroll Effect
// ==========================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==========================================
// Mobile Navigation Toggle
// ==========================================
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ==========================================
// Scroll Animations (AOS Alternative)
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Animate skill progress bars
                if (entry.target.classList.contains('skill-card')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const width = progressBar.style.width;
                        progressBar.style.width = '0';
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 100);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// Active Navigation Link
// ==========================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// Contact Form Handler
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this to a backend
        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        form.reset();
    });
}

// ==========================================
// Initialize Everything
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    // Load configuration first
    await loadConfiguration();

    // Initialize particle background
    new ParticleBackground();

    // Initialize all features
    initSmoothScroll();
    initNavbarScroll();
    initMobileNav();
    initScrollAnimations();
    initActiveNavLink();
    initContactForm();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// Performance Optimization
// ==========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
