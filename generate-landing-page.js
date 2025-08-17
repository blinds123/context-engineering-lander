#!/usr/bin/env node

/**
 * Complete Landing Page Generator
 * Generates all assets and builds production-ready landing page
 */

const fs = require('fs');
const path = require('path');

// Configuration from initialupdate.md
const CONFIG = {
    product: {
        url: 'https://www.maisonmargiela.com/en-au/twist-wide-leg-jeans-S52LA0243M30016961.html',
        name: 'Maison Margiela Twist Wide Leg Jeans',
        retailPrice: 990,
        offerPrice: 0,
        shippingPrice: 19.95,
        stockCount: 47,
        sizes: ['26', '28', '30', '32', '34', '36', '38', '40'],
        soldOutSizes: ['26', '36', '38'],
        lowStockSizes: { '28': 3, '34': 5 }
    },
    timer: {
        minutes: 15,
        warningAt: 5
    },
    viewers: {
        min: 200,
        max: 300,
        current: 237
    }
};

// Create directory structure
function createDirectories() {
    const dirs = [
        'images/product',
        'images/story',
        'images/reviews',
        'images/ui',
        'images/testimonials',
        'js',
        'css'
    ];
    
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`✓ Created directory: ${dir}`);
        }
    });
}

// Generate SVG assets
function generateSVGAssets() {
    // TikTok UI Overlay
    const tiktokUI = `<svg width="390" height="844" viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">
        <!-- Right Sidebar -->
        <g id="sidebar" transform="translate(330, 400)">
            <!-- Like Button -->
            <circle cx="24" cy="0" r="24" fill="rgba(255,255,255,0.1)"/>
            <text x="24" y="5" text-anchor="middle" fill="white" font-size="20">❤️</text>
            <text x="24" y="35" text-anchor="middle" fill="white" font-size="11">234.5K</text>
            
            <!-- Comment Button -->
            <circle cx="24" cy="70" r="24" fill="rgba(255,255,255,0.1)"/>
            <text x="24" y="75" text-anchor="middle" fill="white" font-size="20">💬</text>
            <text x="24" y="105" text-anchor="middle" fill="white" font-size="11">8,947</text>
            
            <!-- Share Button -->
            <circle cx="24" cy="140" r="24" fill="rgba(255,255,255,0.1)"/>
            <text x="24" y="145" text-anchor="middle" fill="white" font-size="20">↗️</text>
            <text x="24" y="175" text-anchor="middle" fill="white" font-size="11">Share</text>
        </g>
    </svg>`;
    
    fs.writeFileSync('images/ui/tiktok-overlay.svg', tiktokUI);
    
    // Play Button
    const playButton = `<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.9)"/>
        <path d="M32 25 L32 55 L52 40 Z" fill="black"/>
    </svg>`;
    
    fs.writeFileSync('images/ui/play-button.svg', playButton);
    
    // Trust Badges
    const trustBadges = `<svg width="240" height="60" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
        <!-- SSL Secure -->
        <g transform="translate(0, 0)">
            <circle cx="30" cy="30" r="25" fill="#000"/>
            <text x="30" y="35" text-anchor="middle" fill="white" font-size="20">🔒</text>
        </g>
        <!-- Verified -->
        <g transform="translate(60, 0)">
            <circle cx="30" cy="30" r="25" fill="#000"/>
            <text x="30" y="35" text-anchor="middle" fill="white" font-size="20">✓</text>
        </g>
        <!-- Fast Ship -->
        <g transform="translate(120, 0)">
            <circle cx="30" cy="30" r="25" fill="#000"/>
            <text x="30" y="35" text-anchor="middle" fill="white" font-size="20">🚚</text>
        </g>
        <!-- Returns -->
        <g transform="translate(180, 0)">
            <circle cx="30" cy="30" r="25" fill="#000"/>
            <text x="30" y="35" text-anchor="middle" fill="white" font-size="20">↩️</text>
        </g>
    </svg>`;
    
    fs.writeFileSync('images/ui/trust-badges.svg', trustBadges);
    
    console.log('✓ Generated SVG assets');
}

