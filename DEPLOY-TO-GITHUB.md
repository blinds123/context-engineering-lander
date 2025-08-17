# 🚀 DEPLOY THIS REPO TO GITHUB

## Option 1: Let Claude Do It

Just tell Claude:
```
Please deploy the context-engineering-lander folder to my GitHub as a new public repository
```

## Option 2: Do It Yourself (2 minutes)

### Step 1: Initialize Git
```bash
cd context-engineering-lander
git init
git add .
git commit -m "Ultra-simple landing page generator"
```

### Step 2: Create GitHub Repo

#### Using GitHub CLI:
```bash
gh repo create context-engineering-lander --public --source=. --remote=origin --push
```

#### Using GitHub Website:
1. Go to https://github.com/new
2. Repository name: `context-engineering-lander`
3. Description: "One-command landing page generator with Claude"
4. Public
5. DON'T initialize with README
6. Create repository

### Step 3: Push Your Code
```bash
git remote add origin https://github.com/YOUR_USERNAME/context-engineering-lander.git
git branch -M main
git push -u origin main
```

## That's It! 

Your repo is now at:
```
https://github.com/YOUR_USERNAME/context-engineering-lander
```

## Now You Can Use It

Every time you want a landing page, just tell Claude:

```
Landing page: https://any-product-url.com
$29, 97% off
Use my repo: github.com/YOUR_USERNAME/context-engineering-lander
Do everything.
```

Claude will:
1. Clone YOUR repo
2. Extract the product
3. Generate everything
4. Deploy it
5. Give you the URL

---

**Total setup time: 2 minutes**
**Per landing page: 1 message to Claude**