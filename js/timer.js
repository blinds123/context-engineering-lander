class CountdownTimer {
    constructor(minutes = 15) {
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
        if (remaining < 5 * 60000) {
            document.getElementById('countdown-timer').classList.add('warning');
        }
    }
    
    onExpire() {
        clearInterval(this.interval);
        document.getElementById('countdown-timer').innerHTML = '<p class="expired">OFFER EXPIRED</p>';
    }
}