// Generate Story Slides
function generateStorySlides() {
    const stories = [
        { title: "We Found 47 Pairs", subtitle: "In Margiela's Warehouse", bg: "#667eea" },
        { title: "Worth $990 Each", subtitle: "At Barneys & Bergdorf", bg: "#764ba2" },
        { title: "Instead of 300% Markup", subtitle: "We're Different", bg: "#f093fb" },
        { title: "Giving Them Away FREE", subtitle: "You Read That Right", bg: "#f5576c" },
        { title: "Just $19.95 Shipping", subtitle: "That's All You Pay", bg: "#4facfe" },
        { title: "Once Gone, Gone Forever", subtitle: "No Restocks Possible", bg: "#00f2fe" }
    ];
    
    stories.forEach((story, i) => {
        const svg = `<svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${story.bg};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#${Math.floor(Math.random()*16777215).toString(16)};stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="300" height="400" fill="url(#bg${i})"/>
            <text x="150" y="180" text-anchor="middle" fill="white" font-size="28" font-weight="bold">${story.title}</text>
            <text x="150" y="220" text-anchor="middle" fill="white" font-size="18">${story.subtitle}</text>
        </svg>`;
        
        fs.writeFileSync(`images/story/slide-${i + 1}.svg`, svg);
    });
    
    console.log('✓ Generated story slides');
}

// Generate TikTok Comments
function generateTikTokComments() {
    const comments = [
        { user: "@sarah_styles", text: "OMG I GOT MINE!! They're actually real Margiela 😭", likes: "2,847" },
        { user: "@fashionista22", text: "RUNNING to get these before they sell out!!", likes: "1,923" },
        { user: "@luxelife", text: "The twist seam is everything! Quality is insane", likes: "3,451" },
        { user: "@milanvibes", text: "Size 30 already gone 😭 got 32 instead", likes: "892" },
        { user: "@denimqueen", text: "These retail for $990 at Barneys confirmed", likes: "5,678" },
        { user: "@tokyostreet", text: "Japanese denim quality is unmatched", likes: "4,321" },
        { user: "@vintage_finds", text: "Better than my vintage Margielas tbh", likes: "2,109" },
        { user: "@hypebeast101", text: "Copped 2 pairs, this deal is insane", likes: "7,234" },
        { user: "@runway_ready", text: "Wearing these to fashion week!!", likes: "9,876" },
        { user: "@thrifted_lux", text: "Just got shipping confirmation!", likes: "6,543" }
    ];
    
    comments.forEach((comment, i) => {
        const svg = `<svg width="350" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect width="350" height="100" fill="rgba(255,255,255,0.05)" rx="10"/>
            <circle cx="30" cy="30" r="16" fill="${'#' + Math.floor(Math.random()*16777215).toString(16)}"/>
            <text x="55" y="25" fill="white" font-size="14" font-weight="600">${comment.user}</text>
            <text x="55" y="50" fill="white" font-size="13">${comment.text}</text>
            <text x="55" y="75" fill="rgba(255,255,255,0.7)" font-size="11">❤️ ${comment.likes}</text>
        </svg>`;
        
        fs.writeFileSync(`images/reviews/comment-${i + 1}.svg`, svg);
    });
    
    console.log('✓ Generated TikTok comments');
}

// Generate Size Chart
function generateSizeChart() {
    const chart = `<svg width="350" height="260" viewBox="0 0 350 260" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="350" height="260" fill="#f8f8f8"/>
        
        <!-- Grid -->
        <line x1="50" y1="30" x2="50" y2="210" stroke="#ddd" stroke-width="1"/>
        <line x1="50" y1="210" x2="320" y2="210" stroke="#ddd" stroke-width="1"/>
        
        <!-- Size 26 - SOLD OUT -->
        <rect x="70" y="170" width="30" height="40" fill="#ff6b6b" opacity="0.3"/>
        <text x="85" y="165" font-size="12" text-anchor="middle">26</text>
        <text x="85" y="230" font-size="10" text-anchor="middle">SOLD</text>
        
        <!-- Size 28 - Low Stock -->
        <rect x="110" y="150" width="30" height="60" fill="#ffd93d"/>
        <text x="125" y="145" font-size="12" text-anchor="middle">28</text>
        <text x="125" y="230" font-size="10" text-anchor="middle">3 left</text>
        
        <!-- Size 30 - Available -->
        <rect x="150" y="130" width="30" height="80" fill="#6bcf7f"/>
        <text x="165" y="125" font-size="12" text-anchor="middle">30</text>
        <text x="165" y="230" font-size="10" text-anchor="middle">8 left</text>
        
        <!-- Size 32 - Available -->
        <rect x="190" y="110" width="30" height="100" fill="#6bcf7f"/>
        <text x="205" y="105" font-size="12" text-anchor="middle">32</text>
        <text x="205" y="230" font-size="10" text-anchor="middle">12 left</text>
        
        <!-- Size 34 - Low Stock -->
        <rect x="230" y="140" width="30" height="70" fill="#ffd93d"/>
        <text x="245" y="135" font-size="12" text-anchor="middle">34</text>
        <text x="245" y="230" font-size="10" text-anchor="middle">5 left</text>
        
        <!-- Size 36 - SOLD OUT -->
        <rect x="270" y="170" width="30" height="40" fill="#ff6b6b" opacity="0.3"/>
        <text x="285" y="165" font-size="12" text-anchor="middle">36</text>
        <text x="285" y="230" font-size="10" text-anchor="middle">SOLD</text>
    </svg>`;
    
    fs.writeFileSync('images/ui/size-chart.svg', chart);
    console.log('✓ Generated size chart');
}

