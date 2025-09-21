# Data Scientist Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases data science projects, skills, and professional experience with a clean, accessible design.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessible**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Fast Performance**: Optimized images, lazy loading, and efficient code splitting
- **Contact Form**: Serverless function for handling contact form submissions
- **Project Filtering**: Filter projects by technology and category
- **Dark Mode Ready**: Easy to implement dark mode with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd data-scientist-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **`app/layout.tsx`**: Update metadata and site title
2. **`app/page.tsx`**: Update hero section with your name and tagline
3. **`app/about/page.tsx`**: Update bio, skills, experience, and education
4. **`app/resume/page.tsx`**: Update resume content and download link
5. **`app/projects/page.tsx`**: Update projects with your actual work
6. **`app/components/Footer.tsx`**: Update social links and contact information

### Styling

The website uses Tailwind CSS with a custom color scheme. You can customize:

- **Colors**: Update `tailwind.config.js` to change the primary color scheme
- **Fonts**: Modify font imports in `app/globals.css`
- **Components**: Customize component styles in the CSS file

### Contact Form

The contact form uses a serverless function at `app/api/contact/route.ts`. To enable actual email sending:

1. Choose an email service (SendGrid, Nodemailer, AWS SES, etc.)
2. Add your API keys to environment variables
3. Uncomment and configure the email sending code in the API route

Example with SendGrid:
```typescript
// Add to .env.local
SENDGRID_API_KEY=your_sendgrid_api_key

// Uncomment the SendGrid code in app/api/contact/route.ts
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings
4. Add environment variables if using email services

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Deploy directly from GitHub
- **DigitalOcean App Platform**: Use the Node.js buildpack

## SEO Configuration

The website includes comprehensive SEO features:

- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Semantic HTML elements
- Optimized images with Next.js Image component

## Accessibility Features

This website follows WCAG 2.1 guidelines:

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Focus indicators
- ✅ Screen reader compatibility

## Performance Optimizations

- Next.js Image optimization
- Code splitting and lazy loading
- Efficient CSS with Tailwind
- Optimized fonts with Google Fonts
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help customizing this portfolio:

1. Check the documentation
2. Open an issue on GitHub
3. Contact me through the contact form

---

Built with ❤️ using Next.js and Tailwind CSS
