// Popup Management System
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
}