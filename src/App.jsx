import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Accessibility Check Helper</h1>

      <section className="input-section">
        <h2>HTML-Code prüfen</h2>

        <label htmlFor="html-input">HTML-Code eingeben</label>

        <textarea
          id="html-input"
          rows="8"
          placeholder="Füge hier deinen HTML-Code ein"
        ></textarea>

        <button>HTML prüfen</button>
      </section>

      <section className="result-section">
        <h2>Ergebnisse</h2>

        <p className="result-placeholder">
          Füge HTML-Code ein und starte die Prüfung, um Ergebnisse zu sehen.
        </p>
      </section>
    </main>
  );
}

export default App;