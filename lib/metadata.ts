export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Logic Pac",
  "alternateName": "Logic Pac by Logic Agency Inc.",
  "url": "https://logicpac.com",
  "logo": "https://logicpac.com/images/logo.png",
  "description": "Logic Pac is a custom packaging development partner specializing in structural design, global sourcing, and fulfillment for beauty, cosmetic, and consumer brands. Backed by Logic Agency Inc., with 20+ years in supply chain operations across 15+ countries.",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://logicagencyinc.com"
  },
  "foundingDate": "2004",
  "address": [
    { "@type": "PostalAddress", "addressLocality": "Orange County", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "PostalAddress", "addressLocality": "Salt Lake City", "addressRegion": "UT", "addressCountry": "US" }
  ],
  "telephone": "+18012516225",
  "email": "jordan@logicagencyinc.com",
  "areaServed": "US",
  "knowsAbout": [
    "Custom packaging design", "Custom packaging company", "Beauty packaging manufacturer",
    "Cosmetic packaging supplier", "Holiday gift set packaging", "Holiday gift set manufacturer",
    "Influencer kit production", "Influencer kit producer", "PR mailer packaging",
    "PR mailer company", "Folding carton supplier", "Rigid box manufacturer",
    "Custom box manufacturer", "Advent calendar packaging", "Global packaging sourcing",
    "Packaging vendor for beauty brands", "Retail packaging compliance", "Packaging fulfillment services"
  ]
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Logic Pac",
  "description": "Custom packaging development partner for beauty, cosmetic, and consumer brands. Structural design, global manufacturing, holiday kits, influencer kits, and fulfillment.",
  "url": "https://logicpac.com",
  "telephone": "+18012516225",
  "email": "jordan@logicagencyinc.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Orange County", "addressRegion": "CA", "addressCountry": "US" },
  "priceRange": "$$$$",
  "openingHours": "Mo-Fr 08:00-18:00",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Packaging Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Holiday Gift Set Packaging", "description": "Rigid gift boxes, advent calendars, and multi-component kit configurations for beauty and consumer brands." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer and PR Kit Production", "description": "Custom PR mailers and influencer kits designed for unboxing, with kitting and direct-to-recipient fulfillment." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Packaging and Folding Cartons", "description": "Retail-ready folding cartons, display units, and shelf-ready packaging with full compliance documentation." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global Packaging Sourcing and Manufacturing", "description": "Factory relationships across 15+ countries including China, Vietnam, Thailand, India, and Mexico." } }
    ]
  }
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Logic Pac",
  "alternateName": "Logic Pac Custom Packaging",
  "url": "https://logicpac.com",
  "description": "Custom packaging company for beauty, cosmetic, and consumer brands. Holiday gift set manufacturer, influencer kit producer, folding carton supplier, and rigid box manufacturer.",
  "publisher": { "@type": "Organization", "name": "Logic Pac" }
}

export const holidayServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Holiday Gift Set Packaging",
  "alternateName": "Custom Holiday Kit Manufacturing",
  "description": "Full-service holiday gift set packaging for beauty and cosmetic brands. Rigid boxes, advent calendars, multi-component kits, kitting, assembly, and retail compliance for Ulta, Sephora, and Target.",
  "provider": { "@type": "Organization", "name": "Logic Pac", "url": "https://logicpac.com" },
  "serviceType": "Custom Packaging Manufacturing",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Holiday Packaging Formats",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Rigid Gift Box with Magnetic Closure" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Advent Calendar Structure" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Multi-Component Gift Set Kit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Lift-Lid Two-Piece Box" } }
    ]
  }
}

export const influencerServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Influencer Kit & PR Mailer Production",
  "alternateName": "Custom PR Kit Manufacturing",
  "description": "Custom influencer kits and PR mailers designed for unboxing. 50 to 5,000+ units with structural packaging, branded inserts, kitting, and direct-to-recipient fulfillment.",
  "provider": { "@type": "Organization", "name": "Logic Pac", "url": "https://logicpac.com" },
  "serviceType": "Custom Packaging Manufacturing",
  "areaServed": "US"
}

