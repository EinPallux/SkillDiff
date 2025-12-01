# SkillDiff.lol - League of Legends Matchup & Counter-Pick Tool

A modern, production-ready League of Legends informational website focused on champion matchups, counter-picks, and synergies. Built with state-of-the-art UI/UX design and comprehensive data analysis.

![SkillDiff.lol](https://img.shields.io/badge/Version-1.0.0-blue) ![Status](https://img.shields.io/badge/Status-Production-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 Overview

SkillDiff.lol is a competitor to sites like OP.GG, U.GG, and Mobalytics, but simplified and focused on providing actionable insights for League of Legends players. Unlike those platforms, we don't connect to the Riot API - instead, we provide curated, expert-driven data from multiple sources.

### Key Features

- 🎮 **Support Companion Tool** - Find the perfect support for your ADC
- 📊 **Meta Tier Lists** - Top 3 champions for each role with live statistics
- 📝 **Patch Notes** - Latest champion changes and balance updates
- 🎯 **Counter-Pick Tools** (Coming Soon) - Top, Mid, Jungle, and Bot lane counters
- 🌟 **Beautiful UI/UX** - Modern, responsive design with smooth animations
- 📱 **Mobile Friendly** - Fully responsive across all devices
- ⚡ **Fast & Lightweight** - No build process required, runs on GitHub Pages

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL]

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Data Sources](#data-sources)
- [Usage Guide](#usage-guide)
- [Future Development](#future-development)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 1. Support Companion Tool (✅ Available)

The flagship feature that helps support players find optimal champion synergies:

- **ADC Selection**: Choose from 24+ ADC champions
- **Smart Search**: Quickly filter champions
- **Tier Lists**: S/A/B/C tier rankings based on synergy
- **Detailed Explanations**: 2-4 bullet points explaining why each support works
- **Role Indicators**: Enchanter, Engage, Hook, Mage, etc.
- **Rune Builds**: Optimal rune setups for each support/ADC combination
- **General Tips**: Strategic advice for supporting each ADC

**Currently Available ADCs with Full Data:**
- Ezreal
- Jinx
- Vayne
- Caitlyn
- Lucian

### 2. The Hub (Landing Page)

- **Hero Section**: Eye-catching gradient design with animated background
- **Tool Cards**: Beautiful cards for each tool with hover effects
- **Coming Soon Badges**: Clear indicators for tools in development
- **Smooth Navigation**: Anchor links to all sections
- **Mobile Menu**: Responsive navigation for smaller screens

### 3. Patch Notes Section

- **Latest Updates**: Patch 14.23 champion changes
- **Categorized Changes**: Buffs, Nerfs, and Adjustments
- **Visual Indicators**: Color-coded badges and icons
- **Detailed Information**: Full change lists with explanations
- **Champion Images**: Visual identification of affected champions
- **Responsive Grid**: Adapts to all screen sizes

### 4. Top 3 Meta Picks

For each role (Top, Jungle, Mid, ADC, Support):
- **Champion Rankings**: Top 3 performers
- **Statistics**: Win Rate, Pick Rate, Ban Rate
- **Visual Stats Bars**: Animated progress indicators
- **Trend Indicators**: Up/Down/Stable meta position
- **Tier Badges**: S/A tier classifications
- **Descriptions**: Why each champion is strong

## 🛠️ Technology Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom animations and styles
- **JavaScript (ES6+)** - Modern, modular code
- **Tailwind CSS** - Utility-first styling via CDN

### Design System
- **Fonts**: Inter (body), Outfit (display)
- **Color Palette**:
  - Primary: `#0EA5E9` (Cyan)
  - Secondary: `#8B5CF6` (Purple)
  - Accent: `#F59E0B` (Amber)
  - Dark: `#0F172A`
  - Darker: `#020617`

### Features
- Intersection Observer API for scroll animations
- CSS Grid & Flexbox for layouts
- Custom scrollbar styling
- Modal system for detailed information
- Responsive design (mobile-first)
- Smooth scrolling
- Loading states
- Toast notifications

## 📁 Project Structure

```
skilldiff-lol/
│
├── index.html                 # Landing page (The Hub)
│
├── pages/
│   ├── support-companion.html # Support Companion Tool
│   ├── top-counter.html       # (Coming Soon)
│   ├── mid-counter.html       # (Coming Soon)
│   ├── jungle-counter.html    # (Coming Soon)
│   └── bot-counter.html       # (Coming Soon)
│
├── css/
│   └── styles.css             # Custom styles and animations
│
├── js/
│   ├── main.js                # Core functionality & utilities
│   ├── patch-notes.js         # Patch notes data & rendering
│   ├── meta-picks.js          # Meta champion data & display
│   └── support-companion.js   # Support synergy logic
│
├── data/
│   └── (Reserved for JSON data files)
│
├── icons/
│   ├── champions/             # Champion portraits
│   ├── runes/                 # Rune icons
│   └── roles/                 # Role icons
│
└── README.md                  # This file
```

## 🔧 Setup & Installation

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/skilldiff-lol.git
cd skilldiff-lol
```

2. **Open in browser**
```bash
# No build process needed! Just open index.html
open index.html
# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **Deploy to GitHub Pages**
```bash
# Push to your repository
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
# Settings -> Pages -> Source: main branch -> /root
```

### Adding Champion Icons

Place champion icons in `icons/champions/` with exact naming:
- Format: `ChampionName.png` (e.g., `Ezreal.png`, `Kai'Sa.png`)
- Size: 120x120px minimum
- Format: PNG with transparency

### Adding Rune Icons

Place rune icons in `icons/runes/` with descriptive names:
- Format: `RuneName.png`
- Size: 64x64px
- Format: PNG with transparency

### Adding Role Icons

Place role icons in `icons/roles/`:
- `Top.png`
- `Jungle.png`
- `Mid.png`
- `ADC.png`
- `Support.png`

## 📊 Data Sources

All data is carefully sourced from trusted League of Legends statistics and analysis platforms:

### Primary Sources
- **[U.GG](https://u.gg)** - Win rates, pick rates, ban rates, optimal builds
- **[OP.GG](https://op.gg)** - Champion statistics and tier lists
- **[Mobalytics](https://mobalytics.gg)** - Meta analysis and champion guides
- **[MetaSrc](https://metasrc.com)** - Statistical analysis and trends
- **[Porofessor](https://porofessor.gg)** - Champion synergies

### Secondary Sources
- Pro player streams and VODs
- Official Riot patch notes
- Community expert guides
- High ELO player analysis

### Data Update Schedule
- **Patch Notes**: Updated within 24 hours of patch release
- **Meta Picks**: Updated weekly (every Monday)
- **Support Synergies**: Updated after significant meta shifts
- **Statistics**: Based on Platinum+ ranked data

## 📖 Usage Guide

### For Support Players

1. Navigate to **Support Companion** from The Hub
2. Search or browse for your ADC champion
3. Click on the ADC to view the tier list
4. Review S-tier supports first (best synergy)
5. Read the bullet points to understand why each support works
6. Click "View Rune Build" for optimal rune pages
7. Apply the strategy in your games!

### Understanding Tier Rankings

- **S-Tier**: Exceptional synergy, highest win rate potential
- **A-Tier**: Strong synergy, reliable and effective
- **B-Tier**: Decent synergy, situationally good
- **C-Tier**: Poor synergy, avoid unless experienced

### Reading Statistics

- **Win Rate**: Higher is better (50%+ is strong)
- **Pick Rate**: Popularity (higher = more played)
- **Ban Rate**: How often banned (high = feared)
- **Trend**: ↑ Rising, → Stable, ↓ Declining

## 🔮 Future Development

### Phase 2: Counter-Pick Tools
- Top Lane Counter Tool
- Mid Lane Counter Tool
- Jungle Counter Tool
- Bot Lane 2v2 Counter Tool

### Phase 3: Enhanced Features
- Champion detail pages
- Build recommendations
- Skill order guides
- Matchup-specific tips
- Video guide integration
- Save favorite builds

### Phase 4: Community Features
- User accounts (optional)
- Personal tier lists
- Comment system
- Community guides
- Vote on synergies

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding Data
1. Fork the repository
2. Add champion data following existing formats
3. Include sources for your data
4. Submit a pull request

### Reporting Issues
- Use GitHub Issues
- Include screenshots
- Describe expected vs actual behavior
- Note your browser and device

### Code Style
- Use ES6+ JavaScript features
- Comment your code thoroughly
- Follow existing naming conventions
- Keep functions small and focused
- Write semantic HTML
- Use Tailwind utility classes

## 📜 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2024 SkillDiff.lol

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## ⚠️ Disclaimer

SkillDiff.lol isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.

## 📧 Contact

- **GitHub**: [Create an issue](https://github.com/yourusername/skilldiff-lol/issues)
- **Website**: [Your domain]
- **Email**: [Your email]

## 🙏 Acknowledgments

- **Riot Games** - For creating League of Legends
- **U.GG, OP.GG, Mobalytics** - For providing data sources
- **Community** - For feedback and suggestions
- **Pro Players** - For strategic insights

---

**Built with ❤️ for the League of Legends community**

*Get the skill difference. Climb the ladder. Dominate your games.*
