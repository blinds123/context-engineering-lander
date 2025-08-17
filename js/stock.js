// Stock Management with animations
class StockManager {
    constructor(initial = 47) {
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
        notification.textContent = `${names[Math.floor(Math.random() * names.length)]} from ${cities[Math.floor(Math.random() * cities.length)]} just claimed Size ${sizes[Math.floor(Math.random() * sizes.length)]}`;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 5000);
    }
    
    init() {
        this.updateDisplay();
        setInterval(() => {
            if (Math.random() > 0.7) this.decrement();
        }, Math.random() * 60000 + 30000);
    }
}