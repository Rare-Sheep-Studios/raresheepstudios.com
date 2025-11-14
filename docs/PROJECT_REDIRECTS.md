# Project URL Redirects - Quick Reference

## 📋 What This Does

Creates short, memorable URLs for your projects that redirect to the full project pages:

```
raresheepstudios.com/elrb          → /pages/projects/elrb/elrb.html
raresheepstudios.com/fractured     → /pages/projects/fractured/fractured.html
raresheepstudios.com/holdout       → /pages/projects/holdout/holdout.html
raresheepstudios.com/skybreak      → /pages/projects/skybreak/skybreak.html
raresheepstudios.com/wool-and-dice → /pages/projects/wool&dice/index.html
raresheepstudios.com/netknights    → /pages/projects/netknightscsc/index.html
```

Perfect for:
- 📱 Posters and advertisements
- 🎮 Game trailers and descriptions
- 📧 Social media bios
- 💼 Business cards
- 🔗 QR codes

## 🐑 Under Construction Page

For projects that are still being built, use:
```
raresheepstudios.com/under-construction
```

Shows:
- 🐑 Bouncing sheep emoji
- "we're still building the funny, sorry" message
- Background music (Team Fortress 2 Upgrade Station)
- Back to home link

---

## 📂 File Structure

```
/
├── elrb/
│   └── index.html                    (redirects to pages/projects/elrb/elrb.html)
├── fractured/
│   └── index.html                    (redirects to pages/projects/fractured/fractured.html)
├── holdout/
│   └── index.html                    (redirects to pages/projects/holdout/holdout.html)
├── skybreak/
│   └── index.html                    (redirects to pages/projects/skybreak/skybreak.html)
├── wool-and-dice/
│   └── index.html                    (redirects to pages/projects/wool&dice/index.html)
├── netknights/
│   └── index.html                    (redirects to pages/projects/netknightscsc/index.html)
└── under-construction/
    └── index.html                    (shows "under construction" page)
```

---

## ✅ Available Project Shortcuts

| Short URL | Full URL | Status |
|-----------|----------|--------|
| `/elrb` | `/pages/projects/elrb/elrb.html` | ✅ Active |
| `/fractured` | `/pages/projects/fractured/fractured.html` | ✅ Active |
| `/holdout` | `/pages/projects/holdout/holdout.html` | ✅ Active |
| `/skybreak` | `/pages/projects/skybreak/skybreak.html` | ✅ Active |
| `/wool-and-dice` | `/pages/projects/wool&dice/index.html` | ✅ Active |
| `/netknights` | `/pages/projects/netknightscsc/index.html` | ✅ Active |
| `/under-construction` | Under construction page | ✅ Available |

---

## 🔧 How to Add a New Project Redirect

### Step 1: Create the Directory
```bash
mkdir /new-project-name
```

### Step 2: Create index.html
Create `/new-project-name/index.html` with this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Project Name - Rare Sheep Studios</title>
    <!-- Redirect to actual project page -->
    <meta http-equiv="refresh" content="0; url=/pages/projects/YOUR_PROJECT_PATH/index.html">
    <link rel="canonical" href="/pages/projects/YOUR_PROJECT_PATH/index.html">
</head>
<body>
    <script>
        window.location.replace('/pages/projects/YOUR_PROJECT_PATH/index.html');
    </script>
    <p>Redirecting to project page...</p>
</body>
</html>
```

### Step 3: Replace placeholders
- Replace `Project Name` with your actual project name
- Replace `YOUR_PROJECT_PATH` with the path to your actual project page

### Example:
For a project at `/pages/projects/myproject/myproject.html`:

```html
<meta http-equiv="refresh" content="0; url=/pages/projects/myproject/myproject.html">
<link rel="canonical" href="/pages/projects/myproject/myproject.html">
```

Then in the script:
```javascript
window.location.replace('/pages/projects/myproject/myproject.html');
```

### Step 4: Done! 🎉
Now users can access your project at:
```
raresheepstudios.com/myproject
```

---

## 🎯 How to Link Projects

### In HTML
```html
<!-- Link to project -->
<a href="/elrb">ELRB Project</a>
<a href="/fractured">FRACTURED</a>
<a href="/holdout">Holdout</a>

