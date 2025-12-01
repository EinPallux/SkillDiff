# Deployment Guide for SkillDiff.lol

This guide will help you deploy SkillDiff.lol to GitHub Pages and set up all necessary assets.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Champion, rune, and role icons (see Icon Setup section)

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `skilldiff-lol` (or your preferred name)
5. Choose "Public" (required for free GitHub Pages)
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using Git Command Line

```bash
# Navigate to your project folder
cd skilldiff-lol

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - SkillDiff.lol v1.0"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/skilldiff-lol.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository
3. Select your `skilldiff-lol` folder
4. Commit all files with message "Initial commit"
5. Click "Publish repository"
6. Choose your account and repository name
7. Make sure "Keep this code private" is UNCHECKED
8. Click "Publish Repository"

#### Option C: Drag and Drop (Easiest)

1. Go to your GitHub repository page
2. Click "uploading an existing file"
3. Drag and drop ALL your files
4. Add commit message: "Initial commit"
5. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/skilldiff-lol/`

### Step 4: Verify Deployment

Visit your site URL. You should see:
- ✅ Beautiful landing page
- ✅ Working navigation
- ✅ Three main sections
- ✅ Support Companion tool accessible

## 🎨 Icon Setup

To get the best visual experience, you need to add champion, rune, and role icons.

### Where to Get Icons

#### Official Riot Data Dragon (Recommended)

1. Visit: [Riot Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon)
2. Latest version URL: `https://ddragon.leagueoflegends.com/cdn/[VERSION]/img/champion/`
3. Current version example: `14.23.1`

#### Community DD (Alternative)

