export const locations = [
  {
    city: "Dubai",
    slug: "dubai",
    description: "the UAE's global business hub",
    landmark: "Sheikh Zayed Road",
    zone: "AE-DU",
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    city: "Abu Dhabi",
    slug: "abu-dhabi", 
    description: "the UAE's capital and economic powerhouse",
    landmark: "Corniche Road",
    zone: "AE-AZ",
    coordinates: { lat: 24.4539, lng: 54.3773 }
  },
  {
    city: "Sharjah",
    slug: "sharjah",
    description: "the UAE's cultural and industrial center",
    landmark: "King Faisal Road",
    zone: "AE-SH",
    coordinates: { lat: 25.3462, lng: 55.4272 }
  },
  {
    city: "Ajman",
    slug: "ajman",
    description: "a growing business hub in the Northern Emirates",
    landmark: "Sheikh Humaid Road",
    zone: "AE-AJ",
    coordinates: { lat: 25.4052, lng: 55.5136 }
  },
  {
    city: "Ras Al Khaimah",
    slug: "ras-al-khaimah",
    description: "a fast-growing free zone destination",
    landmark: "Al Nakheel Road",
    zone: "AE-RK",
    coordinates: { lat: 25.7895, lng: 55.9432 }
  },
  {
    city: "Fujairah",
    slug: "fujairah",
    description: "a strategic port and business destination",
    landmark: "Hamad Bin Abdullah Road",
    zone: "AE-FU",
    coordinates: { lat: 25.1288, lng: 56.3265 }
  },
  {
    city: "Umm Al Quwain",
    slug: "umm-al-quwain",
    description: "an emerging low-cost business setup destination",
    landmark: "King Faisal Road",
    zone: "AE-UQ",
    coordinates: { lat: 25.5647, lng: 55.5554 }
  }
]

