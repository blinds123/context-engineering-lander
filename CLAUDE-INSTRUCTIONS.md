# 🤖 INSTRUCTIONS FOR CLAUDE

When user says "Landing page: [URL]" or similar, execute this COMPLETE workflow:

## AUTOMATIC WORKFLOW

```javascript
async function createLandingPage(productUrl) {
  // 1. Setup
  await exec('mkdir landing-' + Date.now());
  await exec('cd landing-*');
  await exec('git clone https://github.com/[user]/context-engineering-lander .');
  
  // 2. Extract Product
  const product = await playwright.extractProduct(productUrl);
  
  // 3. Create initial.md
  await fillTemplate('initialeexample.md', 'initial.md', product);
  
  // 4. User will /generate-prp initial.md and press ESC
  
  // 5. Launch parallel agents
  await Promise.all([
    productAgent(),
    tiktokAgent(),
    competitorAgent(),
    contentAgent(),
    psychologyAgent()
  ]);
  
  // 6. User will /implement product-landing-prp.md
  
  // 7. Build site
  await generateHTML(allData);
  
  // 8. Test
  await dockerTest();
  await playwrightValidate();
  
  // 9. Deploy
  await deployGitHub();
  await deployNetlify();
  
  // 10. Return URL
  return liveUrl;
}
```

## WHAT TO DO AT EACH STEP

### Step 1: Setup Project
```bash
mkdir landing-$(date +%s)
cd landing-*
git clone https://github.com/[username]/context-engineering-lander .
```

### Step 2: Extract with Playwright
```javascript
await page.goto(productUrl);
await page.screenshot({path: 'product.png'});
const data = await page.evaluate(() => ({
  name: document.querySelector('h1').textContent,
  price: document.querySelector('.price').textContent,
  images: Array.from(document.querySelectorAll('img')).map(i => i.src)
}));
```

### Step 3: Fill initial.md
Replace all `[PRODUCT_URL]` and `[AUTO_EXTRACTED]` with real data

### Step 4: Wait for user to run
User types: `/generate-prp initial.md` [ESC]

### Step 5: Launch 5 agents
```
AGENT 1: Scrape product deeply
AGENT 2: Search TikTok
AGENT 3: Reverse image search
AGENT 4: Generate SVGs
AGENT 5: Research audience
```

### Step 6: Wait for user to run
User types: `/implement product-landing-prp.md`

### Step 7: Generate Complete HTML
- All 21 sections
- Inline everything
- Mobile only 390px
- No videos

### Step 8: Test Everything
- Docker container
- Playwright screenshots
- Validate popup timing
- Check all sections

### Step 9: Deploy
```bash
git init
git add .
git commit -m "Landing page"
gh repo create --public
git push
netlify deploy --prod
```

### Step 10: Report Success
"✅ Landing page live at: [URL]"

## REMEMBER
- NO videos (fake UI only)
- 390px width ONLY
- 15-second popup EXACTLY
- 58 viewers (±5)
- Test EVERYTHING