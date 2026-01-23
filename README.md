# Vivek Joshi - Developer Portfolio

A modern, animated portfolio website built with React, Tailwind CSS, and Framer Motion showcasing the skills and projects of Vivek Joshi, a Web Developer and intern at Codage Habitation.

## 🌟 Live Demo
Visit the live portfolio: [vivek-joshi-dev.vercel.app](https://vivek-joshi-dev.vercel.app)

## ✨ Features

- **Animated Loading Screen** - Full-screen intro with smooth text reveals
- **Responsive Design** - Mobile-first approach with seamless breakpoint transitions
- **Dark Mode Support** - Toggle between light and dark themes
- **Smooth Animations** - Powered by Framer Motion for professional animations
- **Modern UI/UX** - Clean design with glassmorphism effects and gradients
- **Interactive Components** - Hover effects, scroll animations, and micro-interactions
- **WhatsApp Integration** - Contact form sends messages directly to WhatsApp
- **Performance Optimized** - Efficient animations and optimized loading

## 🚀 Sections

1. **Loading Screen** - Animated intro with name and role
2. **Hero Section** - Main introduction with call-to-action buttons
3. **About Me** - Professional description and highlights
4. **Skills** - Interactive skill cards with progress indicators
5. **Projects** - Featured and other projects with tech stack badges
6. **Experience** - Timeline of professional experience
7. **Contact** - Contact form with WhatsApp integration
8. **Footer** - Social links and additional information

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vivek-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- `src/components/LoadingScreen.js` - Name and role
- `src/components/Hero.js` - Introduction and description
- `src/components/About.js` - About section content
- `src/components/Skills.js` - Skills and proficiency levels
- `src/components/Projects.js` - Project details and links
- `src/components/Experience.js` - Work experience and achievements
- `src/components/Contact.js` - Contact information and WhatsApp number

### Styling
- Colors and gradients can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes

### WhatsApp Integration
Update the WhatsApp number in `src/components/Contact.js`:
```javascript
const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Features

- **Page Load**: Smooth loading screen transition
- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive button and card animations
- **Micro-interactions**: Subtle animations for better UX
- **Performance**: Optimized animations with proper cleanup

## 🌙 Dark Mode

The website includes a dark mode toggle that:
- Saves preference to localStorage
- Smooth transitions between themes
- Consistent styling across all components

## 📧 Contact Form

The contact form features:
- Form validation
- WhatsApp integration for instant messaging
- Smooth submission animations
- Success feedback

## 🚀 Deployment

The website can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Vivek Joshi**
- Email: vivekjoshi.53107@email.com
- Phone: +91 9106129458
- LinkedIn: [linkedin.com/in/vivekjoshi](https://linkedin.com/in/vivekjoshi)
- GitHub: [github.com/vivekjoshi53](https://github.com/vivekjoshi53)
- WhatsApp: [wa.me/9106129458](https://wa.me/9106129458)

---

Made with ❤️ using React and Tailwind CSS