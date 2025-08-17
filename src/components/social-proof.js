// Social proof and testimonial management
class SocialProofManager {
    constructor() {
        this.claims = [
            { name: 'Sarah M.', city: 'NYC', size: '28', time: 12 },
            { name: 'Emma K.', city: 'LA', size: '30', time: 45 },
            { name: 'Michael R.', city: 'Chicago', size: '32', time: 78 },
            { name: 'Lisa T.', city: 'Miami', size: '26', time: 123 },
            { name: 'David B.', city: 'Seattle', size: '34', time: 189 },
            { name: 'Anna S.', city: 'Boston', size: '28', time: 234 },
            { name: 'Chris W.', city: 'Denver', size: '30', time: 301 },
            { name: 'Jessica L.', city: 'Austin', size: '26', time: 367 }
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.rotateClaims();
        this.animateReviews();
    }

    rotateClaims() {
        const ticker = document.getElementById('latest-claim');
        if (!ticker) return;

        // Update every 8 seconds
        setInterval(() => {
            const claim = this.claims[this.currentIndex];
            ticker.textContent = `${claim.name} from ${claim.city} just claimed Size ${claim.size}`;
            
            // Update time ago
            const timeElement = ticker.nextElementSibling;
            if (timeElement) {
                timeElement.textContent = `${claim.time} seconds ago`;
            }

            // Animate change
            ticker.style.opacity = '0';
            setTimeout(() => {
                ticker.style.opacity = '1';
            }, 300);

            this.currentIndex = (this.currentIndex + 1) % this.claims.length;
        }, 8000);
    }

    animateReviews() {
        // Animate reviews on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateX(-20px)';
                        entry.target.style.transition = 'all 0.6s ease-out';
                        
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                        }, 100);
                    }, index * 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.bg-gray-50.rounded-lg.p-4').forEach(review => {
            observer.observe(review);
        });
    }
}

// Initialize social proof manager
document.addEventListener('DOMContentLoaded', () => {
    new SocialProofManager();
});