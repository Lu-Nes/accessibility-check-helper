import { useRef } from "react";

export const AboutToolDialog = () => {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        className="secondary-button header-about-button"
        type="button"
        ref={triggerRef}
        onClick={handleOpen}
      >
        Über das Tool
      </button>

      <dialog
        className="about-dialog"
        ref={dialogRef}
        aria-labelledby="about-dialog-heading"
        onClose={handleClose}
      >
        <div className="about-dialog-content">
          <h2 id="about-dialog-heading">Über den Accessibility Check Helper</h2>
          <p>
            Der Accessibility Check Helper prüft eingefügten HTML-Code automatisch
            auf vier grundlegende Accessibility-Basics.
          </p>
          <p>
            Aktuell werden Bilder, Formularfelder, Buttons und eine h1-Überschrift
            betrachtet.
          </p>
          <p>
            Die Prüfung dient als erste Orientierung. Sie ersetzt weder eine
            vollständige WCAG-Prüfung noch eine manuelle Accessibility-Prüfung.
          </p>

          <form method="dialog">
            <button className="secondary-button" type="submit">Dialog schließen</button>
          </form>
        </div>
      </dialog>
    </>
  );
};
