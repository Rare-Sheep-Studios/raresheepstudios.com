<!-- EXAMPLE: Profile Modal Implementation Examples -->

# Profile Modal - Implementation Examples

## Basic Example (No Social Links)

```html
<li data-bio-id="bio-example">
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/example.webp" 
             alt="Example Person" class="person-image">
        <h3 class="person-name">Example Person</h3>
        <p class="person-title">Example Role</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">FRACTURED</span>
        </div>
    </div>
    <div id="bio-example" class="bio">
        This is a basic example bio text. When someone clicks the card, 
        this text will appear in the profile modal.
    </div>
</li>
```

---

## Advanced Example (With Everything)

```html
<li data-bio-id="bio-artist-full"
    data-github="https://github.com/artistname"
    data-twitter="https://twitter.com/artistname"
    data-discord="https://discord.com/users/123456789"
    data-roblox="https://www.roblox.com/users/123456789/profile"
    data-youtube="https://youtube.com/@artistname"
    data-website="https://artistname.portfolio.com"
    data-banner="../../../../content/mainsite/assets/image/people/banner-artist.webp">
    
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/artist-pfp.webp" 
             alt="Artist Name" class="person-image">
        <h3 class="person-name">Artist Name</h3>
        <p class="person-title">Lead 2D Artist</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">Holdout</span>
            <span class="project-tag">Skybreak</span>
            <span class="project-tag">FRACTURED</span>
        </div>
    </div>
    
    <div id="bio-artist-full" class="bio">
        I'm a passionate digital and traditional artist with over 5 years of experience 
        in game development. I specialize in character design, UI/UX, and concept art. 
        When I'm not creating art, you can find me gaming or exploring new design trends!
    </div>
</li>
```

---

## Kabe's Profile (Real Example)

```html
<li data-bio-id="bio-kabe-art"
    data-github="https://github.com/kabe"
    data-twitter="https://twitter.com/kabeart"
    data-discord="https://discord.com/users/kabe"
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
        a break in digital designing.
    </div>
</li>
```

---

## DT's Profile (Real Example)

```html
<li data-bio-id="bio-DT-art"
    data-github="https://github.com/DTdev"
    data-roblox="https://www.roblox.com/users/dt123/profile"
    data-banner="../../../../content/mainsite/assets/image/people/dt-banner.webp">
    
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/DTpfp.png" 
             alt="DT" class="person-image">
        <h3 class="person-name">DT</h3>
        <p class="person-title">Lead 3D Artist</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">FRACTURED</span>
            <span class="project-tag">Skybreak</span>
            <span class="project-tag">Wool & Dice</span>
        </div>
    </div>
    
    <div id="bio-DT-art" class="bio">
        Salutations! I'm DT. I'm mostly known for 3D printing and I have no time 
        for anything else. Now I'm making a game... I'm screwed.
    </div>
</li>
```

---

## Developer Example (Vaughn)

```html
<li data-bio-id="bio-vaughn-dev"
    data-github="https://github.com/vaughn"
    data-twitter="https://twitter.com/vaughn_dev"
    data-website="https://vaughn.dev"
    data-banner="../../../../content/mainsite/assets/image/people/vaughn-banner.webp">
    
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/VisSharkDiscordPFP.jpg" 
             alt="Vaughn" class="person-image">
        <h3 class="person-name">Vaughn</h3>
        <p class="person-title">Lead Game Developer</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">Holdout</span>
            <span class="project-tag">FRACTURED</span>
            <span class="project-tag">Skybreak</span>
        </div>
    </div>
    
    <div id="bio-vaughn-dev" class="bio">
        Hi I'm Vaughn, I make games and chaos happen. Sometimes it works, 
        sometimes it explodes, but either way it's fun. Also yes, I probably 
        put weird stuff in the code.
    </div>
</li>
```

---

## Minimal Example (Minimal Social Links)

```html
<li data-bio-id="bio-minimal">
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/person.webp" 
             alt="Person" class="person-image">
        <h3 class="person-name">Person Name</h3>
        <p class="person-title">Job Title</p>
        <div class="project-tags">
            <span class="project-tag">PROJECT</span>
        </div>
    </div>
    <div id="bio-minimal" class="bio">Bio text here.</div>
</li>
```

---

## Full Contact Info Example

