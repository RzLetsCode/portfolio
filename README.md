    # Rajesh Kumar - Professional Portfolio

## 📋 Overview

Enterprise AI Architect portfolio built with **Next.js** showcasing expertise in:
- Enterprise-grade RAG pipelines & LLM optimization
- Multi-agent AI systems & agentic architectures
- Snowflake data platform & distributed data engineering
- Azure Cloud infrastructure & DevOps practices
- Production-grade ML systems & MLOps

**Live Portfolio:** [rzletscode.github.io/portfolio](https://rzletscode.github.io/portfolio/)

---

## ✨ Key Features

✅ **Modern Tech Stack**
- Next.js 14+ with TypeScript
- Tailwind CSS for responsive design
- Lucide React icons
- Dynamic routing for project details

✅ **Full-Featured Portfolio**
- Professional hero section with stats
- Showcase 3+ enterprise projects with detailed case studies
- Skills organized by category (AI/ML, Data Platforms, Cloud & DevOps)
- Contact form with EmailJS integration
- Responsive design (mobile-first approach)

✅ **Content Integration**
- Blog aggregation from Hashnode
- YouTube channel integration
- GitHub project links
- Social media profiles (LinkedIn, GitHub)

✅ **Professional Design**
- Dark mode theme with cyan accents
- Clean, minimal enterprise aesthetic
- Smooth animations & transitions
- WCAG 2.1 AA accessibility compliance

---

## 🚀 Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend** | Next.js, React, TypeScript |
| **Styling** | Tailwind CSS, CSS3 |
| **Icons** | Lucide React |
| **Email** | EmailJS |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions |
| **Data Source** | JSON files (blogs, videos) |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── BlogCard.tsx          # Blog post display
│   │   └── VideoCard.tsx         # YouTube video display
│   ├── contact/
│   │   └── page.tsx              # Professional contact form
│   ├── projects/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Dynamic project details
│   │   └── project data...
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home/portfolio page
│   └── globals.css               # Global styles
├── data/
│   ├── blogs.json                # Blog metadata
│   ├── videos.json               # YouTube video data
│   └── scripts/
│       └── fetch-youtube.js      # YouTube API automation
├── public/
│   └── images/                   # Asset images
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deployment
├── package.json
└── README.md
```

---

## 🔧 Setup & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development

```bash
# Clone repository
git clone https://github.com/RzLetsCode/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## ✉️ Contact Form Setup

The contact form requires **EmailJS** configuration:

### Quick Setup

1. **Create EmailJS Account**
   - Visit [emailjs.com](https://www.emailjs.com/)
   - Sign up with Google or email

2. **Get Credentials**
   - Public Key (Account → Security)
   - Service ID (Email Services)
   - Template ID (Email Templates)

3. **Configure Environment Variables**
   
   Create `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

4. **For GitHub Pages (Production)**
   - Go to Settings → Secrets and variables → Actions
   - Add the 3 environment variables above
   - GitHub Actions will use them automatically

📚 **Full Guide:** See `EMAILJS_SETUP_GUIDE.md`

---

## 📊 Performance

- ✅ Lighthouse Score: >90
- ✅ Mobile Responsive: 320px - 1920px
- ✅ SEO Optimized: Meta tags, structured data
- ✅ Accessible: WCAG 2.1 AA compliant
- ✅ Fast Load Time: <2 seconds

---

## 🌐 Deployment

### GitHub Pages (Automatic)

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site live at: `https://rzletscode.github.io/portfolio/`

**Deployment Status:** Check `.github/workflows/deploy.yml`

---

## 📚 Documentation

- **Setup Guides:** `EMAILJS_SETUP_GUIDE.md`, `NEXT_JS_SETUP_GUIDE.md`
- **Architecture:** `ARCHITECTURE.md`
- **Implementation:** `IMPLEMENTATION_CHECKLIST.md`
- **Migration:** `MIGRATION-GUIDE.md`
- **Bifurcation:** `BIFURCATION-IMPLEMENTATION-GUIDE.md`

---

## 🛠️ Customization

### Update Content

1. **Personal Info:** `app/page.tsx` - Hero section, stats
2. **Projects:** `data/` folder - Add/edit project data
3. **Skills:** `app/page.tsx` - Update skills categories
4. **Colors:** `app/globals.css` - Modify Tailwind colors
5. **Blog/Videos:** Auto-fetched from external sources

### Modify Styling

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom theme variables */
:root {
  --color-cyan: #06b6d4;
  --color-primary: #0f172a;
}
```

---

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^latest",
  "@emailjs/browser": "^4.0.0"
}
```

---

## 📋 License

MIT License - Free to use and modify for personal portfolios.

See `LICENSE` file for details.

---

## 👨‍💼 Author

**Rajesh Kumar**
- **Role:** Enterprise AI Architect
- **Expertise:** RAG Pipelines, Multi-Agent Systems, Snowflake, Azure Cloud
- **GitHub:** [@RzLetsCode](https://github.com/RzLetsCode)
- **LinkedIn:** [Rajesh Kumar](https://linkedin.com/in/rajesh-kumar-04405962/)
- **Email:** rajeshkumar080817@gmail.com
- **YouTube:** [portfolio](https://www.youtube.com/@portfolio)
- **Blog:** [Hashnode (@rz111)](https://hashnode.com/@rz111)

---

## 🤝 Support & Contribution

### Getting Help
- 📖 Check documentation files in repo
- 🐛 Open an issue on GitHub
- 💬 Review detailed guides (SETUP, IMPLEMENTATION, etc.)

### Contributing
Feel free to fork, modify, and improve this portfolio template!

---

## 📈 Recent Updates

- ✅ Next.js 14 migration completed
- ✅ EmailJS integration for contact form
- ✅ Blog & YouTube components added
- ✅ Dynamic project routing implemented
- ✅ GitHub Actions CI/CD pipeline
- ✅ Professional contact form page

---

**Last Updated:** February 19, 2026  
**Status:** ✅ Active Development  
**Version:** 2.0.0