// Generate JavaScript files
function generateJavaScriptFiles() {
    // Timer.js
    const timerJS = `// Countdown Timer with LocalStorage persistence
class CountdownTimer {
    constructor(minutes = ${CONFIG.timer.minutes}) {
        this.duration = minutes * 60 * 1000;
        this.endTime = this.getStoredEndTime() || Date.now() + this.duration;
        this.saveEndTime();
        this.interval = null;
    }
    
    getStoredEndTime() {
        const stored = localStorage.getItem('mm_timer_end');
        if (stored) {
            const endTime = parseInt(stored);
            if (endTime > Date.now()) return endTime;
        }
        return null;
    }
    
    saveEndTime() {
        localStorage.setItem('mm_timer_end', this.endTime.toString());
    }
    
    start() {
        this.update();
        this.interval = setInterval(() => this.update(), 1000);
    }
    
    update() {
        const remaining = Math.max(0, this.endTime - Date.now());
        const hours = Math.floor(remaining / 3600000);
        const minutes = Math.floor((remaining % 3600000) / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        document.getElementById('timer-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('timer-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('timer-seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (remaining === 0) this.onExpire();
        if (remaining < ${CONFIG.timer.warningAt} * 60000) {
            document.getElementById('countdown-timer').classList.add('warning');
        }
    }
    
    onExpire() {
        clearInterval(this.interval);
        document.getElementById('countdown-timer').innerHTML = '<p class="expired">OFFER EXPIRED - Refresh for new timer</p>';
    }
}`;
    
    fs.writeFileSync('js/timer.js', timerJS);
    
    // Stock.js
    const stockJS = `// Stock Management with animations
class StockManager {
    constructor(initial = ${CONFIG.product.stockCount}) {
        this.initial = initial;
        this.current = this.getStoredStock() || initial;
        this.init();
    }
    
    getStoredStock() {
        const stored = localStorage.getItem('mm_stock');
        if (stored) {
            const data = JSON.parse(stored);
            if (Date.now() - data.timestamp < 86400000) {
                return data.count;
            }
        }
        return null;
    }
    
    saveStock() {
        localStorage.setItem('mm_stock', JSON.stringify({
            count: this.current,
            timestamp: Date.now()
        }));
    }
    
    decrement() {
        if (this.current > 5) {
            this.current--;
            this.saveStock();
            this.updateDisplay();
            this.showNotification();
        }
    }
    
    updateDisplay() {
        document.getElementById('stock-number').textContent = this.current;
        const percentage = (this.current / this.initial) * 100;
        document.getElementById('stock-bar').style.width = percentage + '%';
        
        if (this.current < 10) {
            document.getElementById('stock-counter').classList.add('low-stock');
        }
    }
    
    showNotification() {
        const names = ['Emma', 'Sarah', 'Jessica', 'Ashley', 'Madison'];
        const cities = ['NYC', 'LA', 'Miami', 'Chicago', 'Seattle'];
        const sizes = ['28', '30', '32', '34'];
        
        const notification = document.createElement('div');
        notification.className = 'stock-notification';
        notification.textContent = \`\${names[Math.floor(Math.random() * names.length)]} from \${cities[Math.floor(Math.random() * cities.length)]} just claimed Size \${sizes[Math.floor(Math.random() * sizes.length)]}\`;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 5000);
    }
    
    init() {
        this.updateDisplay();
        setInterval(() => {
            if (Math.random() > 0.7) this.decrement();
        }, Math.random() * 60000 + 30000);
    }
}`;
    
    fs.writeFileSync('js/stock.js', stockJS);
    
    // Popup.js
    const popupJS = `// Popup Management System
class PopupManager {
    constructor() {
        this.xlShown = false;
        this.exitShown = false;
        this.init();
    }
    
    init() {
        // XL Popup after 15 seconds
        setTimeout(() => this.showXLPopup(), 15000);
        
        // Exit Intent
        document.addEventListener('mouseout', (e) => {
            if (e.clientY <= 0 && !this.exitShown) {
                this.showExitPopup();
            }
        });
        
        // Mobile scroll detection
        let lastScroll = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll < lastScroll && currentScroll < 200 && !this.exitShown) {
                this.showExitPopup();
            }
            lastScroll = currentScroll;
        });
    }
    
    showXLPopup() {
        if (!this.xlShown && !sessionStorage.getItem('xl_shown')) {
            document.getElementById('xl-popup').classList.add('show');
            this.xlShown = true;
            sessionStorage.setItem('xl_shown', 'true');
        }
    }
    
    showExitPopup() {
        if (!this.exitShown && !sessionStorage.getItem('exit_shown')) {
            document.getElementById('exit-popup').classList.add('show');
            this.exitShown = true;
            sessionStorage.setItem('exit_shown', 'true');
        }
    }
    
    closePopup(id) {
        document.getElementById(id).classList.remove('show');
    }
}`;
    
    fs.writeFileSync('js/popup.js', popupJS);
    
    // Carousel.js
    const carouselJS = `// Universal Carousel System
class Carousel {
    constructor(element) {
        this.element = element;
        this.slides = element.querySelector('.carousel-slides');
        this.dots = element.querySelector('.carousel-dots');
        this.currentSlide = 0;
        this.totalSlides = this.slides.children.length;
        this.init();
    }
    
    init() {
        this.createDots();
        this.addTouchSupport();
        this.addClickHandlers();
        this.autoPlay();
    }
    
    createDots() {
        if (!this.dots) return;
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dots.appendChild(dot);
        }
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.slides.style.transform = \`translateX(-\${index * 100}%)\`;
        this.updateDots();
    }
    
    updateDots() {
        if (!this.dots) return;
        this.dots.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentSlide);
        });
    }
    
    next() {
        this.goToSlide((this.currentSlide + 1) % this.totalSlides);
    }
    
    prev() {
        this.goToSlide((this.currentSlide - 1 + this.totalSlides) % this.totalSlides);
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.slides.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.slides.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) this.next();
            if (endX - startX > 50) this.prev();
        });
    }
    
    addClickHandlers() {
        const prevBtn = this.element.querySelector('.carousel-prev');
        const nextBtn = this.element.querySelector('.carousel-next');
        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    }
    
    autoPlay() {
        setInterval(() => this.next(), 5000);
    }
}`;
    
    fs.writeFileSync('js/carousel.js', carouselJS);
    
    console.log('✓ Generated JavaScript files');
}

