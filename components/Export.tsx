'use client';

import { useScrollReveal } from './ScrollReveal';

const Export = () => {
  useScrollReveal();

  const destinations = [
    '🇸🇬 Singapura',
    '🇲🇾 Malaysia',
    '🇦🇪 UAE',
    '🇯🇵 Jepang',
    '🇰🇷 Korea',
    '🇸🇦 Arab Saudi',
    '+ Lainnya',
  ];

  const certifications = [
    { icon: '📦', label: 'Export Documentation' },
    { icon: '✅', label: 'Food Safety' },
    { icon: '🕌', label: 'Halal Certified' },
  ];

  return (
    <section id="export" className="relative py-28 px-4 sm:px-8 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-mid overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -z-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z" fill="#F8FAFC" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-seafoam text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-7 h-0.5 bg-seafoam rounded" />
              International Distribution
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Kami Siap untuk
              <br />
              Pasar <span className="text-seafoam italic">Global</span>
            </h2>
            <div className="w-10 h-0.5 bg-seafoam rounded my-4" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
              Dengan cold chain management dan dokumentasi ekspor lengkap, produk kami siap menjangkau berbagai negara di seluruh dunia.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-white/12 text-seafoam border border-seafoam/30 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-seafoam" />
                  {cert.label}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-xl text-center transition-all duration-250 hover:bg-white/17 hover:-translate-y-0.5">
                <div className="text-3xl mb-2">🌏</div>
                <div className="font-bebas text-3xl text-white leading-none">15+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-2">
                  Negara Tujuan
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-xl text-center transition-all duration-250 hover:bg-white/17 hover:-translate-y-0.5">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-bebas text-3xl text-white leading-none">50T+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-2">
                  Ton/Bulan Kapasitas
                </div>
              </div>
              <div className="col-span-2 bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-xl transition-all duration-250 hover:bg-white/17 hover:-translate-y-0.5">
                <h4 className="text-white font-bold text-sm mb-3">🗺️ Destinasi Utama</h4>
                <div className="flex flex-wrap gap-2">
                  {destinations.map((dest) => (
                    <span
                      key={dest}
                      className={`bg-white/10 border rounded-full px-3 py-1 text-xs font-semibold ${
                        dest === '+ Lainnya'
                          ? 'border-red-300 bg-red-500/20 text-red-200'
                          : 'border-white/15 text-white/80'
                      }`}
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 -z-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Export;