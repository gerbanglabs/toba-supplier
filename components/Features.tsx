'use client';

import { useScrollReveal } from './ScrollReveal';
import Link from 'next/link';

const Features = () => {
  useScrollReveal();

  const features = [
    {
      num: '01',
      emoji: '✅',
      title: 'Kualitas Terjamin',
      desc: 'Produk melewati seleksi ketat, higienis, memenuhi standar food safety nasional & internasional.',
    },
    {
      num: '02',
      emoji: '🧊',
      title: 'Cold Chain System',
      desc: 'Armada cold storage & distribusi dingin 24/7 memastikan produk tiba dalam kondisi optimal.',
    },
    {
      num: '03',
      emoji: '💰',
      title: 'Harga Kompetitif',
      desc: 'Harga terbaik B2B volume besar, fleksibel negosiasi untuk mitra jangka panjang.',
    },
    {
      num: '04',
      emoji: '⚡',
      title: 'Tepat Waktu',
      desc: 'Sistem logistik terorganisir memastikan pengiriman sesuai jadwal, tanpa kompromi.',
    },
    {
      num: '05',
      emoji: '🎯',
      title: 'Custom Order',
      desc: 'Potongan khusus, packaging custom, private label sesuai kebutuhan unik bisnis Anda.',
    },
    {
      num: '06',
      emoji: '✈️',
      title: 'Siap Export',
      desc: 'Distribusi internasional dengan dokumentasi dan standar ekspor lengkap siap dijalankan.',
    },
  ];

  return (
    <section id="keunggulan" className="relative py-28 px-4 sm:px-8 bg-gradient-to-r from-ocean-deep via-ocean to-ocean-mid overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -z-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#F8FAFC" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-12">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-seafoam text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-7 h-0.5 bg-seafoam rounded" />
              Kenapa Pilih Kami
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Standar
              <br />
              <span className="text-seafoam italic">Premium</span>
              <br />
              Bisnis Anda
            </h2>
            <div className="w-10 h-0.5 bg-seafoam rounded my-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Dengan pengalaman lebih dari satu dekade di industri distribusi protein hewani, kami memahami kebutuhan bisnis Anda dari semua sisi.
            </p>
            <Link
              href="#kontak"
              className="inline-flex items-center gap-2 bg-white text-ocean px-6 py-3 rounded-lg font-bold text-sm transition-all duration-250 hover:shadow-lg hover:-translate-y-0.5"
            >
              Konsultasi Gratis →
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="lg:col-span-2 stagger">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-xl transition-all duration-250 hover:bg-white/17 hover:-translate-y-0.5 ${
                    feature.num === '06' ? 'sm:col-span-2 md:col-span-1 bg-red-500/20 border-red-300/30' : ''
                  }`}
                >
                  <div className="font-bebas text-3xl text-white/15 leading-none mb-3">
                    {feature.num}
                  </div>
                  <div className="text-2xl mb-3">{feature.emoji}</div>
                  <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
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

export default Features;