export const holidayFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Holiday Gift Set Packaging FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What's the minimum order for custom holiday gift set packaging?", "acceptedAnswer": { "@type": "Answer", "text": "Most custom rigid box holiday kits start at 500 to 1,000 units. Advent calendars typically start at 500+. Pricing improves significantly at higher quantities." } },
    { "@type": "Question", "name": "Do you offer kitting and assembly for holiday gift sets?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Salt Lake City warehouse handles product kitting, assembly, and outbound fulfillment for holiday gift set programs." } },
    { "@type": "Question", "name": "Can you handle Ulta, Sephora, and Target packaging compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Retailer compliance is standard in our process. We manage barcoding, master carton labeling, and retailer documentation for Ulta, Sephora, Target, and specialty retail." } },
    { "@type": "Question", "name": "How much does custom holiday gift set packaging cost?", "acceptedAnswer": { "@type": "Answer", "text": "Cost depends on structure, quantity, and materials. Book a call and we will give you a realistic range within 48 hours." } },
    { "@type": "Question", "name": "Do you offer FSC-certified and sustainable packaging?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. FSC-certified boards, recycled content, soy-based inks, and recyclable structures are available for all packaging programs." } },
    { "@type": "Question", "name": "How long does custom holiday packaging take to produce?", "acceptedAnswer": { "@type": "Answer", "text": "Custom holiday packaging typically requires 5 to 7 months total: structural tooling (4 to 8 weeks), sample approval (3 to 6 weeks), mass production (6 to 12 weeks), and ocean freight plus customs (6 to 8 weeks)." } }
  ]
}

export const influencerFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Influencer Kit and PR Mailer FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What's the minimum order for influencer kits and PR mailers?", "acceptedAnswer": { "@type": "Answer", "text": "We can produce as few as 50 to 100 units for smaller programs, scaling to 5,000+. Pricing improves significantly at 500+." } },
    { "@type": "Question", "name": "Can you ship PR kits directly to influencer addresses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our SLC warehouse kits, packs, and ships to individual creator addresses. You provide the list, we handle the rest." } },
    { "@type": "Question", "name": "Do you work directly with PR agencies on influencer kits?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with PR and creative agencies regularly. Brief us directly and we coordinate without pulling in the end client." } },
    { "@type": "Question", "name": "How fast can you produce a custom influencer kit?", "acceptedAnswer": { "@type": "Answer", "text": "For simpler configurations, 6 weeks is achievable. Fully custom builds need 10 to 12 weeks." } },
    { "@type": "Question", "name": "Can you personalize influencer kits with creator names?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Foil-stamped names, custom stickers, or variable-print inserts. We spec the right approach for your quantity and budget." } }
  ]
}

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Logic Pac Custom Packaging FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What does Logic Pac do?", "acceptedAnswer": { "@type": "Answer", "text": "Logic Pac is a custom packaging company for beauty, cosmetic, and consumer brands. We handle structural design, global manufacturing, quality control, and fulfillment — all under one roof." } },
    { "@type": "Question", "name": "What is the minimum order quantity for custom packaging?", "acceptedAnswer": { "@type": "Answer", "text": "Minimums depend on format. Influencer kits start at 50 to 100 units. Rigid gift boxes and folding cartons typically start at 500 to 1,000 units." } },
    { "@type": "Question", "name": "Where does Logic Pac manufacture packaging?", "acceptedAnswer": { "@type": "Answer", "text": "We source from vetted factories across China, Vietnam, Thailand, India, and Mexico — matched to your project based on quality, MOQ, and timeline." } },
    { "@type": "Question", "name": "How long does custom packaging take to produce?", "acceptedAnswer": { "@type": "Answer", "text": "Timelines vary by complexity. Simple programs can ship in 6 to 8 weeks. Fully custom rigid boxes typically require 12 to 20 weeks including tooling, sampling, and freight." } },
    { "@type": "Question", "name": "Does Logic Pac handle fulfillment and kitting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Salt Lake City warehouse handles product kitting, assembly, and ships direct to retail, DTC, or individual recipients." } }
  ]
}
