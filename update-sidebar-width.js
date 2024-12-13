const fs = require('fs');
const path = require('path');

// Funktion, um CSS-Dateien zu durchsuchen und anzupassen
function updateSidebarWidth(directory) {
  // Alle Dateien und Verzeichnisse im angegebenen Ordner lesen
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      // Wenn es sich um ein Verzeichnis handelt, rekursiv durchsuchen
      updateSidebarWidth(filePath);
    } else if (file.endsWith('.css')) {
      // Wenn es sich um eine CSS-Datei handelt, bearbeiten
      let content = fs.readFileSync(filePath, 'utf8');

      // Prüfen, ob .left-sidebar vorhanden ist
      if (content.includes('.left-sidebar')) {
        console.log(`Ändere Breite in Datei: ${filePath}`);
        content = content.replace(/\.left-sidebar\s*{[^}]*}/, (match) => {
          // Passe die Breite innerhalb des Styles an
          return match.replace(/width:\s*\d+px;/, 'width: 300px;');
        });

        // Speichere die Änderungen zurück in die Datei
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  });
}

// Hauptfunktion ausführen
const projectDir = path.join(__dirname, './'); // Projektverzeichnis
updateSidebarWidth(projectDir);

console.log('Breitenanpassung für .left-sidebar abgeschlossen.');
