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
  liabilityMonthlyRate: number
  amBestRating: string
  badge?: string
  coverageTags: CoverageTag[]
  coverageScore: number
  valueScore: number
  pros: string[]
  cons: string[]
  coverageItems: CoverageItem[]
  discounts: Discount[]
  quoteUrl: string
  isCurrentCarrier?: boolean
}

export const CURRENT_CARRIER_MONTHLY = 166
export const CURRENT_CARRIER_YEARLY = 1992

// California average full coverage: $2,119/yr ($177/mo) — Bankrate 2024
export const CA_AVG_YEARLY = 2119
export const CA_AVG_MONTHLY = 177

export const carriers: CarrierData[] = [
  {
    slug: 'geico',
    name: 'GEICO',
    tagline: 'Government Employees Insurance Company',
    emoji: '🦎',
    rating: 5.0,
    reviewCount: '12K',
    monthlyRate: 88,
    yearlyRate: 1052,
    liabilityMonthlyRate: 39,
    amBestRating: 'A++',
    coverageTags: [
      { label: '$500 deductible', highlight: true },
      { label: '100/300/100', highlight: false },
      { label: 'Multi-car discount', highlight: true },
      { label: 'Military: -15%', highlight: false },
    ],
    coverageScore: 85,
    valueScore: 97,
    pros: [
      'Often the cheapest among large insurers',
      'Excellent mobile app & digital tools',
      '24/7 claims filing',
      'Many discount options (military, federal, good student)',
    ],
    cons: [
      'No gap insurance offered',
      'Limited local agent network',
      'Below-average J.D. Power claims satisfaction',
    ],
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
      { label: '🚗 Multi-car: -15%' },
      { label: '🎓 Good student: -12%' },
      { label: '🪖 Military: -15%' },
      { label: '💼 Federal employee: -8%' },
      { label: '🛡️ Defensive driving: -5%' },
      { label: '🔒 Anti-theft: -23%' },
      { label: '💺 Airbag/seat belt: -23%' },
      { label: '✅ 5-yr accident-free: discount' },
    ],
    quoteUrl: 'https://www.geico.com/quote/',
  },
  {
    slug: 'state-farm',
    name: 'State Farm',
    tagline: 'Like a good neighbor, State Farm is there',
    emoji: '🔴',
    rating: 4.5,
    reviewCount: '15K',
    monthlyRate: 114,
    yearlyRate: 1364,
    liabilityMonthlyRate: 49,
    amBestRating: 'A++',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Drive Safe & Save', highlight: true },
      { label: 'Largest agent network', highlight: false },
    ],
    coverageScore: 82,
    valueScore: 75,
    pros: [
      'Largest network of local agents in the U.S.',
      'Strong A++ AM Best financial rating',
      'Drive Safe & Save telematics program',
      'Wide range of coverage options & bundling',
    ],
    cons: [
      'Often more expensive than competitors',
      'Limited online-only discount options',
    ],
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
      { label: '🏠 Multi-line (home+auto): -17%' },
      { label: '🛡️ Steer Clear (young drivers): discount' },
      { label: '🔒 Anti-theft: -15%' },
      { label: '💳 Passive restraint: -40%' },
    ],
    quoteUrl: 'https://www.statefarm.com/insurance/auto',
    isCurrentCarrier: true,
  },
  {
    slug: 'progressive',
    name: 'Progressive',
    tagline: 'Progressive Casualty Insurance Company',
    emoji: '📊',
    rating: 4.8,
    reviewCount: '9.4K',
    monthlyRate: 102,
    yearlyRate: 1220,
    liabilityMonthlyRate: 41,
    amBestRating: 'A+',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Snapshot® discount', highlight: true },
      { label: 'Custom parts coverage', highlight: false },
    ],
    coverageScore: 90,
    valueScore: 88,
    pros: [
      'Best coverage add-ons of any large insurer',
      'Snapshot® usage-based discount (up to -30%)',
      'Name Your Price® tool for budget shoppers',
      'Custom parts & equipment coverage available',
    ],
    cons: [
      'Higher-than-average customer complaints',
      'Rates can increase significantly after claims',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Pet Injury', value: 'Up to $1,000' },
      { name: 'Rental Reimbursement', value: '$40/day' },
      { name: 'Gap Insurance', value: 'Available' },
    ],
    discounts: [
      { label: '📱 Snapshot®: up to -30%' },
      { label: '🚗 Multi-car: -12%' },
      { label: '🏠 Multi-policy: -5%' },
      { label: '🎓 Good student: -10%' },
      { label: '💳 Paid-in-full: -8%' },
      { label: '📄 Paperless: -3%' },
      { label: '🔗 Continuous insurance: discount' },
    ],
    quoteUrl: 'https://www.progressive.com/auto/',
  },
  {
    slug: 'allstate',
    name: 'Allstate',
    tagline: "You're in good hands with Allstate",
    emoji: '🤝',
    rating: 4.0,
    reviewCount: '8.2K',
    monthlyRate: 132,
    yearlyRate: 1580,
    liabilityMonthlyRate: 52,
    amBestRating: 'A+',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Drivewise® savings', highlight: true },
      { label: 'Accident forgiveness', highlight: false },
    ],
    coverageScore: 87,
    valueScore: 72,
    pros: [
      'Drivewise® telematics savings (up to -40%)',
      'Strong claim satisfaction scores',
      'Accident forgiveness available',
      'New car replacement coverage',
      'Large local agent network',
    ],
    cons: [
      'Among the most expensive large insurers',
      'Drivewise savings vary widely by driver',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Accident Forgiveness', value: 'Available' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '📱 Drivewise®: up to -40%' },
      { label: '🚗 Multi-car: -25%' },
      { label: '✅ Claim-free: -35%' },
      { label: '🎓 Good student: -20%' },
      { label: '🏠 Multi-policy: -5%' },
      { label: '🔒 Anti-theft: -10%' },
      { label: '🆕 New car: -15%' },
      { label: '📄 eSmart/paperless: -3%' },
    ],
    quoteUrl: 'https://www.allstate.com/auto-insurance',
  },
  {
    slug: 'usaa',
    name: 'USAA',
    tagline: 'Serving military members, veterans & their families',
    emoji: '🎖️',
    rating: 5.0,
    reviewCount: '18K',
    monthlyRate: 89,
    yearlyRate: 1068,
    liabilityMonthlyRate: 35,
    amBestRating: 'A++',
    badge: 'Military Members Only',
    coverageTags: [
      { label: '$500 deductible', highlight: true },
      { label: '100/300/100', highlight: false },
      { label: 'Lowest rates found', highlight: true },
      { label: 'Military: -15%', highlight: false },
    ],
    coverageScore: 90,
    valueScore: 99,
    pros: [
      'Consistently the cheapest rates available',
      'Highest J.D. Power satisfaction scores year over year',
      'Excellent mobile app and digital experience',
      'Lowest complaint ratio among major insurers',
    ],
    cons: [
      'Available to military/veterans/eligible family members only — not open to the public',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Roadside Assistance', value: 'Available' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '🪖 Military: -15%' },
      { label: '🚗 Multi-car: -10%' },
      { label: '🎓 Good student: -10%' },
      { label: '🆕 New vehicle: -12%' },
      { label: '👨‍👩‍👧 Family discount: discount' },
      { label: '🛡️ Defensive driving: -5%' },
      { label: '🏠 Garage storage: -10%' },
      { label: '📏 Low mileage: discount' },
    ],
    quoteUrl: 'https://www.usaa.com/insurance/auto',
  },
  {
    slug: 'liberty-mutual',
    name: 'Liberty Mutual',
    tagline: 'Liberty Mutual Insurance Group',
    emoji: '🏔️',
    rating: 4.0,
    reviewCount: '7.1K',
    monthlyRate: 148,
    yearlyRate: 1772,
    liabilityMonthlyRate: 56,
    amBestRating: 'A',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'New car replacement', highlight: true },
      { label: 'Lifetime repair guarantee', highlight: false },
    ],
    coverageScore: 92,
    valueScore: 74,
    pros: [
      'New car replacement coverage (up to 1 year)',
      'Better car replacement option',
      'Lifetime repair guarantee from approved shops',
      'Highly customizable coverage options',
    ],
    cons: [
      'More expensive than national average',
      'Higher-than-expected customer complaint ratio',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'New Car Replacement', value: 'Up to 1 year' },
      { name: 'Accident Forgiveness', value: 'Available' },
      { name: 'Lifetime Repair Guarantee', value: 'Included' },
    ],
    discounts: [
      { label: '🚗 Multi-car: -10%' },
      { label: '🏠 Multi-policy: -12%' },
      { label: '🎓 Good student: -10%' },
      { label: '📱 RightTrack®: up to -30%' },
      { label: '⚡ Hybrid/EV: -5%' },
      { label: '🪖 Military: discount' },
      { label: '🛍️ Early shopper: -5%' },
    ],
    quoteUrl: 'https://www.libertymutual.com/auto-insurance',
  },
  {
    slug: 'nationwide',
    name: 'Nationwide',
    tagline: 'Nationwide is on your side',
    emoji: '🦅',
    rating: 4.5,
    reviewCount: '6.8K',
    monthlyRate: 98,
    yearlyRate: 1172,
    liabilityMonthlyRate: 37,
    amBestRating: 'A+',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Vanishing deductible', highlight: true },
      { label: 'Accident forgiveness', highlight: false },
    ],
    coverageScore: 88,
    valueScore: 86,
    pros: [
      'Vanishing deductible (decreases $100/yr claim-free)',
      'Accident forgiveness program',
      'Good digital tools and mobile app',
      'Solid A+ financial strength rating',
    ],
    cons: [
      'Not available in all states',
      'Rates vary widely by region',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Vanishing Deductible', value: '-$100/yr claim-free' },
      { name: 'Accident Forgiveness', value: 'Available' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '📱 SmartRide: up to -40%' },
      { label: '🚗 Multi-car: -20%' },
      { label: '🏠 Multi-policy: -15%' },
      { label: '🎓 Good student: -15%' },
      { label: '🛡️ Defensive driving: -5%' },
      { label: '🔒 Anti-theft: -10%' },
      { label: '💳 Good payer: discount' },
      { label: '📄 Paperless: -3%' },
    ],
    quoteUrl: 'https://www.nationwide.com/personal/insurance/auto/',
  },
  {
    slug: 'farmers',
    name: 'Farmers',
    tagline: "We know a thing or two because we've seen a thing or two",
    emoji: '🌾',
    rating: 4.0,
    reviewCount: '5.9K',
    monthlyRate: 139,
    yearlyRate: 1664,
    liabilityMonthlyRate: 55,
    amBestRating: 'A',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Signal® telematics', highlight: true },
      { label: 'Wide coverage options', highlight: false },
    ],
    coverageScore: 88,
    valueScore: 70,
    pros: [
      'Wide range of coverage options and add-ons',
      'Strong local agent network',
      'Signal® app savings program',
      'Good bundling discounts (home + auto)',
    ],
    cons: [
      'Often more expensive than competitors',
      'Limited availability in some states',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Accident Forgiveness', value: 'Available' },
      { name: 'Rental Reimbursement', value: '$50/day' },
    ],
    discounts: [
      { label: '📱 Signal®: up to -15%' },
      { label: '🚗 Multi-car: -20%' },
      { label: '🏠 Multi-policy: -20%' },
      { label: '🎓 Good student: -15%' },
      { label: '🛡️ Defensive driving: -5%' },
      { label: '✅ Good driver: discount' },
      { label: '🅿️ Smart parking: discount' },
      { label: '🐣 Early bird: discount' },
    ],
    quoteUrl: 'https://www.farmers.com/auto/',
  },
  {
    slug: 'travelers',
    name: 'Travelers',
    tagline: 'Travelers Insurance — Strong. Dependable. Trustworthy.',
    emoji: '☂️',
    rating: 4.9,
    reviewCount: '4.7K',
    monthlyRate: 160,
    yearlyRate: 1920,
    liabilityMonthlyRate: 63,
    amBestRating: 'A++',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'IntelliDrive® savings', highlight: true },
      { label: 'Minor violation forgiveness', highlight: false },
    ],
    coverageScore: 86,
    valueScore: 80,
    pros: [
      'Excellent A++ AM Best financial strength',
      'IntelliDrive® telematics program',
      'Minor violation forgiveness',
      'Strong bundling discounts',
    ],
    cons: [
      'Limited availability in some states',
      'Fewer digital self-service tools than competitors',
      'Less name recognition than top carriers',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Minor Violation Forgiveness', value: 'Included' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '📱 IntelliDrive®: up to -30%' },
      { label: '🚗 Multi-car: -8%' },
      { label: '🏠 Multi-policy: -13%' },
      { label: '🎓 Good student: -8%' },
      { label: '🆕 New car: -10%' },
      { label: '⚡ Hybrid/EV: -10%' },
      { label: '💳 Pay-in-full: -7%' },
      { label: '📄 Paperless: -3%' },
      { label: '🔗 Continuous insurance: discount' },
    ],
    quoteUrl: 'https://www.travelers.com/car-insurance',
  },
  {
    slug: 'aaa',
    name: 'AAA',
    tagline: 'AAA Insurance — Roadside assistance included with every policy',
    emoji: '🔑',
    rating: 4.5,
    reviewCount: '8.3K',
    monthlyRate: 107,
    yearlyRate: 1280,
    liabilityMonthlyRate: 42,
    amBestRating: 'A+',
    badge: 'AAA Membership Required',
    coverageTags: [
      { label: '$500 deductible', highlight: false },
      { label: '100/300/100', highlight: false },
      { label: 'Roadside assistance', highlight: true },
      { label: 'Accident forgiveness', highlight: false },
    ],
    coverageScore: 87,
    valueScore: 82,
    pros: [
      'Roadside assistance included with all policies',
      'Strong claims satisfaction scores',
      'Membership benefits (travel, retail discounts)',
      'Accident forgiveness program',
    ],
    cons: [
      'Requires AAA membership ($50–$100/yr additional cost)',
      'Rates vary by region (AAA clubs operate regionally)',
      'Not always the cheapest option',
    ],
    coverageItems: [
      { name: 'Bodily Injury', value: '$100K / $300K' },
      { name: 'Property Damage', value: '$100,000' },
      { name: 'Collision', value: '$500 deductible' },
      { name: 'Comprehensive', value: '$500 deductible' },
      { name: 'Uninsured Motorist', value: '$100K / $300K' },
      { name: 'Roadside Assistance', value: 'Included' },
      { name: 'Accident Forgiveness', value: 'Available' },
      { name: 'Rental Reimbursement', value: '$40/day' },
    ],
    discounts: [
      { label: '🚗 Multi-car: -15%' },
      { label: '🏠 Multi-policy: -10%' },
      { label: '🎓 Good student: -10%' },
      { label: '🛡️ Defensive driving: -5%' },
      { label: '👴 Mature driver: discount' },
      { label: '✅ Good driver: discount' },
      { label: '🏅 Membership loyalty: discount' },
    ],
    quoteUrl: 'https://www.aaa.com/insurance/auto',
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
