const cards = [
  { icon: '🛡️', title: 'Safety First',        desc: 'Every lift follows strict safety protocols with certified operators and regular equipment inspections.' },
  { icon: '⏱️', title: 'On-Time Delivery',    desc: 'We understand your project timelines. Our team ensures cranes arrive on-site exactly when needed.' },
  { icon: '💰', title: 'Best Rates',           desc: 'Transparent, competitive pricing with no hidden charges. Ask us for a free quotation today.' },
  { icon: '🔧', title: 'Well-Maintained Fleet',desc: 'Our cranes undergo regular servicing to ensure peak performance and reliability on every project.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 px-[8vw] bg-[#12151c]">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="text-[#f5a800] text-xs font-bold tracking-[0.15em] uppercase">Our Commitment</span>
        <h2 className="reveal font-outfit font-black text-white mt-2 leading-tight" style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}>
          Why Choose <span className="gold-text">S.N Crane Services?</span>
        </h2>
        <div className="w-14 h-[3px] gold-bg rounded-full mt-4 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <div key={c.title}
            className={`reveal reveal-delay-${i + 1} group bg-[#1a1f2e] border border-white/5 rounded-2xl p-7 text-center hover:-translate-y-2 hover:border-[#f5a800]/30 transition-all duration-300`}>
            <div className="text-4xl mb-4">{c.icon}</div>
            <h4 className="font-outfit font-bold text-white text-base mb-2">{c.title}</h4>
            <p className="text-[#8a93a8] text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
