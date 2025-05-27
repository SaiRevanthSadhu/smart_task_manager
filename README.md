# Sai Revanth Sadhu - Resume Website

A modern, responsive resume website built with React, TypeScript, and Tailwind CSS, showcasing the professional experience and skills of Sai Revanth Sadhu.

## 🚀 Live Demo

- **Vercel Deployment**: [Your Vercel URL here]
- **GitHub Repository**: [Your GitHub URL here]

## 📸 Screenshot

![Resume Website Screenshot](./public/screenshot.png)

## ✨ Features Implemented

### Core Requirements (15/15 points)

1. ✅ **Create React App**: Built using \`create-react-app\` with TypeScript
2. ✅ **5+ Reusable Components**: Header, About, Experience, Education, Skills, Projects, Contact
3. ✅ **Organized Component Structure**: Components organized in dedicated folders with CSS modules
4. ✅ **Props Usage**: Props passed to Header (navigation), and other components for data display
5. ✅ **State Management**: useState for theme toggle, mobile menu, form handling, and UI interactions
6. ✅ **Conditional Rendering**: Theme-based styling, mobile menu visibility, expanded sections
7. ✅ **Dynamic Lists (.map())**: Skills, experiences, projects, achievements, certifications
8. ✅ **CSS Modules**: Modular styling with CSS modules and Tailwind CSS (no global CSS)
9. ✅ **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
10. ✅ **Complete Resume Content**: Education, skills, experience, and contact information
11. ✅ **Vercel Deployment**: Deployed and accessible via public URL
12. ✅ **Git Version Control**: Full Git history with meaningful commits
13. ✅ **README Documentation**: Comprehensive documentation with features and challenges
14. ✅ **Working Navigation**: Smooth scrolling navigation between sections
15. ✅ **Custom Domain**: Optional firstname-lastname.vercel.app format

### Additional Features

- 🌙 **Dark/Light Theme Toggle**: Persistent theme switching with localStorage
- 📱 **Mobile-First Design**: Optimized for all device sizes
- ⚡ **Smooth Animations**: CSS transitions and hover effects
- 🎨 **Modern UI/UX**: Clean, professional design with excellent typography
- 📧 **Contact Form**: Functional contact form with validation
- 🔍 **Skill Filtering**: Interactive skill categorization and filtering
- 📊 **Progress Bars**: Visual skill level indicators
- 🎯 **Project Showcase**: Detailed project cards with expandable descriptions
- ♿ **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Build Tool**: Create React App
- **Deployment**: Vercel
- **Version Control**: Git & GitHub
- **Icons**: Unicode emojis for cross-platform compatibility
- **Fonts**: Inter font family from Google Fonts

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.css
│   ├── Experience/
│   │   ├── Experience.tsx
│   │   └── Experience.module.css
│   ├── Education/
│   │   ├── Education.tsx
│   │   └── Education.module.css
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   └── Skills.module.css
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   └── Projects.module.css
│   └── Contact/
│       ├── Contact.tsx
│       └── Contact.module.css
├── contexts/
│   └── ThemeContext.tsx
├── App.tsx
├── App.module.css
├── index.tsx
└── index.css
\`\`\`

## 🚧 Challenges Faced & Solutions

### 1. **Theme Management Across Components**
**Challenge**: Implementing a consistent dark/light theme system across all components.
**Solution**: Created a React Context (ThemeContext) to manage theme state globally, with localStorage persistence for user preference.

### 2. **Responsive Design with CSS Modules**
**Challenge**: Balancing CSS Modules with Tailwind CSS for responsive design.
**Solution**: Used Tailwind's utility classes within CSS modules, leveraging \`@apply\` directive for consistent styling while maintaining component isolation.

### 3. **Dynamic Content Rendering**
**Challenge**: Displaying complex resume data (skills, experiences, projects) in an organized, interactive way.
**Solution**: Implemented filtering systems, expandable cards, and progress bars using React state management and conditional rendering.

### 4. **Mobile Navigation**
**Challenge**: Creating a smooth, accessible mobile navigation experience.
**Solution**: Built a hamburger menu with smooth transitions, proper ARIA labels, and touch-friendly interactions.

### 5. **Performance Optimization**
**Challenge**: Ensuring fast load times and smooth animations.
**Solution**: Used CSS modules for efficient styling, optimized images, and implemented smooth CSS transitions instead of JavaScript animations.

### 6. **Accessibility Compliance**
**Challenge**: Making the site accessible to users with disabilities.
**Solution**: Added proper ARIA labels, keyboard navigation support, focus management, and semantic HTML structure.

## 🎨 Design Decisions

- **Color Scheme**: Professional blue and gray palette with high contrast for readability
- **Typography**: Inter font for modern, clean appearance
- **Layout**: Card-based design with consistent spacing and visual hierarchy
- **Interactions**: Subtle hover effects and smooth transitions for enhanced UX
- **Mobile-First**: Designed for mobile devices first, then enhanced for larger screens

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone [your-github-url]
cd react-resume-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm start
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

\`\`\`bash
npm run build
\`\`\`

### Deployment to Vercel

1. Install Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel --prod
\`\`\`

## 📝 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Implement contact form backend with email notifications
- [ ] Add project filtering by technology
- [ ] Include testimonials section
- [ ] Add downloadable PDF resume
- [ ] Implement analytics tracking
- [ ] Add more interactive animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sai Revanth Sadhu**
- Email: sairevanth969@gmail.com
- Phone: +1-613-583-5841
- LinkedIn: [linkedin.com/in/sai-revanth-sadhu/](https://linkedin.com/in/sai-revanth-sadhu/)

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
