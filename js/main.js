// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project data
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of project 1 and its features.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'A brief description of project 2 and its features.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'A brief description of project 3 and its features.',
        technologies: ['Vue.js', 'Express', 'PostgreSQL'],
        image: 'https://via.placeholder.com/300x200',
        link: '#'
    }
];

// Populate projects
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <a href="${project.link}" class="project-link" target="_blank">View Project</a>
    `;
    projectGrid.appendChild(projectCard);
});

// Form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Clear form
    contactForm.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}); 