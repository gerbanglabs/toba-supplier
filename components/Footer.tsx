import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean to-ocean-lite rounded-lg flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                  <path d="M3 18s2-4 9-4 9 4 9 4"/>
                  <path d="M3 14s2-3 9-3 9 3 9 3"/>
                  <path d="M12 3C8 3 5 6 5 9c0 4 7 7 7 7s7-3 7-7c0-3-3-6-7-6z"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-white text-xl leading-none">
                CV Toba Jaya Supplier
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-7 max-w-sm">
              Distributor daging segar, beku, dan seafood premium untuk kebutuhan B2B hotel, restoran, katering, dan pasar ekspor nasional & internasional.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 rounded-full px-3.5 py-2 text-xs">
                🏆 Trusted Since 2014
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 rounded-full px-3.5 py-2 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Beroperasi
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-5">
              Produk
            </h5>
            <Link href="#produk" className="f-link">Daging Sapi</Link>
            <Link href="#produk" className="f-link">Ayam & Bebek</Link>
            <Link href="#produk" className="f-link">Seafood</Link>
            <Link href="#produk" className="f-link">Olahan & Frozen</Link>
            <Link href="#produk" className="f-link">Custom Order</Link>
          </div>

          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-5">
              Perusahaan
            </h5>
            <Link href="#keunggulan" className="f-link">Keunggulan</Link>
            <Link href="#market" className="f-link">Target Market</Link>
            <Link href="#order" className="f-link">Cara Order</Link>
            <Link href="#export" className="f-link">Export</Link>
            <Link href="#kontak" className="f-link">Kontak</Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © 2025 CV Toba Jaya Supplier. All rights reserved.
          </p>
          <div className="flex gap-5">
            <span className="text-slate-600 text-xs">🥩 Fresh Quality</span>
            <span className="text-slate-600 text-xs">🧊 Cold Chain</span>
            <span className="text-slate-600 text-xs">✈️ Export Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}