// Generate CSS
function generateCSS() {
    const css = `/* Complete Landing Page Styles */
:root {
    --primary: #000;
    --accent: #FF0000;
    --success: #00C851;
    --warning: #FFD700;
    --danger: #FF3838;
    --bg: #FFF;
    --text: #1a1a1a;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

/* TikTok Hero */
.tiktok-hero {
    position: relative;
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
    height: 100vh;
    background: #000;
    overflow: hidden;
}

.tiktok-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}

/* Live Viewers */
.live-viewers {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--accent);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    z-index: 1000;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Countdown Timer */
.countdown-timer {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    background: var(--accent);
    color: white;
}

.countdown-timer.warning {
    animation: flash 1s infinite;
}

@keyframes flash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Stock Counter */
.stock-counter {
    padding: 20px;
    background: #FFF3CD;
    border: 2px solid var(--warning);
    border-radius: 12px;
    text-align: center;
    margin: 20px;
}

.stock-number {
    font-size: 48px;
    font-weight: 900;
    color: var(--accent);
}

.stock-bar {
    width: 100%;
    height: 20px;
    background: #E9ECEF;
    border-radius: 10px;
    overflow: hidden;
    margin: 15px 0;
}

.stock-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), #FF6B6B);
    transition: width 1s;
}

.low-stock .stock-number {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* Size Selector */
.size-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
}

.size-btn {
    padding: 15px;
    border: 2px solid #DDD;
    background: white;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.size-btn:hover {
    border-color: var(--primary);
    transform: scale(1.05);
}

.size-btn.selected {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.size-btn.sold-out {
    opacity: 0.3;
    cursor: not-allowed;
    position: relative;
}

.size-btn.sold-out::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 2px;
    background: #999;
    transform: rotate(-45deg);
}

/* Sticky Checkout */
.checkout-sticky {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background: white;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
    z-index: 100;
}

.checkout-btn {
    width: 100%;
    padding: 18px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    animation: pulse 3s infinite;
}

/* Carousels */
.carousel {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.carousel-slides {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel-slide {
    min-width: 100%;
    width: 100%;
}

.carousel-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: all 0.3s;
}

.dot.active {
    background: white;
    transform: scale(1.5);
}

/* Popups */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.popup.show {
    display: flex;
}

.popup-content {
    background: white;
    padding: 40px;
    border-radius: 20px;
    max-width: 350px;
    text-align: center;
}

/* Trust Badges */
.trust-badges {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 30px 20px;
    background: #F8F8F8;
}

/* Notifications */
.stock-notification {
    position: fixed;
    bottom: 100px;
    left: 20px;
    right: 20px;
    background: var(--success);
    color: white;
    padding: 15px;
    border-radius: 10px;
    animation: slideUp 0.5s;
    z-index: 90;
}

@keyframes slideUp {
    from { transform: translateY(100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Mobile Optimizations */
@media (max-width: 768px) {
    body {
        font-size: 16px;
    }
    
    .container {
        padding: 0 15px;
    }
    
    .section {
        padding: 40px 20px;
    }
}

/* Print Styles */
@media print {
    .live-viewers,
    .checkout-sticky,
    .popup {
        display: none !important;
    }
}`;
    
    fs.writeFileSync('css/styles.css', css);
    console.log('✓ Generated CSS file');
}

