'use client'

import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import BlogFAQ from '@/components/BlogFAQ'
import BlogTOC from '@/components/BlogTOC'
import RelatedContent from '@/components/RelatedContent'

export default function PostClient() {
  const { openModal } = useModal()

  const tocSections = [
    { id: 'the-12-point-verification-checklist', label: 'The 12-Point Verification Checklist' },
    { id: 'sb-54-compliance-checkpoints', label: 'SB 54 Compliance Checkpoints' },
    { id: 'eu-ppwr-compliance-checkpoints', label: 'EU PPWR Compliance Checkpoints' },
    { id: 'ftc-green-guides-what-you-can-and-cannot-say', label: 'FTC Green Guides: What You Can Say' },
    { id: 'greenwashing-traps', label: 'The 7 Greenwashing Traps' },
    { id: 'documentation-requirements', label: 'Documentation Requirements' },
    { id: 'claim-decision-tree', label: 'Claim Decision Tree' },
  ]

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Compliance</div>
        <h1>Packaging Sustainability Compliance Checklist</h1>
        <p>The 12 verification items before any sustainability claim goes on your packaging</p>
        <div className="phdr-meta"><span>Jordan Harper</span><span>November 17, 2026</span><span>11 min read</span></div>
      </div>

      <div className="blog-wrap">
        <BlogTOC sections={tocSections} />
        <div className="blog-main">
          <div className="guide-answer" aria-labelledby="answer-title">
            <h2 id="answer-title">What do you need to verify before making a sustainability claim on packaging?</h2>
            <p>Every sustainability claim on packaging &mdash; &ldquo;recyclable,&rdquo; &ldquo;made from recycled content,&rdquo; &ldquo;compostable,&rdquo; &ldquo;sustainable&rdquo; &mdash; requires specific, documented verification. The claim language must match the actual material composition, the recycling infrastructure where the product is sold, and the regulatory framework in each jurisdiction. Getting this wrong exposes the brand to FTC enforcement, state attorney general action, retailer compliance failures, and consumer trust damage.</p>
          </div>

          <div className="blog-body">
            <p>Most beauty and consumer brands want to make sustainability claims on their packaging. Most of them cannot substantiate those claims under the current regulatory environment. The gap between what brands believe about their packaging and what they can legally say about it is where compliance risk lives.</p>
            <p>This is not a philosophical guide to sustainability strategy. This is the operational checklist &mdash; the 12 items you must verify before any sustainability claim appears on your packaging, your website, or your marketing materials. For the full strategic framework, see the <Link href="/guides/sustainable-beauty-packaging?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_playbook">Sustainable Beauty Packaging Playbook</Link>.</p>

            <div className="blog-takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                <li>Every sustainability claim requires documented evidence &mdash; &ldquo;recyclable&rdquo; without verification is a compliance violation, not a marketing choice.</li>
                <li>California&apos;s SB 54 and the EU PPWR impose financial penalties for non-compliant packaging and unsubstantiated claims.</li>
                <li>The FTC Green Guides require that claims be specific, qualified, and substantiated &mdash; vague terms like &ldquo;eco-friendly&rdquo; and &ldquo;sustainable&rdquo; are explicitly flagged as deceptive.</li>
                <li>Documentation is as important as the claim itself &mdash; if you cannot produce the evidence trail, the claim is unsubstantiated regardless of whether it is factually true.</li>
                <li>The most common compliance failure is claiming recyclability based on material type alone, without verifying access to collection and processing infrastructure.</li>
              </ul>
            </div>

            <h2 id="the-12-point-verification-checklist">The 12-Point Verification Checklist</h2>
            <p>Before any sustainability claim goes on packaging, marketing, or product pages, verify all 12 items. A failure on any single item means the claim cannot be made in its current form.</p>

            <h3>1. Material composition is documented</h3>
            <p>You have a written material specification from your supplier that identifies every component: primary container material, closure material, label material, adhesive type, ink system, and any coatings or barriers. &ldquo;Paperboard box&rdquo; is not a material specification. &ldquo;18pt C1S SBS with water-based aqueous coating, soy-based offset inks, EVA hot-melt adhesive&rdquo; is.</p>

            <h3>2. Recycled content percentage is certified</h3>
            <p>If you claim recycled content (PCR, PIR), the percentage must come from a supplier certificate of compliance &mdash; not from a sales conversation or marketing sheet. The certificate must specify the resin type, the PCR percentage by weight, and the certification body. For PCR claims on plastic packaging, see our <Link href="/blog/pcr-packaging-beauty-brands?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_pcr">PCR packaging guide</Link> for verification standards.</p>

            <h3>3. Recyclability is verified against actual infrastructure</h3>
            <p>A package is not &ldquo;recyclable&rdquo; because the material is technically recyclable. It is recyclable when collection and processing infrastructure exists in the markets where the product is sold, and the specific format (size, color, label type, closure type) is accepted by those systems. The How2Recycle program and APR Design Guide are the baseline references for the U.S. market. For the EU, EPR registration and the PPWR recyclability tiers apply.</p>

            <h3>4. Claim language is specific and qualified</h3>
            <p>The FTC Green Guides require that environmental claims be specific, not vague. &ldquo;Recyclable&rdquo; must specify what part of the package is recyclable if the entire package is not. &ldquo;Made with recycled content&rdquo; must specify the percentage. &ldquo;Eco-friendly,&rdquo; &ldquo;green,&rdquo; and &ldquo;sustainable&rdquo; are unqualified claims that the FTC has explicitly identified as potentially deceptive.</p>

            <h3>5. Certifications are current and applicable</h3>
            <p>FSC certification applies to the specific paper stock in the specific product &mdash; not to the brand or the supplier generally. The FSC chain-of-custody number must be current, the certified stock must match the production spec, and the FSC logo usage must follow FSC trademark guidelines (minimum size, clear space, approved placement). The same specificity applies to SFI, PEFC, Cradle to Cradle, and any other third-party certification.</p>

            <h3>6. Label and on-pack claims match the documentation</h3>
            <p>The claim printed on the package must match the documented evidence exactly. If the supplier certificate says 30% PCR and the package says &ldquo;made with recycled materials,&rdquo; the claim is technically unqualified. If the certificate says 30% PCR PET and the package says &ldquo;50% recycled content,&rdquo; the claim is false. This sounds obvious. It is the most common failure mode in compliance audits.</p>

            <h3>7. Multi-component packages are assessed individually</h3>
            <p>A package with a glass jar, a PP cap, a paper label, and a paperboard carton is four separate recyclability assessments. Claiming the package is &ldquo;recyclable&rdquo; when the carton is recyclable but the cap is not, without qualification, is a violation. Each component must be assessed against the relevant recycling stream. For mono-material alternatives that simplify this assessment, see the <Link href="/guides/mono-material-packaging?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_mono">Mono-Material Packaging Guide</Link>.</p>

            <h3>8. Compostability claims specify the standard</h3>
            <p>Industrial compostability (ASTM D6400 in the U.S., EN 13432 in the EU) and home compostability (TUV OK Compost HOME) are different standards with different infrastructure requirements. A package certified industrially compostable is misleading if labeled &ldquo;compostable&rdquo; without qualification in markets where industrial composting facilities do not accept packaging.</p>

            <h3>9. &ldquo;Biodegradable&rdquo; is not used without qualification</h3>
            <p>The FTC Green Guides specifically flag unqualified &ldquo;biodegradable&rdquo; claims. All materials biodegrade eventually. The claim is meaningful only if the material breaks down within one year in the disposal environment where consumers will reasonably dispose of it. For most packaging, this claim is not substantiatable.</p>

            <h3>10. Imagery does not overstate the environmental benefit</h3>
            <p>Green coloring, leaf imagery, nature photography, and earth-tone palettes on packaging that is not demonstrably more sustainable than the category norm can constitute implied environmental claims under the FTC Green Guides. Visual design is part of the compliance assessment, not just the text.</p>

            <h3>11. Claims are consistent across all channels</h3>
            <p>The sustainability claim on the physical package, the product page, the marketing email, the social media post, and the retail listing must all match. A qualified claim on the package (&ldquo;carton is recyclable&rdquo;) paired with an unqualified claim on the website (&ldquo;sustainable packaging&rdquo;) creates a compliance gap. Audit all channels, not just the box.</p>

            <h3>12. A revalidation trigger is defined</h3>
            <p>Supplier changes, material substitutions, regulatory updates, and market expansions all invalidate existing compliance documentation. Define the triggers that require reverification &mdash; and assign an owner. A compliance checklist that is completed once and never revisited is a snapshot of a moment, not an ongoing assurance.</p>

            <h2 id="sb-54-compliance-checkpoints">SB 54 Compliance Checkpoints (California)</h2>
            <p>California&apos;s SB 54 (Plastic Pollution Prevention and Packaging Producer Responsibility Act) establishes an extended producer responsibility program with specific obligations for brands selling into California. For the full regulatory breakdown, see the <Link href="/blog/sb54-packaging-compliance-beauty?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_sb54">SB 54 compliance guide</Link>.</p>

            <h3>Producer registration</h3>
            <p>Brands that sell products in covered packaging into California must register with CalRecycle and report packaging volumes, materials, and recyclability status. The registration requirement applies to the brand owner, not the packaging manufacturer.</p>

            <h3>Source reduction and recyclability targets</h3>
            <p>SB 54 sets progressive targets: 25% source reduction of single-use plastic by 2032, 65% of packaging recyclable or compostable by 2032, and 25% PCR content in plastic packaging by 2032. Brands should map their current packaging portfolio against these targets and identify which formats need redesign.</p>

            <h3>EPR fee implications</h3>
            <p>Packaging that is difficult to recycle (multi-material formats, non-standard resins, formats that contaminate recycling streams) will carry higher EPR fees. Mono-material packaging and formats with established recycling infrastructure will carry lower fees. This creates a direct financial incentive to design for recyclability &mdash; not just claim it.</p>

            <h2 id="eu-ppwr-compliance-checkpoints">EU PPWR Compliance Checkpoints</h2>
            <p>The EU Packaging and Packaging Waste Regulation (PPWR) applies to any brand selling products in the European Union, regardless of where the brand or the packaging is manufactured. For the full PPWR breakdown, see the <Link href="/blog/eu-ppwr-packaging-requirements-beauty?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_ppwr">EU PPWR requirements guide</Link>.</p>

            <h3>Recyclability grading</h3>
            <p>PPWR introduces a tiered recyclability grading system (A through E) based on design-for-recycling criteria. Grade A (fully recyclable at scale) will carry no surcharge. Grade E (not recyclable) will be banned from the market by 2030 for certain categories. Grades B through D carry progressive EPR fee adjustments.</p>

            <h3>Mandatory recycled content</h3>
            <p>PPWR mandates minimum PCR content in plastic packaging: 10% by 2030, increasing to 35% by 2040 for contact-sensitive packaging (which includes most beauty packaging). Brands must plan their material specifications against these timelines now &mdash; supplier qualification for high-PCR resins takes 12&ndash;18 months.</p>

            <h3>Labeling requirements</h3>
            <p>PPWR standardizes packaging labeling across the EU: material identification codes, collection instructions, and digital product passport compatibility. The familiar Green Dot symbol will no longer be required. New harmonized labels will replace the current country-by-country systems.</p>

            <h2 id="ftc-green-guides-what-you-can-and-cannot-say">FTC Green Guides: What You Can and Cannot Say</h2>
            <p>The Federal Trade Commission&apos;s Green Guides (16 CFR Part 260) are not law, but they define how the FTC evaluates environmental marketing claims. Claims that do not comply with the Green Guides are treated as deceptive advertising under Section 5 of the FTC Act.</p>

            <h3>Claims that require qualification</h3>
            <ul>
              <li><strong>&ldquo;Recyclable&rdquo;</strong> &mdash; must specify which component if not the entire package, and must be substantiated by access to recycling infrastructure for a substantial majority of consumers.</li>
              <li><strong>&ldquo;Made with recycled content&rdquo;</strong> &mdash; must specify the percentage and whether it is pre-consumer (PIR) or post-consumer (PCR). PCR is the stronger claim.</li>
              <li><strong>&ldquo;Compostable&rdquo;</strong> &mdash; must specify industrial or home, and must be substantiated by the relevant standard (ASTM D6400 or TUV OK Compost HOME).</li>
              <li><strong>&ldquo;Biodegradable&rdquo;</strong> &mdash; must decompose within one year in the disposal environment. Almost never substantiatable for packaging.</li>
            </ul>

            <h3>Claims that should not be used</h3>
            <ul>
              <li><strong>&ldquo;Eco-friendly&rdquo;</strong> &mdash; unqualified and vague. The FTC has explicitly identified this as potentially deceptive.</li>
              <li><strong>&ldquo;Green&rdquo;</strong> &mdash; same issue. Implies a broad environmental benefit that cannot be substantiated.</li>
              <li><strong>&ldquo;Sustainable&rdquo;</strong> &mdash; unless qualified with specific, measurable criteria. &ldquo;Sustainable packaging&rdquo; as a standalone claim is not defensible.</li>
              <li><strong>&ldquo;Earth-friendly&rdquo; / &ldquo;Planet-friendly&rdquo;</strong> &mdash; unqualified benefit claims with no measurable standard.</li>
            </ul>

            <h3>What works instead</h3>
            <p>Specific, qualified claims with documentation: &ldquo;This carton is made from 100% FSC-certified paperboard.&rdquo; &ldquo;Bottle contains 30% post-consumer recycled PET.&rdquo; &ldquo;Carton is widely recyclable &mdash; check local guidelines for the cap.&rdquo; The more specific the claim, the lower the compliance risk. See the <Link href="/guides/beauty-packaging-claims-compliance?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_claims_guide">Beauty Packaging Claims &amp; Compliance Guide</Link> for the full claim-by-claim breakdown.</p>

            <h2 id="greenwashing-traps">The 7 Greenwashing Traps</h2>
            <p>These are the most common ways beauty and consumer brands unintentionally make unsubstantiated sustainability claims on their packaging.</p>

            <h3>1. Claiming recyclability based on material type alone</h3>
            <p>PET is recyclable. A PET bottle with a full-wrap shrink sleeve, a PP cap, a silicone gasket, and a metallic label is not recyclable in most municipal systems. The material type is necessary but not sufficient. The format, the components, and the local infrastructure all determine recyclability.</p>

            <h3>2. Using green coloring as an environmental signal</h3>
            <p>Green packaging, nature imagery, and earth tones create an implied environmental claim even without text. If your packaging is not demonstrably more sustainable than the category norm, the visual design can be treated as an unsubstantiated environmental claim under the FTC Green Guides.</p>

            <h3>3. Citing theoretical recyclability, not actual infrastructure</h3>
            <p>A material may be technically recyclable in a lab setting but not accepted by any municipal recycling program in the markets where the product is sold. &ldquo;Recyclable&rdquo; on the package implies that consumers can actually recycle it &mdash; not that it is theoretically possible.</p>

            <h3>4. Highlighting one sustainable component while ignoring the rest</h3>
            <p>A paperboard carton from FSC-certified stock is a defensible claim. Using that claim to position the entire product as &ldquo;sustainable packaging&rdquo; when the primary container is a multi-layer laminate tube is a hidden tradeoff &mdash; and a compliance risk.</p>

            <h3>5. Conflating carbon offsets with packaging sustainability</h3>
            <p>Carbon offsets apply to the brand&apos;s emissions footprint, not to the packaging&apos;s material composition or end-of-life recyclability. &ldquo;Carbon neutral packaging&rdquo; via offsets does not mean the packaging is recyclable, recycled, or reduced.</p>

            <h3>6. Using expired or inapplicable certifications</h3>
            <p>An FSC chain-of-custody certificate for a previous production run does not cover the current production run if the supplier changed paper stock. Certifications must be current, applicable to the specific material in the specific product, and verified before each production cycle.</p>

            <h3>7. Making claims without internal documentation</h3>
            <p>A claim that is factually true but undocumented is indistinguishable from a false claim during an enforcement action. The FTC&apos;s standard is &ldquo;reasonable basis&rdquo; &mdash; can you produce the evidence? If the documentation does not exist, the claim is unsubstantiated.</p>

            <h2 id="documentation-requirements">Documentation Requirements</h2>
            <p>For every sustainability claim on packaging, the brand should maintain the following documentation, accessible within 48 hours of a request:</p>

            <h3>Material documentation</h3>
            <ul>
              <li>Supplier material specification sheet (composition, weight, resin codes)</li>
              <li>PCR/PIR certificates of compliance with percentage, resin type, and certification body</li>
              <li>FSC/SFI/PEFC chain-of-custody certificate (current, with matching certificate number)</li>
              <li>Compostability test reports (ASTM D6400 or EN 13432, with accredited lab name)</li>
            </ul>

            <h3>Recyclability documentation</h3>
            <ul>
              <li>How2Recycle evaluation report or APR Design Guide assessment</li>
              <li>List of markets where the product is sold and the corresponding recycling infrastructure status</li>
              <li>Documentation that the specific format (not just material) is accepted by relevant programs</li>
            </ul>

            <h3>Regulatory compliance</h3>
            <ul>
              <li>CalRecycle registration confirmation (for California distribution)</li>
              <li>EU EPR registration per member state (for EU distribution)</li>
              <li>PPWR recyclability grade assessment (when available)</li>
              <li>Prop 65 compliance documentation (California, if applicable to packaging components)</li>
            </ul>

            <h3>Internal records</h3>
            <ul>
              <li>Date of last compliance review and reviewer name</li>
              <li>Defined revalidation triggers (supplier change, material change, market expansion, regulation update)</li>
              <li>Channel audit confirming claim consistency across package, website, retail listing, and marketing</li>
            </ul>

            <h2 id="claim-decision-tree">Claim Decision Tree</h2>
            <p>Use this framework to determine what you can claim. Start with the claim you want to make and work through the verification chain.</p>

            <h3>&ldquo;I want to say our packaging is recyclable&rdquo;</h3>
            <ul>
              <li>Is the entire package one material stream? If not, qualify which components are recyclable.</li>
              <li>Is the format accepted by municipal recycling in the markets where you sell? If you sell nationally, &ldquo;a substantial majority&rdquo; of consumers must have access.</li>
              <li>Have you removed or redesigned components that contaminate the stream (shrink sleeves, metallic labels, mixed-material closures)?</li>
              <li>Can you document all of the above? If yes: &ldquo;[Component] is recyclable &mdash; check local guidelines.&rdquo; If the whole package qualifies: &ldquo;Widely recyclable.&rdquo;</li>
            </ul>

            <h3>&ldquo;I want to say our packaging contains recycled content&rdquo;</h3>
            <ul>
              <li>Do you have a supplier certificate specifying the PCR/PIR percentage by weight?</li>
              <li>Does the certificate match the current production run (not a previous order)?</li>
              <li>Is the percentage significant enough to be non-deceptive? (The FTC does not define a minimum, but a 2% PCR claim on a large package may be misleading.)</li>
              <li>If yes: &ldquo;Contains [X]% post-consumer recycled [material].&rdquo; Specify PCR vs. PIR.</li>
            </ul>

            <h3>&ldquo;I want to say our packaging is sustainable&rdquo;</h3>
            <ul>
              <li>Can you define what &ldquo;sustainable&rdquo; means in specific, measurable terms for this package?</li>
              <li>Does the package perform measurably better than the category norm on a specific dimension (recycled content, recyclability, material reduction, certified sourcing)?</li>
              <li>Can you substantiate every element of the claim?</li>
              <li>If yes: state the specific benefit instead. &ldquo;Made with FSC-certified paperboard and 30% PCR PET.&rdquo; Never use &ldquo;sustainable&rdquo; as a standalone claim.</li>
            </ul>

            <h3>&ldquo;I want to say our packaging is compostable&rdquo;</h3>
            <ul>
              <li>Is it certified to ASTM D6400 (industrial) or TUV OK Compost HOME (home)?</li>
              <li>Do consumers in your markets have access to the relevant composting infrastructure?</li>
              <li>If industrial only: qualify the claim. &ldquo;Commercially compostable &mdash; check local facilities.&rdquo;</li>
              <li>If home-compostable with TUV certification: &ldquo;Home compostable (TUV OK Compost HOME certified).&rdquo;</li>
            </ul>

            <p>For the full sustainability strategy &mdash; from material selection through implementation roadmaps &mdash; see the <Link href="/guides/sustainable-beauty-packaging?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_playbook_bottom">Sustainable Beauty Packaging Playbook</Link>. To score your current packaging against sustainability levers, use the <Link href="/guides/sustainable-packaging-decision-matrix?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_decision_matrix">Sustainable Packaging Decision Matrix</Link>.</p>
          </div>
        </div>
      </div>

      <p>Not sure whether your current packaging claims are substantiated? A <Link href="/packaging-audit">packaging audit</Link> includes a compliance review across every claim on every component &mdash; and identifies where the documentation gaps are before a regulator does.</p>

      <BlogFAQ
        title="Sustainability Compliance FAQ"
        faqs={[
          { question: 'Can I say "recyclable" if the material is technically recyclable?', answer: 'No. The FTC Green Guides require that recyclability claims reflect actual access to recycling infrastructure for a substantial majority of consumers. A material that is technically recyclable but not accepted by municipal programs in the markets where you sell does not support a "recyclable" claim.' },
          { question: 'Do I need FSC certification for every production run?', answer: 'The FSC chain-of-custody certificate must be current and must apply to the specific paper stock used in the production run. If the supplier changes stock or the certificate expires, the FSC claim is no longer valid. Verify before each production cycle, not once.' },
          { question: 'Is "sustainable packaging" ever a defensible claim?', answer: 'As a standalone claim, almost never. The FTC Green Guides treat unqualified environmental benefit claims as potentially deceptive. Instead, state the specific benefit: "Made with 30% PCR PET," "FSC-certified paperboard," "Mono-material PP — recyclable." Specific claims are both more defensible and more credible.' },
          { question: 'What happens if we make an unsubstantiated claim?', answer: 'FTC enforcement can result in cease-and-desist orders, civil penalties, and required corrective advertising. State attorneys general (particularly in California) have independent enforcement authority. Beyond regulatory risk, retailers with sustainability programs (Sephora Clean + Planet Positive, Target Zero) may remove non-compliant products.' },
          { question: 'How often should we review our sustainability claims?', answer: 'At minimum, annually and whenever a trigger event occurs: supplier change, material substitution, new market entry, or regulatory update. SB 54, PPWR, and the Green Guides are all evolving — a claim that was compliant 18 months ago may not be compliant today.' },
          { question: 'Does mono-material packaging simplify compliance?', answer: 'Significantly. A mono-material package enters one recycling stream, requires one recyclability assessment, and eliminates the multi-component qualification problem. It does not automatically make the package recyclable — format, size, color, and local infrastructure still matter — but it removes the most common compliance failure point.' },
        ]}
        ctaText="Book a Compliance Review"
        ctaProjectType="Sustainability Compliance"
      />

      <div className="blog-conclusion">
        <h2 id="verify-before-you-claim">Verify Before You Claim</h2>
        <p>The gap between what brands believe about their packaging sustainability and what they can legally substantiate is where compliance risk lives. The 12-point checklist is not aspirational &mdash; it is the minimum verification standard before any claim goes on a package, a product page, or a marketing email.</p>
        <p>The regulatory environment is tightening. SB 54, PPWR, and the updated FTC Green Guides all move in the same direction: specific claims, documented evidence, and financial penalties for non-compliance. The brands that verify first will carry a competitive advantage over the brands that claim first and verify later.</p>
        <p>For the full strategic framework, start with the <Link href="/guides/beauty-packaging-claims-compliance?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=compliance_checklist_claims_guide_bottom">Beauty Packaging Claims &amp; Compliance Guide</Link>.</p>
      </div>

      <RelatedContent currentSlug="packaging-sustainability-compliance-checklist" currentTag="Compliance" />

      <section className="ctas">
        <div className="ctai">
          <h2 id="ready-to-verifyyour-claims">Ready to Verify<br /><em>Your Claims?</em></h2>
          <p>Share your current packaging specs and sustainability claims. We&apos;ll identify what is substantiated, what needs documentation, and what needs to change before the next production run.</p>
          <button type="button" className="bi" onClick={() => openModal('Sustainability Compliance', 'blog-bottom-cta')}>Start Your Compliance Review</button>
        </div>
      </section>
    </>
  )
}
