# Advanced Portfolio Setup Guide

## 🎯 Project Overview

This is a **high-end professional portfolio** built with:
- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS with Professional Dark Mode palette
- **Hosting**: GitHub Pages (Free, Zero-Cost)
- **Automation**: YouTube Data API v3 integration with GitHub Actions
- **Components**: Reusable React components with TypeScript

## 🏗️ Project Structure

```
code2career_ai/
├── .github/workflows/
│   ├── nextjs.yml              # Deployment workflow
│   └── fetch-youtube-videos.yml # Daily YouTube fetch automation
├── app/
│   ├── components/
│   │   ├── VideoCard.tsx       # YouTube video display component
│   │   └── BlogCard.tsx        # Blog post card component
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
├── data/
│   ├── videos.json             # YouTube videos cache (auto-updated)
│   └── blogs.json              # Blog posts data
├── scripts/
│   └── fetch-videos.js         # YouTube API integration script
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
├── package.json                # Dependencies
└── tsconfig.json
```

## 🎨 Design System: Professional Dark Mode

### Color Palette
- **Primary**: Cyan (#00FFFF) - Accent and highlights
- **Secondary**: Emerald (#10B981) - Success states, badges
- **Background**: Deep Charcoal (#0F172A → #1E293B) - Gradient backgrounds
- **Text**: Slate (#E2E8F0) - High contrast readability
- **Accent**: Azure (#0EA5E9) - Hover effects

### Typography
- Hero sections: Bold, uppercase for impact
- Card titles: Large, gradient text on hover
- Metadata: Small, dimmed for hierarchy
- Hover states: Gradient color transitions

## 📋 Component Documentation

### VideoCard Component
**Location**: `app/components/VideoCard.tsx`

```typescript
interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
  views?: number;
  duration?: string;
}
```

**Features**:
- Responsive grid layout
- Thumbnail with hover zoom effect
- Duration badge overlay
- View count and date metadata
- Watch on YouTube CTA button
- Cyan accent glow on hover

### BlogCard Component
**Location**: `app/components/BlogCard.tsx`

```typescript
interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
  image?: string;
}
```

**Features**:
- Category badge with Emerald accent
- Tag system with icons (lucide-react)
- Reading time estimation
- Date formatting
- Gradient border on hover
- Read Article CTA with arrow animation

## 🔄 YouTube Automation Setup

### Step 1: Get YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable YouTube Data API v3
4. Create API Key credentials
5. Copy the API key

### Step 2: Add to GitHub Secrets

1. Navigate to your repo Settings > Secrets and variables > Actions
2. Click "New repository secret"
3. Add two secrets:
   - `YOUTUBE_API_KEY`: Your API key from step 1
   - `YOUTUBE_CHANNEL_ID`: "code2career_ai"

### Step 3: Automation Workflow

The workflow at `.github/workflows/fetch-youtube-videos.yml`:
- Runs daily at 00:00 UTC (configurable)
- Fetches latest 12 videos from your channel
- Updates `data/videos.json` with fresh data
- Auto-commits changes with `[skip ci]` flag
- Zero additional cost (uses free tier limits)

**Cron Schedule**: `0 0 * * *` (Midnight UTC daily)

To trigger manually: Go to Actions > Fetch YouTube Videos Daily > Run workflow

## 📝 Data Management

### videos.json Structure
```json
{
  "videos": [
    {
      "id": "videoId",
      "videoId": "videoId",
      "title": "Video Title",
      "description": "Description",
      "thumbnail": "https://img.youtube.com/vi/videoId/maxresdefault.jpg",
      "publishedAt": "2024-02-19T10:00:00Z",
      "views": 1500,
      "duration": "24:35"
    }
  ],
  "lastUpdated": "2024-02-19T10:00:00Z"
}
```

### blogs.json Structure
```json
{
  "blogs": [
    {
      "id": "1",
      "title": "Blog Title",
      "excerpt": "Short excerpt",
      "date": "2024-02-19",
      "readingTime": "12 min read",
      "tags": ["AI", "Architecture"],
      "category": "Technical"
    }
  ]
}
```

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

1. Every push to `main` branch triggers the Next.js workflow
2. Builds the project with `npm run build`
3. Exports static files to `out/` directory
4. Deploys to GitHub Pages automatically

### Manual Deployment

```bash
npm install
npm run build
# Files in 'out/' directory are ready for deployment
```

**Site URL**: `https://rzletscode.github.io/code2career_ai/`

## 💡 Development Tips

### Local Development
```bash
npm run dev  # Runs on http://localhost:3000
```

### Building for Production
```bash
npm run build   # Creates static export
npm start       # Preview production build
```

### Testing YouTube Automation
```bash
node scripts/fetch-videos.js
```

## 🔐 Security Best Practices

1. ✅ **Never commit secrets** - Use GitHub Secrets
2. ✅ **API Key protection** - Rotate keys periodically
3. ✅ **Rate limiting** - YouTube API has free tier limits
4. ✅ **Static export** - No server-side code exposure
5. ✅ **CORS handling** - Client-side API calls properly configured

## 📊 Performance Optimizations

- **Static export** reduces bundle size
- **Image optimization** with Next.js Image component
- **Tailwind CSS purging** removes unused styles
- **JSON caching** reduces API calls
- **Lazy loading** for components and images

## 🎯 Next Steps

1. ✅ Customize blog posts in `data/blogs.json`
2. ✅ Update component styling in Tailwind config
3. ✅ Add your YouTube channel videos via automation
4. ✅ Create dedicated Blog and Videos pages
5. ✅ Add Contact form component
6. ✅ Implement social media links section

## 📞 Support

For issues or questions:
- Check GitHub Actions logs for automation errors
- Verify YouTube API key is valid
- Ensure branch protection rules don't block auto-commits

---

**Built with ❤️ for Enterprise AI Architects**
