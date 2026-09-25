import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Logic Pac privacy policy. How we collect, use, and protect your information.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="blog-body" style={{ maxWidth: 780, margin: '0 auto', padding: '80px 24px 64px' }}>
      <h1 style={{ fontSize: 'clamp(28px,3vw,36px)', marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ fontSize: 13, color: 'rgba(5,13,31,.4)', marginBottom: 40 }}>Effective September 25, 2026</p>

      <p>Logic Pac (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website logic-pac.com. This privacy policy describes how we collect, use, and protect information when you visit our site or interact with our services.</p>

      <h2>Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>When you book a consultation through Calendly, request a quote, or contact us by email or phone, you may provide your name, email address, company name, phone number, and project details. We use this information only to respond to your inquiry and evaluate whether we can help with your packaging project.</p>

      <h3>Information collected automatically</h3>
      <p>We use Google Analytics 4 (GA4) to collect aggregated, non-personally-identifiable usage data including pages visited, session duration, referral source, device type, and general geographic region. GA4 uses first-party cookies. We do not use GA4 advertising features, and we do not enable Google Signals or User-ID tracking.</p>
      <p>Vercel Analytics and Speed Insights collect anonymous performance data to help us monitor page load times and site stability. No personally identifiable information is collected by these services.</p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to consultation requests and project inquiries</li>
        <li>To understand how visitors use our site in aggregate (which pages are visited, which content is most useful)</li>
        <li>To improve site performance and content</li>
        <li>To comply with applicable legal obligations</li>
      </ul>
      <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>

      <h2>Third-Party Services</h2>
      <p>Our site uses the following third-party services that may process data on our behalf:</p>
      <ul>
        <li><strong>Google Analytics 4</strong> &mdash; website analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)</li>
        <li><strong>Calendly</strong> &mdash; consultation scheduling (<a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Calendly Privacy Policy</a>)</li>
        <li><strong>Vercel</strong> &mdash; website hosting and performance monitoring (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>)</li>
      </ul>

      <h2>Cookies</h2>
      <p>We use first-party cookies set by Google Analytics to distinguish unique visitors and sessions. These cookies do not contain personally identifiable information. You can control cookies through your browser settings. Disabling cookies will not prevent you from using our site, but analytics data will not be collected for your visit.</p>

      <h2>Data Retention</h2>
      <p>Consultation inquiries and project correspondence are retained for the duration of the business relationship and a reasonable period afterward for follow-up and record-keeping. GA4 data retention is set to 14 months.</p>

      <h2>Your Rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information by contacting us at the email address below. California residents may exercise rights under the California Consumer Privacy Act (CCPA). We do not discriminate against individuals who exercise their privacy rights.</p>

      <h2>Children</h2>
      <p>Our site and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.</p>

      <h2>Contact</h2>
      <p>If you have questions about this privacy policy, contact us at <a href="mailto:sean@logicagencyinc.com">sean@logicagencyinc.com</a>.</p>
      <p>Logic Pac (a division of Logic Agency Inc.)<br />Orange County, CA</p>
    </div>
  )
}
