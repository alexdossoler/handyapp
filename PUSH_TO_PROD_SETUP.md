# Push-to-Prod Setup with Vercel

## Quick Setup Steps

### 1. Create GitHub Repository
- Go to https://github.com/new
- Name: handyman-website
- Don't initialize with README

### 2. Connect Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/handyman-website.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel
```bash
vercel --prod
```

### 4. Connect GitHub to Vercel
- Go to https://vercel.com/dashboard
- Import your repository
- Enable automatic deployments

## Commands
- `npm run deploy` - Deploy to production
- `npm run deploy:preview` - Preview deployment
- `git push` - Auto-deploy after GitHub connection

## Benefits
- Automatic deployments on every push
- Free SSL certificates
- Global CDN
- Preview deployments
- Zero downtime
