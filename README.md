# Imperial Implant Center — Coming Soon Page

A luxury, high-performance "Coming Soon" landing page built for **Imperial Implant Center** using Next.js (App Router), Tailwind CSS, Framer Motion, and Aceternity Aurora Background animations.

![Imperial Implant Center Preview](/Imp_logo.png)

---

## 🌟 Key Features

- **Fluid Aurora Background**: Smooth emerald, teal, and mint atmospheric waves running with hardware-accelerated CSS keyframe animations.
- **Staggered Smooth Reveal**: Cinematic entrance animation powering the brand logo plaque, serif headline, countdown timer, and clinical feature cards.
- **Bespoke Logo Presentation**: Floating bezel plaque with gold and emerald accents that highlight the Imperial crown and calligraphy script.
- **Live Anticipated Opening Countdown**: Real-time ticker counting down days, hours, minutes, and seconds.
- **VIP Founding Patient Waitlist**: Interactive email reservation form with instant confirmation feedback and local persistence.
- **Concierge Desk Inquiry Modal**: Interactive modal for early consultation and private inquiry requests.
- **Dark / Light Dual Aesthetic**: Seamless theme switcher supporting both dark obsidian luxury and crisp clinical pearl views.
- **Vercel Native**: 100% optimized for zero-config deployment on Vercel.

---

## 🚀 How to Host on Vercel

### Option 1: Via Vercel Web Dashboard (Recommended)

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**:
   ```bash
   git add .
   git commit -m "feat: Imperial Implant Center Coming Soon page"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Your site will be live on a global CDN in under 60 seconds!

---

### Option 2: Via Vercel CLI

If you have or want to use the Vercel CLI directly from your terminal:

```bash
npx vercel
```

Follow the prompts (accept default settings) to deploy immediately. To deploy directly to production:

```bash
npx vercel --prod
```

---

## 🛠️ Local Development

To run locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Or build for production test
npm run build
```

Open [http://localhost:3000](http://localhost:3000) (or specified port) to view in the browser.

---

## 📁 Project Structure

```
d:/imp/
├── public/
│   └── Imp_logo.png               # Brand logo asset
├── src/
│   ├── app/
│   │   ├── globals.css            # Aurora keyframes, theme variables, glassmorphism
│   │   ├── layout.tsx             # Root layout, Google Fonts (Playfair & Geist), SEO metadata
│   │   └── page.tsx               # Animated Coming Soon page & interactive features
│   ├── components/
│   │   └── ui/
│   │       └── aurora-background.tsx # Provided Aceternity UI Aurora background component
│   └── lib/
│       └── utils.ts               # Tailwind cn helper
├── package.json
└── tsconfig.json
```
