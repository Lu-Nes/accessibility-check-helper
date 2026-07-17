export const checkMissingAlt = (document) => {
  const images = [...document.querySelectorAll("img")];
  const imagesWithoutAlt = images.filter((image) => !image.hasAttribute("alt"));

  if (imagesWithoutAlt.length === 0) {
    return {
      ruleName: "Bilder mit alt-Attribut",
      status: "success",
      explanation: "Alle Bilder besitzen ein alt-Attribut.",
      recommendation: "Für dekorative Bilder kann das alt-Attribut leer bleiben."
    };
  }

  return {
    ruleName: "Bilder mit alt-Attribut",
    status: "error",
    explanation: imagesWithoutAlt.length === 1
      ? "Ein Bild besitzt kein alt-Attribut."
      : `${imagesWithoutAlt.length} Bilder besitzen kein alt-Attribut.`,
    recommendation: "Ergänze für jedes Bild ein passendes alt-Attribut."
  };
};
