export default function Products() {
  const products = [
    {
      icon: '🥩',
      title: 'Daging Sapi Premium',
      desc: 'Berbagai cut premium: tenderloin, ribeye, sirloin, shortplate, dan lainnya. Lokal & import.',
      specs: ['Fresh & Frozen', 'Halal Certified', 'Vacuum Packed']
    },
    {
      icon: '🐔',
      title: 'Ayam & Bebek',
      desc: 'Whole chicken, part cut, boneless. Bebek lokal & import. Semua grade A.',
      specs: ['Farm Fresh', 'No Hormone', 'Cold Chain']
    },
    {
      icon: '🐟',
      title: 'Seafood Segar',
      desc: 'Ikan laut, udang, cumi, kerang, lobster. Fresh daily dari pelabuhan.',
      specs: ['Daily Fresh', 'Iced Transport', 'Premium Quality']
    },
    {
      icon: '🦞',
      title: 'Seafood Frozen',
      desc: 'Salmon, tuna, dory, gurita beku import. Stok selalu ready.',
      specs: ['Import Quality', 'Blast Frozen', 'Long Shelf Life']
    },
    {
      icon: '🍖',
      title: 'Daging Olahan',
      desc: 'Sausage, nugget, burger patty, meatball berbagai merk ternama.',
      specs: ['Ready to Cook', 'Branded Products', 'Bulk Available']
    },
    {
      icon: '📦',
      title: 'Custom Order',
      desc: 'Kebutuhan khusus? Kami siap supply sesuai spesifikasi dan volume Anda.',
      specs: ['Flexible MOQ', 'Custom Cut', 'Special Request']
    }
  ]

  return (
    <section id="produk" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-ocean/10 text-ocean px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            📦 Katalog Produk
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
            Rangkaian Produk Lengkap
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Dari daging segar hingga frozen seafood import, semua tersedia dengan kualitas terjamin dan harga kompetitif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                {product.title}
              </h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                {product.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.specs.map((spec, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1 bg-ocean-pale text-ocean px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    ✓ {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a 
            href="https://wa.me/6208xxxxxxxxxx" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Request Price List Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}