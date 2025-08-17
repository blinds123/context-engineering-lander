# Product Requirements Prompt (PRP) - Maison Margiela Free + Shipping Landing Page

## 1. PROJECT OVERVIEW

### Problem Statement
Create a high-converting landing page that generates maximum front-end revenue for Maison Margiela Twist Wide Leg Jeans using a "Free Plus Shipping" offer model inspired by Russell Brunson's funnel strategies and Trey Lewellen's value-first conversion optimization techniques.

### Success Metrics
- **Primary KPI**: 15%+ conversion rate on cold traffic
- **Secondary KPIs**: 
  - Average Order Value: $19.95 (shipping only)
  - Page Load Time: <2 seconds
  - Mobile Conversion Rate: >12%
  - Cart Abandonment: <40%

### Target Audience
- **Demographics**: Fashion-forward millennials and Gen Z (25-35)
- **Psychographics**: Value authenticity, craftsmanship, avant-garde design
- **Behavior**: Active on Instagram, follow fashion influencers, shop luxury resale
- **Pain Points**: Designer prices, limited access, FOMO on exclusive drops

## 2. TECHNICAL REQUIREMENTS

### Core Technologies
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (no framework dependencies)
- **Styling**: Tailwind CSS for rapid development
- **Animation**: GSAP for high-performance animations
- **Analytics**: Google Analytics 4, Facebook Pixel, GTM
- **Hosting**: GitHub Pages with Cloudflare CDN
- **Testing**: Playwright for E2E testing
- **Development**: Docker containerization

### Performance Requirements
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2s
- **Cumulative Layout Shift**: <0.1
- **Mobile Score**: 95+ on PageSpeed Insights
- **Bundle Size**: <150KB gzipped

### Browser Support
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android 90+

## 3. FUNCTIONAL REQUIREMENTS

### 3.1 Pattern Interrupt Hero Section
```
Requirements:
- Full-screen takeover with animated entrance
- Headline: "Get $990 Maison Margiela Jeans FREE (Just Cover Shipping)"
- Subheadline with value proposition
- Animated countdown timer (15 minutes)
- Live viewer count with pulsing animation
- Mobile-optimized layout (390x844px primary)
```

### 3.2 Value Bomb Video Section
```
Requirements:
- Fake video player UI (static image with play button overlay)
- Video thumbnail showing product
- View count: "234,567 views"
- Engagement metrics displayed
- Click triggers modal with value explanation
```

### 3.3 Scarcity & Urgency System
```
Requirements:
- Real-time inventory counter (starts at 47, decrements)
- Session-based timer (15 minutes per user)
- Size availability indicator
- "Last claimed X seconds ago" ticker
- LocalStorage persistence for returning visitors
```

### 3.4 Social Proof Engine
```
Requirements:
- Live activity feed (fake but realistic)
- Instagram post carousel (6 posts minimum)
- Review aggregation display (4.9/5 stars)
- Celebrity/influencer mentions
- Recent claims notification system
```

### 3.5 Trust & Authority Stack
```
Requirements:
- Maison Margiela brand story module
- Security badges (SSL, payment methods)
- 60-day guarantee badge with tooltip
- Press mentions bar ("As seen in...")
- Authenticity verification module
```

### 3.6 Smart Size Selection
```
Requirements:
- Visual size chart with measurements
- "Find your size" calculator
- Stock availability per size
- Size recommendation based on height/weight
- Clear size conversion (EU/US/UK)
```

### 3.7 Value Comparison Module
```
Requirements:
- Side-by-side retail vs. offer price
- Competitor price comparison table
- Value stack visualization ($1,265 total)
- Animated savings calculator
- "Why this offer exists" explainer
```

### 3.8 Checkout Flow
```
Requirements:
- Single-page checkout (no navigation away)
- Progressive form disclosure
- Auto-fill detection
- Shipping calculator ($19.95 flat)
- Multiple payment methods display
- Order bump opportunities (declined for this offer)
```

### 3.9 Objection Handling
```
Requirements:
- FAQ accordion with top 5 objections
- "What's the catch?" section
- Authenticity guarantee
- Return policy clearly stated
- Customer service chat widget
```

### 3.10 Exit Intent System
```
Requirements:
- Detect mouse movement to browser bar
- Mobile: Detect scroll up momentum
- Last chance overlay with increased urgency
- One-time display per session
- A/B test different offers
```

## 4. CONVERSION OPTIMIZATION ELEMENTS

### Psychological Triggers Implementation
1. **Reciprocity**: Give value first (free product)
2. **Commitment/Consistency**: Micro-yes ladder
3. **Social Proof**: Live activity, testimonials
4. **Authority**: Brand heritage, press mentions
5. **Liking**: Aspirational lifestyle imagery
6. **Scarcity**: Limited inventory (47 pairs)
7. **Unity**: "Fashion insider" positioning

### Copy Framework (Trey Lewellen Style)
```
Hook Variations (A/B Test):
A: "Why Maison Margiela Is Giving Away $990 Jeans"
B: "The Fashion Week Overstock Mistake That's Your Gain"
C: "Get Martin Margiela's $990 Jeans For Just Shipping"

Value Proposition:
- Immediate value statement
- Credibility markers
- Urgency injection
- Call to action

Objection Crushers:
- "This is 100% authentic Maison Margiela"
- "We bought excess inventory at 90% off"
- "Limited to one per customer"
- "Your card is only charged $19.95"
```

### Micro-Commitment Ladder
1. Watch "explanation" video (engagement)
2. Select size (personalization)
3. Enter email (lead capture)
4. View shipping cost (transparency)
5. Complete order (conversion)

