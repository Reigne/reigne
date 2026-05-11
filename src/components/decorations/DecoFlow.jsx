export default function DecoFlow() {
  return (
    <div className="deco-flow">
      <span className="flow-label">workflow pipeline</span>
      <div className="flow-row">
        <div className="fnode">CSV</div>
        <div className="farrow" />
        <div className="fnode active">n8n</div>
        <div className="farrow" />
        <div className="fnode">Apollo</div>
        <div className="farrow" />
        <div className="fnode pulse">CRM</div>
      </div>
      <div className="flow-row" style={{ marginTop: 8 }}>
        <div className="fnode">Webhook</div>
        <div className="farrow" />
        <div className="fnode active">Supabase</div>
        <div className="farrow" />
        <div className="fnode pulse">Export</div>
      </div>
    </div>
  )
}
