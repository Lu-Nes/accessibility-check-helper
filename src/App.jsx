import { useEffect, useState } from "react";
import "./App.css";
import { runAccessibilityChecks } from "./checks/runAccessibilityChecks";
import { AboutToolDialog } from "./components/AboutToolDialog";
import { HtmlInput } from "./components/HtmlInput";
import { ResultList } from "./components/ResultList";
import { Imprint } from "./components/Imprint";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function App() {
  const [htmlInput, setHtmlInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [checkResults, setCheckResults] = useState([]);
  const [checkRunCount, setCheckRunCount] = useState(0);
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const isImprintPage = pathname === "/impressum";
  const isPrivacyPage = pathname === "/datenschutz";
  const isLegalPage = isImprintPage || isPrivacyPage;

  useEffect(() => {
    if (isImprintPage) {
      document.title = "Impressum | Accessibility Check Helper";
    } else if (isPrivacyPage) {
      document.title = "Datenschutz | Accessibility Check Helper";
    } else {
      document.title = "Accessibility Check Helper";
    }
  }, [isImprintPage, isPrivacyPage]);

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

  const handleClearResults = () => {
    setCheckResults([]);
    setCheckRunCount(0);
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
            {isLegalPage ? (
              <a className="header-home-link" href="/">Accessibility Check Helper</a>
            ) : (
              <h1>Accessibility Check Helper</h1>
            )}
            <p>Prüfe einfache Accessibility-Basics in deinem HTML-Code.</p>
          </div>
          {!isLegalPage && <AboutToolDialog />}
        </div>
      </header>

      <main className="app-main">
        {isImprintPage ? (
          <Imprint />
        ) : isPrivacyPage ? (
          <PrivacyPolicy />
        ) : (
          <>
            <HtmlInput
              htmlInput={htmlInput}
              inputError={inputError}
              onInputChange={handleInputChange}
              onCheck={handleCheckHtml}
            />
            <ResultList
              checkResults={checkResults}
              checkRunCount={checkRunCount}
              onClearResults={handleClearResults}
            />
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p><span aria-hidden="true">♡</span> Mit Fokus auf Accessibility entwickelt.</p>
          <nav className="footer-navigation" aria-label="Rechtliche Informationen">
            <a href="/impressum" aria-current={isImprintPage ? "page" : undefined}>Impressum</a>
            <a href="/datenschutz" aria-current={isPrivacyPage ? "page" : undefined}>Datenschutz</a>
          </nav>
          <p>Version 0.1.0 (MVP)</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
