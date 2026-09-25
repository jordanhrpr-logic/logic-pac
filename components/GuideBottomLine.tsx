export default function GuideBottomLine({ children }: { children: React.ReactNode }) {
  return (
    <section className="guide-bottom-line" aria-labelledby="guide-bottom-line-title">
      <h2 id="guide-bottom-line-title">Bottom line</h2>
      <p>{children}</p>
    </section>
  )
}
