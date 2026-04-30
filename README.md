# 📘 Life in Bytes — Personal Blog Website

> **"Where Education, Technology, and Purpose Meet"**

A premium, fully responsive personal blog website built for **Benjamin** — educator, school builder, tech advocate, and intentional father. The blog sits at the intersection of Education, Technology, Parenting, School Leadership, and Personal Growth/Faith.

---

## ✅ Completed Features

### 🎨 Design System
- Color Palette: `#0A2540` (dark blue), `#FFFFFF` (white), `#F59E0B` (gold/orange accent)
- Fonts: **Poppins** (headings) + **Open Sans** (body)
- Fully responsive — mobile, tablet, desktop
- Smooth hover effects, animations, and scroll-reveal transitions
- Reading progress bar on blog post pages
- Back-to-top floating button

### 📄 Pages
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured post, categories, latest posts, about teaser, newsletter |
| Blog | `blog.html` | Full grid with category filter + search bar |
| About | `about.html` | Benjamin's story, expertise bars, timeline, testimonials |
| Contact | `contact.html` | Contact form, FAQ accordion, social links |
| Blog Post | `post.html` | Dynamic post template with sidebar, related posts, share buttons |

### 🧭 Navigation
- Sticky dark blue navbar with logo
- Active page highlighting
- Mobile hamburger menu with slide-down animation
- CTA "Start Reading" button

### 🏠 Home Page Sections
- **Hero** — Bold headline, tagline, CTA buttons, animated stats (50+ Articles, 6 Categories, 10K+ Readers)
- **Featured Post** — Editor's Pick spotlight card
- **Categories** — 6 category cards with icons and article counts
- **Latest Articles** — 3-column post grid (6 posts)
- **About Teaser** — Dark section with Benjamin's credentials
- **Newsletter Signup** — Email subscription with success state

### 📝 Blog Page
- Page hero with subtitle
- Sticky filter bar with category buttons (All / Education / Tech & AI / Parenting / School Leadership / Personal Growth)
- Search input with live filtering
- Results counter
- 12 sample blog post cards
- Empty state message + "Load More" handling

### 👤 About Page
- Full hero with photo placeholder and stat cards
- Detailed story sections with blockquote
- Expertise skill bars with animated fill
- Career timeline (2014 → 2025)
- Core values display
- 3 reader testimonials
- Newsletter CTA widget in sidebar

### 📬 Contact Page
- Contact form with fields: First/Last Name, Email, Subject dropdown, Message, Newsletter opt-in
- Contact detail cards (Email, Location, Speaking, Response Time)
- Social media links
- Interactive FAQ accordion (5 questions)
- Form success state animation

### 📖 Blog Post Page (`post.html`)
- Dynamic post rendering from URL parameter (`?id=1` through `?id=6`)
- Reading progress bar
- Breadcrumb navigation
- Post hero with title, date, read time
- Full article body with headings, blockquotes, lists
- Tags display
- Social share buttons (Twitter, LinkedIn, WhatsApp, Copy Link)
- Author box
- Sidebar: Newsletter widget, Recent Posts, Category list
- Related posts section (3 cards)

### 📝 Blog Content (6 Full Articles)
1. **"How Nigerian Schools Can Prepare Students for the AI Age"** (Tech & AI)
2. **"5 Mistakes School Owners Make (And How to Avoid Them)"** (School Leadership)
3. **"Raising Responsible Boys in a Digital World"** (Parenting)
4. **"How I Built a School While Working Full-Time"** (School Leadership)
5. **"Top Tech Skills Every Child Should Learn Before 15"** (Tech & AI)
6. **"Faith, Family and the Classroom: Finding Balance as an Educator"** (Personal Growth)

---

## 📁 Project Structure

```
index.html          ← Home page
blog.html           ← Blog listing page
about.html          ← About page
contact.html        ← Contact page
post.html           ← Dynamic blog post template

css/
  style.css         ← Complete design system styles

js/
  main.js           ← Navbar, scroll reveal, search, filters, newsletter
  posts.js          ← Blog post data + dynamic rendering
```

---

## 🔗 Page URLs & Parameters

| URL | Description |
|-----|-------------|
| `index.html` | Home page |
| `blog.html` | All blog posts |
| `blog.html?cat=education` | Filtered by Education |
| `blog.html?cat=tech` | Filtered by Tech & AI |
| `blog.html?cat=parenting` | Filtered by Parenting |
| `blog.html?cat=leadership` | Filtered by School Leadership |
| `blog.html?cat=growth` | Filtered by Personal Growth |
| `about.html` | About Benjamin |
| `contact.html` | Contact form & FAQ |
| `post.html?id=1` | Blog post #1 (AI Age) |
| `post.html?id=2` | Blog post #2 (School Mistakes) |
| `post.html?id=3` | Blog post #3 (Raising Boys) |
| `post.html?id=4` | Blog post #4 (Building a School) |
| `post.html?id=5` | Blog post #5 (Tech Skills) |
| `post.html?id=6` | Blog post #6 (Faith & Family) |

---

## 🗄️ Data Storage

- **Newsletter subscriptions** are stored in `localStorage` under the key `lib_subscribers`
- All blog post content is stored in `js/posts.js` as a JavaScript object
- No external database required for current functionality

---

## 🚧 Features Not Yet Implemented (Future Enhancements)

- [ ] Real backend for newsletter subscriptions (e.g., Mailchimp integration)
- [ ] Real contact form submission (e.g., Formspree or Netlify Forms)
- [ ] Comments section on blog posts
- [ ] Blog post search (full-text, server-side)
- [ ] Author's actual profile photo
- [ ] Actual social media profile links
- [ ] Blog post pagination / infinite scroll
- [ ] Dark mode toggle
- [ ] RSS feed
- [ ] Google Analytics or Plausible analytics integration
- [ ] SEO meta tags per post (Open Graph / Twitter Cards)
- [ ] Resources / Downloads page (ebooks, worksheets)
- [ ] Newsletter archive page

---

## 💡 Recommended Next Steps

1. **Replace placeholder photo** — Add Benjamin's actual headshot in `about.html` and `index.html`
2. **Add real social links** — Update all `href="#"` social links to actual profiles
3. **Update contact email** — Replace `hello@lifeinbytes.com` with the real email
4. **Connect a form service** — Use [Formspree](https://formspree.io) or Netlify Forms to receive contact messages
5. **Connect newsletter** — Integrate Mailchimp or ConvertKit for real email subscriptions
6. **Add more posts** — Extend `js/posts.js` with posts 7–12 for full article pages
7. **Deploy to custom domain** — Use the Publish tab to go live, then add a custom domain

---

## 🎯 Blog Goals

- **Primary audience**: Nigerian educators, school owners, parents, and school leaders
- **Posting cadence**: 2–3 articles per week
- **Monetization path**: Ebooks → Online courses → School consulting → Sponsored content

---

*Built with ❤️ for educators everywhere. © 2025 Life in Bytes · Benjamin.*
