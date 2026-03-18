# Pelumi Longe — Portfolio

> 🌐 **[pelumilonge.dev](https://pelumilonge.dev)**

Personal portfolio website for Pelumi Longe, a Full-Stack Engineer with 8+ years of experience in Ruby on Rails, React, and product-led growth.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Font | Geist Variable (`@fontsource-variable/geist`) |
| Forms | React Hook Form |
| Email | EmailJS (`@emailjs/browser`) |
| Icons | Lucide React |

## Features

- **System-aware theme** — defaults to the visitor's OS light/dark preference via `prefers-color-scheme`, with a manual toggle that persists to `localStorage`
- **No flash on load** — inline script applies theme before React mounts
- Fully responsive — mobile, tablet, desktop
- Single-page with smooth scroll navigation and active section highlighting in the navbar
- Contact form with validation, wired to EmailJS (no backend required)
- All content managed from a single data file — no JSX edits needed
- Full SEO meta tags — Open Graph, Twitter Card, canonical, theme-color
- Custom SVG favicon consistent with the site's branding

## Sections

| Section | Description |
|---|---|
| **Hero** | Photo, name, title, CTA buttons, social links |
| **About** | Bio paragraphs, stats (years experience, years remote) |
| **Skills** | Categorised skill tags (languages, databases, tools, testing, etc.) |
| **Experience** | Reverse-chronological timeline with full job cards and bullet points |
| **Education** | Degree, grade, and scholarship achievement badge |
| **Contact** | Validated form + email / LinkedIn / GitHub links |

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # One file per page section
│   └── ui/             # shadcn-based primitives (Button, Input, Textarea, etc.)
├── data/
│   └── resume.ts       # ← All portfolio content lives here
├── hooks/
│   └── useTheme.ts     # OS-aware dark/light theme management
├── types/
│   └── index.ts        # Shared TypeScript interfaces
└── index.css           # Global styles and CSS theme variables (light + dark)
```

## Getting Started

### Prerequisites

- Node.js v20.x

### Install & run

```bash
npm install
npm run dev        # → http://localhost:5173
```

### Build for production

```bash
npm run build
npm run preview    # preview the production build locally
```

## Updating Content

All text, experience, skills, and personal links are in one place:

```
src/data/resume.ts
```

Edit that file to update any section — no JSX changes needed.

## Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to deliver messages without a backend. Free tier allows 200 emails/month.

**Setup steps:**

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** (e.g. Gmail) → copy the **Service ID**
3. Create an **Email Template** → copy the **Template ID**
4. Go to **Account → General** → copy your **Public Key**
5. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Available template variables:**

| Variable | Description |
|---|---|
| `{{name}}` | Sender's name |
| `{{from_email}}` | Sender's email address |
| `{{message}}` | Message body |
| `{{to_name}}` | Recipient name (Pelumi) |
| `{{time}}` | Date and time the message was sent |

## SEO

The following meta tags are configured in `index.html`:

- **Canonical**: `https://pelumilonge.dev`
- **Open Graph**: title, description, image, url, locale, site\_name
- **Twitter Card**: `summary` with image, linked to `@Orelongz`
- **theme-color**: `#6366f1` (indigo — tints the browser chrome on mobile)
- **robots**: `index, follow`

The OG image (`og:image`) points to the profile photo using an absolute URL, which is required for social platforms to fetch and display it correctly.

## Deployment

The site is a static SPA and can be deployed to any static host:

- **Vercel** — connect GitHub repo, zero config, auto-deploys on push *(recommended)*
- **Netlify** — same workflow; add env variables under Site Settings → Environment
- **GitHub Pages** — requires setting `base` in `vite.config.ts`

When deploying, remember to add the three `VITE_EMAILJS_*` environment variables in your platform's settings.
