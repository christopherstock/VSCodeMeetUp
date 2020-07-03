
# Visual Studio Code - Setup einer Web-Frontend Applikation

![WUE.tech](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/meetup.jpg)

https://www.meetup.com/de-DE/wue-tech/events/271514602/

Willkommen zu unserem MeetUp über Visual Studio Code.

In unserem MeetUp möchte ich Euch die wichtigsten Features und Einstellungsmöglichkeiten von Visual Studio Code
  vorstellen. Gemeinsam schaffen wir ein komplettes Setup aus Einstellungen und Erweiterungen, um diesen
  hochkonfigurierbaren Quelltext-Editor aus dem Hause Microsoft als vollwertigen Ersatz für eine Integrierte
  Entwicklungsumgebung zur Softwareentwicklung im professionellen Bereich verwenden zu können.

Um mit VS Code im praktischen Einsatz durchstarten zu können, richten wir uns ein bestehendes Frontend-Projekt ein.
  Das Web-Frontend wurde mit den Technologien Node.js, TypeScript, Webpack, React Hooks und Ant Design realisiert.
  Das gesamte Projekt werden wir aus VS Code heraus gemeinsam klonen, entwickeln, betreiben und testen.

Zudem werfen wir einen Blick auf die schier unerschöpfliche Anzahl an Erweiterungen, die VS Code über den Visual Studio
  Marketplace installieren und nutzen kann. Diverse Code-Quality Tools wie ESLint, TypeDoc und Jest können als
  Erweiterungen in VS Code installiert und integriert verwendet werden. Darüber hinaus wollen wir uns die wichtigsten
  Plugins für die Weiterentwicklung unseres Web-Frontend-Projekts installieren und einrichten.

<hr>

# Agenda

1. Installation von VS Code
    - Sidebar und Command Palette
2. Betrieb und Weiterentwicklung des Web-Frontend Projekts
    - Projekt klonen
    - Node.js-Pakete installieren
    - Betrieb und Weiterentwicklung mit dem Webpack Dev Server
    - Debugging des Projekts ?
    - Weitere npm Targets (Webpack-Release, TypeDoc, ESLint, Jest, Code-Coverage)
3. Erweiterungen
    - Grundlagen des Menüpunkts "Erweiterungen"
    - Installation und Verwenden der Erweiterungen ESLint, Jest, Class IO, Favorites und Todo Tree
4. Einstellungen
    - Globale Einstellungen - defaultSettings.json (read-only) und settings.json.
    - Einstellungen für den Editor - Oberfläche, Farben, Fehler- u. Warnungen-Highlights etc.
    - Key Short-Cuts (Keymap-Erweiterung, Shortcuts via keybindings.json).

<hr>

# 1. Installation

## 1.1. Visual Studio Code

![Visual Studio Code](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_vscode.png)

Visual Studio Code 1.46

VS Code installiert und startet schnell. Unter dem Menüpunkt `View > Command Palette..` sind alle Befehle innerhalb 
 VS Code schnell erreichbar. Die Sidebar ermöglicht den Zugriff auf die wichtigsten Unterstützungen zum Arbeiten
 (Explorer, Search, VCS, Run und Extensions)

