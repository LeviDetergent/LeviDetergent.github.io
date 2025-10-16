// Projects Data
const projects = [
    {
        id: 1,
        title: 'Save_System32',
        type: 'Game',
        colors: ['#00d4ff', '#ff006e'],
        desc: 'nostalgic arcade chaos',
        year: '2024',
        image: 'linear-gradient(135deg, #00d4ff, #ff006e)',
        imageUrl: 'thumbnails/proj04.png', 
        description: 'Save System32 is a lighthearted and nostalgic arcade game that captures the quirky chaos of early 2000s computer desktops. By focusing on the iconic System32 file, the game turns a mundane element of computing into a playful and relatable challenge. It blends p5.js for the core gameplay with JavaScript for unique browser-based interactions, recreating the unpredictability of early digital spaces with pixel art and glitchy aesthetics.',
        tools: ['p5.js', 'JavaScript', 'Game Design'],
        link: 'p5/FINAL/index.html',
        sourceCode: 'p5/FINAL/sketch.js'
    },
    {
        id: 2,
        title: 'Feed the Doro',
        type: 'Game',
        colors: ['#a78bfa', '#ec4899'],
        desc: 'snake game meets character growth',
        year: '2024',
        image: 'linear-gradient(135deg, #a78bfa, #ec4899)',
        imageUrl: 'thumbnails/doro.png', 
        description: 'A playful version of the classic snake game featuring Doro from Nikke. As Doro moves across an RGB grid, the goal is to eat Doritos with the character growing in size with each bite. The biggest challenge was balancing Doro\'s growth with the game\'s speed—initially the speed increased too much, making it unplayable. The solution was adjusting the scaling so while Doro grows, speed gradually decreases, creating a challenging yet fun experience.',
        tools: ['p5.js', 'Grid Mechanics', 'Game Design'],
        link: 'p5/ex2_test1/index.html',
        sourceCode: 'p5/ex2_test1/sketch.js'
    },
    {
        id: 3,
        title: 'RAIDEN',
        type: 'Animation',
        colors: ['#ff6b35', '#f7931e'],
        desc: '4K character benchmark',
        year: '2024',
        image: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        imageUrl: 'thumbnails/raiden.png', 
        description: 'A 4K animation project where I rigged and animated character models of Raiden (Metal Gear Rising: Revengeance) and Johnny Silverhand (Cyberpunk 2077). Designed as a personal benchmark to test my computer\'s rendering capabilities with demanding visuals. The camera movement and detailed character animation demonstrate both creative direction and technical performance testing.',
        tools: ['Blender', 'Character Rigging', '4K Rendering', 'Animation'],
        youtube: '_mUiWmx8-Rs'
    },
    {
        id: 4,
        title: 'We Love Casting Spells',
        type: 'Motion',
        colors: ['#00d4ff', '#8b5cf6'],
        desc: 'cyberpunk collaboration',
        year: '2024',
        image: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
        imageUrl: 'thumbnails/spell.png', 
        description: 'A collaborative project with Khoa Nguyen. He provided green screen footage of himself in a cyberpunk-themed city alley, which I composited into a Blender 3D scene I created. I used After Effects for green screen removal (Keylight) and Premiere Pro for sound design and final editing, showcasing how different tools can work together in a unified workflow.',
        tools: ['After Effects', 'Blender', 'Premiere Pro', 'Compositing'],
        youtube: '6qGtUnrCMAE'
    },
    {
        id: 5,
        title: 'XP or 7',
        type: 'Interactive',
        colors: ['#10b981', '#06b6d4'],
        desc: 'windows era nostalgia',
        year: '2024',
        image: 'linear-gradient(135deg, #10b981, #06b6d4)',
        imageUrl: 'thumbnails/x7.jpg', 
        description: 'An interactive nostalgic journey recreating Windows XP and Windows 7 desktops. Users choose their preferred era and experience two different scenes—XP features a notepad with "Dreamscape" playing (nod to early YouTube tutorials), while Windows 7 adds error popups on every keystroke. The project uses p5.js with SceneManager and the p5.js Sound Library to blend visual nostalgia with playful interaction.',
        tools: ['p5.js', 'SceneManager', 'Sound Library', 'Interactive Design'],
        link: 'p5/johncoding/index.html',
        sourceCode: 'p5/johncoding/sketch.js'
    },
    {
        id: 6,
        title: 'You Look Lonely',
        type: 'Glitch Art',
        colors: ['#8b5cf6', '#ec4899'],
        desc: 'blade runner 2049 AI critique',
        year: '2023',
        image: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        imageUrl: 'thumbnails/glitch.jpg', 
        description: 'A glitched GIF based on a scene from Blade Runner 2049. I chose this film because it raises important concerns about job loss, privacy, and AI decision-making—the same problems we face today with AI art and chatbots. Using text editors and Audacity, I created intentional glitch effects to comment on technology\'s impact on human experience.',
        tools: ['Glitch Art', 'Audacity', 'Digital Manipulation']
    },
    {
        id: 7,
        title: 'Self Portrait',
        type: 'Generative Art',
        colors: ['#fbbf24', '#f59e0b'],
        desc: 'south park style coding',
        year: '2023',
        image: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        imageUrl: 'thumbnails/self.png',
        description: 'A self-portrait in South Park style created entirely with p5.js code. This project demonstrates the intersection of programming and visual art—using push(), translate(), rotate(), and shape functions to construct a detailed character portrait. It\'s a fun exploration of how code can be both functional and artistic.',
        tools: ['p5.js', 'Generative Art', 'Code as Art'],
        codePreview: true
    },
    {
        id: 8,
        title: 'Glitch',
        type: 'Digital Art',
        colors: ['#ec4899', '#f43f5e'],
        desc: 'shrek memes reimagined',
        year: '2023',
        image: 'linear-gradient(135deg, #ec4899, #f43f5e)',
        imageUrl: 'thumbnails/shrek.png', 
        description: 'Taking beloved Shrek memes and adding a modern glitch aesthetic using text editors and Audacity. The Shrek franchise has some of the most iconic memes on the internet, and by applying intentional glitch effects, I give these timeless icons a contemporary digital twist while keeping their nostalgic appeal.',
        tools: ['Glitch Effects', 'Audacity', 'Digital Manipulation']
    },
    {
        id: 9,
        title: 'Helldiver',
        type: '3D Modeling',
        colors: ['#ef4444', '#dc2626'],
        desc: '3D character study',
        year: '2024',
        image: 'linear-gradient(135deg, #ef4444, #dc2626)',
        imageUrl: 'thumbnails/helldiver.png', 
        description: 'A 3D character model created in Blender and textured with Substance Painter. This project showcases character modeling, UV mapping, and material creation skills. The Helldiver from Helldivers 2 serves as an interesting subject for exploring realistic military character design in a stylized sci-fi context.',
        tools: ['Blender', 'Substance Painter', '3D Modeling', 'Texturing']
    },
    {
        id: 10,
        title: 'Synthwave',
        type: 'Motion Graphics',
        colors: ['#06b6d4', '#0891b2'],
        desc: 'neon aesthetic animation',
        year: '2024',
        image: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        imageUrl: 'images/synthwave.gif', 
        description: 'A synthwave-inspired motion graphics piece created in After Effects. This project explores the aesthetic of 80s-influenced digital art with neon colors, geometric shapes, and smooth motion. It captures the cyberpunk nostalgia that runs through much of my work.',
        tools: ['After Effects', 'Motion Graphics', 'Color Grading']
    }
];

