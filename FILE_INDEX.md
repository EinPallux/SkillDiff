# SkillDiff.lol - Complete File Index

## 📂 Project Structure Overview

This document provides a complete reference of all files in the project.

## 🌐 HTML Files (2 files)

### `index.html` (Main Landing Page)
- **Purpose:** The Hub - Main landing page
- **Sections:** Hero, Tools, Patch Notes, Meta Picks
- **Lines:** ~500
- **Dependencies:** Tailwind CDN, Google Fonts, custom CSS/JS
- **Key Features:** Fixed nav, mobile menu, smooth scrolling, three main sections

### `pages/support-companion.html`
- **Purpose:** Support Companion Tool page
- **Features:** ADC selection, tier lists, rune modals
- **Lines:** ~150
- **Dependencies:** Same as index.html + support-companion.js
- **Key Features:** Champion grid, search, dynamic tier lists

## 🎨 CSS Files (1 file)

### `css/styles.css`
- **Purpose:** Custom styles and animations
- **Lines:** ~450
- **Key Features:**
  - Custom animations (fadeIn, slideIn, etc.)
  - Tier badge styles (S/A/B/C)
  - Modal system
  - Stat bar animations
  - Champion card styles
  - Responsive breakpoints
  - Custom scrollbar
  - Accessibility styles

## ⚡ JavaScript Files (4 files)

### `js/main.js`
- **Purpose:** Core functionality and utilities
- **Lines:** ~200
- **Functions:**
  - Mobile menu toggle
  - Smooth scrolling
  - Intersection Observer
  - Back to top button
  - Format utilities
  - Toast notifications
- **Exports:** Utility functions

### `js/patch-notes.js`
- **Purpose:** Patch notes data and rendering
- **Lines:** ~400
- **Data:** Patch 14.23 (11 champions)
- **Functions:**
  - initPatchNotes()
  - createPatchCard()
  - showPatchDetails()
  - observePatchCards()
- **Features:** Buffs, nerfs, adjustments with color coding

### `js/meta-picks.js`
- **Purpose:** Meta picks data and display
- **Lines:** ~450
- **Data:** Top 3 champions per role (15 total)
- **Functions:**
  - initMetaPicks()
  - createRoleSection()
  - createChampionCard()
  - getRoleStats()
- **Features:** Win/pick/ban rates, trend indicators, stat bars

### `js/support-companion.js`
- **Purpose:** Support synergy engine
- **Lines:** ~1,900
- **Data:** 5 ADCs with complete synergy data
- **Functions:**
  - initSupportCompanion()
  - loadADCGrid()
  - selectADC()
  - createSupportCard()
  - showRuneModal()
  - getRuneData()
- **Features:** 24 ADCs, 32+ supports, tier lists, rune builds

## 📚 Documentation Files (5 files)

### `README.md`
- **Purpose:** Main project documentation
- **Lines:** ~400
- **Sections:**
  - Overview and features
  - Technology stack
  - Project structure
  - Setup instructions
  - Data sources
  - Usage guide
  - Contributing
  - License

### `DEPLOYMENT.md`
- **Purpose:** Deployment and setup guide
- **Lines:** ~500
- **Sections:**
  - GitHub Pages setup
  - Icon acquisition
  - Customization
  - Troubleshooting
  - Testing checklist
  - Analytics setup

### `FEATURES.md`
- **Purpose:** Feature documentation and roadmap
- **Lines:** ~600
- **Sections:**
  - Implemented features
  - Future roadmap (4 phases)
  - Technical improvements
  - Known issues
  - Feature requests

### `QUICKSTART.md`
- **Purpose:** Fast-track getting started guide
- **Lines:** ~200
- **Sections:**
  - Immediate next steps
  - Icon setup
  - Quick deploy
  - Testing checklist
  - Launch checklist

### `PROJECT_SUMMARY.md`
- **Purpose:** Complete project overview
- **Lines:** ~400
- **Sections:**
  - What was built
  - Statistics
  - Features delivered
  - Design highlights
  - Data sources
  - Future potential

### `FILE_INDEX.md` (This file)
- **Purpose:** Complete file reference
- **Sections:** All files with descriptions

## 🔧 Configuration Files (1 file)

### `.gitignore`
- **Purpose:** Git ignore rules
- **Lines:** ~25
- **Ignores:** OS files, editor files, temp files, node_modules

## 📁 Directory Structure

