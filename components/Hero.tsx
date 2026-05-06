import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center bg-gradient-to-br from-ocean-deep via-ocean to-ocean-mid overflow-hidden">
      {/* Ocean waves animation */}
      <div className="hero-waves">
        <div className="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.05)"/>
          </svg>
        </div>
        <div className="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 Q300,80 600,40 T1200,0 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.03)"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase">Trusted Meat & Seafood Supplier</span>
            </div>
            
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Premium Quality<br/>
              <span className="text-ocean-lite">Fresh & Frozen</span><br/>
              Protein Supply
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Distributor terpercaya daging sapi, ayam, bebek, dan seafood untuk hotel, restoran, katering, dan ekspor internasional sejak 2014.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/6208xxxxxxxxxx" className="btn-primary bg-white text-ocean hover:bg-slate-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </Link>
              <Link href="#produk" className="btn-outline border-white/40 text-white hover:bg-white/10">
                Lihat Katalog Produk
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="stat-card flex-1 min-w-[140px]">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-white/60 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="stat-card flex-1 min-w-[140px]">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-white/60 text-sm">Klien B2B</div>
              </div>
              <div className="stat-card flex-1 min-w-[140px]">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-white/60 text-sm">Cold Chain</div>
              </div>
            </div>
          </div>

          <div className="reveal hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ocean-lite/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">🥩</div>
                    <div className="font-bold text-ocean-deep">Premium Beef</div>
                    <div className="text-xs text-slate-600 mt-1">Fresh & Frozen</div>
                  </div>
                  <div className="bg-white/90 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">🐟</div>
                    <div className="font-bold text-ocean-deep">Fresh Seafood</div>
                    <div className="text-xs text-slate-600 mt-1">Daily Supply</div>
                  </div>
                  <div className="bg-white/90 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">🐔</div>
                    <div className="font-bold text-ocean-deep">Poultry</div>
                    <div className="text-xs text-slate-600 mt-1">Chicken & Duck</div>
                  </div>
                  <div className="bg-white/90 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">🧊</div>
                    <div className="font-bold text-ocean-deep">Cold Chain</div>
                    <div className="text-xs text-slate-600 mt-1">-18°C Storage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}