export const services = [
  {
    name: "Business Setup & Company Formation",
    slug: "business-setup",
    shortName: "Business Setup",
    description: "Complete mainland, free zone, and offshore company formation",
    price: "Starting from AED 15,000",
    timeline: "7-14 days",
    keywords: ["business setup", "company formation", "company registration", "business registration"],
    faqs: [
      {
        q: "How long does business setup take?",
        a: "With CAPMC, business setup typically takes 7-14 business days depending on license type and jurisdiction."
      },
      {
        q: "What documents are needed for company formation?",
        a: "Passport copies, visa (if applicable), proof of address, business plan, and any sector-specific regulatory approvals."
      }
    ]
  },
  {
    name: "VAT & Tax Compliance",
    slug: "vat-tax-compliance",
    shortName: "Tax Compliance",
    description: "VAT registration, corporate tax filing, and ESR compliance",
    price: "From AED 2,500/month",
    timeline: "Monthly/Quarterly",
    keywords: ["VAT consultant", "tax compliance", "corporate tax", "VAT registration"],
    faqs: [
      {
        q: "Who needs to register for VAT in UAE?",
        a: "Businesses with taxable supplies exceeding AED 375,000 annually must register for VAT in the UAE."
      },
      {
        q: "What is the UAE corporate tax rate?",
        a: "The UAE corporate tax rate is 9% on taxable income exceeding AED 375,000, effective from June 2023."
      }
    ]
  },
  {
    name: "Virtual CFO Services",
    slug: "virtual-cfo",
    shortName: "Virtual CFO",
    description: "Strategic financial leadership for startups and SMEs",
    price: "From AED 8,000/month",
    timeline: "Monthly retainer",
    keywords: ["virtual CFO", "CFO services", "financial advisory", "financial management"],
    faqs: [
      {
        q: "What does a Virtual CFO do?",
        a: "A Virtual CFO provides strategic financial planning, cash flow management, budgeting, and investor reporting without the cost of a full-time hire."
      },
      {
        q: "Who needs Virtual CFO services?",
        a: "Startups and SMEs that need C-level financial expertise but cannot justify a full-time CFO salary benefit most from virtual CFO services."
      }
    ]
  },

  {
  name: "Investment Consultancy & Advisory",
  slug: "investment-consultancy",
  shortName: "Investment Advisory",
  description: "Strategic investment advice with market intelligence and portfolio optimization for UAE and global markets",
  price: "Custom Packages Available",
  timeline: "Ongoing",
  keywords: ["investment consultancy UAE", "investment advisory Dubai", "portfolio management UAE", "investment planning Dubai"],
  faqs: [
    {
      q: "What investment opportunities exist in UAE?",
      a: "UAE offers opportunities in real estate, stocks, business ventures, and alternative investments with favorable tax treatment and strong regulatory frameworks."
    },
    {
      q: "How does CAPMC help with investment planning?",
      a: "CAPMC provides comprehensive investment portfolio analysis, risk assessment, market research, due diligence services, and cross-border investment advisory backed by 30+ years of market experience."
    }
  ]
},
{
  name: "Market Research & Business Intelligence",
  slug: "market-research",
  shortName: "Market Research",
  description: "Comprehensive market analysis, feasibility studies, and competitive intelligence for strategic business decisions",
  price: "From AED 15,000",
  timeline: "4-6 Weeks",
  keywords: ["market research UAE", "business intelligence Dubai", "feasibility study UAE", "market analysis Dubai"],
  faqs: [
    {
      q: "Why do I need market research before starting a business in UAE?",
      a: "Market research helps identify demand, competition, pricing, and regulatory requirements in your target UAE market, significantly reducing the risk of business failure."
    },
    {
      q: "What does a feasibility study include?",
      a: "A feasibility study covers market analysis, competitor research, financial projections, regulatory requirements, and strategic recommendations for your specific business in the UAE."
    }
  ]
},
{
  name: "Corporate Training & Skill Development",
  slug: "corporate-training",
  shortName: "Corporate Training",
  description: "Professional development programs covering UAE corporate laws, compliance, and financial management",
  price: "From AED 5,000/session",
  timeline: "1-2 Days",
  keywords: ["corporate training UAE", "compliance training Dubai", "business training UAE", "financial management training Dubai"],
  faqs: [
    {
      q: "What topics does CAPMC corporate training cover?",
      a: "CAPMC training covers UAE corporate law, VAT and tax compliance, AML regulations, financial management, international business operations, and leadership development."
    },
    {
      q: "Who should attend corporate training programs?",
      a: "Finance teams, compliance officers, business owners, and managers who need to stay current with UAE regulations and best practices benefit most from our training programs."
    }
  ]
},


  {
    name: "AML Compliance",
    slug: "aml-compliance",
    shortName: "AML Compliance",
    description: "Anti-money laundering policy development and KYC procedures",
    price: "From AED 25,000",
    timeline: "One-time + ongoing",
    keywords: ["AML compliance", "anti money laundering", "KYC procedures", "AML policy"],
    faqs: [
      {
        q: "Is AML compliance mandatory in UAE?",
        a: "Yes. UAE Federal Law requires all designated non-financial businesses and professions (DNFBPs) to implement AML compliance frameworks."
      },
      {
        q: "What is included in AML compliance setup?",
        a: "AML policy development, KYC procedures, transaction monitoring systems, staff training, and suspicious activity reporting frameworks."
      }
    ]
  },
  {
    name: "Accounting & Bookkeeping",
    slug: "accounting-bookkeeping",
    shortName: "Accounting",
    description: "Professional bookkeeping and audit-ready financial statements",
    price: "From AED 1,500/month",
    timeline: "Monthly",
    keywords: ["accounting services", "bookkeeping", "financial statements", "audit support"],
    faqs: [
      {
        q: "Why outsource accounting in UAE?",
        a: "Outsourcing accounting saves costs, ensures compliance with UAE regulations, and gives you access to expert accountants without hiring full-time staff."
      },
      {
        q: "Do UAE businesses need audited accounts?",
        a: "Free zone companies and mainland LLCs are generally required to maintain audited financial statements annually."
      }
    ]
  },
  {
    name: "Free Zone Company Formation",
    slug: "free-zone-company",
    shortName: "Free Zone Setup",
    description: "100% foreign ownership free zone company registration",
    price: "Starting from AED 12,000",
    timeline: "5-7 days",
    keywords: ["free zone company", "free zone setup", "free zone registration", "freezon company UAE"],
    faqs: [
      {
        q: "What are the benefits of a free zone company in UAE?",
        a: "Free zone companies offer 100% foreign ownership, full profit repatriation, 0% corporate and personal tax, and simplified setup processes."
      },
      {
        q: "Can a free zone company do business in UAE mainland?",
        a: "Free zone companies can trade internationally freely but need a local distributor or mainland branch to conduct business directly within the UAE."
      }
    ]
  },
  {
    name: "Investment Consultancy",
    slug: "investment-consultancy",
    shortName: "Investment Advisory",
    description: "Strategic investment advice and portfolio management for UAE markets",
    price: "Custom packages",
    timeline: "Ongoing",
    keywords: ["investment consultancy", "investment advisory", "portfolio management", "investment UAE"],
    faqs: [
      {
        q: "What investment opportunities exist in UAE?",
        a: "UAE offers opportunities in real estate, stocks, business ventures, and alternative investments with favorable tax treatment and strong regulatory frameworks."
      }
    ]
  },
  {
    name: "Mainland Company Formation",
    slug: "mainland-company",
    shortName: "Mainland Setup",
    description: "100% foreign-owned mainland LLC formation with full UAE trading rights",
    price: "Starting from AED 15,000",
    timeline: "10-14 days",
    keywords: ["mainland company", "mainland LLC", "mainland business setup", "DED license"],
    faqs: [
      {
        q: "Can foreigners own 100% of a mainland company in UAE?",
        a: "Yes. Since the 2021 amendment to the UAE Commercial Companies Law, foreigners can own 100% of mainland companies in most business activities."
      },
      {
        q: "What is the difference between mainland and free zone?",
        a: "Mainland companies can trade directly across the UAE and internationally with no restrictions, while free zone companies have limitations on UAE mainland trading."
      }
    ]
  }
]

// Generate all combinations
export const getAllLandingPages = () => {
  const pages = []
  
  services.forEach(service => {
    locations.forEach(location => {
      pages.push({
        slug: `${service.slug}-${location.slug}`,
        service,
        location,
        title: `${service.name} in ${location.city} | CAPMC LLC FZ`,
        metaDescription: `Expert ${service.shortName} services in ${location.city}, UAE. CAPMC LLC FZ offers ${service.description} in ${location.city}. ${service.price}. Free consultation.`,
        h1: `${service.name} in ${location.city}`,
        canonical: `https://capmc.ae/${service.slug}-${location.slug}`
      })
    })
    
    // Also create service-only page (no location)
    pages.push({
      slug: service.slug,
      service,
      location: null,
      title: `${service.name} UAE | CAPMC LLC FZ`,
      metaDescription: `Professional ${service.shortName} services across UAE. CAPMC LLC FZ — ${service.description}. ${service.price}. 500+ companies served. Free consultation.`,
      h1: `${service.name} in UAE`,
      canonical: `https://capmc.ae/${service.slug}`
    })
  })
  
  return pages
}