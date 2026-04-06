const products = [
  { name: 'Paint Pays Tee', price: '$38', type: 'T-Shirt' },
  { name: 'PPYS Heavyweight Hoodie', price: '$72', type: 'Hoodie' },
  { name: 'Paint Pays Snapback', price: '$34', type: 'Hat' },
  { name: 'PPYS Crewneck', price: '$58', type: 'Crewneck' },
  { name: 'The Work Shirt', price: '$44', type: 'Work Shirt' },
  { name: 'Sticker Pack (6ct)', price: '$12', type: 'Sticker Pack' },
];

export default function MerchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            Merch
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Wear the Brand
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Premium gear for painters who take their craft seriously. Limited
            drops. Culture first.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 px-6 bg-dark-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-dark-surface border border-border rounded-lg overflow-hidden group hover:border-border-light transition-colors"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-dark-bg flex items-center justify-center">
                  <span className="text-muted text-sm">{p.type} Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-gold font-semibold mb-4">{p.price}</p>
                  <button className="w-full bg-dark-bg border border-border text-white font-medium py-3 rounded-lg hover:border-gold/50 transition-colors opacity-50 cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Notified When Merch Drops
          </h2>
          <p className="text-muted text-lg mb-10">
            Limited runs sell out fast. Be the first to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-dark-card border border-border rounded-lg px-5 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3.5 rounded-lg transition-colors whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 md:py-24 px-6 bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            Paint Pays isn&apos;t just what we watch —{' '}
            <span className="text-gold">it&apos;s who we are.</span>
          </p>
          <p className="text-muted mt-4">
            Premium gear for people who believe in the work, the craft, and the
            life it builds.
          </p>
        </div>
      </section>
    </div>
  );
}
