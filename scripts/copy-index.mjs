import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Import your page data
const services = ['business-setup', 'vat-tax-compliance', 'virtual-cfo', 
  'aml-compliance', 'accounting-bookkeeping', 'free-zone-company', 
  'investment-consultancy', 'mainland-company', 'market-research',         // ADD THIS
  'corporate-training'  ]

const locations = ['dubai', 'abu-dhabi', 'sharjah', 'ajman', 
  'ras-al-khaimah', 'fujairah', 'umm-al-quwain']

const distDir = 'dist'
const sourceFile = join(distDir, 'index.html')

// Static routes
const staticRoutes = ['about', 'services', 'contact']

// Generate all service+location combos
const dynamicRoutes = []
services.forEach(service => {
  dynamicRoutes.push(service) // service-only page
  locations.forEach(location => {
    dynamicRoutes.push(`${service}-${location}`) // service+location page
  })
})

const allRoutes = [...staticRoutes, ...dynamicRoutes]

allRoutes.forEach(route => {
  const routeDir = join(distDir, route)
  if (!existsSync(routeDir)) {
    mkdirSync(routeDir, { recursive: true })
  }
  copyFileSync(sourceFile, join(routeDir, 'index.html'))
  console.log(`✓ dist/${route}/index.html`)
})

console.log(`\n✓ Generated ${allRoutes.length} pages total`)