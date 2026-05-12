export default function DecoCreative() {
  return (
    <div className="deco-creative">
      <div className="cr-blob cr-blob-1" />
      <div className="cr-blob cr-blob-2" />
      <div className="cr-blob cr-blob-3" />

      <div className="cr-board">
        <div className="cr-headline">
          <span className="cr-label">color / motion / story</span>
          <span className="cr-pill">Creative Board</span>
        </div>

        <div className="cr-grid">
          <div className="cr-cell cr-cell-wide">
            <strong>Campaign Visual Direction</strong>
            <span>Rhythm, tone, and composition mapped before production.</span>
          </div>

          <div className="cr-cell">
            <span className="cr-mini-kicker">Mood</span>
            <div className="cr-bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="cr-cell">
            <span className="cr-mini-kicker">Stack</span>
            <div className="cr-tags">
              <span>Edit</span>
              <span>Brand</span>
              <span>Sound</span>
            </div>
          </div>

          <div className="cr-cell cr-cell-palette">
            <span className="cr-mini-kicker">Palette</span>
            <div className="cr-palette">
              <span className="cr-swatch" style={{ background: '#ff7a2a' }} />
              <span className="cr-swatch" style={{ background: '#ffae5c' }} />
              <span className="cr-swatch" style={{ background: '#f7c46b' }} />
              <span className="cr-swatch" style={{ background: '#9ee37d' }} />
              <span className="cr-swatch" style={{ background: '#6aa3ff' }} />
              <span className="cr-swatch" style={{ background: '#ff7ab8' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
