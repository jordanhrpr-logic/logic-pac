import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Logic Pac website terms of use.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <div className="blog-body" style={{ maxWidth: 780, margin: '0 auto', padding: '80px 24px 64px' }}>
      <h1 style={{ fontSize: 'clamp(28px,3vw,36px)', marginBottom: 8 }}>Terms of Use</h1>
      <p style={{ fontSize: 13, color: 'rgba(5,13,31,.4)', marginBottom: 40 }}>Effective September 25, 2026</p>

      <p>By accessing and using the Logic Pac website (logic-pac.com), you agree to the following terms.</p>

      <h2>Use of This Site</h2>
      <p>This website is provided by Logic Pac (a division of Logic Agency Inc.) for informational purposes. The content on this site &mdash; including guides, articles, cost ranges, timeline estimates, material comparisons, and regulatory summaries &mdash; is general packaging guidance, not professional advice. Specific packaging decisions should be based on your product, channel, regulatory environment, and supplier capabilities.</p>

      <h2>No Guarantee of Results</h2>
      <p>Case studies, project descriptions, and client references describe past work. They do not guarantee identical results for future projects. Packaging outcomes depend on design decisions, material availability, production conditions, regulatory requirements, and other factors that vary by project.</p>

      <h2>Intellectual Property</h2>
      <p>All content on this site &mdash; text, images, photography, graphics, and design &mdash; is the property of Logic Pac or its licensors and is protected by copyright law. You may reference and link to our content. You may not reproduce, distribute, or republish substantial portions without written permission.</p>

      <h2>Third-Party Links</h2>
      <p>Our site may contain links to third-party websites (regulatory bodies, certification organizations, scheduling services). We are not responsible for the content, accuracy, or privacy practices of those sites.</p>

      <h2>Consultation Requests</h2>
      <p>Submitting a consultation request or booking a call does not create a contractual obligation for either party. Project terms, pricing, timelines, and deliverables are established through separate written agreements.</p>

      <h2>Limitation of Liability</h2>
      <p>Logic Pac provides this website and its content &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on its content.</p>

      <h2>Changes to These Terms</h2>
      <p>We may update these terms from time to time. Changes will be posted on this page with an updated effective date.</p>

      <h2>Contact</h2>
      <p>Questions about these terms can be directed to <a href="mailto:sean@logicagencyinc.com">sean@logicagencyinc.com</a>.</p>
      <p>Logic Pac (a division of Logic Agency Inc.)<br />Orange County, CA</p>
    </div>
  )
}
