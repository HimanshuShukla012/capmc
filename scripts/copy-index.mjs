import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const routes = ['about', 'services', 'contact']
const distDir = 'dist'
const sourceFile = join(distDir, 'index.html')

routes.forEach(route => {
  const routeDir = join(distDir, route)
  if (!existsSync(routeDir)) {
    mkdirSync(routeDir, { recursive: true })
  }
  copyFileSync(sourceFile, join(routeDir, 'index.html'))
  console.log(`✓ Copied index.html → dist/${route}/index.html`)
})

console.log('✓ All routes pre-rendered successfully')