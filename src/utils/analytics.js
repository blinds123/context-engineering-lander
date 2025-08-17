// Analytics tracking utilities
class Analytics {
    constructor() {
        this.fbPixelId = 'YOUR_PIXEL_ID';
        this.gaId = 'GA_MEASUREMENT_ID';
        this.events = [];
    }

    // Track generic event
    track(eventName, parameters = {}) {
        // Add to internal events array
        this.events.push({
            name: eventName,
            parameters,
            timestamp: Date.now()
        });

        // Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }

        // Send to Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, parameters);
        }

        // Log in development
        if (window.location.hostname === 'localhost') {
            console.log('Analytics Event:', eventName, parameters);
        }
    }

    // Track page view
    trackPageView(page = '/') {
        this.track('page_view', {
            page_path: page,
            page_title: document.title
        });
    }

    // Track scroll depth
    trackScrollDepth(percentage) {
        this.track('scroll', {
            percent_scrolled: percentage,
            event_category: 'engagement'
        });
    }

    // Track conversion funnel
    trackFunnelStep(step, value = null) {
        const funnelSteps = {
            'view_hero': 1,
            'play_video': 2,
            'select_size': 3,
            'start_checkout': 4,
            'complete_checkout': 5
        };

        this.track('funnel_step', {
            step: funnelSteps[step] || 0,
            step_name: step,
            value: value
        });
    }

    // Track e-commerce events
    trackAddToCart(value = 19.95) {
        this.track('add_to_cart', {
            currency: 'USD',
            value: value,
            items: [{
                item_name: 'Maison Margiela Twist Wide Leg Jeans',
                price: 0,
                quantity: 1
            }]
        });

        // Facebook specific
        if (typeof fbq !== 'undefined') {
            fbq('track', 'AddToCart', {
                content_type: 'product',
                content_ids: ['MM_JEANS_001'],
                value: value,
                currency: 'USD'
            });
        }
    }

    trackPurchase(value = 19.95) {
        this.track('purchase', {
            transaction_id: 'TXN_' + Date.now(),
            value: value,
            currency: 'USD',
            shipping: 19.95,
            items: [{
                item_name: 'Maison Margiela Twist Wide Leg Jeans',
                price: 0,
                quantity: 1
            }]
        });

        // Facebook specific
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', {
                value: value,
                currency: 'USD'
            });
        }
    }

    // Track engagement
    trackEngagement(action, label = '') {
        this.track('engagement', {
            event_category: 'user_engagement',
            event_action: action,
            event_label: label
        });
    }

    // Get all tracked events
    getEvents() {
        return this.events;
    }
}

// Initialize analytics
const analytics = new Analytics();

// Track initial page view
document.addEventListener('DOMContentLoaded', () => {
    analytics.trackPageView();
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (scrollPercent % 25 === 0) {
                analytics.trackScrollDepth(scrollPercent);
            }
        }
    });
});