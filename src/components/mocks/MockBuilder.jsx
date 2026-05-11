export default function MockBuilder() {
  return (
    <div className="mock">
      <div className="mock-bar">
        <div className="dots"><span className="r" /><span className="y" /><span className="g" /></div>
        <div className="url">quickform.io / builder</div>
      </div>
      <div className="mock-body">
        <div className="mock-builder">
          <div className="mock-canvas">
            <div className="mock-field"><div className="lbl">First Name</div><div className="ctrl" /></div>
            <div className="mock-field focus"><div className="lbl">Email</div><div className="ctrl" /></div>
            <div className="mock-field"><div className="lbl">Company</div><div className="ctrl" /></div>
            <div className="mock-field"><div className="lbl">Message</div><div className="ctrl" style={{ height: 36 }} /></div>
          </div>
          <div className="mock-palette">
            <div className="blk">Input</div>
            <div className="blk">Select</div>
            <div className="blk">Date</div>
            <div className="blk">File</div>
            <div className="blk">CTA</div>
          </div>
        </div>
      </div>
    </div>
  )
}
