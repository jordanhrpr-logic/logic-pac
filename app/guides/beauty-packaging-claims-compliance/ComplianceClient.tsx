'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'
import FAQSidebar from '@/components/FAQSidebar'
import GuideAnswerSummary from '@/components/GuideAnswerSummary'
import GuideBottomLine from '@/components/GuideBottomLine'
import GuideByline from '@/components/GuideByline'

const tocSections = [
  { id: 'where-start', label: 'Where to start' },
  { id: 'decision-tree', label: 'The 3-variable decision tree' },
  { id: 'us-frameworks', label: 'US regulatory frameworks' },
  { id: 'eu-frameworks', label: 'EU regulatory frameworks' },
  { id: 'global-frameworks', label: 'Global & cross-jurisdiction' },
  { id: 'certifications', label: 'Certifications worth specifying' },
  { id: 'component-risk', label: 'Pack-component risk map' },
  { id: 'ownership', label: 'Who owns compliance internally' },
  { id: 'checklist', label: 'Compliance-readiness scorecard' },
  { id: 'faq', label: 'Quick answers' },
]

const faqs = [
  {
    question: 'Which regulation hits first for a US-only beauty brand launching in 2026?',
    answer: 'For a US-only brand, the FDA cosmetics labeling baseline (21 CFR 701) applies the day you ship. California SB 54 and SB 343 Truth in Recycling apply if any SKU is sold into California — SB 54 obligations ramp through 2027 and 2032; SB 343 restricts the chasing-arrows symbol as of 2026. FTC Green Guides apply to any environmental claim nationwide. If the brand uses any Prop 65-listed substance (common in inks, finishes, nail products, and some actives), Prop 65 warning requirements apply. MoCRA applies to all cosmetics manufacturers and processors as of 2024. Everything else — EU PPWR, ECGT, UFLPA, GHS — scales in based on markets and supply chain.',
  },
  {
    question: 'Do I need a lawyer to make a sustainability claim?',
    answer: 'For a vague brand-level claim ("better for the planet"), no — but you probably should not make the claim at all because it is the exact kind the FTC and EU ECGT are now treating as deceptive. For a specific, substantiated claim ("50% post-consumer recycled plastic, verified by [cert body]"), you need documentation from the supplier chain, not a lawyer. For a comparative claim ("30% less plastic than our previous bottle"), you need a baseline methodology — and above a certain spend level, legal review is appropriate. For a claim entering regulated jurisdictions (EU ECGT, Canada CCPA green marketing guidelines), legal review is strongly recommended before copy ships.',
  },
  {
    question: 'What does Logic Pac screen for before the pack ships?',
    answer: 'On luxury and prestige programs, Logic Pac reviews: SB 54 recyclability treatment of each component against California’s expected classification; FTC Green Guides treatment of any environmental language before print; and Prop 65 screening of substrates, inks, and finish stacks for any listed substance. Deeper regulatory review (MoCRA registration, EU responsible-person requirements, UFLPA diligence) sits with the brand’s own counsel or compliance consultant — we flag where issues may apply and route the finding, but we do not act as regulatory counsel.',
  },
  {
    question: 'Is a certification (FSC, BPI, Cradle-to-Cradle) enough to make a claim?',
    answer: 'A third-party certification helps substantiate the specific claim it covers — nothing more. FSC chain-of-custody supports "FSC-certified paper." It does not support "sustainable packaging." BPI compostable certification supports "industrially compostable where facilities exist." It does not support "compostable" without that qualifier. Pair the certification with precise language: what, where, how it was verified. Vague halo claims around a specific cert are the pattern that triggers greenwashing enforcement.',
  },
  {
    question: 'How often do these regulations change?',
    answer: 'Material changes to published rules usually come annually or at defined compliance dates (e.g., SB 54 2027 and 2032 windows, PPWR 2026 and 2030 phases). Guidance documents, enforcement interpretations, and certification standards update more often — quarterly in some cases. Treat your compliance stack as a living document. The brands that get into trouble read a rule in 2024 and assume it still applies the same way in 2026.',
  },
  {
    question: 'Can we treat UK and EU as the same market?',
    answer: 'No, and increasingly less so. The UK is diverging from EU packaging and claims law post-Brexit. UK EPR for Packaging has its own fees and reporting structure. UK green-claims guidance (CMA) is strict but structured differently from EU ECGT. Treat UK and EU as parallel compliance stacks, not one.',
  },
]

