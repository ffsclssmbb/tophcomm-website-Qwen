# 🚀 Connect to GitHub — Step-by-Step Guide

## Prerequisites
- Git installed on your computer
- GitHub account
- Node.js 18+ and npm installed

---

## Step 1: Initialize Git Repository

Open your terminal in the project root directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Tophcomm Systems - Vesper-inspired theme"
```

---

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** button → **New repository**
3. Fill in:
   - **Repository name**: `tophcomm-systems` (or your preferred name)
   - **Description**: `Tophcomm Systems - Enterprise Business Infrastructure`
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

---

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these:

```bash
# Add remote origin (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_USERNAME/tophcomm-systems.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 4: Verify Connection

```bash
# Check remote
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/tophcomm-systems.git (fetch)
# origin  https://github.com/YOUR_USERNAME/tophcomm-systems.git (push)
```

---

## 🎉 Done! Your code is now on GitHub

---

## 🚀 Deploy to Production

### Option 1: Netlify (Recommended)

1. Go to [Netlify](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub account
4. Select your repository: `tophcomm-systems`
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

**Configuration file** (`netlify.toml`) is already included!

### Option 2: Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Framework preset: **Vite** (auto-detected)
5. Click **Deploy**

**Configuration file** (`vercel.json`) is already included!

### Option 3: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`
4. Your site will be live at: `https://YOUR_USERNAME.github.io/tophcomm-systems/`

---

## 📝 Future Updates

When you make changes:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update: describe your changes"

# Push to GitHub
git push
```

---

## 🔧 Troubleshooting

### Permission denied (public key)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key and add to GitHub
cat ~/.ssh/id_ed25519.pub
# Then add to GitHub → Settings → SSH and GPG keys
```

### Remote already exists
```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/tophcomm-systems.git
```

### Branch name issues
```bash
# Rename to main
git branch -M main

# Force push if needed
git push -u origin main --force
```

---

## 📊 Repository Structure

```
tophcomm-systems/
├── .gitignore              ✅ Created
├── README.md               ✅ Created
├── package.json            ✅ Existing
├── vite.config.ts          ✅ Existing
├── tsconfig.json           ✅ Existing
├── netlify.toml            ✅ Existing (for deployment)
├── vercel.json             ✅ Existing (for deployment)
├── index.html              ✅ Existing
├── src/                    ✅ Existing
│   ├── components/         (14 components)
│   ├── data/               (software catalog)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── public/                 ✅ Existing
    ├── images/
    ├── favicon.svg
    └── ...
```

---

## ✅ Checklist

- [ ] Git initialized (`git init`)
- [ ] Files added (`git add .`)
- [ ] Initial commit created (`git commit -m "..."`)
- [ ] GitHub repository created
- [ ] Remote added (`git remote add origin ...`)
- [ ] Pushed to GitHub (`git push -u origin main`)
- [ ] Deployment configured (Netlify/Vercel)
- [ ] Site live and accessible

---

## 🎯 Next Steps

1. **Push your code** using the commands above
2. **Deploy** to Netlify or Vercel (takes 2-3 minutes)
3. **Configure custom domain** (optional):
   - Netlify: Site settings → Domain management
   - Vercel: Project settings → Domains
4. **Share your site** with the world! 🌍

---

## 📞 Need Help?

- **Git basics**: [git-scm.com/book](https://git-scm.com/book)
- **GitHub docs**: [docs.github.com](https://docs.github.com)
- **Netlify docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel docs**: [vercel.com/docs](https://vercel.com/docs)

---

**Your project is ready for GitHub!** 🚀

Just follow the 4 steps above and you'll be live in minutes.
