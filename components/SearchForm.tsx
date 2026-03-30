'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const insuranceTypes = [
  { id: 'auto', label: 'Auto', emoji: '🚗' },
  { id: 'home', label: 'Home', emoji: '🏠' },
  { id: 'life', label: 'Life', emoji: '❤️' },
  { id: 'business', label: 'Business', emoji: '🏢' },
  { id: 'health', label: 'Health', emoji: '🏥' },
  { id: 'pet', label: 'Pet', emoji: '🐕' },
]

export default function SearchForm() {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState('auto')
  const [zip, setZip] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('Male')
  const [vehicle, setVehicle] = useState('')
  const [currentInsurer, setCurrentInsurer] = useState('')
  const [coverage, setCoverage] = useState('Full Coverage')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      type: selectedType,
      zip: zip || '95350',
      age: age || '34',
      gender,
      vehicle: vehicle || '2021 Ford F-150',
      current: currentInsurer || 'State Farm',
      coverage,
    })
    router.push(`/compare?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} id="search">
      <div
        style={{
          margin: '0 14px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
        }}
      >
        {/* Insurance Type Grid */}
        <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '14px', color: 'var(--text)' }}>
          What type of insurance?
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          {insuranceTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setSelectedType(type.id)}
              style={{
                textAlign: 'center',
                padding: '12px 4px',
                background: selectedType === type.id ? 'var(--accent-glow)' : 'var(--bg-input)',
                border: `1px solid ${selectedType === type.id ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '4px' }}>{type.emoji}</div>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: selectedType === type.id ? 'var(--accent-hover)' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {type.label}
              </div>
            </button>
          ))}
        </div>

        {/* Zip Code */}
        <div style={{ marginBottom: '12px' }}>
          <label className="field-label">Zip Code</label>
          <input
            className="input-field"
            type="text"
            placeholder="Enter your zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            maxLength={5}
          />
        </div>

        {/* Age & Gender */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <div style={{ flex: 1 }}>
            <label className="field-label">Age</label>
            <input
              className="input-field"
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="field-label">Gender</label>
            <select
              className="input-field"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 13px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Vehicle */}
        {selectedType === 'auto' && (
          <div style={{ marginBottom: '12px' }}>
            <label className="field-label">Vehicle Year / Make / Model</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. 2022 Toyota Camry"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </div>
        )}

        {/* Current Insurer & Coverage */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <div style={{ flex: 1 }}>
            <label className="field-label">Current Insurer</label>
            <input
              className="input-field"
              type="text"
              placeholder="Optional"
              value={currentInsurer}
              onChange={(e) => setCurrentInsurer(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="field-label">Coverage Level</label>
            <select
              className="input-field"
              value={coverage}
              onChange={(e) => setCoverage(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 13px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text)',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option>Full Coverage</option>
              <option>Liability Only</option>
              <option>Minimum Required</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button className="btn-primary" type="submit">
          🔍 Compare Rates Now
        </button>

        {/* Privacy Notice */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '12px',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
          }}
        >
          🔒 <strong style={{ color: 'var(--text)' }}>We never sell your information. Ever.</strong>
          <br />
          <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
            No spam calls. No lead selling. Your data stays here and is only used to show you quotes.
          </span>
        </div>
      </div>
    </form>
  )
}
