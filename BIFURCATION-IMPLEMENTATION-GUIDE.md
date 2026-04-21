# code2career_ai Repository Bifurcation Guide

## Overview
This repository contains the **RzLetsCode Personal Portfolio** - extracted from the original monorepo `portfolio-template-main`.

## What's Inside
- Professional portfolio showcasing enterprise AI expertise
- Dark mode design
- Project showcase section
- Technical skills and expertise pages
- Blog integration
- YouTube channel content display
- Contact form (EmailJS integration)

## Quick Start

### Local Development
```bash
# Clone this repository
git clone https://github.com/RzLetsCode/code2career_ai.git
cd code2career_ai

# Run a local server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

### File Structure
```
code2career_ai/
├── index.html              # Landing page
├── about-me.html           # Professional background
├── skill-set.html          # Technical skills
├── portfolio.html          # Project showcase
├── blog.html               # Blog aggregation
├── resources.html          # GitHub projects
├── videos.html             # YouTube content
├── css/                    # Stylesheets
│   ├── style.css
│   ├── style-about-me.css
│   ├── style-portfolio.css
│   ├── style-blog.css
│   └── style-videos.css
└── assets/                 # Images and resources
```

## Customization

### Update Personal Info
1. Edit `about-me.html` with your background
2. Modify `skill-set.html` with your skills
3. Update `portfolio.html` with your projects
4. Customize CSS files as needed

### EmailJS Setup
For contact form functionality:
1. Register at emailjs.com
2. Set up email template
3. Update EmailJS credentials in contact form HTML

## Deployment

### GitHub Pages
1. Go to Settings > Pages
2. Set source to "Deploy from branch"
3. Select "main" branch and "/ (root)" folder
4. Site will be deployed at: `https://rzletscode.github.io/code2career_ai/`

## Development Standards
- Semantic HTML5 markup
- Mobile responsive (320px - 1920px)
- CSS follows BEM naming convention
- WCAG 2.1 AA accessibility compliance
- Lighthouse score target: >80

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
MIT License - See LICENSE file

## Author
Rajesh Kumar (@RzLetsCode)

## Support
For issues or questions, create an issue in this repository.
