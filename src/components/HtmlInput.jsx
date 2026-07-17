export const HtmlInput = ({
  htmlInput,
  inputError,
  onInputChange,
  onCheck
}) => {
  const describedBy = inputError === ""
    ? "html-input-help"
    : "html-input-help html-input-error";

  return (
    <section className="section-card input-card" aria-labelledby="input-heading">
      <div className="section-heading">
        <span className="step-marker" aria-hidden="true">1</span>
        <div>
          <h2 id="input-heading">HTML-Code einfügen</h2>
          <p>Füge hier den HTML-Code ein, den du überprüfen möchtest.</p>
        </div>
      </div>

      <form onSubmit={onCheck} noValidate>
        <div className="input-layout">
          <div className="code-input">
            <label htmlFor="html-input">HTML-Code</label>
            <p id="html-input-help" className="field-help">
              Füge einen HTML-Ausschnitt oder den Inhalt einer vollständigen Seite ein.
            </p>
            <textarea
              id="html-input"
              rows="11"
              placeholder={'Zum Beispiel: <img src="bild.jpg" alt="Beschreibung">'}
              value={htmlInput}
              onChange={onInputChange}
              aria-describedby={describedBy}
              aria-invalid={inputError !== "" ? "true" : undefined}
            ></textarea>
            {inputError !== "" && (
              <p id="html-input-error" className="input-error" role="alert">
                <span aria-hidden="true">!</span> {inputError}
              </p>
            )}
          </div>

          <aside className="check-overview" aria-labelledby="overview-heading">
            <div className="overview-title">
              <span aria-hidden="true">i</span>
              <h3 id="overview-heading">Das wird geprüft</h3>
            </div>
            <p>Aktuell prüfen wir vier wichtige Accessibility-Basics:</p>
            <ul>
              <li>Bilder mit alt-Attribut</li>
              <li>Beschriftete Formularfelder</li>
              <li>Verständlich benannte Buttons</li>
              <li>Vorhandene h1-Überschrift</li>
            </ul>
          </aside>
        </div>

        <button className="primary-button" type="submit">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="6"></circle>
            <path d="m16 16 4 4"></path>
          </svg>
          HTML prüfen
        </button>
      </form>
    </section>
  );
};