- [CommunityDragon](https://raw.communitydragon.org/)
- Higher quality, frequently updated

#### Manual Download

1. Go to: `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/`
2. Download each champion's image
3. Rename to exact champion names (e.g., `Ezreal.png`, `Kai'Sa.png`)

### Icon Requirements

#### Champions (`icons/champions/`)
- Format: PNG
- Size: 120x120px (minimum)
- Naming: Exact champion name with apostrophes and capitals
  - ✅ `Ezreal.png`
  - ✅ `Kai'Sa.png`
  - ✅ `Miss Fortune.png`
  - ❌ `ezreal.png`
  - ❌ `kaisa.png`

#### Roles (`icons/roles/`)
- Files needed:
  - `Top.png`
  - `Jungle.png`
  - `Mid.png`
  - `ADC.png`
  - `Support.png`
- Format: PNG with transparency
- Size: 64x64px

#### Runes (`icons/runes/`)
- Optional for v1.0
- Will be used in rune modal displays
- Format: PNG with transparency
- Size: 64x64px

### Automated Icon Download Script

Create a file called `download-icons.py`:

```python
import requests
import os

VERSION = "14.23.1"
BASE_URL = f"https://ddragon.leagueoflegends.com/cdn/{VERSION}/img/champion/"

# Champion list
champions = [
    'Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx',
    'Kaisa', 'Kalista', 'KogMaw', 'Lucian', 'MissFortune', 'Nilah',
    'Samira', 'Senna', 'Sivir', 'Smolder', 'Tristana', 'Twitch',
    'Varus', 'Vayne', 'Xayah', 'Zeri', 'Ziggs'
]

# Create directory
os.makedirs('icons/champions', exist_ok=True)

# Download each champion icon
for champion in champions:
    url = f"{BASE_URL}{champion}.png"
    response = requests.get(url)
    
    if response.status_code == 200:
        # Handle special naming
        if champion == 'Kaisa':
            filename = "Kai'Sa.png"
        elif champion == 'KogMaw':
            filename = "Kog'Maw.png"
        elif champion == 'MissFortune':
            filename = "Miss Fortune.png"
        else:
            filename = f"{champion}.png"
        
        with open(f'icons/champions/{filename}', 'wb') as f:
            f.write(response.content)
        print(f"✓ Downloaded {filename}")
    else:
        print(f"✗ Failed to download {champion}")

print("\n✅ Icon download complete!")
```

Run with: `python download-icons.py`

### Manual Icon Upload to GitHub

After downloading icons locally:

1. Go to your repository on GitHub
2. Navigate to `icons/champions/`
3. Click "Add file" → "Upload files"
4. Drag and drop all champion icons
5. Commit with message: "Add champion icons"
6. Repeat for `icons/roles/` and `icons/runes/`

## 🔧 Customization

### Changing Site Title

In `index.html` and `pages/support-companion.html`:
```html
<title>Your Custom Name - SkillDiff.lol</title>
```

### Updating Colors

In `tailwind.config` section of HTML files:
```javascript
colors: {
    primary: '#0EA5E9',    // Change main color
    secondary: '#8B5CF6',   // Change secondary
    accent: '#F59E0B',      // Change accent
}
```

### Custom Domain

1. Buy domain from provider (Namecheap, Google Domains, etc.)
2. Create file named `CNAME` in root directory
3. Add your domain: `skilldiff.lol`
4. Configure DNS with your provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
5. Wait for DNS propagation (up to 24 hours)

## 📊 Adding More Data

### Adding New ADC Support Data

Edit `js/support-companion.js`:

```javascript
supportSynergies['NewADC'] = {
    generalTip: 'Your general tip here...',
    supports: {
        'S': [
            {
                name: 'SupportName',
                role: 'Enchanter',
                reasons: [
                    'Reason 1',
                    'Reason 2',
                    'Reason 3',
                    'Reason 4'
                ]
            }
        ],
        // Add A, B, C tiers...
    }
};
```

### Updating Patch Notes

Edit `js/patch-notes.js`:

```javascript
const patchData = {
    version: '14.24', // Update version
    date: 'December 4, 2024', // Update date
    changes: [
        {
            champion: 'ChampionName',
            type: 'buff', // or 'nerf' or 'adjustment'
            changes: ['Change 1', 'Change 2'],
            summary: 'Brief summary'
        }
    ]
};
```

### Updating Meta Picks

Edit `js/meta-picks.js`:

```javascript
metaPicksData.roles.top.champions[0] = {
    name: 'NewChampion',
    tier: 'S',
    winRate: 52.5,
    pickRate: 10.2,
    banRate: 15.8,
    trend: 'up',
    description: 'Why this champion is strong'
};
```

## 🐛 Troubleshooting

### Site Not Loading

1. Check GitHub Pages is enabled in Settings
2. Verify branch is set to `main`
3. Wait 2-3 minutes after enabling
4. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Icons Not Showing

1. Verify files are in correct folders
2. Check file names match exactly (case-sensitive)
3. Ensure PNG format
4. Check file paths in code are correct

### JavaScript Not Working

1. Open browser console (F12)
2. Check for errors
3. Verify all JS files are present
4. Check file paths are relative

### Styling Issues

1. Clear browser cache
2. Check Tailwind CDN is loading
3. Verify custom CSS file is linked
4. Test in different browser

## 📈 Analytics (Optional)

### Adding Google Analytics

1. Create Google Analytics account
2. Get tracking ID (GA-XXXXXXXXX)
3. Add to `<head>` of all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXXXXXX');
</script>
```

## 🔒 Security

### Best Practices

- ✅ Keep repository public for GitHub Pages
- ✅ Don't commit API keys (we don't use any)
- ✅ Use relative paths for all files
- ✅ Sanitize user input (search function)
- ✅ Keep dependencies updated

## 📱 Testing

### Browser Testing

Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

### Device Testing

Test on:
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

### Performance Testing

Use [PageSpeed Insights](https://pagespeed.web.dev/):
- Target: 90+ score
- Optimize images if needed
- Minimize JavaScript
- Use CDN for Tailwind

## 🎉 Launch Checklist

Before announcing your site:

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Support Companion tool functional
- [ ] Icons displaying properly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Analytics set up (optional)
- [ ] Custom domain configured (optional)
- [ ] README updated with your info
- [ ] Social media preview image
- [ ] Tested on multiple browsers

## 📞 Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Create issue in repository
- Contact maintainer

---

**You're ready to launch! 🚀**

After deployment, share your site and help the League community improve!
