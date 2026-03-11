# ☕ Caffè Pellico — Sito Web Ufficiale

> **Sito web professionale per Caffè Pellico** — Bar & Caffetteria nel cuore di Saluzzo (CN).  
> Progettato e sviluppato interamente da **Rotani Roki**.

---

## 🖥️ Preview

| Home — Split Hero | Menu Caffetteria | Contatti & Mappa |
|:-:|:-:|:-:|
| Hero a doppio pannello con monogramma CP | Lista prodotti con prezzi e categorie | Google Maps integrato + form di contatto |

---

## ✨ Caratteristiche principali

- **Design elegante e sobrio** ispirato all'estetica dei locali di lusso italiani
- **Tema warm cream / terracotta** — palette `#F9F5F0` + `#C4622D`
- **Single Page Application** — navigazione fluida senza ricaricamenti
- **6 pagine complete** — Home, Chi Siamo, Menù ×3, Contatti
- **Navbar fissa e responsiva** con logo CP monogramma + pulsante Prenota
- **Mappa Google Maps** integrata nella pagina Contatti
- **Form di contatto** con campi validati (Nome, Email, Telefono, Messaggio)
- **Footer completo** con orari, indirizzi, link social e copyright
- **Animazioni CSS** — fade-up, scroll-line, float-up particles
- **Sticky category nav** nelle pagine menù con scroll smooth
- **100% responsive** — ottimizzato per mobile, tablet e desktop
- **Zero dipendenze UI esterne** — tutto scritto da zero in CSS puro

---

## 🗂️ Struttura del Progetto

```
barpellico/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navbar fissa responsive con hamburger menu
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Footer con orari, info, social
│   │   ├── Footer.css
│   │   ├── MenuPage.jsx        # Componente riutilizzabile per le pagine menu
│   │   ├── MenuPage.css
│   │   └── ScrollToTop.jsx     # Reset scroll su cambio pagina
│   ├── pages/
│   │   ├── Home.jsx            # Landing page con hero split-screen
│   │   ├── Home.css
│   │   ├── ChiSiamo.jsx        # Storia, valori e team
│   │   ├── ChiSiamo.css
│   │   ├── MenuCaffetteria.jsx # 14 prodotti caffetteria
│   │   ├── MenuBevande.jsx     # 6 categorie bevande
│   │   ├── MenuPranzi.jsx      # 6 categorie pranzi
│   │   ├── Contatti.jsx        # Mappa + form + info
│   │   └── Contatti.css
│   ├── App.jsx                 # Router principale con 6 route
│   ├── main.jsx
│   └── index.css               # Design system globale (variabili CSS, utility)
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠️ Stack Tecnologico

| Tecnologia | Versione | Utilizzo |
|---|---|---|
| **React** | 18.3.1 | UI component-based |
| **React Router DOM** | 6.24.1 | Client-side routing (SPA) |
| **Vite** | 7.3.1 | Build tool & dev server |
| **CSS Modules** | — | Styling per componente |
| **CSS Custom Properties** | — | Design system con variabili |
| **Google Maps Embed** | — | Mappa interattiva |

---

## 🎨 Design System

### Palette colori

```css
--gold:        #C4622D   /* Terracotta — colore accent principale */
--gold-light:  #D97545   /* Hover e sfumature */
--gold-dark:   #9E4A1F   /* Stati attivi e bordi */
--bg:          #F9F5F0   /* Sfondo principale warm cream */
--bg-surface:  #F0EAE0   /* Sfondo sezioni secondarie */
--bg-card:     #FFFFFF   /* Cards e superfici elevate */
--ivory:       #1E1918   /* Testo principale scuro */
--ivory-muted: #6B5F58   /* Testo secondario */
--muted:       #9A9087   /* Testo disabilitato / placeholder */
```

### Tipografia

| Font | Ruolo |
|---|---|
| **Playfair Display** | Titoli, headings, elementi display |
| **Raleway** | Body text, label, nav links |

---

## 🚀 Avvio in locale

### Prerequisiti

- Node.js ≥ 18
- npm ≥ 9

### Installazione

```bash
# Clona il repository
git clone https://github.com/RotaniRoki/barpellico.git
cd barpellico

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
# → http://localhost:5173
```

### Build di produzione

```bash
npm run build     # Genera la cartella /dist ottimizzata
npm run preview   # Anteprima della build di produzione
```

---

## 📄 Pagine

| Rotta | Componente | Descrizione |
|---|---|---|
| `/` | `Home.jsx` | Hero split-screen, highlights, about, stats, CTA |
| `/chi-siamo` | `ChiSiamo.jsx` | Storia del locale, valori, team |
| `/menu-caffetteria` | `MenuCaffetteria.jsx` | 14 prodotti: espresso, cappuccino, brioche… |
| `/menu-bevande` | `MenuBevande.jsx` | Bibite, cocktail, birra, vini, bollicine |
| `/menu-pranzi` | `MenuPranzi.jsx` | Insalate, focacce, antipasti, primi, secondi, dolci |
| `/contatti` | `Contatti.jsx` | Info, orari, Google Maps, form di contatto |

---

## 📍 Dati del Locale

```
Caffè Pellico
Corso Italia, 75 — 12037 Saluzzo (CN)
Tel: +39 0175 211012
Aperto dal 20 Dicembre 2022

Orari:
  Lunedì:         07:00 – 21:00
  Martedì:        Chiuso
  Mercoledì:      07:00 – 21:00
  Giovedì:        07:00 – 21:00
  Venerdì – Sab:  07:00 – 00:00
  Domenica:       08:00 – 21:00
```

🔗 [Google Maps](https://www.google.com/maps/place/Caffe'+Pellico/@44.6457269,7.4878673,773m)  
📸 [Instagram @caffe_pellico](https://www.instagram.com/caffe_pellico/)  
📘 [Facebook](https://www.facebook.com/p/Caff%C3%A8-Pellico-100088418388482/)  
💬 [WhatsApp](https://wa.me/390175211012)

---

## 👤 Sviluppatore

<div align="center">

**Rotani Roki**

Questo progetto è stato ideato, progettato e sviluppato **interamente da Rotani Roki**.  
Dal design system al CSS, dalla struttura dei componenti React al routing — ogni riga di codice è originale.

[![GitHub](https://img.shields.io/badge/GitHub-RotaniRoki-181717?style=for-the-badge&logo=github)](https://github.com/RotaniRoki)

</div>

---

## 📦 Competenze dimostrate in questo progetto

- ⚛️ **React 18** — componenti funzionali, hooks (`useState`, `useEffect`), props
- 🔀 **React Router v6** — routing dichiarativo, `NavLink`, `useNavigate`
- ⚡ **Vite** — configurazione build, hot module replacement, ottimizzazione produzione
- 🎨 **CSS avanzato** — Custom Properties, Grid, Flexbox, animazioni keyframe, media queries
- 📱 **Responsive Design** — mobile-first, breakpoint fluidi, hamburger menu custom
- 🗺️ **Google Maps Embed API** — integrazione mappa interattiva
- ♿ **Accessibilità** — `aria-label`, `aria-expanded`, semantica HTML corretta
- 🔒 **Sicurezza** — `rel="noopener noreferrer"` su tutti i link esterni, nessuna dipendenza vulnerabile

---

<div align="center">

**☕ Caffè Pellico — Saluzzo (CN) — Dal 20 Dicembre 2022**

*Progetto sviluppato da Rotani Roki — 2026*

</div>
