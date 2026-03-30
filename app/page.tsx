import Nav from '@/components/Nav'
import SearchForm from '@/components/SearchForm'

export default function HomePage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <div
        style={{
          padding: '40px 22px 28px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            background: 'var(--accent-glow)',
            border: '1px solid rgba(14,165,233,0.25)',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--accent-hover)',
            marginBottom: '18px',
          }}
        >
          🔒 100% Free · No Spam · No Obligations
        </div>

        <h1
          style={{
            fontSize: 'clamp(24px, 6vw, 34px)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '12px',
            letterSpacing: '-0.3px',
          }}
        >
          Compare rates.{' '}
          <span className="gradient-text">Save thousands.</span>
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            maxWidth: '340px',
            margin: '0 auto 24px',
            lineHeight: 1.5,
          }}
        >
          Search once, see quotes from top carriers side by side. Click through to buy direct — we never sell your data.
        </p>
      </div>

      {/* Search Form */}
      <SearchForm />

      {/* Trust Badges */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          padding: '24px 16px',
          flexWrap: 'wrap',
        }}
      >
        {[
          { icon: '🔒', label: '256-bit SSL' },
          { icon: '🚫', label: 'No Data Sales' },
          { icon: '⚡', label: 'Instant Quotes' },
          { icon: '💯', label: '100% Free' },
        ].map((badge) => (
          <div key={badge.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '4px' }}>{badge.icon}</div>
            <div
              style={{
                fontSize: '10px',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: 600,
              }}
            >
              {badge.label}
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div style={{ padding: '20px 18px' }}>
        <div className="section-title">How it works</div>
        {[
          {
            num: '1',
            title: 'Tell us what you need',
            desc: 'Pick your insurance type and answer a few quick questions. Takes under 2 minutes.',
          },
          {
            num: '2',
            title: 'Compare carriers side by side',
            desc: 'See rates, coverage, ratings, and discounts from 40+ top insurance companies.',
          },
          {
            num: '3',
            title: 'Buy direct from the carrier',
            desc: "Click through to the carrier's website to purchase. We never handle payments or policies.",
          },
        ].map((step) => (
          <div key={step.num} style={{ display: 'flex', gap: '14px', marginBottom: '16px', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                border: '1px solid rgba(14,165,233,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              {step.num}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>{step.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Carrier Logos */}
      <div
        style={{
          padding: '20px 18px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            color: 'var(--text-dim)',
            fontWeight: 600,
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          40+ Carriers Compared
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {[
            'State Farm',
            'GEICO',
            'Progressive',
            'Allstate',
            'USAA',
            'Liberty Mutual',
            'Nationwide',
            'Farmers',
            'Travelers',
            'American Family',
            '+30 more',
          ].map((name) => (
            <div
              key={name}
              style={{
                padding: '6px 14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-muted)',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Footer disclaimer */}
      <div
        style={{
          padding: '20px 18px',
          borderTop: '1px solid var(--border)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        Insurance Solution Center is a comparison service — we do not sell, bind, or administer insurance policies.
        <br />
        © {new Date().getFullYear()} Insurance Solution Center. All rights reserved.
      </div>
    </main>
  )
}
