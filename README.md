# 🐂 Red Bull Animated Website

A visually stunning, scroll-driven animated landing page for the **Red Bull Blue Edition**. As you scroll, a cinematic 240-frame animation plays on an HTML5 Canvas, creating an immersive product showcase experience.

> 🔗 **Live Demo:** [View on Netlify](https://red-bull-animated-website.netlify.app/)

---

## ✨ Features

- **🎬 Scroll-Driven Animation** — 240 sequential frames rendered on HTML5 Canvas, synced to scroll position for a cinematic experience
- **⚡ Preloader** — Animated loading screen with progress bar that preloads all frames before displaying the site
- **🧭 Sticky Navigation** — Glassmorphism navbar with blur effect that activates on scroll
- **🫐 Flavor Section** — Product details with hover effects and blueberry imagery
- **💪 Benefits Section** — Interactive cards showcasing Focus, Energy, and Performance benefits
- **🖼️ Gallery** — Staggered image grid with zoom and rotate hover animations
- **📍 Store Locator CTA** — Bold call-to-action section with zip code input
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode Support** — Built-in dark theme with Tailwind CSS dark classes

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| **Google Gemini** | AI-assisted code generation and development |
| **ChatGPT** | AI pair programming and content creation |
| **Google Flow** | Workflow orchestration and design iteration |
| **Stitch** | UI design system and screen prototyping |
| **Antigravity** | Agentic AI coding assistant for building and debugging |

---

## 🧰 Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic structure & Canvas element |
| **CSS3** | Custom animations, glassmorphism, gradients |
| **JavaScript** | Scroll-driven frame rendering, preloader logic |
| **Tailwind CSS** | Utility-first styling for layout and components |
| **Google Fonts** | Inter, Oswald, Outfit typography |
| **Material Icons** | UI iconography |
| **Netlify** | Static site hosting & deployment |

---

## 📁 Project Structure

```
Red Bull Animated Website/
├── index.html                         # Main HTML page
├── style.css                          # Custom CSS (loader, nav, canvas, overlays)
├── script.js                          # Canvas animation & scroll logic
├── netlify.toml                       # Netlify deployment configuration
├── redbull-logo.png                   # Navigation logo
├── flavor-blueberry.png               # Flavor section hero image
├── gallery-redbull-1.png              # Gallery images
├── gallery-redbull-2.png
├── gallery-redbull-3.png
├── gallery-redbull-4.png
├── gallery-pour.png
├── ezgif-35b2951b31e39886-jpg/        # 📂 240 animation frames (JPG sequence)
│   ├── ezgif-frame-001.jpg
│   ├── ezgif-frame-002.jpg
│   ├── ...
│   └── ezgif-frame-240.jpg
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

No build tools required — this is a **static website**. Just a modern web browser.

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Red-Bull-animated-website.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Red-Bull-animated-website
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser, **or**
   - Use a local server for best results:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve .
     ```


## 🎯 How It Works

1. **Preloading** — On page load, all 240 animation frames are preloaded with a visual progress indicator
2. **Scroll Tracking** — As you scroll through the hero section (600vh tall), JavaScript calculates scroll progress (0% → 100%)
3. **Frame Rendering** — The corresponding frame is drawn to an HTML5 Canvas using `object-fit: cover` logic
4. **Overlay Animations** — Text overlays fade in/out at specific scroll positions for a storytelling effect
5. **Smooth Transitions** — `requestAnimationFrame` ensures butter-smooth rendering performance

---

## 📸 Screenshots

> *Add your screenshots here!*
>
> ```
> ![Hero Section](screenshots/hero.png)
> ![Flavor Section](screenshots/flavor.png)
> ![Gallery](screenshots/gallery.png)
> ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is for **educational and portfolio purposes only**. Red Bull branding, logos, and trademarks are property of **Red Bull GmbH**.

---

## 👤 Author

**Ashvin Kota**

- GitHub: [@AshvinKota](https://github.com/AshvinKota)

---

<p align="center">
  Made with ❤️ and a lot of ⚡ energy
</p>
