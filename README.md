# 🚀 Modern Interactive Portfolio

A premium, Awwwards-style single-page portfolio built with **React + Vite**, featuring smooth animations, glassmorphism, dark/light themes, and interactive sections.

## ✨ Features

- **Dark/Light Theme** with system detection & localStorage persistence
- **Animated particles** background with mouse interaction
- **Floating glassmorphism navbar** with scroll spy
- **Hero section** with typing animation & geometric shapes
- **About section** with animated tech stack icons (19 technologies)
- **Projects section** with 3D tilt cards, detail modals, Swiper carousel
- **Experience timeline** with scroll-triggered animations
- **Certifications** with preview modals & verify buttons
- **Contact form** with validation & EmailJS integration
- **Meeting scheduler** with Calendly embed support
- **Custom cursor**, scroll progress indicator, back-to-top button
- **Fully responsive** (desktop, tablet, mobile)
- **Code-split** with lazy loading for performance

## 📦 Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- GSAP
- Swiper.js
- React Icons
- React Helmet Async
- EmailJS
- TypeAnimation

## 🛠 Setup

```bash
# Clone & enter
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙ Configuration

### Personal Info
Edit `src/data/personalInfo.js` with your name, bio, email, resume URL, etc.

### Projects, Skills, etc.
Edit the files in `src/data/` to add your content:
- `projects.js` — Your projects with descriptions, tech stack, and links
- `skills.js` — Technologies you know
- `socialLinks.js` — Your social media URLs
- `certifications.js` — Your certificates
- `experience.js` — Your work experience

### EmailJS (Contact Form)
1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service, template, and get your public key
3. Uncomment the EmailJS code in `src/components/sections/Contact.jsx`
4. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`

### Calendly (Meeting Scheduler)
Add your Calendly URL to `personalInfo.calendlyUrl` in `src/data/personalInfo.js`

### Resume
Place your resume PDF at `public/resume.pdf`

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Netlify
```bash
npm run build
```
Then drag the `dist/` folder to [netlify.com](https://netlify.com), or connect your GitHub repo.

Add a `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/        # SectionWrapper, reusable UI
│   ├── layout/        # Navbar, Footer, LoadingScreen, CustomCursor, ScrollProgress
│   ├── sections/      # Hero, About, SocialLinks, Projects, Certifications, Experience, Contact, Scheduler
│   └── ui/            # ParticleBackground
├── context/           # ThemeContext
├── data/              # All placeholder data (easy to swap)
├── hooks/             # useScrollSpy, useMediaQuery
├── index.css          # Global styles + Tailwind
├── App.jsx            # Root component
└── main.jsx           # Entry point
```

## 📄 License

MIT
