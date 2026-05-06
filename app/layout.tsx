import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cormorant_Garamond, Bebas_Neue } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'CV Toba Jaya Supplier — Premium Meat & Seafood Distributor',
  description: 'Distributor daging segar, beku, dan seafood premium untuk kebutuhan B2B hotel, restoran, katering, dan pasar ekspor nasional & internasional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.variable} ${cormorant.variable} ${bebas.variable} font-sans bg-white text-slate-800 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}