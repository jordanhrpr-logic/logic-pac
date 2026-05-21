export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Logic Pac",
  "alternateName": "Logic Pac by Logic Agency Inc.",
  "url": "https://logic-pac.com",
  "logo": "https://logic-pac.com/images/logo.png",
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
  "telephone": "+19492845134",
  "email": "sean@logicagencyinc.com",
  "areaServed": "US",
  "knowsAbout": [
    "Custom packaging design", "Custom packaging company", "Beauty packaging manufacturer",
    "Cosmetic packaging supplier", "Holiday gift set packaging", "Holiday gift set manufacturer",
    "Influencer kit production", "Influencer kit producer", "PR mailer packaging",
    "PR mailer company", "Folding carton supplier", "Rigid box manufacturer",
    "Custom box manufacturer", "Advent calendar packaging", "Global packaging sourcing",
    "Packaging vendor for beauty brands", "Retail packaging compliance", "Packaging fulfillment services",
    "Custom jewelry packaging", "Jewelry box manufacturer", "Jewelry packaging company"
  ]
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Logic Pac",
  "description": "Custom packaging development partner for beauty, cosmetic, and consumer brands. Structural design, global manufacturing, holiday kits, influencer kits, and fulfillment.",
  "url": "https://logic-pac.com",
  "telephone": "+19492845134",
  "email": "sean@logicagencyinc.com",
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
  "url": "https://logic-pac.com",
  "description": "Custom packaging company for beauty, cosmetic, and consumer brands. Holiday gift set manufacturer, influencer kit producer, folding carton supplier, and rigid box manufacturer.",
  "publisher": { "@type": "Organization", "name": "Logic Pac" }
}

export const holidayServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Holiday Gift Set Packaging",
  "alternateName": "Custom Holiday Kit Manufacturing",
  "description": "Full-service holiday gift set packaging for beauty and cosmetic brands. Rigid boxes, advent calendars, multi-component kits, kitting, assembly, and retail compliance for Ulta, Sephora, and Target.",
  "provider": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com" },
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
  "provider": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com" },
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

export const guidesCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Logic Pac Packaging Guides",
  "description": "In-depth guides on custom packaging design, influencer kit production, and packaging finishes from Logic Pac.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://logic-pac.com/guides/influencer-kit-playbook",
      "name": "The Influencer Kit Playbook: How to Design PR Mailers That Get Posted"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "url": "https://logic-pac.com/guides/packaging-finish-guide",
      "name": "The Definitive Guide to Packaging Finishes: Soft-Touch, Foil Stamp, Spot UV & Emboss"
    }
  ]
}

export const influencerPlaybookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Influencer Kit Playbook: How to Design PR Mailers That Get Posted",
  "description": "A comprehensive guide to designing and producing influencer kits and PR mailers that generate organic content. Covers kit structures, finishes, personalization, timelines, and budgets.",
  "author": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com" },
  "publisher": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com", "logo": { "@type": "ImageObject", "url": "https://logic-pac.com/images/logo.png" } },
  "datePublished": "2025-03-01",
  "dateModified": "2025-03-01",
  "image": [
    "https://logic-pac.com/images/portfolio/influencer-kits.jpg",
    "https://logic-pac.com/images/portfolio/velvet-interior-unboxing-kit.jpeg",
    "https://logic-pac.com/images/portfolio/skincare-launch-pr-mailer.jpg"
  ],
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://logic-pac.com/guides/influencer-kit-playbook" }
}

export const playbookFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Influencer Kit Playbook FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What's the minimum order for custom influencer kits?", "acceptedAnswer": { "@type": "Answer", "text": "Most custom influencer kits start at 50 to 100 units. Pricing improves significantly at 500+ units. Simpler mailer configurations can sometimes start lower." } },
    { "@type": "Question", "name": "How long does it take to produce a custom influencer kit?", "acceptedAnswer": { "@type": "Answer", "text": "Simpler configurations can ship in 6 weeks. Fully custom builds with rigid structures, specialty finishes, and custom inserts typically require 10 to 12 weeks." } },
    { "@type": "Question", "name": "What makes an influencer kit shareable?", "acceptedAnswer": { "@type": "Answer", "text": "A distinctive outer structure, layered reveals that extend the filming moment, personalized elements like foil-stamped names, and high-quality materials that signal brand investment all drive organic sharing." } },
    { "@type": "Question", "name": "Can you personalize kits at scale with creator names?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Options include foil-stamped names, custom stickers, variable-print inserts, and handwritten note cards. The right approach depends on your quantity and budget." } },
    { "@type": "Question", "name": "Do you work directly with PR agencies?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most of our influencer kit projects start with a brief from a PR agency or creative studio. We coordinate production and delivery without pulling in the end client." } },
    { "@type": "Question", "name": "What's the typical budget range for influencer kits?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary by structure and quantity. Simple mailer boxes start around $8 to $15 per unit at 500+. Fully custom rigid kits with specialty finishes range from $25 to $75+ per unit depending on complexity." } }
  ]
}