```html
<li data-bio-id="bio-contact-heavy"
    data-github="https://github.com/user"
    data-twitter="https://twitter.com/user"
    data-discord="https://discord.com/users/123456789"
    data-roblox="https://www.roblox.com/users/123456789/profile"
    data-youtube="https://youtube.com/@user"
    data-website="https://user.com"
    data-banner="../../../../content/mainsite/assets/image/people/user-banner.webp">
    
    <div class="person">
        <img src="../../../../content/mainsite/assets/image/people/user.webp" 
             alt="Full Contact" class="person-image">
        <h3 class="person-name">Full Contact</h3>
        <p class="person-title">Multi-Talented</p>
        <div class="project-tags">
            <span class="project-tag">ELRB</span>
            <span class="project-tag">Holdout</span>
            <span class="project-tag">FRACTURED</span>
            <span class="project-tag">Skybreak</span>
            <span class="project-tag">Wool & Dice</span>
            <span class="project-tag">NetknightsCSC</span>
        </div>
    </div>
    
    <div id="bio-contact-heavy" class="bio">
        Multi-talented team member who contributes across multiple departments 
        and projects. Always available and eager to help with new initiatives.
    </div>
</li>
```

---

## Social Links Only Example

```html
<!-- If you only want certain social links, just add those attributes -->
<li data-bio-id="bio-github-only"
    data-github="https://github.com/codecreator">
    <!-- ... person div ... -->
</li>
```

---

## CSS Customization Examples

### Example 1: Dark Purple Theme

```css
:root {
    --accent-green: #9945ff;  /* Purple instead of green */
}

.profile-modal {
    background: #1a0033;  /* Dark purple background */
}
```

### Example 2: Light Mode

```css
:root {
    --primary-black: #ffffff;
    --secondary-black: #f5f5f5;
    --text-white: #000000;
    --accent-gray: #cccccc;
}
```

### Example 3: Larger Profile Pictures

```css
.profile-picture {
    width: 150px;  /* Bigger from default 120px */
    height: 150px;
}

.profile-picture-container {
    margin-top: -75px;  /* Adjust overlap */
}
```

### Example 4: Custom Banner Height

```css
.profile-banner {
    height: 200px;  /* Taller from default 150px */
}

.profile-picture-container {
    margin-top: -80px;  /* Adjust for new overlap */
}
```

---

## HTML Structure Breakdown

```
<li data-bio-id="unique-id"
    data-banner="optional-banner-url"
    data-github="optional-github-url"
    data-twitter="optional-twitter-url"
    data-discord="optional-discord-url"
    data-roblox="optional-roblox-url"
    data-youtube="optional-youtube-url"
    data-website="optional-website-url">
    
    <!-- REQUIRED: Person Card Content -->
    <div class="person">
        <img class="person-image" src="path/to/image" alt="Name">
        <h3 class="person-name">Name</h3>
        <p class="person-title">Title</p>
        <div class="project-tags">
            <span class="project-tag">PROJECT1</span>
            <span class="project-tag">PROJECT2</span>
        </div>
    </div>
    
    <!-- REQUIRED: Bio Content (Hidden, Used in Modal) -->
    <div id="unique-id" class="bio">Bio text content...</div>
</li>
```

---

## Tips & Best Practices

### ✅ DO:
- Use descriptive IDs: `bio-kabe-art`, `bio-vaughn-dev`
- Include all 4 main elements: image, name, title, tags
- Use relative paths for images
- Keep bios informative but concise
- Add social links for better connectivity
- Use HTTPS URLs for external links

### ❌ DON'T:
- Don't modify the `.person` or `.bio` div structure
- Don't remove required data attributes
- Don't use inline styles (use CSS classes instead)
- Don't leave `data-bio-id` blank or duplicate
- Don't use absolute image paths

---

## Quick Reference: Social Link Icons

| Attribute | Icon | Use For |
|-----------|------|---------|
| data-github | 🐙 | GitHub profiles, code repositories |
| data-twitter | 𝕏 | Twitter/X accounts, social presence |
| data-discord | 💬 | Discord usernames, community links |
| data-roblox | 🎮 | Roblox profile, portfolio |
| data-youtube | 📺 | YouTube channel, tutorials |
| data-website | 🌐 | Personal website, portfolio |

---

**Ready to customize? Start with any example above and modify to your needs!** 🐑✨
