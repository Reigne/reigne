export default function DecoFlow() {
  return (
    <div className="deco-flow">
      <span className="flow-label">workflow pipeline</span>

      <div className="flow-pipeline">
        <div className="flow-row">
          <div className="fnode">CSV</div>
          <div className="farrow" />
          <div className="fnode active">n8n</div>
          <div className="farrow" />
          <div className="fnode">Apollo</div>
          <div className="farrow" />
          <div className="fnode pulse">CRM</div>
        </div>
        <div className="flow-packet" aria-hidden="true" />
      </div>

      <div className="flow-pipeline">
        <div className="flow-row">
          <div className="fnode">Webhook</div>
          <div className="farrow" />
          <div className="fnode active">Supabase</div>
          <div className="farrow" />
          <div className="fnode pulse">Export</div>
        </div>
        <div className="flow-packet" aria-hidden="true" />
      </div>
    </div>
  )
}
