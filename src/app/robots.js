export default function robots() {
  const baseURL = "https://artech-agency.co"
  return {
    rules: {
      userAgent: '*',
      allow: ["/", "/marketing", "/websites", "/branding", "/plans", "/help"],
      disallow: ["/contact", "/privacy", "/terms"]
    },
    sitemap: `${baseURL}/sitemap.xml`
  }
}