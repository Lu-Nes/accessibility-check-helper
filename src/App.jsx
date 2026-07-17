import { useState } from "react";
import "./App.css";
import { runAccessibilityChecks } from "./checks/runAccessibilityChecks";
import { HtmlInput } from "./components/HtmlInput";
import { ResultList } from "./components/ResultList";

function App() {
  const [htmlInput, setHtmlInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [checkResults, setCheckResults] = useState([]);
  const [checkRunCount, setCheckRunCount] = useState(0);

  const handleInputChange = (event) => {
    setHtmlInput(event.target.value);

    if (inputError !== "") {
      setInputError("");
    }
  };

  const handleCheckHtml = (event) => {
    event.preventDefault();

    if (htmlInput.trim() === "") {
      setInputError("Bitte gib zuerst HTML-Code ein.");
      setCheckResults([]);
      return;
    }

    const results = runAccessibilityChecks(htmlInput);

    setInputError("");
    setCheckResults(results);
    setCheckRunCount((currentCount) => currentCount + 1);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-content">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" focusable="false">
              <circle cx="24" cy="24" r="20"></circle>
              <path d="m14 24 7 7 14-16"></path>
            </svg>
          </span>
          <div>
            <h1>Accessibility Check Helper</h1>
            <p>Prüfe einfache Accessibility-Basics in deinem HTML-Code.</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <HtmlInput
          htmlInput={htmlInput}
          inputError={inputError}
          onInputChange={handleInputChange}
          onCheck={handleCheckHtml}
        />
        <ResultList
          checkResults={checkResults}
          checkRunCount={checkRunCount}
        />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p><span aria-hidden="true">♡</span> Mit Fokus auf Accessibility entwickelt.</p>
          <p>Version 0.1.0 (MVP)</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
