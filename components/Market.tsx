'use client';

import { useScrollReveal } from './ScrollReveal';

const Market = () => {
  useScrollReveal();

  const markets = [
    {
      emoji: '🏨',
      title: 'Hotel & Resort',
      desc: 'Supply kebutuhan dapur hotel bintang lima hingga resort premium, standar kualitas internasional.',
      bg: 'bg-yellow-100',
    },
    {
      emoji: '🍽️',
      title: 'Restoran & Cafe',
      desc: 'Bahan baku segar berkualitas untuk restoran fine dining hingga casual dining seluruh Indonesia.',
      bg: 'bg-red-50',
    },
    {
      emoji: '🏭',
      title: 'Catering & Cloud Kitchen',
      desc: 'Supply volume besar untuk bisnis katering korporat dan cloud kitchen, jadwal pengiriman fleksibel.',
      bg: 'bg-ocean-pale',
    },
    {
      emoji: '🏪',
      title: 'Distributor & Retail',
      desc: 'Kemitraan jangka panjang dengan distributor regional dan jaringan retail modern maupun tradisional.',
      bg: 'bg-green-50',
    },
    {
      emoji: '✈️',
      title: 'Export Market',
      desc: 'Distribusi ke pasar internasional dengan dokumentasi ekspor lengkap dan standar food safety global.',
      bg: 'bg-ocean-pale',
      ocean: true,
    },
  ];

  return (
    <section id="market" className="py-28 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-ocean text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-7 h-0.5 bg-ocean-lite rounded" />
              Target Market
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Siapa yang Kami <span className="text-ocean">Layani?</span>
            </h2>
            <div className="w-10 h-0.5 bg-ocean-mid rounded my-4" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
              Kami melayani berbagai segmen bisnis di industri food & beverage, dari skala lokal hingga kebutuhan internasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[120px] bg-ocean-pale border border-seafoam rounded-2xl p-5 text-center">
                <div className="font-bebas text-3xl text-ocean leading-none">200+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                  Hotel Partner
                </div>
              </div>
              <div className="flex-1 min-w-[120px] bg-red-50 border border-red-300 rounded-2xl p-5 text-center">
                <div className="font-bebas text-3xl text-red-600 leading-none">300+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                  Resto & Cafe
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 stagger">
            {markets.map((market, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-2xl p-6 flex items-start gap-4 transition-all duration-250 hover:border-ocean-lite hover:shadow-[0_8px_30px_rgba(3,105,161,0.1)] hover:translate-x-1.25 ${
                  market.ocean ? 'border-seafoam bg-ocean-pale' : 'border-slate-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${market.bg}`}
                >
                  {market.emoji}
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${market.ocean ? 'text-ocean-deep' : 'text-slate-900'}`}>
                    {market.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed mt-1 ${
                      market.ocean ? 'text-ocean' : 'text-slate-500'
                    }`}
                  >
                    {market.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;