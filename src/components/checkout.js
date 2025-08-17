// Checkout functionality
class CheckoutManager {
    constructor() {
        this.selectedSize = null;
        this.formData = {};
        this.init();
    }

    init() {
        this.setupSizeSelector();
        this.setupForm();
    }

    setupSizeSelector() {
        const buttons = document.querySelectorAll('.size-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!btn.disabled) {
                    // Remove previous selection
                    buttons.forEach(b => {
                        b.classList.remove('border-black', 'bg-black', 'text-white');
                        b.classList.add('border-gray-300');
                    });
                    
                    // Add selection
                    btn.classList.remove('border-gray-300');
                    btn.classList.add('border-black', 'bg-black', 'text-white');
                    
                    this.selectedSize = btn.dataset.size;
                    
                    // Track selection
                    analytics.trackFunnelStep('select_size', this.selectedSize);
                    storage.trackInteraction('size_selected', { size: this.selectedSize });
                    
                    // Auto-scroll to form
                    setTimeout(() => {
                        document.getElementById('checkout-form').scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'center' 
                        });
                    }, 300);
                }
            });
        });
    }

    setupForm() {
        const form = document.getElementById('checkout-form');
        if (!form) return;

        // Form field focus tracking
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                analytics.trackEngagement('form_field_focus', input.type);
            });
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!this.selectedSize) {
                this.showError('Please select a size first');
                document.querySelector('.size-btn').scrollIntoView({ behavior: 'smooth' });
                return;
            }

            // Collect form data
            const formData = new FormData(form);
            this.formData = Object.fromEntries(formData);
            
            // Validate
            if (this.validateForm()) {
                this.processCheckout();
            }
        });
    }

    validateForm() {
        const required = ['email', 'firstName', 'lastName', 'address', 'city', 'zip'];
        
        for (let field of required) {
            if (!this.formData[field]) {
                this.showError(`Please fill in all required fields`);
                return false;
            }
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.formData.email)) {
            this.showError('Please enter a valid email address');
            return false;
        }

        return true;
    }

    processCheckout() {
        // Show processing state
        const submitBtn = document.querySelector('#checkout-form button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        // Track conversion
        analytics.trackFunnelStep('complete_checkout');
        analytics.trackPurchase();
        analytics.trackAddToCart();

        // Save order data
        storage.set('order', {
            size: this.selectedSize,
            email: this.formData.email,
            timestamp: Date.now(),
            orderId: 'ORD-' + Date.now()
        });

        // Simulate processing
        setTimeout(() => {
            // Show success message
            this.showSuccess();
            
            // Reset form
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showError(message) {
        const alert = document.createElement('div');
        alert.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        alert.textContent = message;
        document.body.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    showSuccess() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-sm mx-4 text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-2">Order Confirmed!</h3>
                <p class="text-gray-600 mb-4">Your FREE Maison Margiela jeans are on the way!</p>
                <p class="text-sm text-gray-500 mb-6">Order ID: ORD-${Date.now()}</p>
                <button onclick="this.closest('.fixed').remove()" class="bg-black text-white px-6 py-3 rounded-lg font-semibold">
                    Continue Shopping
                </button>
            </div>
        `;
        document.body.appendChild(modal);

        // Trigger confetti or celebration animation
        this.celebrate();
    }

    celebrate() {
        // Simple celebration effect
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    transform: rotate(${Math.random() * 360}deg);
                    animation: fall 3s linear;
                    z-index: 100;
                `;
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 3000);
            }, i * 50);
        }
    }
}

// Helper function for smooth scroll
function scrollToCheckout() {
    document.getElementById('checkout').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
    });
    analytics.trackEngagement('cta_click', 'hero_button');
}

// Play video function
function playVideo() {
    analytics.trackFunnelStep('play_video');
    analytics.trackEngagement('video_play', 'value_bomb');
    
    // Create video modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="relative max-w-2xl mx-4">
            <button onclick="this.closest('.fixed').remove()" class="absolute -top-10 right-0 text-white text-3xl">&times;</button>
            <div class="bg-black rounded-lg p-4">
                <img src="https://via.placeholder.com/800x450/000/fff?text=Video+Playing" alt="Video" class="w-full rounded">
                <p class="text-white text-center mt-4">This exclusive offer is available for a limited time only!</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Add fall animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize checkout manager
document.addEventListener('DOMContentLoaded', () => {
    const checkout = new CheckoutManager();
});