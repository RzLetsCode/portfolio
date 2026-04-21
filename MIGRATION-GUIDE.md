# code2career_ai: File Migration Guide

This guide provides step-by-step instructions to migrate all portfolio files from the monorepo to this repository.

## Method 1: Using Git Subtree (Recommended for Clean History)

This method preserves the commit history for all portfolio files.

### Step 1: Clone the Source Repository

```bash
git clone https://github.com/RzLetsCode/portfolio-template-main.git temp-source
cd temp-source
```

### Step 2: Extract Portfolio Files

```bash
# Create a new branch with only portfolio files
git subtree split --prefix='' -b portfolio-files-only
```

### Step 3: Clone Current code2career_ai

```bash
cd ..
git clone https://github.com/RzLetsCode/code2career_ai.git code2career_ai
cd code2career_ai
```

### Step 4: Add Files from Source

```bash
# Pull files from the temporary branch
git pull ../temp-source portfolio-files-only --allow-unrelated-histories
```

### Step 5: Organize Files (If needed)

Since the portfolio files are in the root of the source, they should be directly in the root of code2career_ai.

```bash
# Verify files are in correct location
ls -la

# Push to remote
git push origin main
```

---

## Method 2: Manual Copy via Browser (Simpler for Single Transfer)

If you want to copy files without git, follow these steps:

### HTML Files to Copy:

1. **index.html** - Main landing page
2. **about-me.html** - Professional background
3. **skill-set.html** - Technical skills
4. **portfolio.html** - Project showcase
5. **blog.html** - Blog aggregation
6. **resources.html** - GitHub projects
7. **videos.html** - YouTube content
8. **learn-more.html** - Additional information
9. **modern-redesign.html** - Modern design variant
10. **get-started.html** - Getting started guide
11. **signup.html** - Signup page
12. **project1.html, project2.html, project3.html** - Individual project pages

### CSS Files to Copy:

1. **css/style.css** - Main stylesheet
2. **css/style-about-me.css** - About page styles
3. **css/style-portfolio.css** - Portfolio page styles
4. **css/style-project.css** - Project page styles
5. **css/style-skill-set.css** - Skills page styles
6. **css/style-blog.css** - Blog page styles
7. **css/style-videos.css** - Videos page styles

### Assets to Copy:

All files in the **assets/** directory:
- Images
- Logos
- Icons
- Screenshots

### Steps:

1. Go to https://github.com/RzLetsCode/portfolio-template-main
2. For each file:
   - Open the file (e.g., index.html)
   - Click "Raw" button
   - Select all (Ctrl+A) and copy
   - Go to code2career_ai repository
   - Click "Add file" > "Create new file"
   - Paste name and content
   - Commit

---

## Method 3: Using Download and Drag-Drop Upload

```bash
# Download the entire portfolio-template-main as ZIP
cd ~/Downloads

# Extract the ZIP
unzip portfolio-template-main.zip
cd portfolio-template-main

# Copy only portfolio files
cp -r *.html ../code2career_ai-temp/
cp -r css/ ../code2career_ai-temp/
cp -r assets/ ../code2career_ai-temp/

# Upload to code2career_ai repository via GitHub web interface
```

---

## Quick Command-Line Migration

Fastest method using git:

```bash
# Clone both repos
git clone https://github.com/RzLetsCode/portfolio-template-main.git source
git clone https://github.com/RzLetsCode/code2career_ai.git target

# Copy all files from source to target
cd source
cp *.html ../target/
cp -r css/ ../target/
cp -r assets/ ../target/

# Add and commit
cd ../target
git add .
git commit -m "feat: Add all portfolio files from monorepo"
git push origin main
```

---

## Verification Checklist

After migration, verify:

- [ ] All 12+ HTML files are present
- [ ] All CSS files are in css/ directory
- [ ] All assets are in assets/ directory
- [ ] favicon.ico is in root directory
- [ ] No broken image paths
- [ ] All internal links work
- [ ] GitHub Pages builds successfully
- [ ] Site displays correctly at https://rzletscode.github.io/code2career_ai/

---

## File Structure Expected

```
code2career_ai/
├── index.html
├── about-me.html
├── skill-set.html
├── portfolio.html
├── blog.html
├── resources.html
├── videos.html
├── learn-more.html
├── modern-redesign.html
├── get-started.html
├── signup.html
├── project1.html
├── project2.html
├── project3.html
├── favicon.ico
├── css/
│   ├── style.css
│   ├── style-about-me.css
│   ├── style-portfolio.css
│   ├── style-project.css
│   ├── style-skill-set.css
│   ├── style-blog.css
│   └── style-videos.css
├── assets/
│   └── (all images and resources)
├─┐ README.md
├┐ BIFURCATION-IMPLEMENTATION-GUIDE.md
└┐ MIGRATION-GUIDE.md
```

---

## Troubleshooting

### Issue: Images not loading
- Check asset paths in HTML
- Verify assets/ directory is properly committed
- Clear browser cache

### Issue: Styles not applied
- Check CSS file paths in HTML
- Verify css/ directory structure
- Check for missing @import statements

### Issue: GitHub Pages not building
- Go to Settings > Pages
- Verify main branch is selected
- Verify / (root) folder is selected
- Check Actions tab for build errors

---

## Support

For questions about this migration, refer to:
- BIFURCATION-IMPLEMENTATION-GUIDE.md
- Original repo: https://github.com/RzLetsCode/portfolio-template-main
- GitHub Pages docs: https://docs.github.com/pages
