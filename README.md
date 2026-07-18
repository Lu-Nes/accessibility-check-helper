# Accessibility Check Helper

## Projektvorstellung

Der Accessibility Check Helper ist eine kleine React-Anwendung, mit der sich eingefügter HTML-Code auf vier grundlegende Accessibility-Basics prüfen lässt. Die Ergebnisse werden verständlich mit Status, kurzer Erklärung und einer Empfehlung dargestellt.

## Ziel

Das Projekt soll einen einfachen Einstieg in typische Barrierefreiheitsprobleme bieten. Es macht einige automatisierbare Auffälligkeiten sichtbar und zeigt zugleich, dass Accessibility auch in der eigenen Bedienoberfläche mitgedacht werden kann.

## Funktionsumfang des MVP

- Eingabe eines HTML-Ausschnitts oder des Inhalts einer vollständigen Seite
- Ausführen von vier festen Prüfheuristiken im Browser
- Ergebnisübersicht mit Status, Erklärung und Verbesserungsempfehlung
- Start der Prüfung per Button oder mit `Strg + Enter` beziehungsweise `Cmd + Enter`
- Löschen der angezeigten Ergebnisse
- Dialog mit einer kurzen Einordnung des Tools
- responsive, tastaturbedienbare Oberfläche

## Die vier Prüfregeln

1. **Bilder ohne `alt`-Attribut:** Prüft, ob jedes `img`-Element ein `alt`-Attribut besitzt. Ein leeres `alt`-Attribut ist zulässig, da es für dekorative Bilder sinnvoll sein kann; die inhaltliche Qualität des Alternativtexts wird nicht bewertet.
2. **Formularfelder ohne zugängliche Beschriftung:** Prüft relevante `input`-, `select`- und `textarea`-Elemente auf eine Beschriftung über `label`, `aria-label` oder `aria-labelledby`. Nicht beschriftungspflichtige Input-Typen wie `hidden`, `submit` oder `reset` werden dabei ausgeschlossen.
3. **Leere oder nicht verständlich benannte Buttons:** Prüft Buttons auf eine Benennung über sichtbaren Text, `aria-label`, `aria-labelledby` oder bei passenden Input-Buttons über deren Wert. Leere Benennungen und wenige fest definierte unklare Begriffe werden als Problem gemeldet.
4. **Fehlende `h1`-Überschrift:** Prüft, ob mindestens eine `h1`-Überschrift vorhanden ist.

Diese Regeln sind bewusst einfache Prüfheuristiken. Sie können Hinweise liefern, aber weder Inhalt noch Nutzungskontext vollständig beurteilen.

## Bedienung

1. HTML-Code in das Feld **HTML-Code** einfügen.
2. **HTML prüfen** auswählen oder `Strg + Enter` beziehungsweise `Cmd + Enter` verwenden.
3. Zusammenfassung und die vier Einzelergebnisse im Ergebnisbereich lesen.
4. Bei Bedarf **Ergebnisse löschen** auswählen und eine neue Prüfung starten.

Die Analyse erfolgt vollständig im Browser. Der eingegebene HTML-Code wird nicht an ein Backend übertragen und nicht dauerhaft gespeichert.

## Installation und lokaler Start

Benötigt werden Node.js und npm. Für das aktuelle Projekt-Setup wird Node.js 22 LTS ab Version 22.13.0 empfohlen. Node.js 18 wird von den installierten Versionen von Vite und ESLint nicht unterstützt.

Im Projektverzeichnis:

```bash
npm install
npm run dev
```

Anschließend kann die von Vite im Terminal ausgegebene lokale Adresse im Browser geöffnet werden.

## Verfügbare npm-Skripte

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Startet den lokalen Vite-Entwicklungsserver. |
| `npm run lint` | Prüft die JavaScript- und JSX-Dateien mit ESLint. |
| `npm run build` | Erstellt den Produktions-Build. |
| `npm run preview` | Startet eine lokale Vorschau des Produktions-Builds. |

## Tech-Stack

- React
- Vite
- JavaScript und JSX
- normales CSS in externen CSS-Dateien
- browserseitiger `DOMParser` für die HTML-Analyse
- ESLint für die statische Codeprüfung

Der MVP besitzt kein Backend, keine Datenbank, kein Routing und keine zusätzliche UI-Bibliothek.

## Accessibility der eigenen Oberfläche

Die Anwendung verwendet eine semantische Seiten- und Überschriftenstruktur, ein sichtbares Label und verknüpfte Hilfetexte für die HTML-Eingabe sowie verständlich benannte Buttons. Neue Zusammenfassungen werden über eine zurückhaltende Live-Region ausgegeben. Statusinformationen bestehen aus Text und Symbol und werden nicht nur über Farbe vermittelt.

Alle Funktionen sind per Tastatur erreichbar. Sichtbare Fokuszustände, Fokusmanagement beim Dialog und beim Löschen von Ergebnissen, responsive Darstellung und die Berücksichtigung reduzierter Bewegung unterstützen die Bedienbarkeit der Oberfläche.

## Bewusste Grenzen des MVP

Der Accessibility Check Helper führt **keine vollständige WCAG-Konformitätsprüfung** durch und ersetzt **keine manuelle Accessibility-Prüfung**. Er prüft ausschließlich die vier oben dokumentierten Regeln. Auch ein Ergebnis ohne gemeldete Probleme belegt daher nicht, dass der untersuchte Code barrierefrei oder WCAG-konform ist.

Der MVP besitzt außerdem keine URL-Analyse, keine Speicherung, keine Nutzerkonten und keine Exportfunktion. Er korrigiert gefundenen Code nicht automatisch und erstellt weder Score noch Gesamtbewertung.

## Spätere Ausbaustufen

Bewusst zurückgestellt sind:

- weitere Prüfregeln mit nachvollziehbaren Bezügen zu WCAG 2.2 und geeigneten ACT-Regeln
- zusätzliche Statusstufen wie `warning` und ein mögliches Score-System
- aufklappbare Ergebnisdetails, sobald deutlich mehr Regeln vorhanden sind
- ein erweiterter Code-Editor mit echten Zeilennummern
- URL-Analyse und Browser-Extension
- Speichern und Exportieren von Ergebnissen
