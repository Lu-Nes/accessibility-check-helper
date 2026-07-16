import { checkMissingAlt } from "./checkMissingAlt";
import { checkMissingLabels } from "./checkMissingLabels";
import { checkEmptyButtons } from "./checkEmptyButtons";
import { checkMissingH1 } from "./checkMissingH1";

export const runAccessibilityChecks = (htmlInput) => {
  const preparedHtml = htmlInput.trim();
  const parser = new DOMParser();
  const document = parser.parseFromString(preparedHtml, "text/html");

  return [
    checkMissingAlt(document),
    checkMissingLabels(document),
    checkEmptyButtons(document),
    checkMissingH1(document)
  ];
};
