import './globals.css'
import { Inter, Great_Vibes } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-signature',
  display: 'swap',
})

export const metadata = {
  title: 'Manoranjan D Salunke | Full Stack Developer',
  description:
    'Frontend-focused Full Stack Developer with 3.6 years of experience building enterprise-scale cloud dashboards and AI-powered platforms using Next.js, React, TypeScript, and Node.js.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