// Generate Complete HTML
function generateHTML() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${CONFIG.product.name} - FREE (Just Pay Shipping)</title>
    <meta name="description" content="Get $${CONFIG.product.retailPrice} ${CONFIG.product.name} FREE. Just pay $${CONFIG.product.shippingPrice} shipping. Only ${CONFIG.product.stockCount} available.">
    
    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Live Viewers Badge -->
    <div class="live-viewers">
        <span class="live-dot"></span>
        <span id="viewer-count">${CONFIG.viewers.current}</span> watching now
    </div>
    
    <!-- Section 1: Fake TikTok Hero -->
    <section class="tiktok-hero">
        <div class="tiktok-video-bg">
            <img src="images/product/margiela-jeans-main.jpg" alt="${CONFIG.product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="tiktok-overlay">
            <img src="images/ui/tiktok-overlay.svg" alt="TikTok UI" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
            <div class="play-button" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <img src="images/ui/play-button.svg" alt="Play" width="80" height="80">
            </div>
        </div>
    </section>
    
    <!-- Section 2: Video Carousel -->
    <section class="section video-carousel">
        <h2>As Seen On TikTok</h2>
        <div class="carousel">
            <div class="carousel-slides">
                <img src="images/product/screenshot-1.jpg" class="carousel-slide" alt="TikTok Video 1">
                <img src="images/product/screenshot-2.jpg" class="carousel-slide" alt="TikTok Video 2">
                <img src="images/product/screenshot-3.jpg" class="carousel-slide" alt="TikTok Video 3">
            </div>
            <div class="carousel-dots"></div>
        </div>
    </section>
    
    <!-- Section 3: Webinar Story -->
    <section class="section story-section">
        <h2>The Story Behind This Offer</h2>
        <div class="carousel">
            <div class="carousel-slides">
                ${[1,2,3,4,5,6].map(i => `<img src="images/story/slide-${i}.svg" class="carousel-slide" alt="Story ${i}">`).join('')}
            </div>
            <div class="carousel-dots"></div>
        </div>
    </section>
    
    <!-- Section 4: TikTok Reviews -->
    <section class="section tiktok-reviews">
        <h2>What People Are Saying</h2>
        <div class="reviews-container">
            ${[1,2,3,4,5,6,7,8,9,10].map(i => `<img src="images/reviews/comment-${i}.svg" alt="Review ${i}" style="width: 100%; margin-bottom: 10px;">`).join('')}
        </div>
    </section>
    
    <!-- Section 5: Size Predictor -->
    <section class="section size-predictor">
        <h2>Size Availability</h2>
        <img src="images/ui/size-chart.svg" alt="Size Chart" style="width: 100%; max-width: 400px; margin: 0 auto; display: block;">
    </section>
    
    <!-- Section 6: Countdown Timer -->
    <section class="countdown-section">
        <h2>⏰ OFFER EXPIRES IN</h2>
        <div class="countdown-timer" id="countdown-timer">
            <div class="time-unit">
                <span id="timer-hours">00</span>
                <span>HOURS</span>
            </div>
            <div class="time-unit">
                <span id="timer-minutes">14</span>
                <span>MINUTES</span>
            </div>
            <div class="time-unit">
                <span id="timer-seconds">59</span>
                <span>SECONDS</span>
            </div>
        </div>
    </section>
    
    <!-- Section 7: Stock Counter -->
    <section class="stock-counter" id="stock-counter">
        <h3>⚠️ STOCK ALERT</h3>
        <div class="stock-number" id="stock-number">${CONFIG.product.stockCount}</div>
        <p>Pairs Remaining</p>
        <div class="stock-bar">
            <div class="stock-fill" id="stock-bar" style="width: ${CONFIG.product.stockCount}%"></div>
        </div>
    </section>
    
    <!-- Section 8: Trustpilot -->
    <section class="section trustpilot">
        <h2>Trustpilot Reviews</h2>
        <div class="rating">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <div class="rating-number">4.9/5</div>
            <p>Based on 2,847 reviews</p>
        </div>
    </section>
    
    <!-- Section 9: Payment Methods -->
    <section class="section payment-methods">
        <div class="payment-grid">
            ${['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay'].map(method => 
                `<div class="payment-icon">${method}</div>`
            ).join('')}
        </div>
    </section>
    
    <!-- Section 10: Free Shipping -->
    <section class="section shipping-badge">
        <h2>🚚 FREE SHIPPING</h2>
        <p>On orders over $${CONFIG.product.shippingPrice}</p>
    </section>
    
    <!-- Section 11: Guarantee -->
    <section class="section guarantee">
        <div class="guarantee-badge">
            <div class="shield">🛡️</div>
            <h2>30-Day Money Back Guarantee</h2>
            <p>Not satisfied? Full refund, no questions asked</p>
        </div>
    </section>
    
    <!-- Section 12: Price Comparison -->
    <section class="section price-compare">
        <h2>Compare & Save</h2>
        <div class="price-boxes">
            <div class="price-box">
                <p>Retail Price</p>
                <div class="old-price">$${CONFIG.product.retailPrice}</div>
            </div>
            <div class="price-box">
                <p>Your Price</p>
                <div class="new-price">FREE</div>
                <p class="shipping">+ $${CONFIG.product.shippingPrice} shipping</p>
            </div>
        </div>
        <div class="savings">You Save $${CONFIG.product.retailPrice - CONFIG.product.shippingPrice} (98% OFF)</div>
    </section>
    
    <!-- Section 13: Size Selector -->
    <section class="section size-selector">
        <h2>Select Your Size</h2>
        <div class="size-grid">
            ${CONFIG.product.sizes.map(size => {
                const isSoldOut = CONFIG.product.soldOutSizes.includes(size);
                const lowStock = CONFIG.product.lowStockSizes[size];
                return `<button class="size-btn ${isSoldOut ? 'sold-out' : ''}" ${isSoldOut ? 'disabled' : ''}>
                    ${size}
                    ${lowStock ? `<span class="stock-label">${lowStock} left</span>` : ''}
                </button>`;
            }).join('')}
        </div>
    </section>
    
    <!-- Section 14: Trust Badges -->
    <section class="trust-badges">
        <img src="images/ui/trust-badges.svg" alt="Trust Badges">
    </section>
    
    <!-- Section 15: Celebrity Wall -->
    <section class="section celebrity-wall">
        <h2>Worn By Fashion Icons</h2>
        <div class="celebrity-grid">
            ${['Bella H.', 'Kendall J.', 'Gigi H.', 'Hailey B.', 'Rosie HW.', 'Zendaya'].map(name => 
                `<div class="celebrity-item">${name}</div>`
            ).join('')}
        </div>
    </section>
    
    <!-- Section 16: Before/After -->
    <section class="section before-after">
        <h2>The Transformation</h2>
        <div class="ba-container">
            <div class="ba-image before">
                <span class="label">BEFORE</span>
                <p>Regular Jeans</p>
            </div>
            <div class="ba-image after">
                <span class="label">AFTER</span>
                <p>Margiela Magic</p>
            </div>
        </div>
    </section>
    
    <!-- Section 17: Bundle Upsell -->
    <section class="section bundle-upsell">
        <div class="bundle-box">
            <h2>🎁 COMPLETE THE LOOK</h2>
            <p>Add matching pieces for 50% off!</p>
            <div class="bundle-items">
                <div class="bundle-item">Top<br>$495</div>
                <div class="bundle-item">Bag<br>$890</div>
                <div class="bundle-item">Shoes<br>$650</div>
            </div>
            <p class="note">Available at checkout only!</p>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <div class="footer-links">
            <a href="#">Privacy</a> | 
            <a href="#">Terms</a> | 
            <a href="#">Contact</a> | 
            <a href="#">Returns</a>
        </div>
        <p>© 2024 Fashion Deals. Not affiliated with Maison Margiela.</p>
        <p>This is a limited promotional offer.</p>
    </footer>
    
    <!-- Sticky Checkout Button -->
    <div class="checkout-sticky">
        <button class="checkout-btn">
            CLAIM FREE JEANS → PAY $${CONFIG.product.shippingPrice} SHIPPING
        </button>
    </div>
    
    <!-- XL Popup -->
    <div class="popup" id="xl-popup">
        <div class="popup-content">
            <h2>⚡ LAST CHANCE!</h2>
            <p>Only ${CONFIG.product.stockCount} pairs at this price!</p>
            <div class="popup-price">FREE</div>
            <p>Just pay $${CONFIG.product.shippingPrice} shipping</p>
            <button class="checkout-btn" onclick="popupManager.closePopup('xl-popup')">CLAIM YOURS NOW</button>
        </div>
    </div>
    
    <!-- Exit Popup -->
    <div class="popup" id="exit-popup">
        <div class="popup-content">
            <h2>WAIT! Don't Miss Out!</h2>
            <p>This offer expires soon!</p>
            <button class="checkout-btn" onclick="popupManager.closePopup('exit-popup')">GET MY FREE JEANS</button>
        </div>
    </div>
    
    <!-- Scripts -->
    <script src="js/timer.js"></script>
    <script src="js/stock.js"></script>
    <script src="js/popup.js"></script>
    <script src="js/carousel.js"></script>
    <script>
        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
            // Timer
            const timer = new CountdownTimer();
            timer.start();
            
            // Stock
            const stock = new StockManager();
            
            // Popups
            const popupManager = new PopupManager();
            
            // Carousels
            document.querySelectorAll('.carousel').forEach(carousel => {
                new Carousel(carousel);
            });
            
            // Viewer count updates
            setInterval(() => {
                const count = ${CONFIG.viewers.min} + Math.floor(Math.random() * ${CONFIG.viewers.max - CONFIG.viewers.min});
                document.getElementById('viewer-count').textContent = count;
            }, 5000);
            
            // Size selection
            document.querySelectorAll('.size-btn:not(.sold-out)').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        });
    </script>
    
    <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
    </script>
</body>
</html>`;
    
    fs.writeFileSync('index-generated.html', html);
    console.log('✓ Generated complete HTML file');
}

// Main execution
function generateLandingPage() {
    console.log('🚀 Starting Landing Page Generation...\n');
    
    createDirectories();
    generateSVGAssets();
    generateStorySlides();
    generateTikTokComments();
    generateSizeChart();
    generateJavaScriptFiles();
    generateCSS();
    generateHTML();
    
    console.log('\n✅ Landing page generation complete!');
    console.log('📁 Files created:');
    console.log('   - index-generated.html');
    console.log('   - /css/styles.css');
    console.log('   - /js/ (timer.js, stock.js, popup.js, carousel.js)');
    console.log('   - /images/ (all assets)');
    console.log('\n🌐 Open index-generated.html in your browser to view the landing page');
}

// Run the generator
generateLandingPage();