export const jewelryServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Jewelry Packaging",
  "alternateName": "Custom Jewelry Box Manufacturing",
  "description": "Custom jewelry packaging manufacturer for brands and designers. Rigid jewelry boxes with magnetic closure, hinged lids, PU leather, velvet, linen finishes, and brand-consistent color matching across all box sizes. Holiday gift set packaging and warehousing programs available.",
  "provider": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com" },
  "serviceType": "Custom Packaging Manufacturing",
  "areaServed": "US",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Jewelry Packaging Formats",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Rigid Jewelry Box with Magnetic Closure" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Hinged Jewelry Box with Metal Hardware" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Velvet-Lined Ring Box" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Holiday Jewelry Gift Set Packaging" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Inserts and Cushions for Jewelry" } }
    ]
  }
}

export const jewelryFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Custom Jewelry Packaging FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What's the minimum order for custom jewelry boxes?", "acceptedAnswer": { "@type": "Answer", "text": "Most custom rigid jewelry boxes start at 500 to 1,000 units per size. Pricing improves significantly at higher quantities, and multiple sizes can run on a single production order." } },
    { "@type": "Question", "name": "Can you match our brand color across all jewelry box sizes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We run pre-production color proofs across every SKU so PU leather, paper wraps, foil stamping, and interior lining all match before mass production begins." } },
    { "@type": "Question", "name": "Do you produce holiday gift set packaging for jewelry brands?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Seasonal gift sets and brand collaboration kits are one of the most common entry points for jewelry brands working with us for the first time." } },
    { "@type": "Question", "name": "How much does custom jewelry box packaging cost?", "acceptedAnswer": { "@type": "Answer", "text": "Custom jewelry boxes typically range from $3 to $12 per unit depending on materials, hardware (hinges, magnetic closure), finishing, and quantity." } },
    { "@type": "Question", "name": "What materials do you use for jewelry packaging?", "acceptedAnswer": { "@type": "Answer", "text": "PU leather, linen, velvet, specialty papers, rigid greyboard, and metal hardware (hinges, clasps, magnetic closures). Material selection depends on brand positioning and price point." } },
    { "@type": "Question", "name": "Can you handle watch and accessories packaging?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We produce custom packaging for watches, accessories, and fine goods as one-off or ongoing programs." } }
  ]
}

export const finishGuideJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Definitive Guide to Packaging Finishes: Soft-Touch, Foil Stamp, Spot UV & Emboss",
  "description": "A comprehensive reference guide covering soft-touch lamination, foil stamping, spot UV coating, embossing, and debossing for custom packaging. Includes comparisons, cost considerations, and file prep guidance.",
  "author": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com" },
  "publisher": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com", "logo": { "@type": "ImageObject", "url": "https://logic-pac.com/images/logo.png" } },
  "datePublished": "2025-03-01",
  "dateModified": "2025-03-01",
  "image": [
    "https://logic-pac.com/images/portfolio/soft-touch-spot-uv.jpg",
    "https://logic-pac.com/images/portfolio/foil-stamped-cylinder.jpeg"
  ],
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://logic-pac.com/guides/packaging-finish-guide" },
  "about": [
    { "@type": "Thing", "name": "Soft-touch lamination" },
    { "@type": "Thing", "name": "Foil stamping" },
    { "@type": "Thing", "name": "Spot UV coating" },
    { "@type": "Thing", "name": "Embossing and debossing" }
  ]
}

