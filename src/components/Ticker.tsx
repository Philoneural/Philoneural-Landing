const ITEMS = [
  'Trusted Intelligence',
  'Built Right',
  'AI-Native Software',
  'Custom Architecture',
  'No Black Boxes',
  'Full-Stack Intelligence',
  'From Idea to Deploy',
  'Honest by Design',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
