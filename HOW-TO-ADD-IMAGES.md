# 📸 How to Add Images & Logos to Your Tophcomm Systems Build

## Quick Start

Your site is built and ready! Currently using placeholder images from Unsplash. Here's how to add your own logos and images:

---

## Step 1: Prepare Your Images

### Required Images

| Image | Location | Recommended Size | Format |
|-------|----------|------------------|--------|
| **Main Logo** | `public/images/tophcomm-logo.png` | 200x60px | PNG (transparent) |
| **FS Softwares Logo** | `public/images/fs-softwares-logo.png` | 200x60px | PNG (transparent) |
| **DigiCard Hero** | `public/images/digicard-hero.png` | 1200x800px | PNG/JPG |
| **Team Photos** (3) | `public/images/team-alex.jpg`<br>`public/images/team-sarah.jpg`<br>`public/images/team-marcus.jpg` | 800x1000px | JPG |
| **Project Images** (3) | `public/images/project-1.jpg`<br>`public/images/project-2.jpg`<br>`public/images/project-3.jpg` | 1600x900px | JPG |
| **About Images** (3) | `public/images/about-1.jpg`<br>`public/images/about-2.jpg`<br>`public/images/about-3.jpg` | 800x1000px (tall)<br>800x600px (medium) | JPG |

### Image Optimization Tips

- **Compress images** before adding: Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- **Keep file sizes under 500KB** for fast loading
- **Use JPG for photos**, PNG for logos with transparency
- **Resize images** to the recommended dimensions above

---

## Step 2: Add Images to the Project

### Option A: Using File Explorer/Finder

1. Navigate to your project folder
2. Open the `public/images/` directory
3. Copy your image files into this folder
4. Make sure filenames match exactly (case-sensitive):
   - ✅ `tophcomm-logo.png`
   - ❌ `Tophcomm-Logo.PNG`

### Option B: Using Command Line

```bash
# Navigate to images directory
cd public/images

# Copy your images (example)
cp ~/Downloads/my-logo.png ./tophcomm-logo.png
cp ~/Downloads/team-photo.jpg ./team-alex.jpg
```

---

## Step 3: Update Code to Use Your Logo (Optional)

The navbar currently uses an SVG logo. To use your PNG logo instead:

### Edit `src/components/Navbar.tsx`

Find this section (around line 20):

```tsx
{/* Logo */}
<a href="#" className="flex items-center gap-3 text-white">
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 2L4 8v16l12 6 12-6V8L16 2z" stroke="currentColor" strokeWidth="2" />
    <path d="M16 8l-6 3v6l6 3 6-3v-6l-6-3z" fill="currentColor" />
  </svg>
  <span className="font-display text-xl font-bold tracking-tight">TOPHCOMM</span>
</a>
```

Replace with:

```tsx
{/* Logo */}
<a href="#" className="flex items-center gap-3 text-white">
  <img 
    src="/images/tophcomm-logo.png" 
    alt="Tophcomm Systems" 
    className="h-10 w-auto"
  />
</a>
```

---

## Step 4: Rebuild the Project

After adding your images:

```bash
npm run build
```

The images will be automatically copied to `dist/images/` during the build process.

---

## Step 5: Verify Your Build

Check that your images are in the build output:

```bash
ls dist/images/
```

You should see all your image files listed.

---

## How It Works

### Fallback System

The site uses a smart fallback system:

1. **First**, it tries to load your local image from `/images/your-image.jpg`
2. **If not found**, it automatically falls back to Unsplash placeholder images
3. This means the site works even without your images!

### Example from `src/components/Team.tsx`:

```tsx
<img
  src={member.image}  // Tries /images/team-alex.jpg first
  alt={member.name}
  onError={(e) => {
    // Falls back to Unsplash if local image not found
    (e.target as HTMLImageElement).src = member.fallbackImage;
  }}
/>
```

---

## Troubleshooting

### Images Not Showing?

1. **Check file paths** — Make sure filenames match exactly (case-sensitive)
2. **Check file format** — Use `.jpg` or `.png` extensions
3. **Rebuild** — Run `npm run build` after adding images
4. **Clear browser cache** — Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Logo Too Big/Small?

Adjust the `className` in Navbar:

```tsx
// Make logo bigger
<img src="/images/tophcomm-logo.png" className="h-16 w-auto" />

// Make logo smaller
<img src="/images/tophcomm-logo.png" className="h-8 w-auto" />
```

---

## Deployment

When you deploy to Netlify/Vercel, your images in `public/images/` will be automatically included in the build output at `dist/images/`.

No additional configuration needed!

---

## Need Help?

- **Image optimization**: [TinyPNG](https://tinypng.com)
- **Image resizing**: [Squoosh](https://squoosh.app)
- **Free stock photos**: [Unsplash](https://unsplash.com)
- **Icon library**: [Lucide Icons](https://lucide.dev)

---

## Summary

✅ Place images in `public/images/`  
✅ Match exact filenames (case-sensitive)  
✅ Run `npm run build`  
✅ Deploy — images are automatically included!  

The site will use your images if they exist, otherwise it falls back to Unsplash placeholders.
