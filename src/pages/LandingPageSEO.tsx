import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getAllLandingPages, locations } from '../data/seo-pages'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone, Mail, CheckCircle, MapPin, Clock, Star } from 'lucide-react'

const LandingPageSEO = () => {
  const { slug } = useParams<{ slug: string }>()
  const allPages = getAllLandingPages()
  const pageData = allPages.find(p => p.slug === slug)

  if (!pageData) return <Navigate to="/" replace />

  const { service, location, title, metaDescription, canonical } = pageData

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name}${location ? ` in ${location.city}` : ' UAE'}`,
    "provider": {
      "@type": "AccountingService",
      "name": "CAPMC LLC FZ",
      "url": "https://capmc.ae",
      "telephone": "+971529283063",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "701, Al Durrah Tower, Sheikh Zayed Road",
        "addressLocality": location ? location.city : "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": location ? location.city : "United Arab Emirates"
    },
    "description": metaDescription,
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "AED"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        {location && <meta name="geo.region" content={location.zone} />}
        {location && <meta name="geo.placename" content={location.city} />}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative py-32 px-6 md:px-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {location ? `${location.city}, UAE` : 'United Arab Emirates'}
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {service.shortName} Services
            {location && (
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                in {location.city}
              </span>
            )}
          </h1>

          <p className="text-xl text-white/80 mb-8 max-w-3xl leading-relaxed">
            CAPMC LLC FZ provides expert {service.name.toLowerCase()} services
            {location ? ` in ${location.city}, ${location.description}` : ' across the UAE'}.
            {' '}{service.description}. Trusted by 500+ companies.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <Clock className="w-4 h-4 text-orange-400" />
              {service.timeline}
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 text-orange-400" />
              {service.price}
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              500+ Companies Served
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+971529283063"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Free Consultation
            </a>
            <a
              href="mailto:info@capmc.ae"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Why CAPMC for this service + location */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
            Why Choose CAPMC for {service.shortName}
            {location ? ` in ${location.city}` : ' in UAE'}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "30+ Years Experience",
                desc: `Decades of expertise handling ${service.name.toLowerCase()} for businesses ${location ? `in ${location.city} and` : 'across'} the UAE.`
              },
              {
                title: "500+ Companies Served",
                desc: `Proven track record of successful ${service.shortName.toLowerCase()} engagements with businesses of all sizes.`
              },
              {
                title: "Local Market Knowledge",
                desc: `Deep understanding of ${location ? `${location.city}'s` : "UAE's"} regulatory environment and business landscape.`
              },
              {
                title: "End-to-End Support",
                desc: `From initial consultation to ongoing compliance, we handle every aspect of your ${service.shortName.toLowerCase()} needs.`
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other locations for this service */}
      {location && (
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {service.shortName} Services Across UAE
            </h2>
            <div className="flex flex-wrap gap-3">
              {locations
                .filter(loc => loc.slug !== location.slug)
                .map(loc => (
                  <a
                    key={loc.slug}
                    href={`/${service.slug}-${loc.slug}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-orange-50 hover:text-orange-600 text-gray-700 rounded-full text-sm font-medium transition-colors border border-gray-200 hover:border-orange-200"
                  >
                    {service.shortName} in {loc.city}
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Get Started with {service.shortName}
            {location ? ` in ${location.city}` : ''}?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact our experts today for a free consultation. {service.price}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971529283063"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +971 529 283 063
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPageSEO