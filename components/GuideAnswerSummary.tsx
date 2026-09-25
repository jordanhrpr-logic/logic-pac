type Props = {
  title: string
  answer: string
  takeaways: string[]
}

export default function GuideAnswerSummary({ title, answer, takeaways }: Props) {
  return (
    <>
      <div className="guide-answer" aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`}>
        <h2 id={`${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`}>{title}</h2>
        <p>{answer}</p>
      </div>
      <div className="blog-takeaways guide-takeaways">
        <h4>What to know</h4>
        <ul>{takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </>
  )
}
