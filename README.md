# 🚀 Mahesh Karande - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a clean minimalist design.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Modern Design** - Clean minimalist light theme with smooth animations
- **Interactive UI** - Hover effects, animated skill bars, floating cards
- **Smooth Scrolling** - Seamless navigation between sections
- **Contact Form** - Ready-to-use contact form with validation
- **SEO Optimized** - Meta tags and semantic HTML structure

## 📋 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated introduction with stats and floating tech cards |
| **About** | Personal info, experience badge, and contact details |
| **Skills** | Categorized skills with animated progress bars |
| **Projects** | Project showcase with hover overlay effects |
| **Experience** | Timeline layout for work and education |
| **Contact** | Contact form with social media links |
| **Footer** | Quick links and social connections |

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Vanilla CSS with CSS Variables
- **Fonts:** Google Fonts (Outfit, Inter)
- **Icons:** SVG Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maheshkarandemnt-prog/maheshportfoli.com.git
   cd maheshportfoli.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
mahesh-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Experience.jsx / Experience.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── Footer.jsx / Footer.css
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update name, title, and description
   - Modify stats (years, projects, technologies)

2. **About Section** (`src/components/About.jsx`)
   - Update bio, email, location
   - Modify education and experience details

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add/remove skills and adjust proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`)
   - Add your actual projects with descriptions and links

5. **Experience Section** (`src/components/Experience.jsx`)
   - Update work history and education timeline

6. **Contact Section** (`src/components/Contact.jsx`)
   - Update email, phone, and social media links

### Add Profile Photo

Replace the placeholder in Hero and About sections with your actual photo:

```jsx
<img src="/path-to-your-photo.jpg" alt="Mahesh Karande" />
```

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #2563eb;      /* Primary blue */
  --color-secondary: #7c3aed;    /* Purple accent */
  --color-accent: #06b6d4;       /* Cyan accent */
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Description |
|------------|-------------|
| `1024px` | Tablet landscape |
| `768px` | Tablet portrait |
| `640px` | Mobile devices |

## 🌐 Deployment

This project can be deployed on:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Use `gh-pages` package

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mahesh Karande**
- Software Engineer
- Skills: React | Angular | Java | SQL | React Native

---

⭐ If you found this project helpful, please give it a star!
