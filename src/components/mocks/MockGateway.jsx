export default function MockGateway() {
  return (
    <div className="mock">
      <div className="mock-bar">
        <div className="dots"><span className="r" /><span className="y" /><span className="g" /></div>
        <div className="url">app.gateway-enrich.io / pipeline</div>
      </div>
      <div className="mock-body">
        <div className="mock-pipe">
          <div className="step active">Upload</div>
          <div className="step active">Apollo</div>
          <div className="step active">Apify</div>
          <div className="step">Export</div>
        </div>
        <div className="mock-table">
          <div className="mock-row"><span className="name">acme-corp.csv</span><span className="tag ok">enriched</span><span className="dur">2.4s</span></div>
          <div className="mock-row"><span className="name">leads-q3.csv</span><span className="tag proc">processing</span><span className="dur">live</span></div>
          <div className="mock-row"><span className="name">outreach.csv</span><span className="tag ok">enriched</span><span className="dur">1.8s</span></div>
          <div className="mock-row"><span className="name">cold-list.csv</span><span className="tag err">2 conflicts</span><span className="dur">—</span></div>
        </div>
      </div>
    </div>
  )
}
