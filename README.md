# Pelumi Longe — Portfolio

Personal portfolio website for Pelumi Longe, a Full-Stack Engineer with 8+ years of experience in Ruby on Rails, React, and product-led growth.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite 6
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Font**: Geist Variable (`@fontsource-variable/geist`)
- **Forms**: React Hook Form
- **Email**: EmailJS (`@emailjs/browser`)
- **Icons**: Lucide React

## Features

- Dark / light mode toggle with `localStorage` persistence (no flash on load)
- Fully responsive — mobile, tablet, desktop
- Single-page with smooth scroll navigation
- Active section highlighting in the navbar
- Contact form with validation, wired to EmailJS
- All content managed from a single data file (`src/data/resume.ts`)

## Sections

| Section | Description |
|---|---|
| **Hero** | Photo, name, title, CTA buttons, social links |
| **About** | Bio, stats (years experience, years remote) |
| **Skills** | Categorised skill tags |
| **Experience** | Timeline of work history with bullet points |
| **Education** | Degree, grade, and scholarship achievement |
| **Contact** | Validated form + email / LinkedIn / GitHub links |

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # One file per page section
│   └── ui/             # shadcn-based primitives (Button, Input, etc.)
├── data/
│   └── resume.ts       # All portfolio content lives here
├── hooks/
│   └── useTheme.ts     # Dark/light theme management
├── types/
│   └── index.ts        # Shared TypeScript interfaces
└── index.css           # Global styles and CSS theme variables
```

## Getting Started

### Prerequisites

- Node.js v20.x

### Install & run

```bash
npm install
npm run dev        # http://localhost:5173
```

### Build for production

```bash
npm run build
npm run preview    # preview the production build locally
```

## Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend. To enable it:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an **Email Service** (e.g. Gmail) and copy the **Service ID**
3. Create an **Email Template** and copy the **Template ID**
   - Available template variables: `{{name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`, `{{time}}`
4. Copy your **Public Key** from Account → General
5. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> The `.env` file is gitignored — never commit it. When deploying, add these as environment variables in your hosting platform.

## Updating Content

All text, experience, skills, and links are in one place:

```
src/data/resume.ts
```

Edit that file to update any section — no JSX changes needed.

## Deployment

The site is a static SPA and can be deployed to any static host. Recommended options:

- **Vercel** — connect GitHub repo, auto-deploys on push
- **Netlify** — same workflow, add env variables in site settings
- **GitHub Pages** — requires setting `base` in `vite.config.ts`
