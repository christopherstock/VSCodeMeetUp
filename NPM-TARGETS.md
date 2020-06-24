
![npm](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_npm.png)

## npm targets

Hier gibt es eine ausführliche Übersicht aller npm-Targets mit kurzer Beschreibung derer Funktionsweise. Mit den 
 angegebenen Befehlen können die einzelnen Tools unseres npm-Tech Stacks ausgeführt werden:

<hr>

![TypeScript](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_typescript.png)

### TypeScript nach JavaScript kompilieren
`npm run typescript:compile`

Kompiliert alle TypeScript Quellcodes von `/src` nach JavaScript unter `/bin`.
 Die Einstellungen für den TypeScript Compiler befinden sich unter `/tsconfig.json`.

<hr>

![Webpack](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_webpack.png)

### Webpack in development ausführen
`npm run webpack:dev`

Gleiches Verhalten wie Target `typescript:compile`. Darübehinaus werden alle internen
 kompilierten JavaScript Dateien unter `/bin` mit allen externen JavaScript Quellcodes
 der verwendeten Bibliotheken zusammengefügt und unter `dist/js/bundle.js` vereint.

Nach dem erfolgreichen Abschluss dieses Targets kann das fertige Frontend unter 
 `dist/index.html` betrieben oder deployed werden.

Alle Einstellungen für Webpack siedeln in der `/webpack.config.js` an.

### Webpack in production ausführen
`npm run webpack:production`

Gleiches Verhalten wie das target `webpack:dev` nur dass das Kompilat unter
 `dist/js/bundle.js` minifiziert und obfuskiert wird.

### Den Webpack Dev Server starten
`npm run webpack:devserver`

Gleiches Verhalten wie das Target `webpack:dev` es wird allerdings kein Output unter
 `bin` oder `dist/js/bundle.js` erstellt. Stattdessen wird die Resource `dist/js/bundle.js`
 virtuell für den Webpack Dev Server zur Verfügung gestellt und der gesamte Ordner `/dist`
 in den Webpack Dev Server gemountet.

Die in den Webpack Dev Server gemountete Frontend Anwendung kann im Browser eingesehen werden
 unter `http://localhost:5000/`

Alle Einstellungen für den Webpack Dev Server befinden sich in der `/webpack.config.js`
 im Abschnitt `config.devServer`.

<hr>

![TypeDoc](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_typedoc.png)

### TypeDoc generieren
`npm run typedoc:generate`

Generiert eine HTML Dokumentation unter `/doc` für alle TypeScript Quellcodes unter `/src/typescript`.

<hr>

![ESLint](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_eslint.png)

### ESLint ausführen
`npm run eslint:check`

Führt den ESLinter für alle Quellcodes unter `/src` aus.

Einstellungen für den Linter befinden sich unter `/.eslintrc.js`.

<hr>

![TSLint](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_tslint.png)

### TSLint ausführen
`npm run tslint:check`

Führt den TypeScript Linter für alle Quellcodes unter `/src` aus. Das Tool TSLint wird laut Ankündigung im Jahr 2020
 als deprecated klassifiziert und durch das Tool ESLint ersetzt. Daher verfügt dieses Projekt über Implementierungen
 beider Tools.

Einstellungen für den Linter befinden sich unter `/tslint.json`.

<hr>

![Mocha](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_mocha.png)

### Alle TypeScript Tests mit Mocha aufrufen
`npm run test:all`

Ruft den Mocha Test Runner auf der alle definierten Tests in TypeScript Dateien unterhalb `/src/test` ausführt.
Die Konfiguration für den Testrunner wird als Parameter im Anschluß an den Befehl definiert.

<hr>

![Jest](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_jest.png)

### Alle TypeScript Tests mit Jest aufrufen
`npm run test:jest`

Ruft den Jest Test Runner auf der alle definierten Tests in TypeScript Dateien unterhalb `/src/test` ausführt, 
die über die Endung `.test.ts(x)` verfügen.

Die Konfiguration für Jest befindet sich in der `/package.json` im Abschnitt `jest`.

### Alle TypeScript Tests mit Jest aufrufen und Code Coverage generieren
`npm run test:jest-coverage`

Gleiches Verhalten wie das Target `test:jest` und im Anschluß wird die Code Coverage unter `/coverage` generiert.