<!-- Link to under construction -->
<a href="/under-construction">Coming Soon Project</a>
```

### On Posters/Ads
```
Visit: raresheepstudios.com/elrb
```

### On QR Codes
Generate QR codes for:
```
https://raresheepstudios.com/elrb
https://raresheepstudios.com/fractured
https://raresheepstudios.com/holdout
etc.
```

### On Social Media
```
🎮 Play ELRB now: raresheepstudios.com/elrb
🎮 Check out FRACTURED: raresheepstudios.com/fractured
```

---

## 🎨 Customizing Under Construction Page

Edit `/under-construction/index.html` to:

### Change the Message
Find this line:
```html
<h1>we're still building the funny, sorry</h1>
```

Change to whatever you want:
```html
<h1>coming soon, we promise</h1>
```

### Change the Music
Replace the music file path:
```html
<source src="../content/mainsite/assets/video/Team Fortress 2 Soundtrack _ Upgrade Station.mp3" type="audio/mpeg">
```

With any .mp3 file in your assets:
```html
<source src="../content/mainsite/assets/video/your-music-file.mp3" type="audio/mpeg">
```

### Change the Emoji
Find:
```html
<span class="sheep-emoji">🐑</span>
```

Replace with any emoji:
```html
<span class="sheep-emoji">🚀</span>
```

### Change Colors
Edit the CSS in the `<style>` section:
```css
body {
    background: #000000;  /* Background color */
    color: #ffffff;       /* Text color */
}

.message {
    color: #888888;       /* Message text color */
}
```

---

## 📊 Redirect Technical Details

### How It Works
1. User visits: `raresheepstudios.com/elrb`
2. Server loads: `/elrb/index.html`
3. Page redirects using `<meta http-equiv="refresh">`
4. JavaScript fallback redirect ensures it works even if meta refresh is disabled
5. User sees: `/pages/projects/elrb/elrb.html` in browser

### Why This Method?
✅ Works on all hosting providers
✅ No server configuration needed
✅ Instant redirects (no noticeable delay)
✅ SEO friendly (canonical tags help search engines)
✅ Fallback for browsers that block meta refresh
✅ Simple to maintain and add new redirects

### What About .htaccess?
If you're on an Apache server, you could use `.htaccess` for cleaner redirects, but the current method works everywhere and requires no server configuration.

---

## 🎁 Pro Tips

### 1. Test Before Sharing
Always test the short URL works before adding it to posters/ads:
```
raresheepstudios.com/elrb → Should load ELRB page within 1 second
```

### 2. Use Memorable Names
Keep short URLs simple and memorable:
```
✅ Good:  raresheepstudios.com/elrb
❌ Bad:   raresheepstudios.com/experiment-labs-research-base
```

### 3. Update Under Construction
If sharing an under-construction project, remind players to check back:
```html
<p class="message">this project is still under construction. check back soon for updates!</p>
```

### 4. Add to Navigation
Consider adding project links to your main navigation:
```html
<a href="/elrb">elrb</a>
<a href="/fractured">fractured</a>
<a href="/holdout">holdout</a>
```

---

## 🚀 Quick Start

### To Use Existing Redirects
Just use these URLs:
- `raresheepstudios.com/elrb`
- `raresheepstudios.com/fractured`
- `raresheepstudios.com/holdout`
- `raresheepstudios.com/skybreak`
- `raresheepstudios.com/wool-and-dice`
- `raresheepstudios.com/netknights`

### To Redirect to Under Construction
Use: `raresheepstudios.com/under-construction`

### To Add a New Project Redirect
Follow the "How to Add a New Project Redirect" section above.

---

## ✨ Examples

### Using in HTML
```html
<!-- On home page or project showcase -->
<div class="project-showcase">
    <h2>Our Projects</h2>
    <ul>
        <li><a href="/elrb">ELRB - Experiment Labs Research Base</a></li>
        <li><a href="/fractured">FRACTURED - A Mysterious Adventure</a></li>
        <li><a href="/holdout">Holdout - Survive the Outbreak</a></li>
    </ul>
</div>
```

### Using in Social Media
```
🎮 Check out our latest project!
ELRB - Experiment Labs Research Base
raresheepstudios.com/elrb
#IndieGames #GameDev #ELRB
```

### Using in Email
```
Subject: Play ELRB Now!

Hi there!

We're excited to share ELRB with you.
Play it now: raresheepstudios.com/elrb

The Rare Sheep Studios Team
```

---

## 🎓 File Reference

| File | Purpose |
|------|---------|
| `/elrb/index.html` | Redirect to ELRB |
| `/fractured/index.html` | Redirect to FRACTURED |
| `/holdout/index.html` | Redirect to Holdout |
| `/skybreak/index.html` | Redirect to Skybreak |
| `/wool-and-dice/index.html` | Redirect to Wool & Dice |
| `/netknights/index.html` | Redirect to Netknights CSC |
| `/under-construction/index.html` | Under construction fallback page |

---

**Your project redirects are ready to use! 🐑✨**

Perfect for marketing, advertising, and sharing your games easily.