export default function ComplianceClient() {
  const { openModal } = useModal()
  const [activeSection, setActiveSection] = useState('')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    tocSections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const checklistItems = [
    { id: 'c1', title: 'You know which jurisdictions your SKU ships to', body: 'Every market has its own packaging and claims law. A US-only brand carries a smaller stack than a brand selling into EU, UK, and Canada. Map the markets first — everything downstream flows from this.' },
    { id: 'c2', title: 'You have a current claims inventory', body: 'Every environmental, performance, ingredient, and origin claim on the pack, website, PDP, and advertising is written down with its supporting evidence. "Clean," "sustainable," "natural," "cruelty-free," and "recyclable" each need their own evidence file.' },
    { id: 'c3', title: 'You know your pack components by substrate and ink', body: 'Primary resin or glass, secondary paperboard grade, inks (soy / UV / solvent), finishes, adhesives, closures, pumps, and labels — each has its own regulatory exposure. Prop 65, CARB, FDA food-contact, and plastic-additive restrictions all live at the component level.' },
    { id: 'c4', title: 'SB 54 recyclability treatment is documented per component', body: 'For California-shipped SKUs, each packaging component has been classified against California’s expected recyclability treatment under SB 54 and SB 343. Vague "recyclable" claims on multi-material packs are the biggest exposure.' },
    { id: 'c5', title: 'Prop 65 screening has been run on substrates and inks', body: 'Any listed substance in a pack component sold in California triggers warning requirements. Nail, hair, and pigment-heavy categories carry the highest exposure. A supplier CoA on each component is the baseline.' },
    { id: 'c6', title: 'FTC Green Guides treatment of every green claim', body: 'The FTC Green Guides apply to any environmental marketing claim nationwide. "Recyclable," "compostable," "recycled content," and "sustainable" each have specific substantiation rules. Compare each on-pack claim against the current Guides before copy ships.' },
    { id: 'c7', title: 'EU PPWR obligations are mapped if any SKU ships to the EU', body: 'EU PPWR covers recyclability by design, recycled content, labeling, reuse targets, and minimization. Timeline obligations ramp through 2026, 2030, 2035, and 2040. The spoke article covers the full obligation set.' },
    { id: 'c8', title: 'MoCRA registration is complete for US cosmetics manufacturing', body: 'MoCRA (2024) requires facility registration and product listing for cosmetics manufacturers and processors shipping into the US. Even brands using contract manufacturers need to confirm who is listed and that listings are current.' },
    { id: 'c9', title: 'Supplier documentation is centralized, not scattered', body: 'FSC chain-of-custody, PCR certifications, migration test reports, Prop 65 compliance letters, and recycled-content declarations live in one folder with version dates — not in email threads. Expect to be asked for them during retailer onboarding, due diligence, and enforcement.' },
    { id: 'c10', title: 'A review cadence is scheduled, not reactive', body: 'The compliance stack is reviewed on a defined cadence (quarterly or at material change) rather than only when a complaint or inquiry lands. Rules shift; your claims need to be re-checked against the current rules, not the ones from the launch brief.' },
  ]
  const progress = Math.round((Object.values(checked).filter(Boolean).length / checklistItems.length) * 100)

  return (
    <>
      <div className="phdr">
        <div className="ey inv">Logic Pac &middot; Claims &amp; Compliance</div>
        <h1>Beauty packaging <em>claims &amp; compliance.</em></h1>
        <p>Twelve overlapping frameworks regulate what a beauty brand can put on a pack, make a claim about, or ship into a given market. Most teams discover this when a retailer asks for documentation or an enforcement letter arrives. This guide is the orientation layer: where to start, which rule applies to which SKU in which market, and where to go deep on each one.</p>
        <div className="phdr-meta">
          <GuideByline />
          <span>19 min read</span>
          <span>Updated October 2026</span>
          <span>Compliance &amp; Launch Planning</span>
        </div>
      </div>

      <div className="guide-wrap compliance-guide">
        <aside className="gtoc">
          <div className="gtoc-label">Contents</div>
          {tocSections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? 'act' : ''}>{s.label}</a>
          ))}
        </aside>

        <div className="guide-main">
          <div className="seo">

            <GuideAnswerSummary
              title="Where do I start on beauty packaging compliance?"
              answer="Start with three variables: where you sell, what you claim, and which pack components are at risk. The combination of those three decides which of the twelve relevant US, EU, and global frameworks apply to your SKU. This guide is the orientation layer that maps each combination to the right framework and routes to the deep operational guides for each one. It is not a substitute for regulatory counsel on high-exposure claims or new-market entry."
              takeaways={[
                'Compliance is not one rule — it is twelve overlapping frameworks that apply differently per SKU and market.',
                'Vague green claims are the single biggest enforcement risk under FTC Green Guides and EU ECGT.',
                'Documentation is more important than certification — keep supplier evidence centralized and current.',
                'Treat your compliance stack as a living document, not a one-time launch deliverable.',
              ]}
            />

            <h2 id="where-start"><span className="num">01.</span>Where to start when the compliance stack feels overwhelming</h2>
            <p>Most beauty founders and brand managers encounter claims and compliance in one of three ways: a retailer onboarding team asks for FSC, PCR, or Prop 65 documentation; an enforcement letter or private suit arrives over a sustainability claim; or a new market (usually the EU) surfaces an obligation set the brand had not planned for. All three happen late — and all three are preventable if the compliance stack is mapped at concept stage.</p>
            <p>The problem is not that compliance is hard. The problem is that there are twelve relevant frameworks and no single resource that tells a brand which ones apply to which SKU in which market. This guide is that resource. It will not tell you how to pass an SB 54 audit (the <Link href="/blog/sb54-packaging-compliance-beauty">SB 54 operational walkthrough</Link> does that). It will not explain the full EU PPWR timeline (the <Link href="/blog/eu-ppwr-packaging-requirements-beauty">EU PPWR requirements article</Link> does that). It will tell you which of those two — or which of the other ten frameworks — you need to open first.</p>

            <div className="inside-card">
              <div className="label">What&apos;s Inside</div>
              <ol>
                <li>The 3-variable decision tree that maps your SKU to the frameworks that apply</li>
                <li>Brief orientation on each of the 12 US, EU, and global frameworks relevant to beauty packaging</li>
                <li>Which third-party certifications substantiate which specific claims (and which do not)</li>
                <li>Pack-component risk map — primary, secondary, inks, substrates, labels, closures</li>
                <li>Who inside the brand should own which part of the compliance stack</li>
                <li>What Logic Pac screens before a pack ships vs. where you need outside counsel</li>
                <li>A 10-item compliance-readiness scorecard to run before every launch</li>
              </ol>
            </div>

            <Image src="/images/guides/beauty-packaging-compliance/hero-clinical-skincare.jpg" alt="A clinical beauty packaging program whose claims and labeling were reviewed against FDA, SB 54, and FTC Green Guides before print" width={1600} height={1200} className="guide-img" sizes="(max-width: 960px) 100vw, 750px" />

            <h2 id="decision-tree"><span className="num">02.</span>The 3-variable decision tree</h2>
            <p>Three variables decide which frameworks apply. Answer them for every SKU — not every brand, every SKU. One brand can carry three different compliance stacks across its line.</p>

            <h3>Variable 1 — Where you sell</h3>
            <ul>
              <li><strong>California:</strong> SB 54 (packaging EPR), SB 343 (Truth in Recycling), Prop 65 (hazard warnings), CARB (VOC/formaldehyde in some product categories).</li>
              <li><strong>Other US states:</strong> state EPR laws now exist or are in progress in Oregon, Colorado, Maine, Washington, Minnesota, and others — each with its own fee structure and reporting cadence. FDA cosmetics labeling (21 CFR 701) and MoCRA apply nationwide.</li>
              <li><strong>EU (any member state):</strong> PPWR (packaging and packaging waste regulation), ECGT (Green Claims Directive restrictions on environmental marketing), Responsible Person requirements for cosmetics, country-level EPR fees.</li>
              <li><strong>UK:</strong> UK EPR for Packaging, CMA green-claims guidance, UK Cosmetics Regulation — parallel to but no longer identical to the EU.</li>
              <li><strong>Global supply chain regardless of sell market:</strong> UFLPA (forced-labor diligence for US imports), GHS (hazard labeling where applicable).</li>
            </ul>

            <h3>Variable 2 — What you claim</h3>
            <ul>
              <li><strong>Environmental claims</strong> (recyclable, PCR %, compostable, refillable, carbon-neutral, biodegradable, sustainable, eco, green): triggered by FTC Green Guides nationwide, SB 343 in California, ECGT in EU, CMA in UK.</li>
              <li><strong>Performance claims</strong> (clinically proven, dermatologist-tested, hypoallergenic, non-comedogenic): require substantiation evidence files and are increasingly enforcement targets.</li>
              <li><strong>Ingredient or origin claims</strong> (clean, natural, cruelty-free, vegan, Made in [country]): triggered by FTC origin rules, state attorney-general enforcement, private suits, and ingredient-list rules under 21 CFR 701.3.</li>
              <li><strong>Certification claims</strong> (FSC, BPI, Cradle-to-Cradle, Leaping Bunny): governed by the certifying body’s rules; false or expired cert use is independent enforcement risk.</li>
            </ul>

            <h3>Variable 3 — Which pack component carries the risk</h3>
            <ul>
              <li><strong>Primary pack</strong> (bottles, jars, tubes, droppers): formula-contact migration, FDA food-contact or cosmetic-contact rules, Prop 65 for pigments or plasticizers, PCR food-contact restrictions.</li>
              <li><strong>Secondary pack</strong> (cartons, rigid boxes, sleeves): FSC chain-of-custody if certified paper is claimed, recyclability treatment under SB 54 and PPWR, substrate-level Prop 65 for inks and coatings.</li>
              <li><strong>Inks, coatings, adhesives:</strong> Prop 65, migration, deinking impact on recyclability.</li>
              <li><strong>Labels:</strong> adhesive-paper or film mono-material compliance, mandatory consumer-information fields under 21 CFR 701, EU responsible-person label, UK responsible-person label.</li>
              <li><strong>Closures, pumps, droppers:</strong> food-contact or cosmetic-contact grade, Prop 65 for metal plating or elastomers, child-resistant requirements for certain actives.</li>
            </ul>

            <div className="callout">
              <p><strong>How to use the three variables.</strong> Build a one-page matrix per SKU with the three variables as rows. Every cell either names an applicable framework or is blank. Blanks are safe; filled cells are the compliance stack you have to manage. Logic Pac routinely builds this matrix during the brief phase on retail-bound beauty programs — it decides which spokes get opened and in what order.</p>
            </div>

            <h2 id="us-frameworks"><span className="num">03.</span>US regulatory frameworks</h2>

            <h3>SB 54 — California Plastic Pollution Prevention and Packaging Producer Responsibility Act</h3>
            <p>Extended producer responsibility law covering single-use packaging sold in California. Requires covered packaging to meet recycling, source-reduction, and recycled-content targets through 2032. The practical impact for beauty: mono-material recyclable packaging and recycled content become increasingly expected; multi-material cartons, mixed-resin pumps, and non-recyclable laminates become increasingly expensive to defend. For the operational walkthrough including the 2027 window and 5-step action plan, see the <Link href="/blog/sb54-packaging-compliance-beauty">SB 54 packaging compliance for beauty brands article</Link>.</p>

            <h3>SB 343 — California Truth in Recycling</h3>
            <p>Restricts the use of the chasing-arrows symbol and "recyclable" claims to materials that are actually recycled at scale in California. In effect 2026. A pack component labeled "recyclable" that does not meet SB 343’s recovery-rate threshold cannot carry the chasing-arrows symbol when sold in California. Pair with FTC Green Guides for the broader "recyclable" claim treatment.</p>

            <h3>California Prop 65 — Safe Drinking Water and Toxic Enforcement Act</h3>
            <p>Requires warnings on products containing any of ~1,000 listed substances sold in California, including plasticizers, pigment compounds, nickel, lead, certain phthalates, and formaldehyde releasers. Common packaging exposure: inks, metallic finishes, closures with metal plating, certain adhesives. Warning requirements are triggered by presence above safe-harbor levels — enforcement is heavily private-right-of-action driven. Supplier CoA on each component is the baseline documentation. Logic Pac screens substrates, inks, and finish stacks on luxury programs; actives/formula screening sits with the brand or formulator.</p>

            <h3>CARB — California Air Resources Board</h3>
            <p>VOC and formaldehyde restrictions on certain consumer product categories, hairspray, nail products, and some aerosols. Not typically a packaging issue — but packaging-adjacent for composite wood (unlikely in beauty), certain coatings, and some label adhesives. Confirm with suppliers for any affected categories.</p>

            <h3>FTC Green Guides</h3>
            <p>Federal Trade Commission guidance on environmental marketing claims. Nationwide applicability to any advertised or on-pack environmental claim. Covers general claims ("eco-friendly," "sustainable" — both discouraged as unqualified), recyclable, compostable, degradable, recycled content, renewable materials, carbon offsets. The Guides are being updated — brands should check the current version at the FTC site. For the broader claims-hygiene framework (specific, substantiated, jurisdictionally safe), see the <Link href="/guides/sustainable-beauty-packaging">Sustainable Beauty Packaging Playbook</Link>.</p>

            <h3>FDA cosmetics labeling — 21 CFR 701</h3>
            <p>Baseline federal rule for every cosmetic sold in the US. Requires identity, net quantity, ingredient declaration in descending order of concentration (with exceptions for fragrance/trade-secret), name and place of business, country of origin, and specific warning statements for certain product categories. 21 CFR 701.3 governs ingredient listing. Non-compliance is a per-unit misbranding violation — highly enforceable and routinely cited in retailer scorecards.</p>

            <h3>MoCRA — Modernization of Cosmetics Regulation Act</h3>
            <p>Federal update to US cosmetics law, in effect since 2024. Requires facility registration and product listing with the FDA for cosmetic manufacturers and processors; mandates adverse-event reporting; expands FDA authority on recalls; and introduces fragrance-allergen disclosure requirements that phase in. Brands using contract manufacturers must confirm their contract manufacturer is MoCRA-registered and that product listings are current. Not a packaging-specific rule, but packaging labels must support MoCRA requirements where they intersect (fragrance allergen disclosure in particular).</p>

            <h2 id="eu-frameworks"><span className="num">04.</span>EU &amp; UK regulatory frameworks</h2>

            <h3>EU PPWR — Packaging and Packaging Waste Regulation</h3>
            <p>Replaces the previous Directive. Direct regulation (not transposed), so obligations apply uniformly across EU member states. Covers recyclability-by-design, recycled-content targets for plastic packaging, reuse and refill targets for certain packaging types, labeling requirements, and material-minimization rules. Timeline obligations ramp through 2026 (general applicability), 2030 (design for recycling and first recycled-content targets), 2035 (recyclable at scale), and 2040 (higher recycled-content targets). For the full obligation set and timeline, see the <Link href="/blog/eu-ppwr-packaging-requirements-beauty">EU PPWR packaging requirements for beauty brands article</Link>.</p>

            <h3>EU ECGT — Empowering Consumers for the Green Transition Directive</h3>
            <p>Member states transpose into national law; restrictions apply to environmental marketing claims. Material-level restrictions on generic claims ("environmentally friendly," "climate neutral," "eco," "green"), unverified sustainability labels, and claims about future environmental performance without a credible plan. Brands selling into any EU market need a substantiation file for every environmental claim and should assume aggressive national enforcement.</p>

            <h3>EU Cosmetics Regulation + Responsible Person</h3>
            <p>EU 1223/2009 governs cosmetics sold in the EU. Requires a Responsible Person (RP) based in the EU with a specific set of obligations including maintaining the Product Information File. The RP’s name and EU address must appear on the pack. Brands without an EU presence usually appoint a specialist RP service. The RP is the enforcement point for pack labeling, CPNP notification, and claim substantiation.</p>

            <h3>UK EPR for Packaging + UK Cosmetics Regulation</h3>
            <p>Post-Brexit, UK diverges from EU on packaging law. UK EPR for Packaging introduces producer fees and reporting independent of EU. UK Cosmetics Regulation (based on EU 1223/2009 but amended) requires a UK Responsible Person separate from the EU RP. UK CMA has issued strict green-claims guidance that is similar in spirit to ECGT but structured differently — treat as a parallel compliance stack.</p>

            <h2 id="global-frameworks"><span className="num">05.</span>Global &amp; cross-jurisdiction</h2>

            <h3>UFLPA — Uyghur Forced Labor Prevention Act</h3>
            <p>US law creating a rebuttable presumption that goods made in whole or in part in the Xinjiang region are made with forced labor and therefore barred from US import. Enforcement happens at Customs. For beauty packaging, the exposure is usually indirect — cotton used in some packaging inserts, polysilicon in certain aluminum supply chains, specific pigment supply chains. Diligence sits with the brand’s legal and procurement functions; packaging suppliers must be able to produce supply-chain traceability on request.</p>

            <h3>GHS — Globally Harmonized System of Classification and Labelling of Chemicals</h3>
            <p>Hazard classification and labeling standard adopted by most major markets. Applies to packaging when the finished cosmetic product itself is classified as hazardous for transport, or for certain B2B packaging. Not typically on the finished beauty-product label — but required on shippers in some cases, particularly for aerosols and flammable products.</p>

            <h3>Country-level cosmetics regulation outside US / EU / UK</h3>
            <p>Canada (Health Canada, CCPA for marketing), Australia (TGA for therapeutic goods, ACCC for marketing), Japan, South Korea, China (NMPA registration), Brazil (ANVISA), Mexico (COFEPRIS), and others each have cosmetics regimes. Brands planning multi-market launches should treat each new market as its own compliance workstream with 4–6 months of lead time for registration where applicable.</p>

            <h2 id="certifications"><span className="num">06.</span>Third-party certifications worth specifying</h2>
            <p>A certification is not a license to claim — it is evidence for a specific claim. The pattern that causes trouble is using a certification badge to imply a broader halo than the certification actually covers. Pair each cert with precise language.</p>

            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Certification</th>
                    <th>What it actually substantiates</th>
                    <th>What it does NOT substantiate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>FSC chain-of-custody</td><td>Specific paper component sourced from FSC-certified forest</td><td>"Sustainable packaging" overall; recyclability; carbon footprint</td></tr>
                  <tr><td>BPI compostable</td><td>Industrially compostable where facilities exist</td><td>"Compostable" without the industrial-facility qualifier; home compostable</td></tr>
                  <tr><td>TUV Austria OK Compost HOME</td><td>Home compostable under the specified test regime</td><td>Carbon footprint; recyclability</td></tr>
                  <tr><td>Cradle-to-Cradle</td><td>Material health, circularity, and defined criteria at the certification level earned</td><td>Specific claim unless language mirrors the certification scope</td></tr>
                  <tr><td>PCR third-party verification (ISCC, GRS, UL)</td><td>Specific PCR percentage in a defined component</td><td>Overall brand sustainability; recyclability</td></tr>
                  <tr><td>Leaping Bunny / cruelty-free certs</td><td>Supply chain audit of animal-testing policy at defined scope</td><td>Vegan status; "clean" positioning</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <p><strong>Logic Pac approach.</strong> We specify certifications component by component (FSC on the paper, verified PCR on the resin) rather than at the brand level — and we write claim language that stays inside the certification’s scope. For the fuller certifications map and the Claims Hygiene Framework (specific/substantiated/jurisdictionally safe), see the <Link href="/guides/sustainable-beauty-packaging">Sustainable Beauty Packaging Playbook</Link>.</p>
            </div>

            <h2 id="component-risk"><span className="num">07.</span>Pack-component risk map</h2>
            <p>Compliance risk lives at the component level, not the SKU level. A premium outer carton on an unregulated substrate carries different exposure than the primary bottle it holds. Use this map to pressure-test each component before tooling or print.</p>

            <h3>Primary pack</h3>
            <ul>
              <li>Formula-contact migration (if plastic): FDA cosmetic-contact grade for US; cosmetics contact for EU under 1223/2009.</li>
              <li>Prop 65: pigments, phthalate-containing plastics, nickel-plated closures.</li>
              <li>PCR with formula contact: regulatory recognition varies — verify FDA letter of no objection for food-contact-adjacent uses; PCR for cosmetic contact has broader latitude but still needs supplier documentation.</li>
              <li>SB 54 and PPWR recyclability: resin identity, cap/pump compatibility with the recycling stream, label removability.</li>
            </ul>

            <h3>Secondary pack</h3>
            <ul>
              <li>FSC chain-of-custody if "FSC-certified paper" is claimed; cannot be assumed from recycled paper or "sustainably sourced" supplier marketing.</li>
              <li>SB 54 and PPWR recyclability: single-material paperboard is easier to defend than mixed-material or foiled stock.</li>
              <li>Prop 65: inks and coatings. Dark navy inks and metallic finishes have higher historical exposure.</li>
              <li>EU and UK labeling: Responsible Person address visible on-pack per EU 1223/2009 and UK Cosmetics Regulation.</li>
            </ul>

            <h3>Inks, coatings, adhesives</h3>
            <ul>
              <li>Prop 65 for California.</li>
              <li>Deinking performance for recyclability under SB 54 and PPWR — heavy inks and UV coatings can reduce recyclability of the substrate.</li>
              <li>Food-contact or cosmetic-contact migration if any adhesive touches the primary pack interior.</li>
            </ul>

            <h3>Labels</h3>
            <ul>
              <li>Mandatory consumer-information fields under 21 CFR 701 (US), EU 1223/2009 (EU), UK Cosmetics Regulation (UK).</li>
              <li>MoCRA fragrance allergen disclosure as it phases in.</li>
              <li>Adhesive and material compatibility with substrate recycling.</li>
            </ul>

            <h3>Closures, pumps, droppers</h3>
            <ul>
              <li>Cosmetic-contact grade for formula compatibility.</li>
              <li>Prop 65 for metal plating, elastomers, specific plastic grades.</li>
              <li>Child-resistant requirements for certain actives (e.g., some retinoids, menthol-heavy formulations in certain jurisdictions).</li>
            </ul>

            <figure className="guide-images-grid">
              <Image src="/images/guides/beauty-packaging-compliance/mono-material-claim.jpg" alt="Mono-material packaging in color variants selected for recyclability treatment" width={1600} height={1131} sizes="(max-width: 960px) 100vw, 475px" />
              <Image src="/images/guides/beauty-packaging-compliance/fsc-paper-cartons.jpg" alt="KIKI World FSC-eligible folding cartons laid flat with barcode and content panels" width={1600} height={1200} sizes="(max-width: 960px) 100vw, 475px" />
            </figure>
            <p className="guide-img-caption">Mono-material and FSC-certified paperboard are two of the most defensible packaging choices on current US and EU recyclability trajectories — each carries its own evidence and claim language requirements.</p>

            <h2 id="ownership"><span className="num">08.</span>Who owns compliance inside your brand</h2>
            <p>On early-stage beauty brands, compliance usually sits with the founder by default — which means it does not get owned at all until a problem surfaces. On scaling brands, a clear ownership map prevents the common failure of each function assuming another function is handling the stack.</p>

            <h3>Suggested RACI</h3>
            <div className="guide-tbl-wrap">
              <table className="guide-tbl">
                <thead>
                  <tr>
                    <th>Compliance area</th>
                    <th>Owner</th>
                    <th>Consult</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>FDA 21 CFR 701 labeling, MoCRA registration</td><td>Regulatory / QA</td><td>Marketing, contract manufacturer, outside counsel</td></tr>
                  <tr><td>FTC Green Guides, ECGT, CMA green-claims review</td><td>Marketing / Legal</td><td>Packaging partner, outside counsel</td></tr>
                  <tr><td>SB 54, SB 343, EU PPWR packaging obligations</td><td>Operations / Packaging</td><td>Legal, EPR consultant, Logic Pac</td></tr>
                  <tr><td>Prop 65 substrate / ink / closure screening</td><td>Operations / Packaging</td><td>Logic Pac, suppliers, outside counsel on actives</td></tr>
                  <tr><td>EU and UK Responsible Person labeling</td><td>Regulatory</td><td>Specialist RP service, legal</td></tr>
                  <tr><td>UFLPA supply-chain diligence</td><td>Legal / Procurement</td><td>Packaging and formula suppliers, outside counsel</td></tr>
                  <tr><td>Certification chain-of-custody (FSC, BPI, C2C)</td><td>Packaging / Marketing</td><td>Certifying body, Logic Pac</td></tr>
                </tbody>
              </table>
            </div>

            <h3>What Logic Pac does vs. where outside counsel is appropriate</h3>
            <p>Logic Pac runs three specific pre-print reviews on luxury and prestige programs: SB 54 recyclability treatment per component, FTC Green Guides treatment of any environmental language, and Prop 65 screening of substrates, inks, and finish stacks. The approach is detailed in our <Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System guide</Link>. For deeper regulatory work — MoCRA registration, EU responsible-person obligations, UFLPA diligence, enforcement response, or novel-claim defensibility — we route the issue and recommend qualified counsel. Packaging operators are not regulatory counsel and brands that treat them that way take unnecessary risk.</p>

            <GuideBottomLine>
              Beauty packaging compliance is not one rule — it is twelve overlapping frameworks that apply differently per SKU and market. The brands that stay out of trouble map the three variables (where you sell, what you claim, which component is at risk) at concept stage, keep supplier documentation centralized and current, and review the stack on a cadence instead of reacting to inquiries. Logic Pac handles the SB 54, FTC Green Guides, and Prop 65 screening that lives at the packaging layer. The frameworks above the packaging layer sit with the brand’s regulatory, legal, and marketing functions — and above a certain exposure, with outside counsel. This guide is the orientation. The spokes are where the operational work gets done.
            </GuideBottomLine>

            <h2 id="checklist"><span className="num">09.</span>The 10-item compliance-readiness scorecard</h2>
            <p>Run this scorecard once per SKU before the pack goes to print, and again before any new-market launch. If more than two or three items come back with hesitation, the SKU is not launch-ready — it needs a focused compliance workstream before production.</p>

            <div className="checklist-wrap">
              <div className="checklist-progress">
                <div className="checklist-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />
                <span>{Object.values(checked).filter(Boolean).length} of {checklistItems.length} ready &middot; {progress}%</span>
              </div>
              <ul className="checklist">
                {checklistItems.map((item, idx) => (
                  <li key={item.id} className={checked[item.id] ? 'checked' : ''}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={() => setChecked(c => ({ ...c, [item.id]: !c[item.id] }))}
                      />
                      <span className="checklist-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="checklist-body">
                        <strong>{item.title}</strong>
                        <span className="checklist-desc">{item.body}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <section className="sources-section">
              <h2>Deep-dive spokes and related references</h2>
              <p className="sources-lede">This guide is the orientation layer. For the deep operational work in each framework, open the appropriate spoke below.</p>
              <ul className="sources-list">
                <li><Link href="/blog/sb54-packaging-compliance-beauty">SB 54 packaging compliance for beauty brands</Link> — the 2027 window, primary/secondary/tertiary audit, and the 5-step operational action plan.</li>
                <li><Link href="/blog/eu-ppwr-packaging-requirements-beauty">EU PPWR packaging requirements for beauty brands</Link> — full obligation set, 2026/2030/2035/2040 timeline, and PPWR vs SB 54 contrast.</li>
                <li><Link href="/blog/sustainable-beauty-packaging-sb54">Sustainable beauty packaging: what actually works vs greenwashing</Link> — the defensible-claim lens across PCR, FSC, mono-material, and refillable systems.</li>
                <li><Link href="/blog/pcr-packaging-beauty-brands">PCR packaging for beauty brands</Link> — what PCR percentages actually mean, supplier verification, and regulatory recognition.</li>
                <li><Link href="/blog/mono-material-packaging-design">Mono-material packaging design</Link> — the design-engineering spoke for the recyclability-by-design claim.</li>
                <li><Link href="/guides/sustainable-beauty-packaging">Sustainable Beauty Packaging Playbook</Link> — the full Claims Hygiene Framework (specific, substantiated, jurisdictionally safe) and the broader certifications map.</li>
                <li><Link href="/guides/sustainable-packaging-decision-matrix">Sustainable Packaging Decision Matrix</Link> — how to score claim defensibility as one dimension against cost, formula fit, consumer behavior, and MOQ for a specific SKU.</li>
                <li><Link href="/guides/luxury-beauty-packaging-system">Luxury Beauty Packaging System</Link> — the pre-print SB 54, FTC Green Guides, and Prop 65 screening workflow Logic Pac runs on luxury programs.</li>
                <li><Link href="/guides/retail-ready-beauty-packaging">Retail-Ready Beauty Packaging</Link> — how compliance obligations intersect with Sephora, Ulta, and Target vendor-manual requirements.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <section className="guide-faq" id="faq">
        <div className="guide-faq-inner">
          <div className="guide-faq-content">
            <h2>Quick answers</h2>
            <p>Common questions founders and marketing leads ask when they first encounter the compliance stack. For the deeper framework-specific detail, open the spoke articles above.</p>
          </div>
          <FAQSidebar
            eyebrow="FAQ"
            title="Running a Beauty Compliance Program"
            faqs={faqs}
            ctaText="Request a Packaging Audit"
            ctaProjectType="Guide - Compliance Review"
          />
        </div>
      </section>
    </>
  )
}
