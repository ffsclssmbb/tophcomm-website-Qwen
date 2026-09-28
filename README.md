# Tophcomm Systems — tophcomm.systems

Enterprise Software & Systems Integration website.

## 🚀 Quick Deploy

### Option 1: Netlify (Recommended)
1. Push this repo to GitHub/GitLab
2. Go to [netlify.com](https://netlify.com) → "Add new site" → Import from Git
3. Build command: `npm run build` / Publish directory: `dist`
4. In Site settings → Domain management → Add `tophcomm.systems`
5. In Namecheap → Set nameservers to what Netlify provides

### Option 2: Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Framework preset: Vite (auto-detected)
4. Add custom domain `tophcomm.systems` in project settings
5. Update DNS at Namecheap per Vercel's instructions

### Option 3: Cloudflare Pages
1. Connect your Git repo at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Build command: `npm run build` / Output directory: `dist`
3. Add custom domain in Cloudflare dashboard

### Option 4: Manual Upload
1. Run `npm run build` locally
2. Upload the `dist/` folder contents to any static host
3. Configure domain DNS to point to your host

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg          # SVG favicon
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # Search engine directives
│   ├── sitemap.xml          # Sitemap for SEO
│   ├── 404.html             # Custom 404 page
│   └── _redirects           # Netlify SPA redirects
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation with mobile menu
│   │   ├── Hero.tsx          # Animated hero with canvas
│   │   ├── Services.tsx      # Service offerings grid
│   │   ├── Integration.tsx   # Interactive hub diagram
│   │   ├── Process.tsx       # 4-step process timeline
│   │   ├── Innovation.tsx    # FS Softwares & DigiCard
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── FAQ.tsx           # Accordion FAQ
│   │   ├── Stats.tsx         # Animated counters
│   │   ├── Contact.tsx       # Contact form with validation
│   │   ├── Footer.tsx        # Footer with newsletter
│   │   ├── ScrollProgress.tsx# Top scroll progress bar
│   │   ├── ScrollToTop.tsx   # Back-to-top button
│   │   └── CookieConsent.tsx # GDPR cookie banner
│   ├── App.tsx              # Main app with error boundary
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML shell with SEO meta
├── netlify.toml             # Netlify deployment config
├── vercel.json              # Vercel deployment config
└── package.json
```

## 🛠 Development

```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build → dist/
```

## ✅ Production Features

- **SEO**: Open Graph, Twitter Cards, structured data (JSON-LD), sitemap, robots.txt
- **PWA**: Web app manifest, SVG favicon, theme color
- **Accessibility**: ARIA labels, keyboard navigation, skip-to-content, focus styles, reduced-motion support
- **Performance**: Code-splitting, optimized CSS, lazy animations, preconnect hints
- **Security**: CSP headers, X-Frame-Options, XSS protection, referrer policy
- **Responsive**: Mobile-first, hamburger menu, fluid typography
- **UX**: Scroll progress, scroll-to-top, cookie consent, form validation, error boundary, loading state
- **Sections**: Hero, Services, Integration, Process, Innovation (FS Softwares + DigiCard), Testimonials, FAQ, Stats, Contact, Footer

## 🔧 Customization

### Update Contact Info
- `src/components/Contact.tsx` — email, phone, social links
- `src/components/Footer.tsx` — social links, newsletter

### Update Content
- `src/components/Services.tsx` — service offerings
- `src/components/Testimonials.tsx` — client quotes
- `src/components/FAQ.tsx` — frequently asked questions
- `src/components/Hero.tsx` — stats counters

### Update Branding
- `public/favicon.svg` — site icon
- `index.html` — meta tags, structured data
- `src/index.css` — color theme variables

## 📊 Analytics

To add analytics, insert your tracking script in `index.html` before `</head>`:
- Google Analytics
- Plausible Analytics
- Fathom Analytics

## 🌐 DNS Configuration (Namecheap)

After deploying to your host, in Namecheap:
1. Domain List → Manage → Domain tab
2. Nameservers → Custom DNS
3. Enter the nameservers provided by your host
4. Wait 10 min – 24 hours for propagation

---

Built with React, Vite, Tailwind CSS v4, and TypeScript.
