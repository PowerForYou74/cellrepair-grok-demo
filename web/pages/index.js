import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('');
  const [api, setApi] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/health').then(r=>r.json()).then(setApi).catch(()=>{});
  }, []);
  async function send() {
    const r = await fetch('http://localhost:8000/demo', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({text: msg})
    });
    const j = await r.json();
    alert(`Antwort: ${j.message}\nConfidence: ${j.confidence}\nAgents: ${j.agents_used}\nRouting: ${j.routing}`);
  }
  return (
    <main style={{fontFamily: 'Inter, system-ui, sans-serif', padding: 24, color: '#e5e7eb', background: '#0b0f14', minHeight: '100vh'}}>
      <h1 style={{fontSize: 28, marginBottom: 8}}>CellRepair.ai — Grok Demo</h1>
      <p style={{opacity: .8, marginBottom: 16}}>API Health: {api ? 'OK' : '…'}</p>
      <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Frag die Demo…" rows={4}
        style={{width:'100%', maxWidth:700, padding:12, borderRadius:12, border:'1px solid #1f2937', background:'#0f1620', color:'#e5e7eb'}} />
      <div style={{height:12}} />
      <button onClick={send} style={{background:'#0EA5E9', color:'#0b0f14', padding:'10px 16px', borderRadius:12, border:'none', fontWeight:700}}>Senden</button>
      <div style={{height:24}} />
      <img src="/logo.svg" alt="Logo" width="96" height="96" />
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');`}</style>
    </main>
  );
}
