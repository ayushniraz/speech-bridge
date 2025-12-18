

# 🌉 Speech Bridge

> **Status:** 🚧 Under Active Development

**Speech Bridge** is a **privacy-first, real-time speech transcription and translation web app** that runs entirely **in the browser**.
It allows users to **record spoken audio**, instantly **transcribe it**, and **translate it into multiple languages** — with **no audio data sent to any server**.

Built with **React + TypeScript**, powered by **Vite**, and styled using **Tailwind CSS**, Speech Bridge focuses on speed, simplicity, and user privacy.

![Speech Bridge Screenshot](https://raw.githubusercontent.com/ayushniraz/speech-bridge/main/public/ss.png)

---

## ✨ Features

* 🎙️ **Real-time audio recording** directly from the browser
* 📝 **Instant speech-to-text transcription**
* 🌍 **On-the-fly translation** into multiple languages
* 🔒 **Privacy-first** — no server uploads, runs locally
* ⚡ **Fast & lightweight** Vite-powered setup
* 🖥️ **Clean, minimal UI** for distraction-free usage
* 📱 **Responsive design** for desktop and mobile

---

## 🧠 Tech Stack

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Web Speech API** (Browser-based audio & speech handling)

---

## 📦 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ayushniraz/speech-bridge.git
cd speech-bridge
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

The app will be available at:

```txt
http://localhost:5173
```

> 🔔 When prompted, **allow microphone access** in your browser.

---

## 📁 Project Structure

```txt
src/
 ├─ components/      # Reusable UI components
 ├─ hooks/           # Custom hooks (audio, speech, state)
 ├─ pages/           # Page-level components
 ├─ utils/           # Helper & utility functions
 ├─ styles/          # Global Tailwind styles
 ├─ App.tsx          # Root app component
 └─ main.tsx         # Application entry point
```

---

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🚀 Roadmap

* ⏳ Live transcription preview while speaking
* 🌐 Language auto-detection
* 💾 Export transcription as TXT / PDF
* 🎧 Audio playback with text sync
* 🌓 Dark mode support

---

## 👤 Author

**Ayush Niraula**

* GitHub: [https://github.com/ayushniraz](https://github.com/ayushniraz)

---

