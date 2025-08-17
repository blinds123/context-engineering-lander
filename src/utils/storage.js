// Local storage management for session data
class StorageManager {
    constructor() {
        this.prefix = 'mm_';
        this.initSession();
    }

    initSession() {
        if (!this.get('session_id')) {
            this.set('session_id', this.generateSessionId());
            this.set('session_start', Date.now());
        }
    }

    generateSessionId() {
        return 'sess_' + Math.random().toString(36).substr(2, 9);
    }

    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }

    get(key) {
        try {
            const item = localStorage.getItem(this.prefix + key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    }

    remove(key) {
        localStorage.removeItem(this.prefix + key);
    }

    // Track user interactions
    trackInteraction(action, data = {}) {
        const interactions = this.get('interactions') || [];
        interactions.push({
            action,
            data,
            timestamp: Date.now()
        });
        this.set('interactions', interactions);
    }

    // Get session duration
    getSessionDuration() {
        const start = this.get('session_start');
        return start ? Date.now() - start : 0;
    }

    // Check if exit intent shown
    hasShownExitIntent() {
        return this.get('exit_intent_shown') === true;
    }

    setExitIntentShown() {
        this.set('exit_intent_shown', true);
    }
}

// Initialize storage manager
const storage = new StorageManager();