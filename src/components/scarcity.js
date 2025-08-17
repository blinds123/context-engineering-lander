// Scarcity and urgency system
class ScarcitySystem {
    constructor() {
        this.initialStock = 47;
        this.currentStock = this.getStoredStock() || this.initialStock;
        this.lastUpdate = Date.now();
        this.decrementInterval = null;
        this.init();
    }

    init() {
        this.updateDisplay();
        this.startDecrement();
        this.updateViewerCount();
    }

    getStoredStock() {
        const stored = localStorage.getItem('mm_stock');
        if (stored) {
            const data = JSON.parse(stored);
            // Reset if more than 24 hours old
            if (Date.now() - data.timestamp > 86400000) {
                return null;
            }
            return data.count;
        }
        return null;
    }

    saveStock() {
        localStorage.setItem('mm_stock', JSON.stringify({
            count: this.currentStock,
            timestamp: Date.now()
        }));
    }

    decrementStock() {
        if (this.currentStock > 5) {
            this.currentStock--;
            this.saveStock();
            this.updateDisplay();
            this.showClaimNotification();
        }
    }

    startDecrement() {
        // Random decrement every 30-90 seconds
        const randomInterval = () => {
            const delay = 30000 + Math.random() * 60000;
            this.decrementInterval = setTimeout(() => {
                this.decrementStock();
                randomInterval();
            }, delay);
        };
        randomInterval();
    }

    updateDisplay() {
        const countElement = document.getElementById('stock-count');
        const barElement = document.getElementById('stock-bar');
        
        if (countElement) {
            countElement.textContent = this.currentStock;
            // Add pulse animation on update
            countElement.classList.add('animate-pulse');
            setTimeout(() => countElement.classList.remove('animate-pulse'), 1000);
        }
        
        if (barElement) {
            const percentage = (this.currentStock / this.initialStock) * 100;
            barElement.style.width = percentage + '%';
            
            // Change color based on stock level
            if (percentage < 20) {
                barElement.classList.add('bg-red-500');
                barElement.classList.remove('bg-yellow-500');
            }
        }
    }

    showClaimNotification() {
        const names = ['Sarah M.', 'John D.', 'Emily R.', 'Michael K.', 'Lisa T.', 'David B.', 'Anna S.', 'Chris W.'];
        const cities = ['NYC', 'LA', 'Chicago', 'Miami', 'Seattle', 'Boston', 'Denver', 'Austin'];
        const sizes = ['26', '28', '30', '32', '34', '36'];
        
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        
        // Update ticker
        const ticker = document.getElementById('latest-claim');
        if (ticker) {
            ticker.textContent = `${randomName} from ${randomCity} just claimed Size ${randomSize}`;
        }
        
        // Show FOMO popup
        this.showFomoPopup(randomSize, randomCity);
    }

    showFomoPopup(size, city) {
        const popup = document.getElementById('fomo-popup');
        if (popup) {
            popup.querySelector('.font-semibold').textContent = `Someone just claimed Size ${size}!`;
            popup.querySelector('.text-gray-500').textContent = `From ${city}`;
            
            // Animate in
            popup.style.transform = 'translateY(0)';
            
            // Hide after 5 seconds
            setTimeout(() => {
                popup.style.transform = 'translateY(100%)';
            }, 5000);
        }
    }

    updateViewerCount() {
        const element = document.getElementById('viewer-count');
        if (element) {
            // Fluctuate viewer count
            setInterval(() => {
                const base = 237;
                const variation = Math.floor(Math.random() * 50) - 25;
                element.textContent = base + variation;
            }, 5000);
        }
    }

    stop() {
        if (this.decrementInterval) {
            clearTimeout(this.decrementInterval);
        }
    }
}

// Initialize scarcity system
const scarcity = new ScarcitySystem();