```
skilldiff-lol/
│
├── index.html                      # Main landing page (500 lines)
│
├── pages/
│   └── support-companion.html      # Support tool (150 lines)
│
├── css/
│   └── styles.css                  # Custom styles (450 lines)
│
├── js/
│   ├── main.js                     # Core functionality (200 lines)
│   ├── patch-notes.js              # Patch data (400 lines)
│   ├── meta-picks.js               # Meta data (450 lines)
│   └── support-companion.js        # Synergy engine (1,900 lines)
│
├── data/
│   └── (Reserved for future JSON files)
│
├── icons/
│   ├── champions/                  # Champion portraits (to be added)
│   ├── runes/                      # Rune icons (to be added)
│   └── roles/                      # Role icons (to be added)
│
├── README.md                       # Main documentation (400 lines)
├── DEPLOYMENT.md                   # Deploy guide (500 lines)
├── FEATURES.md                     # Feature docs (600 lines)
├── QUICKSTART.md                   # Quick start (200 lines)
├── PROJECT_SUMMARY.md              # Project overview (400 lines)
├── FILE_INDEX.md                   # This file (150 lines)
└── .gitignore                      # Git ignore (25 lines)
```

## 📊 Code Statistics

### Total Lines by Type
- **HTML:** ~650 lines
- **CSS:** ~450 lines
- **JavaScript:** ~2,950 lines
- **Documentation:** ~2,250 lines
- **Total:** ~6,300 lines

### Files by Category
- **Production Code:** 7 files (HTML, CSS, JS)
- **Documentation:** 6 files (MD)
- **Configuration:** 1 file (.gitignore)
- **Total:** 14 files

### Data Included
- **ADCs with full data:** 5 champions
- **ADCs total:** 24 champions
- **Support champions:** 32+ champions
- **Synergy entries:** 100+ combinations
- **Patch champions:** 11 champions
- **Meta champions:** 15 champions
- **Total champions covered:** 60+

## 🎯 File Purposes Quick Reference

### Must Have (Core Files)
1. `index.html` - Landing page
2. `pages/support-companion.html` - Main tool
3. `css/styles.css` - Styling
4. `js/main.js` - Core functions
5. `js/support-companion.js` - Synergy data

### Important (Enhanced Experience)
6. `js/patch-notes.js` - Patch data
7. `js/meta-picks.js` - Meta stats
8. `README.md` - Documentation

### Helpful (Setup & Deploy)
9. `DEPLOYMENT.md` - How to deploy
10. `QUICKSTART.md` - Fast start
11. `.gitignore` - Git config

### Reference (Details)
12. `FEATURES.md` - Feature list
13. `PROJECT_SUMMARY.md` - Overview
14. `FILE_INDEX.md` - This file

## 🔍 Finding What You Need

### "How do I deploy this?"
→ Read `DEPLOYMENT.md`

### "What features are included?"
→ Check `FEATURES.md` or `PROJECT_SUMMARY.md`

### "How do I start quickly?"
→ Follow `QUICKSTART.md`

### "What's the project about?"
→ Read `README.md`

### "Where's the ADC synergy data?"
→ In `js/support-companion.js`

### "How do I add patch notes?"
→ Edit `js/patch-notes.js`

### "How do I update meta picks?"
→ Edit `js/meta-picks.js`

### "Where do I put champion icons?"
→ In `icons/champions/` folder

### "How do I customize colors?"
→ Edit `tailwind.config` in HTML files or `css/styles.css`

## 🚀 Dependencies

### External (CDN)
- Tailwind CSS: Latest via CDN
- Google Fonts: Inter, Outfit

### Internal
- No npm packages
- No build tools
- Pure HTML/CSS/JS

## 📦 Asset Requirements

### Icons Needed
- Champion portraits: 60+ PNG files
- Role icons: 5 PNG files
- Rune icons: Optional, for future

### Image Specs
- Champions: 120x120px minimum
- Roles: 64x64px
- Format: PNG with transparency

## 🎓 Code Organization

### Modular Architecture
- Separate files for each feature
- Clear function names
- Commented thoroughly
- Easy to maintain

### Data Structure
- ADC synergies: Objects with tier arrays
- Patch notes: Array of change objects
- Meta picks: Nested role/champion objects

### Naming Conventions
- Files: kebab-case (support-companion.js)
- Functions: camelCase (selectADC)
- Classes: PascalCase (ChampionCard)
- Constants: UPPER_CASE (only where needed)

## 🔄 Update Frequency

### High Priority (Weekly)
- Meta picks statistics
- Patch notes (on patch day)

### Medium Priority (Monthly)
- ADC synergy data
- Support recommendations

### Low Priority (As Needed)
- Documentation
- Code improvements

## ✅ Checklist for New Features

When adding new files:
1. Update this index
2. Add to README.md structure
3. Update relevant documentation
4. Test thoroughly
5. Commit with clear message

## 📝 Notes

- All paths are relative
- No external dependencies
- Mobile-first design
- Production-ready code
- Well documented
- Easy to deploy

---

**Last Updated:** November 2024
**Project Version:** 1.0.0
**Total Files:** 14 (7 code, 6 docs, 1 config)
