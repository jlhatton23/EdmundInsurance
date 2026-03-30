export type SortOption = 'price' | 'rating' | 'coverage' | 'value'

export interface CoverageTag {
  label: string
  highlight: boolean
}

export interface CoverageItem {
  name: string
  value: string
}

export interface Discount {
  label: string
}

export interface CarrierData {
  slug: string
  name: string
  tagline: string
  emoji: string
  rating: number
  reviewCount: string
  monthlyRate: number
  yearlyRate: number
  coverageTags: CoverageTag[]
  coverageScore: number
  valueScore: number
  pros: string[]
  cons: string[]
  coverageItems: CoverageItem[]
  discounts: Discount[]
  website: string
  isCurrentCarrier?: boolean
}

export const CURRENT_CARRIER_MONTHLY = 166
export const CURRENT_CARRIER_YEARLY = 1992

export const carriers: CarrierData[] = [
  {
    slug: 'geico',
    name: 'GEICO',
    tagline: 'Government Employees Insurance Company',
    emoji: '🦎',
    rating: 4.5,
    reviewCount: '12K',
    monthlyRate: 127,
    yearlyRate: 1524,
    coverageTags: [
      { label: '$500 deductible', highlight: true },
      { label: '100/300/100', highlight: false },
      { label: 'Roadside assist', highlight: false },
      { label: 'Multi-car discount', highlight: true },
    ],
    coverageScore: 85,
    valueScore: 95,
    pros: ['Lowest rate found', 'Excellent mobile app', '24/7 claims filing', 'Tons of discounts'],
    cons: ['No local agents', 'Claims satisfaction avg', 'Rate hikes after claims'],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Roadside Assistance', value: 'Included' },
      { name: 'Rental Reimbursement', value: '$50/day' },
    ],
    discounts: [
      { label: '🏷️ Multi-car: -15%' },
      { label: '🎓 Good student: -12%' },
      { label: '🏠 Homeowner: -8%' },
      { label: '🪖 Military: -15%' },
      { label: '📱 Autopay: -5%' },
      { label: '💼 Federal employee: -8%' },
    ],
    website: 'https://www.geico.com',
  },
  {
    slug: 'progressive',
    name: 'Progressive',
    tagline: 'Progressive Casualty Insurance Company',
    emoji: '📊',
    rating: 4.2,
    reviewCount: '9.4K',
    monthlyRate: 134,
    yearlyRate: 1608,
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Snapshot® discount', highlight: true },
      { label: 'Pet injury coverage', highlight: false },
    ],
    coverageScore: 88,
    valueScore: 88,
    pros: ['Snapshot® telematics discount', 'Pet injury coverage', 'Name Your Price® tool', 'Gap insurance available'],
    cons: ['Rates vary widely', 'Mixed claims reviews', 'Snapshot may increase rates'],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Pet Injury', value: 'Up to $1,000' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '📱 Snapshot®: up to -30%' },
      { label: '🚗 Multi-car: -12%' },
      { label: '📄 Online quote: -7%' },
      { label: '💳 Pay in full: -8%' },
      { label: '📱 Autopay: -5%' },
    ],
    website: 'https://www.progressive.com',
  },
  {
    slug: 'liberty-mutual',
    name: 'Liberty Mutual',
    tagline: 'Liberty Mutual Insurance Group',
    emoji: '🏔️',
    rating: 4.0,
    reviewCount: '7.1K',
    monthlyRate: 142,
    yearlyRate: 1704,
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'New car replacement', highlight: true },
      { label: 'Accident forgiveness', highlight: false },
    ],
    coverageScore: 92,
    valueScore: 82,
    pros: ['New car replacement', 'Accident forgiveness', 'Customizable coverage', 'RightTrack® telematics'],
    cons: ['Higher base rates', 'Below-avg claims satisfaction', 'Rate increases common'],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'New Car Replacement', value: 'Full value' },
      { name: 'Accident Forgiveness', value: 'Included' },
    ],
    discounts: [
      { label: '🚗 Multi-car: -10%' },
      { label: '🏠 Homeowner: -12%' },
      { label: '📱 RightTrack®: up to -30%' },
      { label: '🎓 Good student: -10%' },
      { label: '💳 Pay in full: -5%' },
    ],
    website: 'https://www.libertymutual.com',
  },
  {
    slug: 'allstate',
    name: 'Allstate',
    tagline: "You're in good hands with Allstate",
    emoji: '🤝',
    rating: 4.1,
    reviewCount: '8.2K',
    monthlyRate: 156,
    yearlyRate: 1872,
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Drivewise® savings', highlight: true },
      { label: 'Claim-free bonus', highlight: false },
    ],
    coverageScore: 87,
    valueScore: 76,
    pros: ['Drivewise® cash back', 'Claim-free bonus', 'Local agents available', 'Safe driving rewards'],
    cons: ['Higher premiums', 'Smaller discounts', 'Claims process slow'],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Sound System Coverage', value: 'Up to $1,000' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '📱 Drivewise®: up to -40%' },
      { label: '🚗 Multi-car: -25%' },
      { label: '✅ Claim-free: -35%' },
      { label: '🎓 Good student: -20%' },
      { label: '🏠 Homeowner: -5%' },
    ],
    website: 'https://www.allstate.com',
  },
  {
    slug: 'state-farm',
    name: 'State Farm',
    tagline: 'Like a good neighbor, State Farm is there',
    emoji: '🔴',
    rating: 4.3,
    reviewCount: '15K',
    monthlyRate: 166,
    yearlyRate: 1992,
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Drive Safe & Save', highlight: false },
    ],
    coverageScore: 82,
    valueScore: 68,
    pros: ['Large agent network', 'Good claims satisfaction', 'Drive Safe & Save', 'Bundling discounts'],
    cons: ['Higher premiums', 'Limited online tools', 'Fewer unique features'],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Rental Reimbursement', value: '$30/day' },
    ],
    discounts: [
      { label: '🚗 Multi-car: -20%' },
      { label: '📱 Drive Safe & Save: up to -30%' },
      { label: '🎓 Good student: -25%' },
      { label: '🏠 Homeowner: -17%' },
      { label: '💳 Autopay: -5%' },
    ],
    website: 'https://www.statefarm.com',
    isCurrentCarrier: true,
  },
]

export function getCarrierBySlug(slug: string): CarrierData | undefined {
  return carriers.find((c) => c.slug === slug)
}

export function renderStars(rating: number): string {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  return '★'.repeat(full) + (half ? '½' : '')
}
