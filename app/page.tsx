import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Products />
      
      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              ⭐ Mengapa Kami
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
              Keunggulan Kami
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Komitmen kami adalah memberikan layanan terbaik dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {[
              { icon: '🧊', title: 'Cold Chain Terjamin', desc: 'Dari gudang hingga pengiriman, suhu terkontrol -18°C' },
              { icon: '✅', title: 'Sertifikat Lengkap', desc: 'Halal, HACCP, Food Safety, Export Certificate' },
              { icon: '🚚', title: 'Pengiriman Cepat', desc: 'Same-day delivery Jakarta & sekitarnya' },
              { icon: '💰', title: 'Harga Kompetitif', desc: 'Direct dari supplier, tanpa perantara berlapis' },
            ].map((item, i) => (
              <div key={i} className="feat-card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section id="market" className="py-24 bg-gradient-to-br from-ocean-deep to-ocean relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.05)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-16 reveal text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              🎯 Target Pasar
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
              Melayani B2B Premium
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Partner terpercaya untuk kebutuhan supply protein bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              { icon: '🏨', title: 'Hotel & Resort', items: ['Supply harian', 'Banquet events', 'Breakfast buffet'] },
              { icon: '🍽️', title: 'Restoran & Kafe', items: ['Fine dining', 'Steakhouse', 'Seafood resto'] },
              { icon: '🎪', title: 'Katering & Event', items: ['Wedding catering', 'Corporate event', 'Large-scale'] },
              { icon: '🏪', title: 'Retail & Supermarket', items: ['Fresh counter', 'Frozen section', 'Deli products'] },
              { icon: '🏭', title: 'Food Manufacturer', items: ['Ingredient supply', 'Bulk order', 'Contract basis'] },
              { icon: '✈️', title: 'Export Market', items: ['Middle East', 'Asia Pacific', 'Full docs support'] },
            ].map((market, i) => (
              <div key={i} className="stat-card text-left">
                <div className="text-4xl mb-3">{market.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{market.title}</h3>
                <ul className="space-y-1">
                  {market.items.map((item, j) => (
                    <li key={j} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="text-ocean-lite">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Order Section */}
      <section id="order" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              📋 Proses Mudah
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
              Cara Order
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Proses pemesanan yang cepat dan transparan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 stagger">
            {[
              { num: '01', title: 'Hubungi Kami', desc: 'Via WhatsApp atau email, sampaikan kebutuhan Anda' },
              { num: '02', title: 'Dapatkan Quotation', desc: 'Kami berikan price list & rekomendasi produk' },
              { num: '03', title: 'Confirm Order', desc: 'PO diproses, invoice dikirim, pembayaran' },
              { num: '04', title: 'Pengiriman', desc: 'Cold chain delivery ke lokasi Anda' },
            ].map((step, i) => (
              <div key={i} className="product-card text-center">
                <div className="font-bebas text-5xl text-ocean/20 mb-3">{step.num}</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section id="export" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="reveal rounded-3xl overflow-hidden bg-gradient-to-br from-ocean-deep via-ocean to-ocean-mid p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-white text-center max-w-3xl mx-auto">
              <div className="text-6xl mb-6">✈️</div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
                Export Ready
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Berpengalaman melayani pasar ekspor ke Middle East, Asia Pacific, dan berbagai negara lainnya. 
                Lengkap dengan dokumentasi: Health Certificate, Halal Certificate, Certificate of Origin, dan export perizinan lainnya.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Full Documentation
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Customs Clearance
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ International Shipping
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              📞 Hubungi Kami
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
              Mari Bermitra
            </h2>
            <p className="text-slate-600 text-lg max-w-lg mx-auto">
              Tim kami siap membantu menemukan solusi supply terbaik untuk kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 stagger mb-10">
            <a href="https://wa.me/6208xxxxxxxxxx" className="contact-card border-green-200">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#22C55E">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">WhatsApp</div>
                <div className="text-slate-900 font-bold text-base">08xxxxxxxxxx</div>
                <div className="text-slate-400 text-xs mt-1">Chat langsung tim kami</div>
              </div>
            </a>

            <a href="mailto:info@tobajayasupplier.com" className="contact-card border-ocean-pale">
              <div className="w-14 h-14 bg-ocean-pale rounded-xl flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email</div>
                <div className="text-slate-900 font-bold text-base">info@tobajaya<br/>supplier.com</div>
                <div className="text-slate-400 text-xs mt-1">Dokumen & formal</div>
              </div>
            </a>

            <div className="contact-card border-ocean-pale">
              <div className="w-14 h-14 bg-ocean-pale rounded-xl flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Lokasi</div>
                <div className="text-slate-900 font-bold text-base">Indonesia</div>
                <div className="text-slate-400 text-xs mt-1">Distribusi nasional & ekspor</div>
              </div>
            </div>
          </div>

          <div className="reveal rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-deep via-ocean to-ocean-mid relative">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5"></div>
            <div className="p-10 text-center relative z-10">
              <h3 className="font-display text-3xl font-extrabold text-white mb-3">
                Siap Bermitra dengan Kami?
              </h3>
              <p className="text-white/80 text-base mb-8 max-w-md mx-auto">
                Dapatkan price list terbaru dan konsultasi gratis dari tim supply kami.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/6208xxxxxxxxxx" className="btn-primary bg-white text-ocean hover:bg-slate-100">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat via WhatsApp
                </a>
                <a href="mailto:info@tobajayasupplier.com" className="btn-outline border-white/40 text-white hover:bg-white/10">
                  📋 Request Price List
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollReveal />
    </>
  )
}