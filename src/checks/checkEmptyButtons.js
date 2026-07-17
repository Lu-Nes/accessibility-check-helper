const unclearNames = ["button", "klick", "hier", "click", "click here"];

const normalizeName = (name) => name.trim().replace(/\s+/g, " ").toLowerCase();

const getAriaLabelledbyName = (button, document) => {
  const referencedIds = (button.getAttribute("aria-labelledby") || "")
    .trim()
    .split(/\s+/)
    .filter((id) => id !== "");

  return referencedIds
    .map((id) => document.getElementById(id)?.textContent || "")
    .join(" ");
};

const getButtonName = (button, document) => {
  const ariaLabel = (button.getAttribute("aria-label") || "").trim();

  if (ariaLabel !== "") {
    return ariaLabel;
  }

  const labelledbyName = getAriaLabelledbyName(button, document);

  if (labelledbyName.trim() !== "") {
    return labelledbyName;
  }

  if (button.tagName === "INPUT") {
    return button.value;
  }

  return button.textContent || "";
};

export const checkEmptyButtons = (document) => {
  const buttons = [...document.querySelectorAll(
    'button, input[type="button"], input[type="submit"], input[type="reset"]'
  )];
  const unclearButtons = buttons.filter((button) => {
    const normalizedName = normalizeName(getButtonName(button, document));

    return normalizedName === "" || unclearNames.includes(normalizedName);
  });

  if (unclearButtons.length === 0) {
    return {
      ruleName: "Verständlich benannte Buttons",
      status: "success",
      explanation: "Alle geprüften Buttons besitzen eine verständliche Benennung.",
      recommendation: "Behalte eindeutige, handlungsbezogene Button-Benennungen bei."
    };
  }

  return {
    ruleName: "Verständlich benannte Buttons",
    status: "error",
    explanation: unclearButtons.length === 1
      ? "Ein Button ist leer oder unverständlich benannt."
      : `${unclearButtons.length} Buttons sind leer oder unverständlich benannt.`,
    recommendation: "Gib jedem betroffenen Button eine eindeutige Benennung, die seine Funktion beschreibt."
  };
};
