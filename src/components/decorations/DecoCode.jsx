export default function DecoCode() {
  return (
    <div className="deco-code">
      <span className="cl"><span className="ck">const</span> <span className="cv">build</span> = <span className="ck">async</span> () =&gt; {'{'}</span>
      <span className="cl ind"><span className="ck">const</span> {'{ data }'} = <span className="ck">await</span> supabase</span>
      <span className="cl ind2">.from(<span className="cs">&apos;leads&apos;</span>)</span>
      <span className="cl ind2">.select(<span className="cs">&apos;*&apos;</span>).eq(<span className="cs">&apos;status&apos;</span>, <span className="cs">&apos;active&apos;</span>)</span>
      <span className="cl ind"><span className="ck">return</span> {'{ success: '}<span className="cb">true</span>{', count: data.length }'}<span className="cursor" /></span>
      <span className="cl">{'}'}</span>
    </div>
  )
}
