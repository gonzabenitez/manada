
# 🐺 MANADA | Art & Tech Collective

A high-end, minimalist landing page for an audiovisual production collective. This is a standalone frontend project designed to bridge the gap between local talent and professional visual identity.

## 🚀 The Vision
In a town of 30,000, the infrastructure for high-end visuals is often missing. MANADA is the signal. This site serves as the "Bridge"—a first contact point for artists and businesses.

## 🛠️ Standalone Architecture
This repository is a pure static web project. 
- **No Database Needed**: Submissions are handled by Formspark's API.
- **Persistence**: `localStorage` tracks user status locally (no tracking banners).
- **Animation**: Native CSS3 and HTML5 Canvas for a lightweight, high-performance atmosphere.

## 📁 Repository Structure
```text
/manada
├── index.html              # Core structure & Manifesto overlay
├── assets/
│   ├── img/
│   │   └── logo.png        # The Signal (Ultra-thin border aesthetic)
│   ├── styles/
│   │   └── style.css       # Tech-Noir theme & Footer positioning
│   └── scripts/
│       ├── fetch.js        # Form logic & JSON AJAX handling
│       └── particles.js    # Background particle engine
└── README.md               # Project documentation

```

## 📡 Submission Logic

The form uses the **Fetch API** to send data as a JSON payload. This ensures the user stays immersed in the dark-mode experience without white-screen redirects.

```javascript
// Change this in assets/scripts/fetch.js when going live:
const TARGET_URL = "https://submit-form.com/YOUR_FORMSPARK_ID";

```

## 🔧 Local Testing (Developer Tool)

For local testing without using Formspark credits, a mock Node.js server is included in the project notes to simulate the API response and verify the AJAX handshake.

## 🎨 Aesthetic Guidelines

* **The Glow**: All interactive elements pulse with `#fd66c2`.
* **The Particles**: Drift behind the content, suggesting a living network.
* **The Layout**: A strict 100vh container that keeps the "Manifesto" footer pinned to the floor of the screen.

---

**STAY VIVID.**
