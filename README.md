
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
2. Betrieb und Entwicklung des Web-Frontends
    - Klonen des Projekts
    - Installation der Node.js-Pakete für das Web-Frontend Projekt
    - Betrieb und Weiterentwicklung mit dem Webpack Dev Server
    - Weiterentwicklung des Projekts mit dem Webpack Dev Server
    - Release des Projekts
    - Debugging des Projekts
    - Generieren der TypeScript-Dokumentation
    - Starten des Code Linters ESLint
    - Starten der Unit-Tests via Jest
    - Generieren der Code-Coverage via Jest
3. Erweiterungen
    - Grundlagen des Menüpunkts "Erweiterungen"
    - Installation und Verwenden der Erweiterung ESLint
    - Installation und Verwenden der Erweiterung Jest
4. Einstellungen
    - Globale Einstellungen - defaultSettings.json (read-only) und settings.json.
    - Einstellungen für den Editor - Oberfläche, Farben, Fehler- u. Warnungen-Highlights etc.
    - Key Short-Cuts (Keymap-Erweiterung, Shortcuts via keybindings.json).

<hr>

# 1. Vorraussetzungen

![Visual Studio Code](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_vscode.png)

Visual Studio Code 1.46 

[Download Link](https://code.visualstudio.com/)

![Node.js](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_node_js.png)

Node.js 12.18.2

[Download Link](https://nodejs.org/de/)

<hr>

![Ant Design](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_ant_design.png)

# 2. Die Web-Frontend Applikation

In diesem Web-Frontend Projekt wollen wir die Komponentenbibliothek Ant Design im praktischen Einsatz kennenlernen.
 Die geniale React-Komponentenbibliothek Ant Design bietet eine vollständige Palette an hochwertigen, responsiven und
 reaktiven Enterprise UI-Komponenten für Web-Frontends. Darüberhinaus ermöglicht sie die schnelle Realisierung 
 kompletter Webpräsenzen ohne dafür eine einzige Zeile HTML oder CSS Code schreiben zu müssen.

<hr>

## Online Demo

[https://christopherstock.github.io/VSCodeMeetUp/dist](https://christopherstock.github.io/VSCodeMeetUp/dist)

<hr>

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

<hr>

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

## Installation

Nach dem Klones des Git Repositories installiert der folgende Befehl alle npm Pakete die der genannte Tech Stack 
 verwendet und die in der Datei **package.json** aufgelistet sind. Die in dieser Datei im Bereich **script** 
 aufgelisteten npm Targets stehen anschließend zur Verfügung.

`npm install`

<hr>

![Entwicklung](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/develop.png)

## Entwicklung

Zum Bauen und Betrieben des Web-Frontends kann mit dem folgenden Befehl der Webpack Dev Server gestartet werden:

`npm run webpack:devserver`

Die gebaute und in den Webpack Dev Server gemountete Frontend Anwendung kann jetzt im Browser eingesehen werden unter:
 
`http://localhost:1234/`

Es sollte nun das folgende Frontend im Browser zu sehen sein:

![Frontend](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/frontend.jpg)

Beim allen Änderungen am Projektcode baut der Webpack Dev Server das Frontend selbstständig neu und aktualisiert die
 Webseite im Browser.

<hr>

# 3. Erweiterungen




<hr>

# 4. Einstellungen




<hr>

![Aufgaben](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/exam.png)

# Aufgaben

Ein paar Übungsaufgaben um die Komponentenbibliothek Ant Design im praktischen Einsatz kennenzulernen
 befinden sich unter [EXERCISES.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/EXERCISES.md).

<hr>

![npm](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_npm.png)

# npm targets

Eine ausführliche Übersicht über die Funktionsweise aller npm-Targets unseres npm-Tech Stacks kann in der
 MarkDown-Datei [NPM-TARGETS.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/NPM-TARGETS.md)
 eingesehen werden. 

<hr>

![Hand Outs](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/handout.png)

# Hand Outs

Eine Übersicht an weiterführenden Workshops zum Thema npm, Node.js und Web-Frontends
 befinden sich unter [HAND_OUTS.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/HAND_OUTS.md)
 eingesehen werden.
