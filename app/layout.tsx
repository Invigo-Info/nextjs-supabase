import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SupaBase Dashboard - Next.js & Supabase Authentication',
  description: 'Beautiful, modern dashboard with Next.js 14 and Supabase authentication. Build your dream application in minutes.',
  keywords: ['Next.js', 'Supabase', 'Dashboard', 'Authentication', 'React'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
