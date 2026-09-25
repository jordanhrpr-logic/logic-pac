export default function VerifiedAsOf({ date = 'September 25, 2026' }: { date?: string }) {
  return (
    <p className="verified-as-of">
      Regulatory and certification sources verified as of <time dateTime="2026-09-25">{date}</time>.
    </p>
  )
}
