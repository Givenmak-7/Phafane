# Tech Stack 📦

The Phafane Secondary School website is designed as a **static, maintainable, and easily extendable platform**. The technology choices prioritize **simplicity, longevity, and clarity**, ensuring that content can be updated without deep technical knowledge, while still allowing developers to maintain and enhance the site efficiently.

---

## Core Technologies

### 1. **React**
- **Purpose:** Front-end JavaScript library for building user interfaces
- Enables creation of reusable components and interactive elements
- Works with JSX for clear structure and maintainable code
- **Reason for choice:** Provides flexibility for future interactive features while maintaining a component-based structure

### 2. **Vite**
- **Purpose:** Build tool and development server for modern web projects
- Provides fast builds, hot module replacement, and optimized production output
- **Reason for choice:** Lightweight, fast, and integrates smoothly with React for modern front-end development

### 3. **Tailwind CSS (v3)**
- **Purpose:** Utility-first CSS framework
- Provides pre-defined CSS classes to style content quickly
- Enables rapid development of clean and responsive layouts
- **Reason for choice:** Lightweight, scalable, and aligns with the goal of deferring styling until content is stable

### 4. **Markdown**
- **Purpose:** Primary format for content
- Easy to write and maintain
- Directly compatible with Jekyll for static page generation
- **Reason for choice:** Encourages separation of content and presentation

---

## CMS (Content Management System)

- A headless CMS could be integrated later to allow non-technical staff to edit content via a web interface
- Examples: **Netlify CMS, Strapi, Contentful**
- Separation from presentation ensures that any CMS integration does not impact site layout or templates

---

## Guiding Principles in Tech Choices
- **Simplicity first:** Minimal tooling to get a reliable site running
- **Maintainability:** Tools chosen should be easy to learn and use long-term
- **Separation of Concerns:** Content, structure, styling, and behavior are independent
- **Future-ready:** Choices allow incremental enhancements without major refactoring
