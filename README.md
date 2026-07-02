# Nilesh Aggarwal - Portfolio Website

A modern, interactive dark-mode portfolio built with **React 18** and **Tailwind CSS v3**.  
Targeting cloud and AI engineering roles - designed to impress recruiters, senior directors, and technical hiring managers.

---

## Quick Start

```bash
npm install        # install / upgrade all dependencies
npm start          # http://localhost:3000
```

## Deploy to GitHub Pages

```bash
npm run deploy     # runs build then pushes to gh-pages branch
```

---

## Project Structure

```
nil3sh99.github.io/
  public/
    resume/
      nilesh_aggarwal.pdf   <- PUT YOUR RESUME PDF HERE
    index.html
  src/
    assets/
      data.js               <- ALL CONTENT LIVES HERE
    components/
      Hero.js               <- profile photo, name, tagline, CTAs
      ImpactStats.js        <- animated impact-by-the-numbers bar
      CategoryGrid.js       <- 5 domain expertise cards (opens modal)
      Modal.js              <- project detail overlay
      Timeline.js           <- work experience vertical timeline
      Certifications.js     <- cert and award cards grid
      TechStack.js          <- grouped tech-stack pills
      Footer.js             <- footer with availability badge
    images/
      profile-img.webp      <- REPLACE WITH YOUR PHOTO
    index.css               <- Tailwind directives + custom globals
    App.js
  tailwind.config.js
  postcss.config.js
  package.json
```

---

## How to Update Content

**The golden rule:** edit  - no component files need touching for content updates.

### Replace Your Profile Photo

Drop a new image at .
(Update the import in  if you change the filename.)

### Add Your Resume

1. Convert your resume to PDF.
2. Copy it to .

The Resume button in the hero automatically links there.

### Change Hero Text

In :

```js
name:    "Nilesh Aggarwal",
title:   "Cloud & AI Platform Engineer",
tagline: "Your tagline here...",
```

### Add a New Project to an Existing Domain

Find the category in  (e.g. ) and append to its  array:

```js
{
  title: "My New Project",
  company: "Company Name",
  year: "2025",
  tags: ["GCP", "Python", "Terraform"],
  description: "What you built, how, and why it mattered.",
  impact: "The quantified result - always include a number.",
  link: "https://..."  // optional
}
```

### Add a New Domain Category

Append to :

```js
{
  id: "data",
  icon: "chart",
  title: "Data Engineering",
  subtitle: "BigQuery - dbt - Dataflow - Pub/Sub",
  color: "from-cyan-600 to-blue-500",
  projects: [ /* ... */ ],
}
```

Then add the hover glow in :

```css
.card-glow-data:hover { box-shadow: 0 0 40px rgba(6, 182, 212, 0.25); }
```

And add the mapping in  (GLOW object):

```js
data: "card-glow-data",
```

### Add a New Work Experience

Append to :

```js
{
  role: "Senior Cloud Architect",
  company: "New Company",
  location: "City, Province",
  period: "Month YYYY - Month YYYY",
  type: "Full Time",
  color: "from-teal-500 to-cyan-500",
  icon: "company emoji",
  highlights: [
    "Key achievement - quantified result.",
    "Another achievement.",
  ],
}
```

### Add a Certification or Award

Append to :

```js
{
  name: "Google Cloud Professional Data Engineer",
  issuer: "Google Cloud",
  date: "Jan 2026",
  icon: "chart emoji",
  color: "from-blue-600 to-cyan-500",
}
```

### Update Impact Stats

Edit . Each number animates from 0 when it scrolls into view:

```js
{ number: 200, prefix: "", suffix: "+", label: "Your Metric" }
```

### Add a Tech Stack Item

Append to .  controls which row it appears in:

```js
{ name: "BigQuery", category: "Cloud", icon: "db emoji" }
```

---

## Design Tokens

| Token | Value |
|---|---|
| Page background | #0a0a14 |
| Card background | bg-white/5 |
| Gradient text | indigo-400 to violet-400 to purple-400 |
| AI category | from-purple-600 to-violet-700 |
| Cloud category | from-blue-600 to-sky-500 |
| DevOps category | from-emerald-600 to-teal-500 |
| Security category | from-amber-500 to-orange-600 |
| Projects category | from-pink-600 to-rose-500 |

---

## Tech Stack

- React 18 + Create React App 5
- Tailwind CSS v3 (JIT, dark-first)
- react-icons v4
- AOS for scroll-reveal animations
- GitHub Pages via gh-pages
