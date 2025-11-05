// Sistema de Tema Automático por Hora
function setThemeByTime() {
    const hour = new Date().getHours();
    const html = document.documentElement;
    
    // Tema oscuro: entre 7 PM (19:00) y 6 AM (06:00)
    // Tema claro: entre 6 AM (06:00) y 7 PM (19:00)
    if (hour >= 19 || hour < 6) {
        html.setAttribute('data-theme', 'dark');
        console.log('🌙 Tema oscuro activado (horas nocturnas)');
    } else {
        html.setAttribute('data-theme', 'light');
        console.log('☀️ Tema claro activado (horas diurnas)');
    }
}

// Aplicar tema al cargar la página
setThemeByTime();

// Cambiar tema cada hora automáticamente
setInterval(setThemeByTime, 60000); // Verificar cada minuto

// Loader - Pantalla de carga
const loader = document.getElementById('loader');
const body = document.body;

// Agregar clase loading al body
body.classList.add('loading');

// Después de 5 segundos, ocultar el loader
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
        body.classList.remove('loading');
    }, 5000);
});

// Asegurar que el loader se oculte después de 5 segundos incluso si la página ya está cargada
setTimeout(() => {
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        body.classList.remove('loading');
    }
}, 5000);

// Navegación móvil
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
        // Cerrar otros items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle del item actual
        item.classList.toggle('active');
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };
        
        // Aquí normalmente enviarías los datos a un servidor
        console.log('Formulario enviado:', data);
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        
        // Limpiar formulario
        contactForm.reset();
    });
}

// Smooth scroll para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Activar link activo al hacer scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);
            if (link) {
                document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a elementos
const animatedElements = document.querySelectorAll('.feature__card, .service__card, .location__card, .social__card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mostrar/ocultar header al hacer scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease-in-out';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease-in-out';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

