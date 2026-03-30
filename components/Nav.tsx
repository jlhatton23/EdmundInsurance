import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 18px',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(9,11,16,0.95)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            background: 'var(--gradient)',
            borderRadius: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0,
          }}
        >
          🛡️
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            color: 'var(--text)',
          }}
        >
          Insurance <span style={{ color: 'var(--accent)' }}>Solution Center</span>
        </div>
      </Link>
      <div style={{ display: 'flex', gap: '6px' }}>
        <Link
          href="/"
          style={{
            padding: '7px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            background: 'var(--accent)',
            color: 'white',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Get Quotes
        </Link>
      </div>
    </nav>
  )
}
