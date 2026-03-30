'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { CarrierData, SortOption } from '@/lib/data'
import { renderStars } from '@/lib/data'

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'price', label: 'Lowest Price' },
  { id: 'rating', label: 'Best Rated' },
  { id: 'coverage', label: 'Most Coverage' },
  { id: 'value', label: 'Best Value' },
]

interface Props {
  carriers: CarrierData[]
  currentCarrier: CarrierData | null
  searchParams: Record<string, string>
}

export default function SortableResults({ carriers, currentCarrier, searchParams }: Props) {
  const [sort, setSort] = useState<SortOption>('price')

  const currentMonthly = currentCarrier?.monthlyRate ?? 166

  const nonCurrentCarriers = carriers.filter((c) => !c.isCurrentCarrier)

  const sorted = [...nonCurrentCarriers].sort((a, b) => {
    switch (sort) {
      case 'price':
        return a.monthlyRate - b.monthlyRate
      case 'rating':
        return b.rating - a.rating
      case 'coverage':
        return b.coverageScore - a.coverageScore
      case 'value':
        return b.valueScore - a.valueScore
      default:
        return a.monthlyRate - b.monthlyRate
    }
  })

  const recommended = sorted[0]

  const detailParams = new URLSearchParams(searchParams).toString()

  return (
    <div>
      {/* Sort chips */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          padding: '10px 16px',
          overflowX: 'auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setSort(opt.id)}
            style={{
              padding: '6px 14px',
              background: sort === opt.id ? 'var(--accent-glow)' : 'var(--bg-card)',
              border: `1px solid ${sort === opt.id ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 500,
              color: sort === opt.id ? 'var(--accent-hover)' : 'var(--text-muted)',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Quote cards */}
      {sorted.map((carrier, idx) => {
        const savings = (currentMonthly - carrier.monthlyRate) * 12
        const isRec = carrier.slug === recommended?.slug
        return (
          <div
            key={carrier.slug}
            style={{
              margin: '10px 14px',
              background: 'var(--bg-card)',
              border: `1px solid ${isRec ? 'rgba(34,197,94,0.4)' : 'var(--border)'}`,
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
          >
            {/* Recommended banner */}
            {isRec && (
              <div
                style={{
                  background: 'var(--success-glow)',
                  padding: '5px 14px',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                ⭐ Best Match — Recommended for You
              </div>
            )}

            {/* Card top */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    border: '1px solid var(--border)',
                    flexShrink: 0,
                  }}
                >
                  {carrier.emoji}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>{carrier.name}</div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      color: 'var(--gold)',
                      marginTop: '1px',
                    }}
                  >
                    {renderStars(carrier.rating)}{' '}
                    <span style={{ color: 'var(--text-dim)' }}>
                      {carrier.rating} · {carrier.reviewCount} reviews
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)' }}>
                  ${carrier.monthlyRate}
                  <sup style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', verticalAlign: 'super' }}>
                    /mo
                  </sup>
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  ${carrier.yearlyRate.toLocaleString()} / year
                </div>
              </div>
            </div>

            {/* Coverage tags */}
            <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {carrier.coverageTags.map((tag) => (
                <span key={tag.label} className={tag.highlight ? 'cov-tag-highlight' : 'cov-tag'}>
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Bottom bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 16px',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--success)' }}>
                {savings > 0 ? `💰 Save $${savings.toLocaleString()}/yr vs ${currentCarrier?.name ?? 'current plan'}` : ''}
              </div>
              <Link
                href={`/carrier/${carrier.slug}?${detailParams}`}
                style={{
                  padding: '8px 18px',
                  background: idx === 0 ? 'var(--accent)' : 'transparent',
                  border: `1px solid ${idx === 0 ? 'transparent' : 'var(--accent)'}`,
                  borderRadius: '6px',
                  color: idx === 0 ? 'white' : 'var(--accent)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                Get Quote →
              </Link>
            </div>
          </div>
        )
      })}

      {/* Current carrier card */}
      {currentCarrier && (
        <div
          style={{
            margin: '10px 14px',
            background: 'var(--bg-card)',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: 'rgba(245,158,11,0.08)',
              padding: '5px 14px',
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--warning)',
            }}
          >
            ⚠️ Your Current Carrier
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  border: '1px solid var(--border)',
                  flexShrink: 0,
                }}
              >
                {currentCarrier.emoji}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{currentCarrier.name}</div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    color: 'var(--gold)',
                    marginTop: '1px',
                  }}
                >
                  {renderStars(currentCarrier.rating)}{' '}
                  <span style={{ color: 'var(--text-dim)' }}>
                    {currentCarrier.rating} · {currentCarrier.reviewCount} reviews
                  </span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--warning)' }}>
                ${currentCarrier.monthlyRate}
                <sup style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', verticalAlign: 'super' }}>
                  /mo
                </sup>
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                ${currentCarrier.yearlyRate.toLocaleString()} / year
              </div>
            </div>
          </div>

          <div style={{ padding: '0 16px 12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {currentCarrier.coverageTags.map((tag) => (
              <span key={tag.label} className="cov-tag">
                {tag.label}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 16px',
              borderTop: '1px solid var(--border)',
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--danger)', fontWeight: 600 }}>
              You&apos;re overpaying ~${((currentMonthly - (sorted[0]?.monthlyRate ?? currentMonthly)) * 12).toLocaleString()}/yr*
            </div>
            <button
              type="button"
              style={{
                padding: '8px 18px',
                background: 'transparent',
                border: '1px solid var(--text-dim)',
                borderRadius: '6px',
                color: 'var(--text-dim)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Keep Plan
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div
        style={{
          padding: '4px 18px 12px',
          fontSize: '10px',
          color: 'var(--text-dim)',
          lineHeight: 1.5,
        }}
      >
        *Savings estimates are based on comparable driver profiles in your area. Your actual rate will be determined by
        the carrier based on your full application. We do not guarantee specific savings amounts.
      </div>

      {/* Compare bar */}
      <div
        style={{
          margin: '12px 14px',
          padding: '12px 16px',
          background: 'var(--accent-glow)',
          border: '1px solid rgba(14,165,233,0.25)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: '12px', fontWeight: 500 }}>Need help deciding?</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Compare any 2 carriers side by side</div>
        </div>
        <button
          type="button"
          className="btn-accent"
          style={{ fontSize: '12px' }}
        >
          Compare
        </button>
      </div>
    </div>
  )
}
