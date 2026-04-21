# Next.js Portfolio Setup Guide - Rajesh Kumar

## QUICK START (Via VS Code & Git - 30 minutes)

### Step 1: Clone and Setup
```bash
git clone https://github.com/RzLetsCode/code2career_ai.git
cd code2career_ai
npm install
```

### Step 2: Create Missing Files

Use the code samples below. Create files in VS Code:

#### postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out
      - uses: actions/deploy-pages@v2
```

### Step 3: Update package.json
Replace scripts with:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### Step 4: Build & Deploy
```bash
npm run build
git add .
git commit -m "feat: Setup Next.js portfolio"
git push
```

### Step 5: Enable GitHub Pages
1. Go to Settings > Pages
2. Source: GitHub Actions
3. Wait 2-3 minutes for deployment

## Your Portfolio Details
- Email: rajeshrajrz111@gmail.com
- Phone: +91-8800911440
- LinkedIn: linkedin.com/in/rajesh-kumar-04405962/
- YouTube: @Code2Career_AI

## Next Steps
1. Clone repo locally
2. Create files using VS Code
3. Push to GitHub
4. Enable GitHub Pages
5. Visit https://rzletscode.github.io/code2career_ai/
