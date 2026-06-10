import './globals.css'
import Navbar from '../components/Navbar'

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
