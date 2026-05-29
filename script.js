// ===== Configuration =====
const FRAME_COUNT = 240;
const FRAME_DIR = './ezgif-35b2951b31e39886-jpg/';

// Build frame path from index (1-based)
function framePath(index) {
    return `${FRAME_DIR}ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
}

// ===== DOM Elements =====
const canvas = document.getElementById('scrollCanvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');
const loaderPercent = document.getElementById('loaderPercent');
const scrollProgressFill = document.getElementById('scrollProgressFill');
const frameCounter = document.getElementById('frameCounter');
const overlayText1 = document.getElementById('overlayText1');
const overlayText2 = document.getElementById('overlayText2');
const overlayText3 = document.getElementById('overlayText3');
const animationSection = document.getElementById('animation-section');
const heroHeading = document.getElementById('heroHeading');
const navbar = document.getElementById('navbar');

// ===== Preload all frames =====
const images = [];
let loadedCount = 0;

function preloadImages() {
    return new Promise((resolve) => {
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = framePath(i);
            img.onload = img.onerror = () => {
                loadedCount++;
                const pct = Math.round((loadedCount / FRAME_COUNT) * 100);
                loaderBar.style.width = pct + '%';
                loaderPercent.textContent = pct + '%';
                if (loadedCount === FRAME_COUNT) {
                    resolve();
                }
            };
            images.push(img);
        }
    });
}

// ===== Canvas rendering =====
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawFrame(index) {
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover logic (like CSS object-fit: cover)
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
}

// ===== Scroll handler =====
let currentFrame = 0;
let ticking = false;

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

function updateOnScroll() {
    ticking = false;

    // Navbar glass effect on scroll
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Calculate which frame to show based on scroll position within animation section
    const sectionTop = animationSection.offsetTop;
    const sectionHeight = animationSection.offsetHeight - window.innerHeight;
    const scrolled = window.scrollY - sectionTop;
    const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);

    const frameIndex = Math.min(Math.floor(progress * FRAME_COUNT), FRAME_COUNT - 1);

    if (frameIndex !== currentFrame && frameIndex >= 0) {
        currentFrame = frameIndex;
        drawFrame(currentFrame);
    }

    // Update progress bar and counter
    scrollProgressFill.style.height = (progress * 100) + '%';
    frameCounter.textContent = `${String(currentFrame + 1).padStart(3, '0')} / ${FRAME_COUNT}`;

    // Fade out hero heading after 30% scroll
    if (progress > 0.30) {
        heroHeading.classList.add('faded');
    } else {
        heroHeading.classList.remove('faded');
    }

    // Overlay text logic — show at specific progress points
    // Text 1: "FEEL THE SPLASH" — show around 15%-25%
    toggleOverlay(overlayText1, progress, 0.15, 0.25);
    // Text 2: "BLUE EDITION UNLEASHED" — show around 45%-55%
    toggleOverlay(overlayText2, progress, 0.45, 0.55);
    // Text 3: "BLUEBERRY ENERGY" — show around 75%-85%
    toggleOverlay(overlayText3, progress, 0.75, 0.85);
}

function toggleOverlay(el, progress, start, end) {
    if (progress >= start && progress <= end) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
}

// ===== Init =====
async function init() {
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        drawFrame(currentFrame);
    });

    // Preload all frames
    await preloadImages();

    // Draw first frame
    drawFrame(0);

    // Hide loader
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 400);

    // Start listening to scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial update
    updateOnScroll();
}

init();