[Download Link](https://code.visualstudio.com/)

## 1.2. Node.js

![Node.js](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_node_js.png)

Node.js 12.18.2 

Um das Web-Frontend Projekt zu bauen und zu betreiben benötigen Sie eine Installation der
 JavaScript Laufzeitumgebung Node.js.

[Download Link](https://nodejs.org/de/)

<hr>

![Ant Design](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_ant_design.png)

# 2. Die Web-Frontend Applikation

In diesem Web-Frontend Projekt wollen wir die Komponentenbibliothek Ant Design im praktischen Einsatz kennenlernen.
 Die geniale React-Komponentenbibliothek Ant Design bietet eine vollständige Palette an hochwertigen, responsiven und
 reaktiven Enterprise UI-Komponenten für Web-Frontends. Darüberhinaus ermöglicht sie die schnelle Realisierung 
 kompletter Webpräsenzen ohne dafür eine einzige Zeile HTML oder CSS Code schreiben zu müssen.

## Online Demo

[https://christopherstock.github.io/VSCodeMeetUp/dist](https://christopherstock.github.io/VSCodeMeetUp/dist)

![npm](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_npm.png)

## npm-Tech Stack

Zum Bauen unseres Web-Frontends nutzen wir den Paketmanager npm. Mit diesem können wir schnell und einfach
 einen modernen Web-Frontend Tech Stack unter Verwendung der Technologien TypeScript, Webpack und React realisieren.
 Außerdem können wir zahlreiche Zusatztools wie Tests, Linter und CSS-Präprozessoren aus der npm Registry nutzen.

Insgesamt kommen die folgenden Technologien zum Einsatz:

- Ant Design 3.26.9
- TypeScript 3.7.5
- Webpack 4.41.6
- React 16.12.0
- Axios Http Client 0.19.2
- Less 3.11.1
- Jest 25.1.0
- TypeDoc 0.16.9
- ESLint 6.8.0

![The International Chuck Norris Database](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/icndb.png)

## The International Chuck Norris Database

Als fertig bestehendes **Backend** für unser Frontend-Projekt bietet sich die **International
 Chuck Norris Database** an, eine einfache und klar strukturierte REST-API die wir mit der integrierten
 **JavaScript Fetch API** ansprechen können und die uns mit unendlich vielen Chuck Norris Witzen versorgt.
 Beispielsweise liefert hier ein simpler GET-Request auf [https://api.icndb.com/jokes/random](https://api.icndb.com/jokes/random) einen entsprechenden
 Response Body im JSON Format zurück, den wir anschließend in unserem Frontend parsen und anzeigen können:

```
{
    "type": "success", 
    "value": { 
        "id": 478, 
        "joke": "Chuck Norris can instantiate an abstract class.", 
        "categories": ["nerdy"] 
    }
}
```

<hr>

![Installation](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/install.png)

## 2.1. Klonen des Projekts

Die folgende GitHub URL kann direkt in VS Code geklont und eingerichtet werden.

https://github.com/christopherstock/VSCodeMeetUp.git

Verwenden Sie hierfür den folgenden Menüpunkt in der Sidebar: `Source Control > Clone Repository`

## 2.2. Installation der Node.js Pakete

Nach dem Klones des Git Repositories müssen Sie alle im Projekt benötigten Node.js-Pakete installieren, die
 das Web-Frontend verwendet. Aufgelistet sind diese in der Datei **package.json**. Öffnen Sie ein neues Terminal
 direkt in VS Code mit dem Menübefehl `Terminal > New Terminal` und verwenden Sie den folgenden npm-Befehl:

`npm install`

Nach der Installation sind alle in der Datei **package.jsonb** im Bereich **script** 
 aufgelisteten npm Targets verfügbar.

![Entwicklung](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/develop.png)

## 2.3. Betrieb und Weiterentwicklung

Zum Bauen und Betrieben des Web-Frontends kann mit dem folgenden Befehl der Webpack Dev Server gestartet werden:

`npm run webpack:devserver`

Alternativ können Sie im Menüpunkt `Explorer` der Sidebar das Fenster `npm Target` nutzen. Hier sind alle 
 verfügbaren npm-Targets aufgelistet und sie können diese mit einem Klick starten.

Die gebaute und in den Webpack Dev Server gemountete Frontend Anwendung kann jetzt unter der folgenden Adresse im
 Browser eingesehen werden:
 
`http://localhost:1234/`
 
Es sollte nun das folgende Frontend im Browser zu sehen sein:

![Frontend](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/frontend.jpg)

Beim allen Änderungen am Projektcode baut der Webpack Dev Server das Frontend selbstständig neu und aktualisiert die
 Webseite im Browser automatisch.

<hr>

# 3. Erweiterungen

![ESLint](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_extension_eslint.png)

## ESLint
Integrierte Unterstützung des JavaScript u. TypeScript Code Linters ESLint
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

![Jest](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_extension_jest.png)

## Jest
Support für das Testing-Framework Jest
https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest

![Class IO](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_extension_classio.png)

## Class IO
Anzeige der Klassenhierarchie
https://marketplace.visualstudio.com/items?itemName=rexebin.classio

![Favorites](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_extension_favorites.png)

## Favorites
Neues Fenster "Favoriten"
https://marketplace.visualstudio.com/items?itemName=kdcro101.favorites

![Todo Tree](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_extension_todo_tree.png)

## Todo Tree
Neues Fenster "TODOS"
https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree

<hr>

# 4. Einstellungen

## settings.json
- Default Settings (JSON)

## Zugehörige Default JSON einsehen:
- Command Palette: Open Default Settings / Keyboard Shortcuts

## keybindings.json
- Default Keybindings (JSON)

## GitHub Settings Repository
https://github.com/christopherstock/VSCode_SetUp

<hr>

# Referenzen

![npm](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_npm.png)

## npm Targets

Eine ausführliche Übersicht über die Funktionsweise aller npm-Targets unseres npm-Tech Stacks kann in der
 MarkDown-Datei [NPM-TARGETS.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/NPM-TARGETS.md)
 eingesehen werden. 

![Aufgaben](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/exam.png)

## Aufgaben

Ein paar Übungsaufgaben um die Komponentenbibliothek Ant Design im praktischen Einsatz kennenzulernen
 befinden sich unter [EXERCISES.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/EXERCISES.md).

![Hand Outs](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/handout.png)

## Hand Outs

Eine Übersicht an weiterführenden Workshops zum Thema npm, Node.js und Web-Frontends
 befinden sich unter [HAND_OUTS.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/HAND_OUTS.md)
 eingesehen werden.
