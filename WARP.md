# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the main website for Rare Sheep Studios (raresheepstudios.com) - a static HTML/CSS/JavaScript site showcasing game development projects, team information, and merchandise. The site features multiple projects including ELRB, Holdout, FRACTURED, Skybreak, Wool & Dice, and Netknights CSC.

## Architecture & Structure

### Core Structure
```
/
├── index.html              # Main landing page
├── css/                    # Global stylesheets
│   ├── style.css          # Main site styles with CSS variables
│   └── carousel.css       # Project carousel components
├── js/                     # Global JavaScript
│   ├── main.js            # Mobile menu, scroll effects, smooth scrolling
│   ├── carousel.js        # Interactive carousel with drag/swipe support
│   └── scroll-effects.js  # Header animations and scroll behaviors
├── content/                # Project-specific assets
│   ├── ELRB/              # Experiment Labs Research Base assets
│   ├── FRACTURED/         # FRACTURED project assets  
│   ├── Holdout/           # Holdout game assets
│   ├── NetknightsCSC/     # Netknights CSC collaboration assets
│   ├── mainsite/          # Main site images and branding
│   ├── skybreak/          # Skybreak game assets
│   └── wool&dice/         # Wool & Dice tabletop RPG assets
└── pages/                  # Individual page templates
    ├── mainsite/          # Site pages (contact, legal, etc.)
    └── projects/          # Individual project pages
```

### Design System
- **Color Scheme**: Black and white theme with CSS custom properties in `:root`
- **Typography**: Inter font family with various weights (300-800)
- **Components**: Reusable carousel, mobile menu, project cards
- **Responsive Design**: Mobile-first approach with breakpoints for tablet/desktop

### Key Features
- **Interactive Carousel**: Drag/swipe support with auto-play and indicators
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Scroll Effects**: Dynamic header behavior based on scroll position
- **Project Showcases**: Individual pages for each game/project
- **Team Directory**: Searchable team member profiles with project associations

## Development Commands

Since this is a static site, there are no build tools or package managers. Development is done directly with HTML/CSS/JS files.

### Local Development
```bash
# Serve the site locally (Python 3)
python -m http.server 8000

# Serve the site locally (Python 2)  
python -m SimpleHTTPServer 8000

# Serve with Node.js (if you have http-server installed)
npx http-server -p 8000

# VSCode Live Server (if extension is installed)
# Uses port 5502 as configured in .vscode/settings.json
```

### File Management
```bash
# Find all HTML files
find . -name "*.html" -type f

# Find all CSS files
find . -name "*.css" -type f

# Find all JavaScript files
find . -name "*.js" -type f

# Search for specific content across files
grep -r "search_term" --include="*.html" --include="*.css" --include="*.js" .
```

## Content Management

### Adding New Projects
1. Create asset folder in `content/[PROJECT_NAME]/`
2. Add project card to main carousel in `index.html`
3. Create project page in `pages/projects/[project]/`
4. Update team member associations in `pages/mainsite/contact/people/people.html`

### Image Guidelines
- **Banners**: 1200x400px recommended for project carousels
- **Logos**: SVG preferred, PNG fallback
- **Team Photos**: Square format, optimized for web
- **Screenshots**: 16:9 aspect ratio for game imagery

### Content Structure
- **Project Pages**: Follow template in `pages/projects/_template/`
- **Team Bios**: Keep friendly, no profanity (per header comments)
- **Merchandise**: Placeholder pricing, enable when ready

## Important Notes

### Security Considerations
- Newsletter collection via localStorage was disabled due to security concerns
- Commented-out admin panel functionality should remain disabled
- All external links use `rel="noopener noreferrer"`

### Accessibility
- Proper ARIA labels and roles throughout
- Semantic HTML structure
- Keyboard navigation support for carousels
- Alt text for all images

### Performance
- Images should be optimized before adding
- JavaScript uses requestAnimationFrame for smooth animations
- CSS uses hardware-accelerated transforms where possible

## Team & Collaboration

The site showcases a multi-disciplinary team including:
- **Art Team**: 2D/3D artists (Kabe, DT)
- **Development Team**: Game developers and web developers (Vaughn, Archie, Sionix, etc.)
- **Design Team**: Game designers and UX specialists

Projects are collaborative efforts, often involving Netknights CSC for cybersecurity elements.

## Brand Guidelines

- **Primary Colors**: Black (#000000), white (#ffffff)  
- **Accent Colors**: Gray variations defined in CSS custom properties
- **Logo Usage**: Sheep emoji (🐑) as simplified logo, full logos in content/
- **Tone**: Playful, slightly chaotic, professional yet approachable ("controlled chaos")