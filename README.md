# Sohail Shaikh — Formula 1 Racer Portfolio

Official minimal, aesthetic, and luxury motorsport personal portfolio for Formula 1 driver **Sohail Shaikh** (Car #07).

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

---

## 🏎️ Features

- **Motorsport Visual Identity**: Near-black palette (`#050505`), dark charcoal surfaces, precision borders (`#242424`), and high-contrast racing red accents (`#E10600`).
- **Telemetry & Timing Screen HUD**: Live sector timing visuals, chassis telemetry metrics, downforce specs, and driver profile data.
- **Hero Centerpiece**: Bold uppercase typography, live racing pulse indicator, animated F1 track line, and aerodynamic monocoque silhouette visual.
- **Centralized Data Layer**: Update driver biography, statistics, telemetry items, timeline achievements, and social links from a single file: `src/data/portfolioData.js`.
- **Subtle Framer Motion Micro-Interactions**: Smooth reveals, hover states, mobile drawer, and one-click copy email feedback.
- **Vercel & Production Ready**: Zero server dependencies, static build output, optimized bundle.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Icons**: React Icons (`react-icons/hi`, `react-icons/fa`)
- **Typography**: Space Grotesk & Inter via Google Fonts

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for production
```bash
npm run build
```

---

## ⚙️ Customization

All personal details, timeline records, stats, and links are located in:
```
src/data/portfolioData.js
```
Simply edit this file to update any information across the entire website.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sohail Shaikh F1 Portfolio"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel automatically detects **Vite** and builds the production site with zero additional configuration!
