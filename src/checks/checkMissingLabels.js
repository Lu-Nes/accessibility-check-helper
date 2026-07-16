const excludedInputTypes = ["hidden", "button", "submit", "reset", "image"];

const hasLabelText = (label) => {
  const labelCopy = label.cloneNode(true);

  labelCopy.querySelectorAll("input, select, textarea, button")
    .forEach((formElement) => formElement.remove());

  return labelCopy.textContent.trim() !== "";
};

const hasValidAriaLabelledby = (field, document) => {
  const referencedIds = (field.getAttribute("aria-labelledby") || "")
    .trim()
    .split(/\s+/)
    .filter((id) => id !== "");

  return referencedIds.some((id) => {
    const referencedElement = document.getElementById(id);

    return referencedElement !== null && referencedElement.textContent.trim() !== "";
  });
};

const hasLabel = (field, document) => {
  const fieldId = field.getAttribute("id");
  const hasMatchingLabel = fieldId !== null && fieldId !== "" &&
    [...document.querySelectorAll("label[for]")]
      .some((label) => label.getAttribute("for") === fieldId &&
        hasLabelText(label));
  const wrappingLabel = field.closest("label");
  const hasWrappingLabel = wrappingLabel !== null &&
    hasLabelText(wrappingLabel);
  const hasAriaLabel = (field.getAttribute("aria-label") || "").trim() !== "";

  return hasMatchingLabel || hasWrappingLabel || hasAriaLabel ||
    hasValidAriaLabelledby(field, document);
};

export const checkMissingLabels = (document) => {
  const fields = [...document.querySelectorAll("input, select, textarea")]
    .filter((field) => field.tagName !== "INPUT" ||
      !excludedInputTypes.includes(field.type.toLowerCase()));
  const fieldsWithoutLabel = fields.filter((field) => !hasLabel(field, document));

  if (fieldsWithoutLabel.length === 0) {
    return {
      ruleName: "Beschriftete Formularfelder",
      status: "success",
      explanation: "Alle geprüften Formularfelder besitzen eine zugängliche Beschriftung.",
      recommendation: "Behalte eindeutige Beschriftungen für alle Formularfelder bei."
    };
  }

  return {
    ruleName: "Beschriftete Formularfelder",
    status: "error",
    explanation: `${fieldsWithoutLabel.length} Formularfeld(er) besitzen keine zugängliche Beschriftung.`,
    recommendation: "Verknüpfe jedes betroffene Feld mit einem Label oder einer passenden ARIA-Beschriftung."
  };
};
