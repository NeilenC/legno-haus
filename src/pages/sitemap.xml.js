import fs from 'fs'
import path from 'path'

export default function Sitemap() {
  // getServerSideProps will handle the response
  return null
}

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://legnohaus.com.ar'

  // static pages to include
  const staticPages = ['/', '/proyectos']

  // read projects from utils/projects.json
  const projectsPath = path.join(process.cwd(), 'src', 'utils', 'projects.json')
  let projects = []
  try {
    const raw = fs.readFileSync(projectsPath, 'utf8')
    projects = JSON.parse(raw)
  } catch (e) {
    // ignore if missing
    projects = []
  }

  const pages = []

  staticPages.forEach((page) => {
    pages.push({ url: `${baseUrl}${page}`, priority: '0.8' })
  })

  projects.forEach((p) => {
    if (p.id) {
      pages.push({ url: `${baseUrl}/proyectos/${p.id}`, priority: '0.7' })
    }
  })

  const xmlItems = pages.map((p) => {
    return `  <url>\n    <loc>${p.url}</loc>\n    <priority>${p.priority}</priority>\n  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(xml)
  res.end()

  return {
    props: {}
  }
}
