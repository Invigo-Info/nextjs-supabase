# Next.js Dashboard with Supabase Authentication

A beautiful, modern landing page and dashboard built with Next.js 14 and Supabase. Features smooth animations, sticky navigation, and a comprehensive footer.

## Features

- **Modern Landing Page**: Beautiful hero section with animated elements
- **Sticky Navigation**: Smooth navigation that sticks to the top on scroll
- **Authentication**: Complete authentication flow with Supabase (email/password and OAuth)
- **Dashboard**: Responsive dashboard with stats, charts, and user management
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type-Safe**: Built with TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-supabase
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Getting Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your project dashboard, go to Settings > API
3. Copy your project URL and anon/public key
4. Paste them into your `.env.local` file

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-supabase/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Sign up page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Navigation.tsx    # Sticky navigation
│   ├── HeroSection.tsx   # Hero section
│   ├── FeaturesSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── PricingSection.tsx
│   └── Footer.tsx        # Comprehensive footer
├── lib/                   # Utility functions
│   └── supabase.ts       # Supabase client
└── public/               # Static assets
```

## Key Components

### Landing Page
- **Navigation**: Sticky header with smooth animations and mobile menu
- **Hero Section**: Eye-catching hero with gradient backgrounds and floating animations
- **Features**: Grid of features with hover effects
- **How It Works**: Step-by-step process visualization
- **Pricing**: Three-tier pricing cards with popular badge
- **Footer**: Comprehensive footer with newsletter, links, and social media

### Authentication
- Email/password authentication
- OAuth providers (Google)
- Protected dashboard routes
- User session management

### Dashboard
- User statistics and metrics
- Activity overview
- Responsive layout
- User profile management

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Animations
Customize animations in individual components using Framer Motion's `motion` components.

### Content
Update text and images in the component files located in the `components/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Supabase Setup

### Enable Authentication Providers

1. Go to Authentication > Providers in your Supabase dashboard
2. Enable Email provider
3. Enable Google OAuth (optional):
   - Add your Google OAuth credentials
   - Set the redirect URL to: `https://your-project.supabase.co/auth/v1/callback`

### Database Setup (Optional)

For additional features, you can create tables in your Supabase database:

```sql
-- Example: User profiles table
create table profiles (
  id uuid references auth.users on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  primary key (id)
);
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues and questions:
- Create an issue in the repository
- Check [Next.js documentation](https://nextjs.org/docs)
- Check [Supabase documentation](https://supabase.com/docs)

## Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- Framer Motion for smooth animations
- Tailwind CSS for the styling system
