<!-- PROFILE MODAL IMPLEMENTATION GUIDE -->

# Team Member Profile Modal System

## Overview

The profile modal system automatically displays when a team member card is clicked. It creates a modern, Discord-like profile popup that shows:
- A banner image
- Profile picture (overlapping the banner)
- Name and title
- Biography text
- Project tags
- Social links (optional)

## Features

✅ Automatically triggers on card click
✅ Smooth fade-in/fade-out animations
✅ Click outside to close (overlay click)
✅ Press Esc key to close
✅ Fully keyboard accessible
✅ Mobile responsive (scales properly on all screen sizes)
✅ No framework dependencies (vanilla JavaScript)
✅ Minimal, themeable CSS
✅ Semantic HTML with proper ARIA roles

---

## How to Use

### 1. Basic Setup (Already Done)

The system is automatically initialized when the page loads. Just ensure:
- `profile-modal.js` is loaded after `people.js`
- `people.css` contains all the modal styles
- Team member `<li>` elements have `data-bio-id` attributes

### 2. Adding Social Links to a Team Member

To add social links, add data attributes to the team member's `<li>` element:

```html
<li data-bio-id="bio-vaughn-design" 
    data-github="https://github.com/vaughn"
    data-twitter="https://twitter.com/vaughn"
    data-discord="https://discord.com/users/123456789"
    data-roblox="https://www.roblox.com/users/123456789/profile"
    data-youtube="https://youtube.com/@vaughn"
    data-website="https://vaughn.dev">
    <!-- ... rest of the card ... -->
</li>
```

### 3. Adding Custom Banner Images

To add a custom banner image per team member, add the `data-banner` attribute:

```html
<li data-bio-id="bio-vaughn-design"
    data-banner="../../../../content/mainsite/assets/image/people/vaughn-banner.webp">
    <!-- ... -->
</li>
```

If no banner is specified, a default placeholder is used.

---

## Available Social Link Attributes

```
data-github      → 🐙 GitHub link
data-twitter     → 𝕏 Twitter/X link
data-discord     → 💬 Discord profile link
data-roblox      → 🎮 Roblox profile link
data-youtube     → 📺 YouTube channel link
data-website     → 🌐 Personal website link
```

You can add any or all of these. Only the ones with URLs will display in the modal.

---

## Example: Complete Team Member Card with Everything

```html
<li data-bio-id="bio-example-artist"
    data-github="https://github.com/example"
    data-twitter="https://twitter.com/example"
    data-roblox="https://www.roblox.com/users/123/profile"
    data-banner="../../../../content/mainsite/assets/image/people/example-banner.webp">
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/example-pfp.webp" 
             alt="Example Artist" class="person-image">
        <h3 class="person-name">Example Artist</h3>
        <p class="person-title">Lead Artist</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">FRACTURED</span>
        </div>
    </div>
    <div id="bio-example-artist" class="bio">
        This is the bio text that will appear in the modal!
    </div>
</li>
```

---

## Customizing the Modal Appearance

### Colors and Theme

All modal colors are controlled by CSS variables in `people.css`. Edit the variables in `:root`:

```css
--primary-black: #000000;
--secondary-black: #111111;
--tertiary-black: #1a1a1a;
--accent-gray: #333333;
--accent-green: #ffff;  /* Primary accent color */
--text-white: #ffffff;
```

### Font Sizing

Modify these sections in `people.css` for profile modal text sizes:

```css
.profile-name { font-size: 1.5rem; }
.profile-title { font-size: 0.95rem; }
.profile-bio { font-size: 0.95rem; }
.profile-tag { font-size: 0.75rem; }
```

### Banner Height

Adjust the banner image height:

```css
.profile-banner {
    height: 150px;  /* Change this value */
}
```

### Profile Picture Size

Adjust the profile picture diameter:

```css
.profile-picture {
    width: 120px;   /* Change this value */
    height: 120px;  /* Must be same as width for circle */
}
```

---

## How the Modal Works Internally

### JavaScript Flow

1. **Initialization** (`DOMContentLoaded`):
   - ProfileModal class is instantiated
   - Modal HTML is dynamically created and added to DOM
   - Event listeners are attached to all team member cards

2. **When a Card is Clicked**:
   - Card's data (name, title, image, bio, tags) is extracted
   - Modal content is populated with this data
   - Social links are dynamically generated from data attributes
   - Modal and overlay are animated in

3. **Closing the Modal**:
   - User can click the ✕ button, press Esc, or click outside
   - Modal and overlay fade out smoothly
   - Focus returns to page (accessibility)

### CSS Animation Timeline

- **Overlay**: Fades in with background blur (300ms)
- **Modal**: Scales up from 95% to 100% and fades in (300ms)
- **Close Button**: Rotates 90° on hover
- **Profile Picture**: Scales up 1.05x on hover
- **Tags/Links**: Change colors with accent-green highlight

---

## Accessibility Features

✓ ARIA roles: `dialog`, `aria-modal`, `aria-labelledby`
✓ Keyboard navigation: Tab through elements, Esc to close
✓ Focus management: Focus moves to close button when modal opens
✓ Semantic HTML: Proper heading hierarchy, alt text on images
✓ Screen reader support: Aria labels on all interactive elements

---

## Troubleshooting

### Modal doesn't appear when clicking a card
- Check that `profile-modal.js` is loaded AFTER `people.js`
- Open browser console (F12) for JavaScript errors
- Ensure `data-bio-id` attribute exists on `<li>` elements

### Social links not showing
- Double-check the `data-` attribute names (they're case-sensitive)
- Verify URLs are complete and valid (include https://)
- Check browser console for any JavaScript errors

### Banner image not showing
- Add `data-banner` attribute with correct image path
- Verify image file exists at that path
- Use relative paths like other image links on the page

### Modal styling looks off
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `people.css` is loaded
- Verify CSS variable values in `:root`

---

## Files Modified

- `/pages/mainsite/contact/people/js/profile-modal.js` (NEW) - Modal JavaScript class
- `/pages/mainsite/contact/people/css/people.css` (UPDATED) - Added profile modal styles
- `/pages/mainsite/contact/people/people.html` (UPDATED) - Added script tag

## Next Steps

1. Add social links to team member `<li>` elements as shown above
2. Add custom banner images (optional)
3. Test the modal on different screen sizes
4. Customize colors/fonts if desired by editing CSS variables

---

## Example: Kabe with Social Links

```html
<li data-bio-id="bio-kabe-art"
    data-twitter="https://twitter.com/kabeart"
    data-github="https://github.com/kabe"
    data-banner="../../../../content/mainsite/assets/image/people/kabe-banner.webp">
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/kabepfp.webp" 
             alt="Kabe" class="person-image">
        <h3 class="person-name">Kabe</h3>
        <p class="person-title">Lead 2D Artist</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">Holdout</span>
            <span class="project-tag">Skybreak</span>
            <span class="project-tag">FRACTURED</span>
        </div>
    </div>
    <div id="bio-kabe-art" class="bio">
        Digital Design Artist & Traditional Artist. Currently in school. 
        I am Azzy, or Kabe, or Shroom; depending on what you prefer to call me 
        and am a sleep-deprived and stressed high-school student looking for 
        a break in digital designing
    </div>
</li>
```

---

Happy theming! 🐑✨
