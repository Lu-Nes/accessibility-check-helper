import { useState } from "react";
import "./App.css";
import { runAccessibilityChecks } from "./checks/runAccessibilityChecks";

function App() {
  const [htmlInput, setHtmlInput] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [checkResults, setCheckResults] = useState([]);

  const handleCheckHtml = () => {
    if (htmlInput.trim() === "") {
      setFeedbackMessage("Bitte gib zuerst HTML-Code ein.");
      setCheckResults([]);
      return;
    }

    const results = runAccessibilityChecks(htmlInput);

    setFeedbackMessage("");
    setCheckResults(results);
  };

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
          value={htmlInput}
          onChange={(event) => setHtmlInput(event.target.value)}
        ></textarea>

        <button type="button" onClick={handleCheckHtml}>HTML prüfen</button>
      </section>

      <section className="result-section">
        <h2>Ergebnisse</h2>

        {feedbackMessage !== "" ? (
          <p className="result-placeholder">{feedbackMessage}</p>
        ) : checkResults.length > 0 ? (
          <ul>
            {checkResults.map((result) => (
              <li key={result.ruleName}>
                <h3>{result.ruleName}</h3>
                <p>Status: {result.status}</p>
                <p>{result.explanation}</p>
                <p>{result.recommendation}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="result-placeholder">
            Füge HTML-Code ein und starte die Prüfung, um Ergebnisse zu sehen.
          </p>
)}
      </section>
    </main>
  );
}

export default App;
