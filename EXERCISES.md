![Aufgaben](https://github.com/christopherstock/VSCodeMeetUp/raw/master/_ASSET/readme/150px/exam.png)

# Aufgaben

Hier sind nun drei Übungsaufgaben, die es durch Erweiterungen im TypeScript-Code umzusetzen gilt.
Die entsprechenden Stellen im Code sind mit **TODO WORKSHOP** gekennzeichnet.

#### 1. Anzeige eines Progress-Bars 
Eine neue Instanz der Komponente **Progress**
 aus dem Ant Design Framework soll in der Komponente **RandomJoke** anzeigen, wieviele
 Chuck Norris-Witze der maximal täglich ertragbaren Anzahl von 10 bereits angezeigt wurden.

 [Ant Design - Progress](https://ant.design/components/progress/)

#### 2. Anzeige einer Notification für leere Seiten
Zeigen Sie einen **Notification** Dialog mit einer sprechenden Beschreibung und der Severity INFO aus dem Ant Design
 Framework an, wenn der Benutzer einen Menüpunkt auswählt, für den im **Content**-Bereich noch "To be defined .."
 angezeigt wird.

 [Ant Design - Notification](https://ant.design/components/notification/)

#### 3. Durchführung eines Refactorings
Extrahieren Sie den Lambda in der Methode `RandomJoke#render()` im Attribut `renderItem` der Komponente `antd.List` in
 eine separate, nicht-statische Methode.
