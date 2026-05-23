# AGENTS.md – Accessibility Check Helper

Diese Datei enthält verbindliche Arbeitsregeln für Codex und andere KI-Coding-Agenten im Projekt **Accessibility Check Helper**.

## Projektkontext

Der Accessibility Check Helper ist ein kleines React-/Vite-Projekt mit JavaScript und normalem CSS.

Ziel des MVP ist ein Web-Tool, in das Nutzer HTML-Code einfügen und anhand weniger klar definierter Accessibility-Basics prüfen lassen können.

Der MVP bleibt bewusst klein.

## Technischer Rahmen

- React
- Vite
- JavaScript
- normales CSS über externe CSS-Dateien
- kein Backend im MVP
- keine Datenbank im MVP
- kein Routing im MVP
- keine zusätzlichen UI-Bibliotheken ohne ausdrückliche Entscheidung

## Arbeitsweise

- Arbeite in kleinen, klar abgegrenzten Schritten.
- Orientiere dich immer am tatsächlichen aktuellen Projektstand.
- Erfinde keine neue Projektstruktur, wenn sie nicht ausdrücklich beauftragt wurde.
- Baue keine ungefragten Zusatzfeatures ein.
- Führe keine großen Refactorings durch.
- Halte den MVP klein und nachvollziehbar.
- Trenne UI und Prüflogik sauber voneinander.

## Coding-Stil

- Variablen, Funktionen, Komponenten und Dateinamen auf Englisch.
- Kommentare und UI-Texte auf Deutsch.
- Verwende `const`, wo möglich.
- Verwende `let` nur, wenn ein Wert neu zugewiesen wird.
- Verwende kein `var`.
- Verwende immer `===` und `!==`.
- Verwende Semikolons in JavaScript und JSX.
- Verwende keine trailing commas in Objekt- oder Array-Literalen.
- Verwende keine Inline-Styles.
- Styling gehört in externe CSS-Dateien.
- Code soll lesbar, schlicht und am LiveCoding-Stil orientiert sein.

## Accessibility

- Verwende semantisch sinnvolles HTML/JSX.
- Formularelemente brauchen passende Labels.
- Buttons müssen verständlich benannt sein.
- Fokuszustände dürfen nicht entfernt werden.
- Farbe darf nicht das einzige Bedeutungssignal sein.
- Die eigene Oberfläche des Tools soll möglichst barrierearm bleiben.

## Erlaubt

Codex darf:

- Dateien lesen und den Projektstand zusammenfassen.
- konkrete kleine Änderungsvorschläge machen.
- einzelne Dateien oder Diffs reviewen.
- auf mögliche Fehler, Stilabweichungen oder MVP-Verstöße hinweisen.
- kleine, klar beauftragte Codeänderungen vorschlagen.

## Nicht erlaubt

Codex darf nicht:

- Commits erstellen.
- Pushes ausführen.
- Branches mergen.
- Pull Requests erstellen.
- neue Dependencies installieren.
- große Refactorings durchführen.
- ungefragte Zusatzfeatures einbauen.
- den MVP-Zuschnitt verändern.
- Dateien außerhalb des klar beauftragten Bereichs ändern.
- behaupten, etwas funktioniere, ohne dass es geprüft, getestet oder konkret belegt wurde.

## Prüfung von Ergebnissen

KI-generierter Code ist immer nur ein Vorschlag.

Vor einer Übernahme müssen Änderungen geprüft werden:

- Passt die Änderung zum MVP?
- Passt sie zum aktuellen Projektstand?
- Entspricht sie den Coding-Guidelines?
- Wurden keine ungefragten Dateien verändert?
- Wurden keine neuen Abhängigkeiten eingebaut?
- Ist die Änderung klein und nachvollziehbar?
- Wurde der Stand lokal geprüft oder sinnvoll kontrolliert?

## Standardregel

Wenn eine Aufgabe unklar ist, soll Codex zuerst nachfragen oder einen kurzen Plan vorschlagen, statt selbstständig größere Änderungen vorzunehmen.
