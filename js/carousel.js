// Universal Carousel System
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
        this.slides.style.transform = `translateX(-${index * 100}%)`;
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
}