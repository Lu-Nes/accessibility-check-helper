export const checkMissingH1 = (document) => {
  if (document.querySelector("h1") !== null) {
    return {
      ruleName: "Vorhandene h1-Überschrift",
      status: "success",
      explanation: "Mindestens eine h1-Überschrift ist vorhanden.",
      recommendation: "Verwende die h1-Überschrift weiterhin für das Hauptthema der Seite."
    };
  }

  return {
    ruleName: "Vorhandene h1-Überschrift",
    status: "error",
    explanation: "Es ist keine h1-Überschrift vorhanden.",
    recommendation: "Ergänze eine h1-Überschrift für das Hauptthema der Seite."
  };
};
