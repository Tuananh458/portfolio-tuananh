# Portfolio — Hoàng Kim Tuấn Anh (AI Engineer)

Modern, premium, state-of-the-art personal portfolio and activity hub built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Optimized for speed, visuals, smooth micro-animations, bilingual support (EN/VI), and clean PDF resume printing.

---

## 🚀 Key Features

* **Rich Interactive Visuals**:
  - High-performance HTML5 Canvas neural network particle connections reacting to cursor movements.
  - Glassmorphic card surfaces with color-drift gradient backdrops.
  - Responsive layout optimized for phones, tablets, and wide screens.
* **Component-Based Architecture**:
  - Separate React modules for navigation, timeline cards, project layouts, and CV.
  - Organized static datasets (`src/data/`) to easily add/edit projects, activities, and skills.
* **Dual Themes**:
  - Auto-initializing Dark/Light theme toggle that matches user system preferences and persists in `localStorage`.
* **Bilingual Support (EN/VI)**:
  - Instant toggle transitions with clean localized labels without page reloads.
* **Live Sandbox Mockups**:
  - Interactive "Live Demo" frames simulating high-fidelity mock chrome browsers for direct project interaction (e.g. Quizify).
* **Print-Perfect CV Layout**:
  - Elegant modal CV preview that adapts seamlessly when triggering the print command (`window.print()`), hiding elements to render a clean, standard single-page resume.

---

## 🛠️ Local Development

### Prerequisites

* **Node.js** (v18 or higher recommended)
* **npm** (v9 or higher)

### Setup & Run

1. Clone or navigate to the directory:
   ```bash
   cd portfolio-tuananh
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch development server:
   ```bash
   npm run dev
   ```
4. Build static distribution files for deployment:
   ```bash
   npm run build
   ```
   *Outputs compiled HTML, CSS, and JS to the `/dist` directory.*

---

## 🌐 Deployment Guides

### 1. Netlify (Automated Git Integration)
1. Push your code repository to GitHub/GitLab.
2. Go to [Netlify Dashboard](https://app.netlify.com) and click **Add new site** -> **Import an existing project**.
3. Link your repository.
4. Set build configurations:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Deploy site**.

### 2. Vercel (CLI or Dashboard)
* **Option A: Dashboard** - Connect your GitHub repository to Vercel. It will automatically detect Vite and set the build settings.
* **Option B: CLI**:
  ```bash
  npm i -g vercel
  vercel
  ```
  *(Press Enter to accept default Vite configurations, and deploy.)*

### 3. GitHub Pages
To deploy via GitHub Actions:
1. Create a file `.github/workflows/deploy.yml` in your repo:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Install and Build
           run: |
             npm install
             npm run build
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```
2. In Repository Settings -> Pages, select Source: **Deploy from branch** and branch: `gh-pages` (`/root`).

---

## 📝 Customizing Content

All personal descriptions, titles, list details, and bullet points are stored in static modular data files inside `/src/data/`:
* [projects.js](file:///d:/Documents/portfolio-tuananh/src/data/projects.js) - Edit title, roles, tags, URLs, and bullet achievements.
* [activities.js](file:///d:/Documents/portfolio-tuananh/src/data/activities.js) - Log new events, program updates, and hackathon certificates.
* [cvData.js](file:///d:/Documents/portfolio-tuananh/src/data/cvData.js) - Upgrade your profile summaries, credentials, and languages.
