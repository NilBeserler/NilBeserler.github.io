import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: {
    default: "nil's website",
    template: "%s | nil's website",
  },
  description: 'Data scientist building ML systems, NLP pipelines, and analytics that turn data into decisions.',
  keywords: 'data science, machine learning, NLP, portfolio, Python, analytics, San Diego',
  authors: [{ name: 'Nil Beserler' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Nil Beserler - Data Scientist',
    description: 'Data scientist building ML systems, NLP pipelines, and analytics that turn data into decisions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nil Beserler - Data Scientist',
    description: 'Data scientist building ML systems, NLP pipelines, and analytics that turn data into decisions.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
