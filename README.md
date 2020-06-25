![Visual Studio Code](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_vscode.png)

# Visual Studio Code MeetUp

Willkommen zu unserem MeetUp über Visual Studio Code. In dieser Dokumentation sind alle wichtigen
 Informationen über unser Workshop und unser Web-Frontend-Projekt festgehalten.

<hr>

![Ant Design](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_ant_design.png)

# React Hooks and React Context - Ant Design Web-Frontend Workshop 2.0

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

![Aufgaben](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/exam.png)

## Aufgaben

Hier sind nun drei Übungsaufgaben, die es durch Erweiterungen im TypeScript-Code umzusetzen gilt.
Die entsprechenden Stellen im Code sind mit **TODO WORKSHOP** gekennzeichnet.

#### 1. Anzeige eines Progress-Bars 
Eine neue Instanz der Komponente **Progress**
 aus dem Ant Design Framework soll in der Komponente **RandomJoke** anzeigen, wieviele
 Chuck Norris-Witze der maximal täglich ertragbaren Anzahl von 10 bereits angezeigt wurden.

#### 2. Anzeige einer Notification für leere Seiten
Zeigen Sie einen **Notification** Dialog mit einer sprechenden Beschreibung und der Severity INFO aus dem Ant Design
 Framework an, wenn der Benutzer einen Menüpunkt auswählt, für den im **Content**-Bereich noch "To be defined .."
 angezeigt wird.

#### 3. Durchführung eines Refactorings
Extrahieren Sie den Lambda in der Methode `RandomJoke#render()` im Attribut `renderItem` der Komponente `antd.List` in
 eine separate, nicht-statische Methode.

<hr>

![npm](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/logo_npm.png)

## npm targets

Eine ausführliche Übersicht über die Funktionsweise aller npm-Targets unseres npm-Tech Stacks kann in der
 MarkDown-Datei [NPM-TARGETS.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/NPM-TARGETS.md)
 eingesehen werden.

<hr>

![Hand Outs](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/handout.png)

## Hand Outs

Eine Übersicht an weiterführenden Workshops zum Thema npm, Node.js und Web-Frontends
 befinden sich unter [HAND_OUTS.md](https://github.com/christopherstock/VSCodeMeetUp/blob/master/HAND_OUTS.md)
 eingesehen werden.
