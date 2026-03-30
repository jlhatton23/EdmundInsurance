import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { getCarrierBySlug, carriers, renderStars, CURRENT_CARRIER_MONTHLY } from '@/lib/data'

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

function str(val: string | string[] | undefined, fallback = ''): string {
  if (!val) return fallback
  return Array.isArray(val) ? val[0] : val
}

export async function generateStaticParams() {
  return carriers.map((c) => ({ slug: c.slug }))
}

export default function CarrierDetailPage({ params, searchParams }: PageProps) {
  const carrier = getCarrierBySlug(params.slug)
  if (!carrier) notFound()

  const vehicle = str(searchParams.vehicle, '2021 Ford F-150')
  const zip = str(searchParams.zip, '95350')
  const coverage = str(searchParams.coverage, 'Full Coverage')
  const currentCarrierName = str(searchParams.current, 'State Farm')

  // Determine current carrier rate for savings comparison
  const currentCarrierData = carriers.find(
    (c) =>
      c.name.toLowerCase() === currentCarrierName.toLowerCase() ||
      c.isCurrentCarrier
  )
  const currentMonthly = currentCarrierData?.monthlyRate ?? CURRENT_CARRIER_MONTHLY
  const savings = (currentMonthly - carrier.monthlyRate) * 12

  const compareHref = `/compare?${new URLSearchParams(
    Object.fromEntries(
      Object.entries(searchParams).map(([k, v]) => [k, Array.isArray(v) ? v[0] : (v ?? '')])
    )
  ).toString()}`

  return (
    <main>
      <Nav />

      {/* Back button */}
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
        <Link
          href={compareHref}
          style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}
        >
          ← Back to Results
        </Link>
      </div>

      {/* Carrier hero */}
      <div
        style={{
          padding: '20px 18px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            background: 'var(--bg-card)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            border: '1px solid var(--border)',
            flexShrink: 0,
          }}
        >
          {carrier.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>{carrier.name}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{carrier.tagline}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
            <span style={{ color: 'var(--gold)', fontSize: '13px' }}>{renderStars(carrier.rating)}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {carrier.rating} / 5 · {carrier.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>

      {/* Price card */}
      <div
        style={{
          margin: '14px 16px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '18px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: 'var(--text-dim)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Your Estimated Rate
        </div>
        <div style={{ fontSize: '36px', fontWeight: 800, margin: '6px 0 2px' }}>
          ${carrier.monthlyRate}
          <sup
            style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-muted)', verticalAlign: 'super' }}
          >
            /mo
          </sup>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>
          ${carrier.yearlyRate.toLocaleString()} / year · {coverage} · {vehicle}
        </div>
        <a
          href={carrier.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'block', textDecoration: 'none', textAlign: 'center' }}
        >
          Get Quote on {carrier.name}.com →
        </a>
        <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '8px' }}>
          You&apos;ll be redirected to {carrier.name}&apos;s website to finalize
        </div>
      </div>

      {/* Coverage Included */}
      <div style={{ padding: '16px 18px 0' }}>
        <div className="section-title">Coverage Included</div>
        {carrier.coverageItems.map((item, idx) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom:
                idx < carrier.coverageItems.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--success-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  color: 'var(--success)',
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.name}</div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Available Discounts */}
      <div style={{ padding: '16px 18px 0' }}>
        <div className="section-title">Available Discounts</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
          {carrier.discounts.map((d) => (
            <span key={d.label} className="cov-tag-highlight">
              {d.label}
            </span>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div style={{ padding: '16px 18px 0' }}>
        <div className="section-title">Pros &amp; Cons</div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
          <div
            style={{
              flex: 1,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                color: 'var(--success)',
              }}
            >
              ✅ Pros
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {carrier.pros.map((p) => (
                <li
                  key={p}
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                    paddingLeft: '14px',
                    position: 'relative',
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--success)',
                      fontWeight: 700,
                    }}
                  >
                    +
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              flex: 1,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                color: 'var(--warning)',
              }}
            >
              ⚠️ Cons
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {carrier.cons.map((c) => (
                <li
                  key={c}
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                    paddingLeft: '14px',
                    position: 'relative',
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--warning)',
                      fontWeight: 700,
                    }}
                  >
                    −
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Savings comparison */}
      {savings > 0 && currentCarrierData && (
        <div style={{ padding: '16px 18px 0' }}>
          <div className="section-title">Savings vs Your Current Plan</div>
          <div
            style={{
              background: 'var(--success-glow)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px',
              textAlign: 'center',
              marginBottom: '14px',
            }}
          >
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--success)' }}>
              ${savings.toLocaleString()}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              estimated savings per year vs {currentCarrierData.name}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '12px' }}>
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--danger)',
                    textDecoration: 'line-through',
                  }}
                >
                  ${currentMonthly}/mo
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>{currentCarrierData.name}</div>
              </div>
              <div style={{ fontSize: '18px', color: 'var(--text-dim)', alignSelf: 'center' }}>→</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--success)' }}>
                  ${carrier.monthlyRate}/mo
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>{carrier.name}</div>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: '10px',
              color: 'var(--text-dim)',
              lineHeight: 1.5,
              marginBottom: '14px',
            }}
          >
            *Savings estimates are based on comparable driver profiles in your area. Your actual rate will be
            determined by the carrier based on your full application.
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div style={{ padding: '0 16px 16px' }}>
        <a
          href={carrier.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'block', textDecoration: 'none', textAlign: 'center' }}
        >
          Get Quote on {carrier.name}.com →
        </a>
      </div>

      {/* Bottom disclaimer */}
      <div
        style={{
          margin: '0 16px 16px',
          padding: '12px 14px',
          background: 'rgba(245,158,11,0.06)',
          border: '1px solid rgba(245,158,11,0.15)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          lineHeight: 1.5,
        }}
      >
        ⚠️ Rates shown are estimates based on information you provided. Actual rates may vary. Insurance Solution
        Center is a comparison service — we do not sell, bind, or administer insurance policies. You will complete
        your purchase directly with the carrier.
      </div>
    </main>
  )
}
