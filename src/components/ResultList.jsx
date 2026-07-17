import { ResultItem } from "./ResultItem";

export const ResultList = ({ checkResults, checkRunCount }) => {
  const hasResults = checkResults.length > 0;
  const issueCount = checkResults.filter((result) => result.status === "error").length;
  let summary = "";

  if (hasResults && issueCount === 0) {
    summary = "Prüfung abgeschlossen: Alle vier Accessibility-Basics sind erfüllt.";
  } else if (issueCount === 1) {
    summary = "Prüfung abgeschlossen: 1 Problem wurde gefunden.";
  } else if (issueCount > 1) {
    summary = `Prüfung abgeschlossen: ${issueCount} Probleme wurden gefunden.`;
  }

  return (
    <section className="section-card result-card" aria-labelledby="results-heading">
      <div className="section-heading result-heading">
        <span className="step-marker result-step" aria-hidden="true">2</span>
        <div>
          <h2 id="results-heading">Ergebnisse</h2>
          <p>Hier siehst du die Auswertung der vier Accessibility-Basics.</p>
        </div>
      </div>

      <p
        className={hasResults
          ? `result-summary result-summary--${issueCount === 0 ? "success" : "error"}`
          : "visually-hidden"}
        aria-live="polite"
        aria-atomic="true"
      >
        {summary}
        {hasResults && checkRunCount > 0 && (
          <span className="visually-hidden"> Prüfdurchlauf {checkRunCount}.</span>
        )}
      </p>

      {hasResults ? (
        <ul className="result-list">
          {checkResults.map((result) => (
            <ResultItem key={result.ruleName} result={result} />
          ))}
        </ul>
      ) : (
        <div className="empty-results">
          <svg className="empty-illustration" viewBox="0 0 120 96" aria-hidden="true" focusable="false">
            <rect x="28" y="15" width="52" height="65" rx="5"></rect>
            <path d="M43 15v-4h22v4M40 33h29M40 44h24M40 55h18"></path>
            <circle cx="78" cy="65" r="15"></circle>
            <path d="m89 76 12 12"></path>
            <path className="spark" d="m17 27 3 3 5-6M95 23l2 3 3-3M14 62h8M18 58v8"></path>
          </svg>
          <h3>Noch keine Prüfung gestartet</h3>
          <p>Füge HTML-Code ein und wähle „HTML prüfen“, um die Ergebnisse hier zu sehen.</p>
        </div>
      )}
    </section>
  );
};
