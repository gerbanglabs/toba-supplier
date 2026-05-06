'use client';

import { useScrollReveal } from './ScrollReveal';
import Link from 'next/link';

const Contact = () => {
  useScrollReveal();

  const contacts = [
    {
      href: 'https://wa.me/6208xxxxxxxxxx',
      emoji: '💬',
      label: 'WhatsApp',
      value: '08xxxxxxxxxx',
      desc: 'Chat langsung tim kami',
      bg: 'bg-green-50',
      border: 'border-green-300',
    },
    {
      href: 'mailto:info@tobajayasupplier.com',
      emoji: '📧',
      label: 'Email',
      value: 'info@tobajaya\nsupplier.com',
      desc: 'Dokumen & formal',
      bg: 'bg-ocean-pale',
      border: 'border-seafoam',
    },
    {
      emoji: '📍',
      label: 'Lokasi',
      value: 'Indonesia',
      desc: 'Distribusi nasional & ekspor',
      bg: 'bg-ocean-pale',
      border: 'border-seafoam',
    },
  ];

  return (
    <section id="kontak" className="py-28 px-4 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 text-ocean text-xs font-bold uppercase tracking-widest mb-3 justify-center">
            <span className="w-7 h-0.5 bg-ocean-lite rounded" />
            Hubungi Kami
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Mulai Kerjasama <span className="text-ocean">Sekarang</span>
          </h2>
          <div className="w-10 h-0.5 bg-ocean-mid rounded mx-auto my-4" />
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            Tim kami siap membantu menemukan solusi supply terbaik untuk kebutuhan bisnis Anda. Konsultasi gratis, respon cepat.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4 stagger mb-10">
          {contacts.map((contact, idx) => {
            const CardContent = (
              <div className={`bg-white border rounded-2xl p-7 flex items-center gap-4 transition-all duration-300 ${contact.border} ${
                contact.href ? 'hover:border-ocean-lite hover:shadow-[0_12px_36px_rgba(3,105,161,0.12)] hover:-translate-y-0.75 cursor-pointer' : ''
              }`}>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${contact.bg}`}
                >
                  {contact.emoji}
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">
                    {contact.label}
                  </div>
                  <div className="text-slate-900 font-bold text-sm">
                    {contact.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{contact.desc}</div>
                </div>
              </div>
            );

            return contact.href ? (
              <Link key={idx} href={contact.href}>
                {CardContent}
              </Link>
            ) : (
              <div key={idx}>{CardContent}</div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="reveal rounded-2xl overflow-hidden bg-gradient-to-r from-ocean-deep via-ocean to-ocean-mid relative p-10 text-center">
          {/* Decorative circles */}
          <div className="absolute top-[-60px] right-[-60px] w-80 h-80 rounded-full bg-white/4 pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-52 h-52 rounded-full bg-white/3 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="font-display text-3xl font-bold text-white mb-3">
              Siap Bermitra dengan Kami?
            </h3>
            <p className="text-white/75 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              Dapatkan price list terbaru dan konsultasi gratis dari tim supply kami. Respon cepat, profesional, terpercaya.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://wa.me/6208xxxxxxxxxx"
                className="inline-flex items-center gap-2 bg-white text-ocean px-6 py-3 rounded-lg font-bold text-sm transition-all duration-250 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat via WhatsApp
              </Link>
              <Link
                href="mailto:info@tobajayasupplier.com"
                className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/40 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-250 hover:bg-white/30"
              >
                📋 Request Price List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;