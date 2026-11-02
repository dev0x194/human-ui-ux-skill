import { useState } from 'react';
import './App.css';

type Priority = { id: number; time: string; title: string; detail: string };
const priorities: Priority[] = [
  { id: 1, time: '09:00', title: 'Shape the product story', detail: 'Make the promise useful and specific.' },
  { id: 2, time: '11:30', title: 'Try the real interaction', detail: 'Test the flow before styling the edges.' },
  { id: 3, time: '15:00', title: 'Send the first iteration', detail: 'A complete small improvement beats a perfect mockup.' },
];

export default function App() {
  const [done, setDone] = useState<number[]>([1]);
  const [subscribed, setSubscribed] = useState(false);
  const progress = Math.round((done.length / priorities.length) * 100);
  function toggle(id: number) {
    setDone((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
  }

  return (
    <div className="site">
      <header className="header shell">
        <a className="logo" href="#top" aria-label="Daymark, home">daymark<span>.</span></a>
        <nav aria-label="Main navigation" className="nav"><a href="#how">How it works</a><a href="#preview">Preview</a></nav>
        <a className="header-link" href="#preview">See the app <span aria-hidden="true">↗</span></a>
      </header>
      <main id="top">
        <section className="hero shell" aria-labelledby="headline">
          <div className="intro">
            <p className="eyebrow"><span className="signal" /> A PLACE FOR YOUR REAL PRIORITIES</p>
            <h1 id="headline">Make room for <em>important.</em></h1>
            <p className="lede">Daymark gives your day a little structure without turning every moment into a metric. Pick three priorities and get on with the work.</p>
            <div className="actions"><a className="button" href="#preview">Try the daily view <span aria-hidden="true">→</span></a><span className="quiet">No account required for this demo</span></div>
          </div>
          <section className="board" id="preview" aria-label="Interactive daily planner preview">
            <div className="board-head"><div><span className="mini-label">YOUR DAILY BOARD</span><h2>Keep today simple.</h2></div><span className="count">{done.length} of {priorities.length}</span></div>
            <div className="meter" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Priorities completed"><span style={{ width: `${progress}%` }} /></div>
            <ul className="priorities">{priorities.map((p) => <li key={p.id}>
              <label className="priority"><input type="checkbox" checked={done.includes(p.id)} onChange={() => toggle(p.id)} /><span className="checkmark" aria-hidden="true">✓</span><span className="priority-copy"><strong className={done.includes(p.id) ? 'completed' : ''}>{p.title}</strong><small>{p.detail}</small></span><span className="time">{p.time}</span></label>
            </li>)}</ul>
            <p className="board-foot" aria-live="polite">{done.length === priorities.length ? 'All set. The rest of the day is yours.' : `${priorities.length - done.length} priorities left. One thing at a time.`}</p>
          </section>
        </section>
        <section className="explain shell" id="how"><span className="mini-label">A DIFFERENT KIND OF PRODUCTIVITY</span><div><h2>Less managing.<br />More doing.</h2><p>Not another colorful dashboard to maintain. Just a thoughtful place to decide what gets your attention today.</p></div></section>
        <section className="closing shell" aria-label="Demo status"><p>{subscribed ? 'You’re on the demo list. (Local preview only.)' : 'Want to see more of the Daymark idea?'}</p><button type="button" onClick={() => setSubscribed(true)} disabled={subscribed}>{subscribed ? 'Added ✓' : 'Count me interested'} </button></section>
      </main>
      <footer className="footer shell"><span>DAYMARK / A CONCEPT PRODUCT</span><span>DESIGNED WITH INTENT, NOT TEMPLATES</span></footer>
    </div>
  );
}
