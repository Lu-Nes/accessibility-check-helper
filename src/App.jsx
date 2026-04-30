import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Accessibility Check Helper</h1>

      <section className="input-section">
        <h2>HTML-Code prüfen</h2>

        <label htmlFor="html-input">HTML-Code eingeben</label>

        <textarea id="html-input"></textarea>

        <button>HTML prüfen</button>
      </section>

      <section className="result-section">
        <h2>Ergebnisse</h2>

        <p>Noch keine Prüfung gestartet.</p>
      </section>
    </main>
  );
}

export default App;