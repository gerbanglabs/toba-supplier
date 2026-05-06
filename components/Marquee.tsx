const Marquee = () => {
  const items = [
    'Daging Segar',
    'Seafood Premium',
    'Cold Storage',
    'Export Ready',
    'B2B Supplier',
    'Custom Cutting',
    'Private Label',
    'Hotel & Resort',
    'Restoran & Cafe',
    'Catering',
  ];

  return (
    <div className="marquee-wrap bg-ocean-deep py-2.5 overflow-hidden -mt-px">
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-white/35 text-xs font-bold uppercase tracking-widest">
              {item}
            </span>
            <span className="text-ocean-lite text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;