// Exit intent detection and popup management
class ExitIntentManager {
    constructor() {
        this.shown = false;
        this.init();
    }

    init() {
        // Desktop exit intent (mouse leave)
        document.addEventListener('mouseout', (e) => {
            if (e.clientY <= 0 && !this.shown && !storage.hasShownExitIntent()) {
                this.triggerExitPopup();
            }
        });

        // Mobile exit intent (scroll up quickly)
        let lastScrollY = window.scrollY;
        let scrollVelocity = 0;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            scrollVelocity = lastScrollY - currentScrollY;
            
            // Trigger on fast upward scroll near top of page
            if (scrollVelocity > 50 && currentScrollY < 200 && !this.shown && !storage.hasShownExitIntent()) {
                this.triggerExitPopup();
            }
            
            lastScrollY = currentScrollY;
        });

        // Back button detection
        window.addEventListener('popstate', () => {
            if (!this.shown && !storage.hasShownExitIntent()) {
                this.triggerExitPopup();
            }
        });
    }

    triggerExitPopup() {
        this.shown = true;
        storage.setExitIntentShown();
        
        const popup = document.getElementById('exit-popup');
        if (popup) {
            popup.classList.remove('hidden');
            
            // Track event
            analytics.trackEngagement('exit_intent_shown');
            
            // Auto-close after 30 seconds
            setTimeout(() => {
                this.closeExitPopup();
            }, 30000);
        }
    }

    closeExitPopup() {
        const popup = document.getElementById('exit-popup');
        if (popup) {
            popup.classList.add('hidden');
            analytics.trackEngagement('exit_intent_closed');
        }
    }
}

// Global function for closing popup
function closeExitPopup() {
    const popup = document.getElementById('exit-popup');
    if (popup) {
        popup.classList.add('hidden');
        analytics.trackEngagement('exit_intent_claimed');
        // Scroll to checkout
        scrollToCheckout();
    }
}

// Initialize exit intent manager
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize after user has scrolled at least once
    let hasScrolled = false;
    window.addEventListener('scroll', () => {
        if (!hasScrolled) {
            hasScrolled = true;
            setTimeout(() => {
                new ExitIntentManager();
            }, 2000); // Wait 2 seconds after first scroll
        }
    });
});