// Text content
const bioText = "i make interactive stuff that blends pop culture, nostalgia, and weird internet aesthetics. games. animations. code. glitches.";

const aboutTexts = [
    "i'm a digital artist and game designer at san josé state university. started making digital art in high school and fell in love with blending code and creativity.",
    "obsessed with pop culture, internet culture, nostalgia, and how technology shapes who we are. my work is messy, playful, and unapologetically influenced by whatever i'm into at the moment.",
    "i believe the best work happens when you don't take it too seriously but still put in real effort. balance between craft and chaos."
];

const fullAboutText = aboutTexts.join('\n\n');

// State variables
let hoveredProjectIndex = null;
let scrollProgress = 0;
let selectedProject = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initAboutTypingEffect();
    initProjects();
    initGlitchEffects();
    initScrollEffects();
    // initCursor(); // DISABLED FOR PERFORMANCE
    initModal();
});

// Typing effect for hero section
function initTypingEffect() {
    const typedTextEl = document.getElementById('typed-text');
    let index = 0;
    
    const interval = setInterval(() => {
        if (index <= bioText.length) {
            typedTextEl.textContent = bioText.slice(0, index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 40);
}

// Typing effect for about section
function initAboutTypingEffect() {
    const aboutTypedEl = document.getElementById('about-typed-text');
    let index = 0;
    
    const interval = setInterval(() => {
        if (index <= fullAboutText.length) {
            aboutTypedEl.textContent = fullAboutText.slice(0, index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// Initialize projects grid
function initProjects() {
    const grid = document.getElementById('projects-grid');
    
    projects.forEach((project, idx) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.index = idx;
        
        // Determine background - use image if available, otherwise gradient
        const backgroundStyle = project.imageUrl 
            ? `background-image: url('${project.imageUrl}'); background-size: cover; background-position: center;`
            : `background: ${project.image};`;
        
        card.innerHTML = `
            <div class="project-image" style="border-color: ${project.colors[0]}">
                <div class="project-gradient" style="${backgroundStyle}"></div>
                <div class="scanlines"></div>
                <div class="project-overlay">
                    <div class="overlay-content">
                        <p class="project-type">${project.type}</p>
                        <p class="view-text" style="color: ${project.colors[0]}">[view]</p>
                    </div>
                </div>
            </div>
            <div class="project-info" style="border-color: ${project.colors[0]}">
                <h3 class="project-title">
                    <span class="glitch-text" data-text="${project.title}">${project.title}</span>
                </h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-index">[${idx + 1}]</div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(project));
        
        card.addEventListener('mouseenter', () => {
            hoveredProjectIndex = idx;
            card.querySelector('.project-title .glitch-text').classList.add('active');
        });
        
        card.addEventListener('mouseleave', () => {
            hoveredProjectIndex = null;
            card.querySelector('.project-title .glitch-text').classList.remove('active');
        });
        
        grid.appendChild(card);
    });
}

// Glitch effects (optimized)
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-text:not(.glitch-always)');
    
    glitchElements.forEach(el => {
        // Only run glitch on visible elements
        const runGlitch = () => {
            if (Math.random() > 0.85) {
                el.classList.add('active');
                setTimeout(() => {
                    el.classList.remove('active');
                }, 100);
            }
        };
        
        // Less frequent checks
        setInterval(runGlitch, 6000 + Math.random() * 6000);
    });
}

// Scroll effects for about section (optimized with throttle)
function initScrollEffects() {
    let ticking = false;
    const items = document.querySelectorAll('.info-item');
    
    // Check if viewport is wide enough for animations
    const shouldAnimate = window.innerWidth > 768;
    
    if (shouldAnimate) {
        // Set initial state for animation on desktop
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
        });
    } else {
        // On mobile, keep items visible
        items.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        });
        return; // Don't set up scroll listeners on mobile
    }
    
    // Check if about section is in view to stop unnecessary calculations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && scrollProgress >= 1) {
                // Section fully animated, stop recalculating
                items.forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                });
            }
        });
    });
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (aboutSection) {
                    const rect = aboutSection.getBoundingClientRect();
                    const newProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
                    
                    // Only update if progress changed significantly
                    if (Math.abs(newProgress - scrollProgress) > 0.01) {
                        scrollProgress = newProgress;
                        if (scrollProgress < 0.99) {
                            updateAboutAnimations();
                        } else {
                            // Ensure all items are fully visible at the end
                            items.forEach(item => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                            });
                        }
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function updateAboutAnimations() {
    const items = document.querySelectorAll('.info-item');
    
    items.forEach((item) => {
        const itemIndex = parseInt(item.dataset.index);
        const opacity = Math.min(1, Math.max(0, scrollProgress * 3 - itemIndex * 0.25));
        const translateX = Math.max(0, (1 - scrollProgress) * 20 - itemIndex * 5);
        
        item.style.opacity = opacity;
        item.style.transform = `translateX(${translateX}px)`;
    });
}

// Tool hover effects
document.addEventListener('DOMContentLoaded', () => {
    const toolItems = document.querySelectorAll('#tools-list .info-item');
    
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('gradient-text');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('gradient-text');
        });
    });
});

// Modal functionality
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const meta = document.getElementById('modal-meta');
    const videoDiv = document.getElementById('modal-video');
    const description = document.getElementById('modal-description');
    const toolsDiv = document.getElementById('modal-tools');
    const linksDiv = document.getElementById('modal-links');
    
    // Pause animations and scrolling when modal opens
    document.body.style.overflow = 'hidden';
    
    // Set title and meta
    title.textContent = project.title;
    title.style.color = project.colors[0];
    meta.textContent = `${project.type} • ${project.year}`;
    
    // Set video if exists (use lazy loading)
    if (project.youtube) {
        videoDiv.innerHTML = `
            <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/${project.youtube}"
                title="${project.title}"
                frameborder="0"
                loading="lazy"
                allowfullscreen
            ></iframe>
        `;
    } else {
        videoDiv.innerHTML = '';
    }
    
    // Set description
    description.textContent = project.description;
    
    // Set tools
    toolsDiv.innerHTML = '';
    if (project.tools) {
        project.tools.forEach(tool => {
            const tag = document.createElement('span');
            tag.className = 'tool-tag';
            tag.textContent = tool;
            toolsDiv.appendChild(tag);
        });
    }
    
    // Set links
    linksDiv.innerHTML = '';
    if (project.link) {
        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'modal-link primary';
        link.textContent = '→ Try Project';
        linksDiv.appendChild(link);
    }
    if (project.sourceCode) {
        const link = document.createElement('a');
        link.href = project.sourceCode;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'modal-link secondary';
        link.textContent = '→ View Source Code';
        linksDiv.appendChild(link);
    }
    
    // Use setTimeout to ensure smooth transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    const videoDiv = document.getElementById('modal-video');
    
    // Remove iframe to stop video playback
    videoDiv.innerHTML = '';
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
