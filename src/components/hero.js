// Hero section animations and interactions
class HeroManager {
    constructor() {
        this.init();
    }

    init() {
        this.animateEntrance();
        this.setupParallax();
        this.trackEngagement();
    }

    animateEntrance() {
        // Fade in elements sequentially
        const elements = [
            '.animate-bounce',
            'h1',
            'p',
            '#countdown-timer',
            '#stock-counter',
            'button'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(`#hero ${selector}`);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.6s ease-out';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }

    setupParallax() {
        // Subtle parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.getElementById('hero');
            
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    trackEngagement() {
        // Track hero view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    analytics.trackFunnelStep('view_hero');
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        const hero = document.getElementById('hero');
        if (hero) {
            observer.observe(hero);
        }
    }
}

// Initialize hero manager
document.addEventListener('DOMContentLoaded', () => {
    new HeroManager();
});