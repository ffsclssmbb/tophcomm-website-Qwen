# 📸 Adding Images & Logos to Tophcomm Systems

## Folder Structure

Place all your images in the `public/images/` folder. Files in `public/` are automatically copied to the build output.

```
public/
├── images/
│   ├── tophcomm-logo.png          ← Main brand logo (navbar, footer)
│   ├── tophcomm-logo-dark.png     ← Logo for light backgrounds
│   ├── fs-softwares-logo.png      ← FS Softwares division logo
│   ├── digicard-hero.png          ← DigiCard product image
│   ├── team-alex.jpg              ← Team member photos
│   ├── team-sarah.jpg
│   ├── team-marcus.jpg
│   ├── project-1.jpg              ← Project case study images
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── about-1.jpg                ← About section images
│   ├── about-2.jpg
│   └── about-3.jpg
├── favicon.svg
├── manifest.json
└── ...
```

## How to Add Your Real Logos

### 1. Replace the Navbar Logo
Open `src/components/Navbar.tsx` and find the SVG logo section. Replace it with:

```tsx
<img 
  src="/images/tophcomm-logo.png" 
  alt="Tophcomm Systems" 
  className="h-10 w-auto"
/>
```

### 2. Replace Team Photos
Open `src/components/Team.tsx` and update the `team` array:

```tsx
const team = [
  {
    name: 'Alex Morgan',
    role: 'Chief Technology Officer',
    image: '/images/team-alex.jpg',  // ← Your photo
  },
  // ...
];
```

### 3. Replace Project Images
Open `src/components/Projects.tsx` and update the `projects` array:

```tsx
const projects = [
  {
    // ...
    image: '/images/project-1.jpg',  // ← Your image
  },
];
```

### 4. Replace About Section Images
Open `src/components/About.tsx` and update the `<img>` src attributes:

```tsx
<img src="/images/about-1.jpg" alt="..." />
```

## Image Optimization Tips

- **Logos**: Use PNG with transparency, max 500px wide
- **Team photos**: Square or 3:4 ratio, 800x1000px, JPG
- **Project images**: 16:9 or 4:3 ratio, 1600x900px, JPG (WebP if possible)
- **File size**: Keep under 500KB each for fast loading

## Quick Commands

After adding images, rebuild:
```bash
npm run build
```

The images will be copied to `dist/images/` automatically.

## Using External URLs (Unsplash, etc.)

If you prefer to use external URLs (like the current setup), just use full URLs:
```tsx
<img src="https://images.unsplash.com/..." />
```

Note: External images require internet connection and may be slower.
