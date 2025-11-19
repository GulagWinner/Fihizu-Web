# 💄 Fihizu - E-Commerce

A beautiful, modern e-commerce platform for natural beauty products. Built with cutting-edge technologies to provide an exceptional user experience.

## ✨ Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Elegant animations powered by Framer Motion
- **Product Showcase**: Display of 8 premium beauty products with ratings and reviews
- **Modern UI**: Clean and intuitive interface with a beautiful color scheme
- **Fast Performance**: Optimized with Vite for lightning-fast load times
- **Type Safety**: Built with TypeScript for reliability and developer experience

## 📋 Project Structure

```
fihizu-web/
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with featured product
│   ├── TrustedBar.tsx        # Trust indicators
│   ├── CategoryIcons.tsx     # Product categories
│   ├── BestSellers.tsx       # Featured products grid (8 items)
│   ├── ProductCard.tsx       # Individual product card
│   ├── Philosophy.tsx        # Brand philosophy section
│   └── Footer.tsx            # Footer with links
├── App.tsx                   # Main application component
├── constants.tsx             # App constants and product data
├── types.ts                  # TypeScript type definitions
├── index.tsx                 # React entry point
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies

```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:GulagWinner/Fihizu-Web.git
   cd Fihizu-Web
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview
```bash
npm run preview
```
Preview the production build locally before deployment.

## 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | ^19.2.0 | UI framework |
| **TypeScript** | ~5.8.2 | Type safety |
| **Vite** | ^6.2.0 | Build tool & dev server |
| **Tailwind CSS** | - | Styling |
| **Framer Motion** | 10.16.4 | Animations |
| **Lucide React** | 0.292.0 | Icons |

## 🎨 Design

- **Color Palette**: Soft pinks, mauves, and natural tones
- **Typography**: Serif fonts for headers, sans-serif for body text
- **Layout**: Responsive grid system with mobile-first approach
- **Animations**: Smooth transitions and hover effects

## 📱 Product Showcase

The application features 8 beauty products including:
- Serums
- Face masks
- Cleansers
- Moisturizers
- Body oils
- Lip balms
- And more...

Each product includes:
- High-quality product image
- Product name and category
- Price (with discount option)
- Star rating and review count
- Add to cart functionality

## 🔧 Configuration

### Vite Config
- Development server runs on `localhost:3000`
- Path alias `@` points to root directory
- React plugin enabled for JSX support

### TypeScript
- Strict mode enabled
- React 19 DOM types configured
- ES2020 target

## 🌐 Deployment

The project can be easily deployed to:
- **Vercel** - Recommended for Next.js but works great with Vite
- **Netlify** - Supports Vite builds natively
- **GitHub Pages** - Static hosting option
- **AWS Amplify** - Full-featured hosting

### Build and Deploy to Vercel
```bash
npm run build
vercel
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Felipe Fonseca**

---

<div align="center">

### Made with ❤️ for natural beauty

For questions or support, please open an issue on GitHub.

</div>