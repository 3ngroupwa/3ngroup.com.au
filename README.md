# 3N Group Website

A modern, premium website for **3N Group** - Perth's trusted painting, renovation, flooring and property maintenance specialists.

**Live Site:** https://3ngroup.com.au

---

## Project Structure

```
3ngroup.com.au/
├── index.html          # Homepage
├── services.html       # Services detail page
├── gallery.html        # Project gallery with lightbox
├── about.html          # About us & company values
├── contact.html        # Contact form & map
├── styles.css          # All styles (responsive, premium design)
├── script.js           # Interactions, mobile menu, animations
├── favicon.ico         # Browser tab icon
└── images/
    ├── logo.png        # 3N Group logo
    ├── hero.jpg        # Hero banner image
    ├── gallery1.jpg    # Project photos
    ├── gallery2.jpg
    ├── gallery3.jpg
    ├── gallery4.jpg
    ├── gallery5.jpg
    ├── gallery6.jpg
    ├── gallery7.jpg
    ├── gallery8.jpg
    └── gallery9.jpg
```

---

## Features

- **Modern & Premium Design** - Navy blue, white, charcoal with warm orange accents
- **Fully Responsive** - Optimised for mobile, tablet and desktop
- **Sticky Navigation** - Header changes on scroll with smooth backdrop blur
- **Mobile Menu** - Hamburger menu with smooth animations
- **Scroll Reveal Animations** - Elements fade in as you scroll
- **Click-to-Call** - One-tap phone dialing on mobile devices
- **Floating CTA Buttons** - "Get a Quote" and "Call Now" buttons always visible
- **Image Lightbox** - Click gallery images to view full-size
- **Gallery Filter** - Filter projects by category (Painting, Kitchen, Flooring, Maintenance)
- **Contact Form** - Ready for Formspree integration
- **Google Maps** - Embedded map showing Perth service area
- **SEO Optimised** - Meta tags, structured data, geo tags, semantic HTML
- **Fast Loading** - Lazy loading images, optimised code
- **Accessibility** - ARIA labels, semantic markup, keyboard navigation

---

## Colour Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Navy Blue | `#1a2a4a` | Primary brand, headings |
| White | `#ffffff` | Backgrounds, text on dark |
| Charcoal | `#2d3436` | Body text |
| Light Grey | `#e9ecef` | Borders, subtle backgrounds |
| Warm Orange | `#e8732e` | CTAs, accents, highlights |

---

## Typography

- **Headings:** Montserrat (700, 800)
- **Body:** Open Sans (400, 500, 600)

---

## Pages

### Homepage (`index.html`)
- Hero section with full-screen background
- Trust bar with key credentials
- Services overview cards
- Featured projects gallery preview
- Why Choose Us section
- Customer testimonials
- Call-to-action section
- Professional footer

### Services (`services.html`)
- Detailed service pages for:
  - Painting (Interior, Exterior, Commercial, Roof, Fence)
  - Kitchen Renovations (Cabinets, Benchtops, Splashbacks)
  - Flooring (Hybrid, Laminate, Skirting)
  - Property Maintenance (Repairs, Plaster, Handyman)

### Gallery (`gallery.html`)
- Filterable masonry gallery
- Lightbox for full-size viewing
- Project descriptions

### About (`about.html`)
- Company story
- Core values
- Licensing & insurance details
- Service areas across Perth

### Contact (`contact.html`)
- Contact form (Formspree-ready)
- Phone, email, location info
- Business hours
- Embedded Google Map

---

## Setup Instructions

### 1. Upload to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files in the `3ngroup.com.au` folder
3. Go to **Settings > Pages**
4. Select branch `main` and folder `/ (root)`
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### 2. Connect Your Domain

1. In your domain registrar (e.g., GoDaddy, CrazyDomains), set DNS records:
   - **A Record:** `@` pointing to `185.199.108.153`
   - **A Record:** `@` pointing to `185.199.109.153`
   - **A Record:** `@` pointing to `185.199.110.153`
   - **A Record:** `@` pointing to `185.199.111.153`
   - **CNAME Record:** `www` pointing to `yourusername.github.io`

2. In your GitHub repository, go to **Settings > Pages > Custom domain**
3. Enter `3ngroup.com.au` and save
4. GitHub will create a `CNAME` file automatically

### 3. Configure Contact Form

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and copy your form ID
3. In `contact.html`, replace `YOUR_FORM_ID` in this line:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Test the form to ensure submissions arrive in your email

### 4. Replace Placeholder Images

The images in the `images/` folder are coloured placeholders. Replace them with your actual project photos:

| File | Recommended Size | Content |
|------|------------------|---------|
| `hero.jpg` | 1920x1080 | Your best project photo |
| `logo.png` | 400x120 | Your 3N Group logo |
| `gallery1.jpg` - `gallery9.jpg` | 800x600+ | Before/after project photos |

**Important:** Keep the same filenames so the HTML references work correctly.

### 5. Update Content

Review and update these details in all HTML files:
- Phone number: `0405 678 019`
- Email: `info@3ngroup.com.au`
- Facebook URL: `https://www.facebook.com/3ngroup`
- Service areas (in `about.html`)
- Testimonials (in `index.html`)

---

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- iOS Safari 13+
- Chrome Android 80+

---

## Performance Notes

- Images use native `loading="lazy"` for faster initial page load
- CSS is in a single file to minimise HTTP requests
- Google Fonts loaded with `display=swap` for optimal rendering
- Minimal JavaScript with no external dependencies

---

## Future Enhancements

- [ ] Add customer testimonials with photos
- [ ] Integrate Google Reviews widget
- [ ] Add before/after image comparison slider
- [ ] Blog section for SEO content
- [ ] Online booking/quote calendar
- [ ] Video testimonials
- [ ] Team profile pages

---

## License

This website was built exclusively for 3N Group. All rights reserved.

---

**Questions?** Contact the developer or reach out to 3N Group directly.
