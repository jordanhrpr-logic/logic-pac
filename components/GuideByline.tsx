const SEAN_LINKEDIN = 'https://www.linkedin.com/in/sean-klein-75a312235/'

export default function GuideByline() {
  return (
    <span className="guide-byline">
      <span>Written by Sean Klein</span>
      <a
        href={SEAN_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sean Klein on LinkedIn"
        title="Sean Klein on LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M5.34 3.5A1.84 1.84 0 1 1 5.3 7.18a1.84 1.84 0 0 1 .04-3.68ZM3.75 8.65h3.18V19H3.75V8.65Zm5.16 0h3.05v1.42H12c.43-.8 1.47-1.65 3.03-1.65 3.24 0 3.84 2.13 3.84 4.91V19h-3.18v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V19H8.91V8.65Z" />
        </svg>
      </a>
    </span>
  )
}