export const finishGuideFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Packaging Finish Guide FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What's the difference between soft-touch and matte lamination?", "acceptedAnswer": { "@type": "Answer", "text": "Matte lamination reduces glare and provides a smooth, non-glossy surface. Soft-touch lamination adds a velvety, tactile texture that feels premium to the touch. Soft-touch costs more but creates a significantly more luxurious unboxing experience." } },
    { "@type": "Question", "name": "Can you combine spot UV and soft-touch lamination?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and it's one of the most popular finish combinations. The contrast between the velvety soft-touch base and the glossy raised spot UV creates a striking visual and tactile effect." } },
    { "@type": "Question", "name": "What's the minimum order for foil stamping?", "acceptedAnswer": { "@type": "Answer", "text": "Foil stamping typically starts at 500 units due to the die setup costs. The die itself is a one-time cost that can be reused for future orders." } },
    { "@type": "Question", "name": "What's the difference between embossing and debossing?", "acceptedAnswer": { "@type": "Answer", "text": "Embossing raises elements above the surface of the material, creating a three-dimensional effect you can feel. Debossing presses elements into the surface, creating an indented effect. Both use a custom die." } },
    { "@type": "Question", "name": "Which finishes work best for beauty and cosmetic packaging?", "acceptedAnswer": { "@type": "Answer", "text": "Soft-touch lamination with spot UV is the industry standard for premium beauty packaging. Foil stamping adds luxury positioning. The right combination depends on brand positioning, budget, and substrate." } },
    { "@type": "Question", "name": "How do I prepare files for specialty finishes?", "acceptedAnswer": { "@type": "Answer", "text": "Spot UV and foil areas need a separate layer or spot color in your design file. Embossing requires vector artwork with clear depth specifications. Your packaging vendor should provide a finish-specific dieline template." } }
  ]
}

export const packagingCostArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Does Custom Packaging Cost? A Real Pricing Breakdown for Beauty Brands",
  "description": "Actual per-unit packaging costs by format — folding cartons, rigid boxes, tubes, and specialty finishes. What drives the price up, how to compare quotes, and where beauty brands overpay.",
  "author": { "@type": "Person", "name": "Jordan Harper", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "Logic Pac" } },
  "publisher": { "@type": "Organization", "name": "Logic Pac", "url": "https://logic-pac.com", "logo": { "@type": "ImageObject", "url": "https://logic-pac.com/images/logo.png" } },
  "datePublished": "2026-05-21",
  "dateModified": "2026-05-21",
  "image": ["https://logic-pac.com/images/portfolio/foil-stamped-cylinder.jpeg"],
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://logic-pac.com/blog/custom-packaging-cost-beauty-brands" },
  "about": [
    { "@type": "Thing", "name": "Custom packaging costs" },
    { "@type": "Thing", "name": "Beauty packaging pricing" },
    { "@type": "Thing", "name": "Folding carton costs" },
    { "@type": "Thing", "name": "Rigid box pricing" }
  ]
}

export const packagingCostFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Custom Packaging Cost FAQs",
  "mainEntity": [
    { "@type": "Question", "name": "What's the minimum order for custom packaging?", "acceptedAnswer": { "@type": "Answer", "text": "Most custom packaging starts at 500 to 1,000 units per SKU. Folding cartons can sometimes run at lower minimums (250+), while rigid boxes typically require 500+. Pricing improves significantly at 2,500+ units." } },
    { "@type": "Question", "name": "How much do packaging samples cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pre-production samples typically cost $200 to $800 depending on complexity. This covers tooling setup, material sourcing, and hand-assembly. Sample costs are usually credited toward your production order." } },
    { "@type": "Question", "name": "How long does custom packaging take to produce?", "acceptedAnswer": { "@type": "Answer", "text": "Custom packaging typically takes 12 to 20 weeks from approved brief to delivery: design (2 to 4 weeks), prototyping (2 to 4 weeks), tooling (4 to 6 weeks), production (4 to 8 weeks), and freight (4 to 8 weeks if international)." } },
    { "@type": "Question", "name": "Can I get custom packaging for under $1 per unit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Folding cartons with standard finishes at quantities of 5,000+ can come in under $1 per unit. Rigid boxes, specialty structures, and low-quantity runs will be higher." } },
    { "@type": "Question", "name": "What's included in a packaging quote?", "acceptedAnswer": { "@type": "Answer", "text": "A complete quote should include: unit cost (FOB or landed), tooling fees, finish costs broken out line by line, sample costs, minimum order quantity, and production timeline." } }
  ]
}
