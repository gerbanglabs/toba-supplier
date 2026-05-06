'use client';

import { useScrollReveal } from './ScrollReveal';
import Link from 'next/link';

const OrderFlow = () => {
  useScrollReveal();

  const steps = [
    {
      num: '01',
      emoji: '💬',
      title: 'Hubungi Kami',
      desc: 'Hubungi tim kami via WhatsApp atau email. Konsultasikan kebutuhan produk, volume, dan jadwal pengiriman.',
    },
    {
      num: '02',
      emoji: '📋',
      title: 'Request Price List',
      desc: 'Dapatkan penawaran harga terbaik sesuai kebutuhan bisnis — volume besar, harga lebih kompetitif.',
    },
    {
      num: '03',
      emoji: '✅',
      title: 'Konfirmasi Order',
      desc: 'Setujui penawaran dan jadwal pengiriman. Sistem recurring order tersedia untuk kebutuhan supply rutin.',
      red: true,
    },
    {
      num: '04',
      emoji: '🚚',
      title: 'Pengiriman & Terima',
      desc: 'Produk dikirim via armada cold storage. Terima produk segar & beku dalam kondisi prima, tepat waktu.',
      green: true,
    },
  ];

  return (
    <section id="order" className="py-28 px-4 sm:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 text-ocean text-xs font-bold uppercase tracking-widest mb-3 justify-center">
            <span className="w-7 h-0.5 bg-ocean-lite rounded" />
            Sistem Order
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Mudah &amp; <span className="text-ocean">Cepat</span> Pesan
          </h2>
          <div className="w-10 h-0.5 bg-ocean-mid rounded mx-auto my-4" />
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            Proses pemesanan simpel dan terstruktur untuk memastikan kebutuhan bisnis Anda terpenuhi tepat waktu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 stagger mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-8 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(3,105,161,0.1)] relative ${
                step.red ? 'border-red-200' : step.green ? 'border-green-200' : 'border-slate-200'
              }`}
            >
              <div className="font-bebas text-5xl text-ocean-pale/40 leading-none absolute top-4 right-6">
                {step.num}
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${
                  step.red ? 'bg-red-50' : step.green ? 'bg-green-50' : 'bg-ocean-pale'
                }`}
              >
                {step.emoji}
              </div>

              <h4 className="text-slate-900 font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className="reveal p-8 rounded-2xl text-center bg-gradient-to-r from-ocean-pale to-blue-50 border border-seafoam">
          <h4 className="font-display text-2xl font-bold text-slate-900 mb-2">
            Butuh Supply Rutin?
          </h4>
          <p className="text-slate-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            Kami menyediakan sistem <strong className="text-ocean">Subscription Order</strong> untuk bisnis yang membutuhkan pasokan terjadwal otomatis.
          </p>
          <Link
            href="https://wa.me/6208xxxxxxxxxx"
            className="inline-flex items-center gap-2 bg-ocean text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-250 hover:bg-ocean-deep hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Mulai Order via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderFlow;