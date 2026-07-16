// Hauptfunktion für die späteren Accessibility-Prüfungen
export const runAccessibilityChecks = (htmlInput) => {
  const preparedHtml = htmlInput.trim();

  return [
    {
      ruleName: "HTML-Eingabe",
      status: "info",
      explanation: "Der HTML-Code wurde für die Prüfung vorbereitet.",
      recommendation:
        `Aktuell enthält die Eingabe ${preparedHtml.length} Zeichen. Als Nächstes werden konkrete Accessibility-Regeln ergänzt.`
    }
  ];
};
