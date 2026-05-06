'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[900] px-8 py-4 bg-white/92 backdrop-blur-2xl border-b border-ocean/10 transition-all duration-300"
      style={{
        boxShadow: shadow 
          ? '0 4px 30px rgba(3,105,161,0.15)' 
          : '0 2px 20px rgba(3,105,161,0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-10 h-10 bg-gradient-to-br from-ocean to-ocean-lite rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
              <path d="M3 18s2-4 9-4 9 4 9 4"/>
              <path d="M3 14s2-3 9-3 9 3 9 3"/>
              <path d="M12 3C8 3 5 6 5 9c0 4 7 7 7 7s7-3 7-7c0-3-3-6-7-6z"/>
            </svg>
          </div>
          <span className="font-display font-bold text-ocean-deep text-lg">
            Toba Jaya
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#produk" className="nav-link">Produk</Link>
          <Link href="#keunggulan" className="nav-link">Keunggulan</Link>
          <Link href="#market" className="nav-link">Market</Link>
          <Link href="#export" className="nav-link">Export</Link>
          <Link href="#kontak" className="btn-primary">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  )
}