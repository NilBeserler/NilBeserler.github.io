import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Data Scientist Portfolio | Professional Portfolio',
  description: 'Professional portfolio showcasing data science projects, skills, and experience',
  keywords: 'data science, machine learning, portfolio, analytics, python, R',
  authors: [{ name: 'Nil Beserler' }],
  openGraph: {
    title: 'Data Scientist Portfolio',
    description: 'Professional portfolio showcasing data science projects, skills, and experience',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Scientist Portfolio',
    description: 'Professional portfolio showcasing data science projects, skills, and experience',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
