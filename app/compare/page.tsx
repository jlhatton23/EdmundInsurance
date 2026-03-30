import Link from 'next/link'
import Nav from '@/components/Nav'
import SortableResults from '@/components/SortableResults'
import { carriers, getCarrierBySlug } from '@/lib/data'

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

function str(val: string | string[] | undefined, fallback = ''): string {
  if (!val) return fallback
  return Array.isArray(val) ? val[0] : val
}

export default function ComparePage({ searchParams }: PageProps) {
  const type = str(searchParams.type, 'auto')
  const zip = str(searchParams.zip, '95350')
  const vehicle = str(searchParams.vehicle, '2021 Ford F-150')
  const coverage = str(searchParams.coverage, 'Full Coverage')
  const currentCarrierName = str(searchParams.current, 'State Farm')

  const normalizedName = currentCarrierName.toLowerCase().replace(/\s+/g, '-')
  const currentCarrier =
    carriers.find(
      (c) =>
        c.name.toLowerCase() === currentCarrierName.toLowerCase() ||
        c.slug === normalizedName
    ) ?? carriers.find((c) => c.isCurrentCarrier) ?? null

  const insuranceTypeLabel =
    type.charAt(0).toUpperCase() + type.slice(1) + ' Insurance'

  const nonCurrentCount = carriers.filter((c) => !c.isCurrentCarrier).length

  const searchParamsRecord: Record<string, string> = {}
  for (const [k, v] of Object.entries(searchParams)) {
    if (typeof v === 'string') searchParamsRecord[k] = v
    else if (Array.isArray(v) && v.length > 0) searchParamsRecord[k] = v[0]
  }

  return (
    <main>
      <Nav />

      {/* Results header */}
      <div
        style={{
          padding: '14px 18px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '13px',
            color: 'var(--accent)',
            cursor: 'pointer',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          ← New Search
        </Link>
        <div style={{ fontSize: '18px', fontWeight: 700, marginTop: '4px' }}>{insuranceTypeLabel} Quotes</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          {vehicle} · {zip} · {coverage} · {nonCurrentCount} carriers found
        </div>
      </div>

      <SortableResults
        carriers={carriers}
        currentCarrier={currentCarrier}
        searchParams={searchParamsRecord}
      />

      {/* Footer disclaimer */}
      <div
        style={{
          padding: '16px 18px',
          borderTop: '1px solid var(--border)',
          fontSize: '11px',
          color: 'var(--text-dim)',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        Insurance Solution Center is a comparison service — we do not sell, bind, or administer insurance policies.
      </div>
    </main>
  )
}
