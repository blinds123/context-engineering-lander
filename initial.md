# 🚀 MAISON MARGIELA JEANS - FREE + SHIPPING LANDING PAGE GENERATOR V2.0

## CRITICAL: ONE-SHOT GENERATION REQUIREMENTS

This document contains COMPLETE specifications to generate a 7,500+ line production-ready landing page in ONE EXECUTION without any additional prompting. Follow EVERY instruction precisely.

## 🎯 OBJECTIVE

Generate a COMPLETE high-converting landing page for Maison Margiela Twist Wide Leg Jeans using the "free plus shipping" offer model that:
- Contains 7,500+ lines of HTML (matching reference implementation)
- Implements ALL 21 sections completely  
- Uses REAL product imagery (not placeholders)
- Achieves 15%+ conversion rate
- Loads in <2 seconds
- Works perfectly on mobile (390x844px primary)

## 📋 MANDATORY REQUIREMENTS

### File Structure Required
```
/
├── index.html (7,500+ lines)
├── generate-complete.js (auto-generator script)
├── css/
│   └── styles.css (2,000+ lines)
├── js/
│   ├── timer.js (countdown with localStorage)
│   ├── stock.js (inventory management)
│   ├── carousel.js (all carousels)
│   ├── popup.js (popup management)
│   └── analytics.js (tracking)
└── images/
    ├── product/ (real product images)
    ├── tiktok/ (video thumbnails)
    └── ui/ (interface elements)
```

## 🛠️ IMPLEMENTATION STEPS

### STEP 1: Create Auto-Generator Script
Create `generate-complete.js` that:
1. Generates 7,500+ lines of HTML
2. Creates all CSS files
3. Builds all JavaScript modules
4. Outputs statistics

### STEP 2: Product Configuration
```javascript
const CONFIG = {
    product: {
        name: 'Maison Margiela Twist Wide Leg Jeans',
        sku: 'S52LA0243M30016961',
        retailPrice: 990,
        offerPrice: 0,
        shippingPrice: 19.95,
        currency: 'USD',
        sizes: {
            available: ['28', '30', '32', '34', '40'],
            soldOut: ['26', '36', '38'],
            lowStock: { '28': 3, '30': 8, '32': 12, '34': 5, '40': 7 }
        }
    },
    marketing: {
        stockStart: 100,
        stockCurrent: 47,
        viewersMin: 200,
        viewersMax: 300,
        timerMinutes: 15,
        reviews: 2847,
        rating: 4.9,
        soldThisWeek: 3847
    }
};
```

## 📐 ALL 21 SECTIONS (MANDATORY - NO SHORTCUTS)

### Section 1: Live Viewers Badge (Floating)
```html
<div class="live-viewers-badge" id="live-viewers">
    <div class="live-dot"></div>
    <span id="viewer-count">237</span>
    <span>watching now</span>
</div>
```
- Position: fixed, top-right
- Updates every 5 seconds
- Pulse animation on dot

### Section 2: Fake TikTok Hero Video (844px height)
```html
<section class="tiktok-hero">
    <!-- Full TikTok UI recreation -->
    <!-- Profile, actions sidebar, caption, music -->
</section>
```
- Exact TikTok interface recreation
- Play button overlay
- Like/comment/share actions
- Music disc animation

### Section 3: Video Carousel (5 videos)
```html
<section class="video-carousel-section">
    <!-- TikTok video thumbnails -->
</section>
```
- Swipeable carousel
- View counts and stats
- Play button overlays

### Section 4: Webinar Story (6 slides)
```html
<section class="story-section">
    <!-- 6 story slides explaining offer -->
</section>
```
Slides:
1. "We Found 47 Pairs"
2. "Worth $990 Each"
3. "Instead of 300% Markup"
4. "We're Giving Them FREE"
5. "Just $19.95 Shipping"
6. "Once Gone, Gone Forever"

### Section 5: TikTok Reviews (10+ comments)
```html
<section class="tiktok-reviews-section">
    <!-- Real-looking TikTok comments -->
</section>
```
- Username, time, likes
- Reply buttons
- Verified badges

### Section 6: Size Predictor Chart (SVG)
```html
<section class="size-predictor-section">
    <svg viewBox="0 0 400 300">
        <!-- Bar chart showing stock by size -->
    </svg>
</section>
```
- Color-coded bars (green/yellow/red)
- Real-time stock levels

### Section 7: Countdown Timer
```html
<section class="countdown-section">
    <div id="countdown-timer">
        <!-- HH:MM:SS display -->
    </div>
</section>
```
- LocalStorage persistence
- Warning state at 5 minutes
- Expires after 15 minutes

### Section 8: Stock Counter
```html
<section class="stock-counter-section">
    <div class="stock-display">
        <span id="stock-number">47</span>
    </div>
    <div class="stock-bar"></div>
</section>
```
- Real-time decrements
- Progress bar visualization
- Recent activity feed

### Section 9: Trustpilot Reviews
```html
<section class="trustpilot-section">
    <!-- 5-star reviews -->
</section>
```
- 4.9/5 rating
- 2,847 reviews
- Review cards with dates

### Section 10: Payment Methods
```html
<section class="payment-section">
    <!-- Payment icons grid -->
</section>
```
- Visa, Mastercard, Amex, PayPal
- Apple Pay, Google Pay
- Security badges

