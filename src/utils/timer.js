// Timer utility for countdown functionality
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
            if (endTime > Date.now()) {
                return endTime;
            }
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
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);

        const minElement = document.getElementById('timer-minutes');
        const secElement = document.getElementById('timer-seconds');

        if (minElement && secElement) {
            minElement.textContent = minutes.toString().padStart(2, '0');
            secElement.textContent = seconds.toString().padStart(2, '0');
        }

        if (remaining === 0) {
            this.onExpire();
        }
    }

    onExpire() {
        clearInterval(this.interval);
        // Trigger urgency messaging
        const timer = document.getElementById('countdown-timer');
        if (timer) {
            timer.innerHTML = '<p class="text-red-500 font-bold text-lg animate-pulse">OFFER EXPIRED - Refresh for new timer</p>';
        }
        // Track event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timer_expired', {
                event_category: 'engagement',
                event_label: 'countdown'
            });
        }
    }

    stop() {
        clearInterval(this.interval);
    }
}

// Initialize timer on page load
document.addEventListener('DOMContentLoaded', () => {
    const timer = new CountdownTimer(15);
    timer.start();
});