## 5. DESIGN SYSTEM

### Visual Hierarchy
```
1. Headline (64px mobile, 96px desktop)
2. Value prop (24px mobile, 32px desktop)
3. CTA button (18px, high contrast)
4. Body copy (16px, high readability)
5. Microcopy (14px, supporting info)
```

### Color Palette
```
Primary: #000000 (Maison Margiela black)
Secondary: #FFFFFF (Clean white)
Accent: #FF0000 (Urgency red)
Success: #00C851 (Confirmation green)
Warning: #FFBB33 (Scarcity yellow)
```

### Component Library
- Buttons (primary, secondary, ghost)
- Forms (inline validation)
- Cards (product, testimonial, value)
- Modals (video, size guide, exit intent)
- Notifications (claim, stock, timer)

## 6. TECHNICAL ARCHITECTURE

### File Structure
```
/project/
├── /src/
│   ├── /components/
│   │   ├── hero.js (< 200 lines)
│   │   ├── scarcity.js (< 200 lines)
│   │   ├── social-proof.js (< 200 lines)
│   │   ├── checkout.js (< 300 lines)
│   │   └── exit-intent.js (< 150 lines)
│   ├── /styles/
│   │   ├── main.css
│   │   └── tailwind.css
│   ├── /utils/
│   │   ├── analytics.js
│   │   ├── storage.js
│   │   └── timer.js
│   └── index.html
├── /assets/
│   ├── /images/
│   ├── /icons/
│   └── /fonts/
├── /tests/
│   ├── e2e/
│   └── unit/
├── /docker/
│   ├── Dockerfile
│   └── docker-compose.yml
└── /docs/
```

### State Management
```javascript
// LocalStorage Schema
{
  "mm_session": {
    "started": "timestamp",
    "expires": "timestamp",
    "size_selected": "string",
    "claims_viewed": ["array"],
    "exit_shown": "boolean"
  },
  "mm_inventory": {
    "total": "number",
    "by_size": {"26": 5, "28": 8, ...}
  }
}
```

### API Integrations
- Google Analytics 4 (pageview, events)
- Facebook Pixel (PageView, AddToCart, Purchase)
- Cloudflare Analytics (performance)
- GitHub Actions (CI/CD)

## 7. TESTING STRATEGY

### Unit Tests
```
- Timer countdown functionality
- Inventory management logic
- Form validation rules
- Storage persistence
- Analytics firing
```

### E2E Tests (Playwright)
```
- Complete purchase flow
- Exit intent trigger
- Mobile responsiveness
- Size selection flow
- Timer expiration handling
```

### A/B Tests
```
- Headline variations (3 versions)
- CTA button copy
- Urgency messaging
- Price display format
- Exit intent offers
```

### Performance Tests
```
- Load testing (1000 concurrent users)
- Mobile performance (3G network)
- CDN response times
- Bundle size optimization
```

## 8. DEPLOYMENT STRATEGY

### GitHub Repository Setup
```bash
# New repository creation
gh repo create maison-margiela-lander --public
git init
git add .
git commit -m "Initial commit: MM free shipping lander"
git push -u origin main
```

### GitHub Actions CI/CD
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: |
          npm ci
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
```

### Cloudflare Configuration
```
- Custom domain setup
- SSL certificate
- Page rules for caching
- Firewall rules
- Analytics integration
```

## 9. MONITORING & OPTIMIZATION

### Analytics Events
```javascript
// Critical events to track
- page_view
- hero_seen
- video_clicked
- size_selected
- checkout_started
- checkout_completed
- exit_intent_shown
- timer_expired
```

### Conversion Funnel
```
1. Landing Page View (100%)
2. Hero Engagement (80%)
3. Size Selection (40%)
4. Checkout Start (25%)
5. Checkout Complete (15%)
```

### Performance Monitoring
- Real User Monitoring (RUM)
- Synthetic monitoring
- Error tracking (Sentry)
- Uptime monitoring

## 10. LAUNCH CHECKLIST

### Pre-Launch
- [ ] All components tested
- [ ] Mobile optimization verified
- [ ] Analytics configured
- [ ] SSL certificate active
- [ ] Legal pages created
- [ ] Payment processing tested
- [ ] Load testing completed

### Launch Day
- [ ] DNS propagated
- [ ] Analytics receiving data
- [ ] Monitor first 100 visitors
- [ ] Check conversion funnel
- [ ] Verify mobile experience
- [ ] Test checkout flow

### Post-Launch
- [ ] A/B tests activated
- [ ] Performance baseline established
- [ ] Support team briefed
- [ ] Backup system verified
- [ ] Scaling plan ready

## 11. SUCCESS CRITERIA

### Week 1 Goals
- 10,000 unique visitors
- 15% conversion rate
- <2% checkout abandonment
- 95+ PageSpeed score
- Zero critical bugs

### Month 1 Goals
- 50,000 unique visitors
- Optimize based on data
- Implement winning A/B tests
- Scale traffic sources
- Maintain quality metrics

## 12. RISK MITIGATION

### Technical Risks
- **CDN failure**: Backup hosting ready
- **Payment issues**: Multiple processors
- **Traffic spike**: Auto-scaling configured
- **Security breach**: WAF rules active

### Business Risks
- **Inventory issues**: Clear disclaimers
- **Refund requests**: Clear policy
- **Brand concerns**: Legal review completed
- **Competition**: First-mover advantage

---

*This PRP ensures a production-ready, high-converting landing page that maximizes front-end revenue while maintaining brand integrity and user experience.*