### Section 11: Free Shipping Badge
```html
<section class="shipping-badge-section">
    <div class="shipping-badge">
        🚚 FREE EXPRESS SHIPPING
    </div>
</section>
```

### Section 12: Guarantee
```html
<section class="guarantee-section">
    <div class="guarantee-badge">
        🛡️ 60-Day Money Back Guarantee
    </div>
</section>
```

### Section 13: Price Comparison
```html
<section class="price-comparison-section">
    <div class="retail-price">$990</div>
    <div class="your-price">FREE</div>
    <div class="savings">You Save $970.05</div>
</section>
```

### Section 14: Size Selector
```html
<section class="size-selector-section">
    <div class="size-grid">
        <!-- Size buttons with stock indicators -->
    </div>
</section>
```

### Section 15: Trust Badges
```html
<section class="trust-badges-section">
    <!-- SSL, Verified, Authentic badges -->
</section>
```

### Section 16: Celebrity Wall
```html
<section class="celebrity-section">
    <!-- Celebrity cards -->
</section>
```
- Bella Hadid, Kendall Jenner, Gigi Hadid
- Hailey Bieber, Rosie HW, Zendaya

### Section 17: Before/After
```html
<section class="before-after-section">
    <!-- Transformation comparison -->
</section>
```

### Section 18: Bundle Upsell
```html
<section class="bundle-section">
    <!-- Matching items at 50% off -->
</section>
```

### Section 19: FAQ Section
```html
<section class="faq-section">
    <!-- Common questions -->
</section>
```

### Section 20: Footer
```html
<footer class="footer">
    <!-- Links and disclaimer -->
</footer>
```

### Section 21: Sticky Checkout Button
```html
<div class="sticky-checkout">
    <button id="checkout-btn">
        CLAIM FREE JEANS → PAY $19.95 SHIPPING
    </button>
</div>
```

## 🎨 STYLE REQUIREMENTS

### Critical CSS Variables
```css
:root {
    --primary: #000000;
    --secondary: #FFFFFF;
    --accent: #FF0000;
    --success: #00C851;
    --warning: #FFD700;
    --danger: #DC3545;
}
```

### Mobile-First Breakpoints
```css
/* Mobile: 320px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */
```

## 💻 JAVASCRIPT MODULES

### timer.js
```javascript
class CountdownTimer {
    constructor(minutes = 15) {
        // LocalStorage persistence
        // Updates every second
        // Warning state at 5 minutes
    }
}
```

### stock.js
```javascript
class StockManager {
    constructor(initial = 47) {
        // Random decrements
        // Notification system
        // LocalStorage save
    }
}
```

### popup.js
```javascript
class PopupManager {
    constructor() {
        // Exit intent detection
        // Time-based triggers
        // Session storage tracking
    }
}
```

## 🚀 GENERATION COMMAND

```bash
# Clone repository
git clone https://github.com/[username]/context-engineering-lander.git
cd context-engineering-lander

# Run generator
node generate-complete.js

# Start server
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

## ✅ SUCCESS CRITERIA

The generated landing page MUST have:
- [ ] 7,500+ lines of HTML
- [ ] All 21 sections fully implemented
- [ ] Real product imagery (not placeholders)
- [ ] Complete JavaScript functionality
- [ ] Full CSS styling (2,000+ lines)
- [ ] Mobile responsive (390x844px)
- [ ] <2 second load time
- [ ] LocalStorage persistence
- [ ] Exit intent popups
- [ ] Countdown timer
- [ ] Stock management
- [ ] Smooth animations
- [ ] Analytics integration
- [ ] Schema.org markup
- [ ] Open Graph tags
- [ ] Twitter Cards

## ⚠️ CRITICAL WARNINGS

1. **NO PLACEHOLDERS**: Every image must be real or generated
2. **NO SHORTCUTS**: All 21 sections must be complete
3. **NO INLINE STYLES**: Use proper CSS architecture
4. **NO BASIC HTML**: Must be 7,500+ lines
5. **NO MISSING FEATURES**: Every interaction must work

## 📊 EXPECTED OUTPUT

When complete, you should see:
```
✅ Generated Complete Landing Page
📊 Statistics:
   - HTML Lines: 7,523
   - Total Size: 284.35 KB
   - Sections: 21 (ALL COMPLETE)
   - Features: 100% Implementation

📁 Files Created:
   - index.html (main landing page)
   - css/styles.css (complete styles)
   - js/timer.js (countdown timer)
   - js/stock.js (stock management)
   - js/popup.js (popup manager)
   - js/carousel.js (carousel handler)
   - js/analytics.js (tracking)

🚀 Ready for production deployment!
```

## 🎯 FINAL CHECKLIST

Before considering complete, verify:
- [ ] Lines of code: 7,500+ ✓
- [ ] All 21 sections: Present ✓
- [ ] JavaScript modules: Working ✓
- [ ] CSS architecture: Complete ✓
- [ ] Mobile responsive: Perfect ✓
- [ ] Load time: <2 seconds ✓
- [ ] Conversion optimized: 15%+ ✓
- [ ] Production ready: YES ✓

## END OF SPECIFICATIONS

Execute `node generate-complete.js` to create the FULL implementation. No additional steps or prompts should be needed. The generator will create everything automatically.