# Serene Minds Therapy - Psychologist Website

A modern, high-converting static website for a clinical psychologist/therapist practice. Built with React, TypeScript, Express, and PostgreSQL.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags management with react-helmet
- **Smooth Animations** - Page transitions with Framer Motion
- **Contact Form** - Dynamic form with email validation (demo only, no storage)
- **Multiple Pages** - Home, Insurance & Fees, Blog, Privacy Policy
- **UI Components** - Shadcn/ui component library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd psychologist-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **You're ready to go!**
   No additional configuration needed for this demo project.

## 🏃 Running the Project Locally

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5000` (or the port specified in your environment).

### Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

### Type Checking

To check TypeScript types without building:

```bash
npm run check
```

## 📁 Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Site configuration
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   └── index.html
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── db.ts            # Database connection
├── shared/              # Shared code between client/server
│   └── schema.ts        # Database schema
└── script/              # Build scripts
```

## 🌐 Deploying to Vercel

### Prerequisites for Vercel Deployment

1. A [Vercel account](https://vercel.com/signup)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

#### Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import project to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your repository

3. **Configure Project Settings**
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - The `vercel.json` configuration file will handle routing automatically

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Post-Deployment

1. **Verify Deployment**
   - Visit your Vercel deployment URL
   - Test the contact form (it will show a success message)
   - Check all pages load correctly

2. **Set up Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. **Monitor Logs**
   - Check deployment logs in Vercel Dashboard
   - Monitor function logs for any errors

## 🎨 Customization

### Update Site Content

Edit the site configuration in:
```
client/src/data/siteConfig.ts
```

This file contains:
- Site name and tagline
- Contact information
- Services offered
- Testimonials
- Insurance information
- Blog posts

### Update Styling

The project uses Tailwind CSS. Customize colors and themes in:
```
tailwind.config.ts
```

### Add New Pages

1. Create a new component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/Navbar.tsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run check` - TypeScript type checking

## 🐛 Troubleshooting

### Build Failures

If the build fails on Vercel:

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript types with `npm run check`
4. Make sure `NODE_ENV` is set to `production`

### Contact Form Not Working

1. Verify API route is accessible: `/api/contact`
2. Check browser console for errors
3. Review server logs in Vercel Functions

## 📝 Notes

- **Contact Form**: This is a demo project. Form submissions are validated but not stored. The form will display a success message when submitted.
- **Production Use**: For a real production website, you would want to integrate an email service (SendGrid, Resend, etc.) or database to handle contact submissions.

## 🤝 Support

For issues and questions:
- Check the [Vercel Documentation](https://vercel.com/docs)
- Review [Drizzle ORM docs](https://orm.drizzle.team/)
- Check [Vite documentation](https://vitejs.dev/)

## 📄 License

MIT License - feel free to use this template for your own projects.

---

Built with ❤️ using React, TypeScript, Express, and PostgreSQL
