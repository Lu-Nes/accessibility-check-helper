const statusDetails = {
  success: {
    label: "Erfüllt",
    symbol: "✓"
  },
  error: {
    label: "Problem gefunden",
    symbol: "!"
  }
};

export const ResultItem = ({ result }) => {
  const status = statusDetails[result.status];

  return (
    <li className={`result-item result-item--${result.status}`}>
      <div className="result-item-header">
        <h3>{result.ruleName}</h3>
        <p className="status-label">
          <span className="status-symbol" aria-hidden="true">{status.symbol}</span>
          {status.label}
        </p>
      </div>
      <p className="result-explanation">{result.explanation}</p>
      <p className="result-recommendation">
        <strong>Empfehlung:</strong> {result.recommendation}
      </p>
    </li>
  );
};
