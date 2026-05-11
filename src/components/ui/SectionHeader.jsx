export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="sec-head">
      <span className="sec-eyebrow">{eyebrow}</span>
      {typeof title === 'string' ? (
        <h2 className="sec-title">{title}</h2>
      ) : (
        <h2 className="sec-title">{title}</h2>
      )}
      {copy && <p className="sec-copy">{copy}</p>}
    </div>
  )
}
