---
title: "Ein JavaScript-Webserver mit Express.js implementieren"
date: 2023-01-16 13:42:00
draft: false
authors: enk
tags: [tutorial, node-js, express-js]
---

Ein JavaScript-Webserver mit Express.js zu implementieren ist einfach und schnell. Express.js ist ein leichtgewichtiges Framework für Node.js, das es Entwicklern ermöglicht, einen Webserver zu erstellen und zu verwalten. In diesem Essay werden wir Schritt für Schritt durch den Prozess gehen, um einen einfachen Webserver mit Express.js zu erstellen.

<!--truncate-->

## Schritt 1: Node.js installieren

Der erste Schritt bei der Implementierung eines Webservers mit Express.js ist die Installation von Node.js. Node.js ist eine JavaScript-Laufzeitumgebung, die es ermöglicht, JavaScript-Code auf dem Server auszuführen. Wenn Sie Node.js noch nicht auf Ihrem Computer installiert haben, können Sie es von der offiziellen Node.js-Website herunterladen und installieren.


## Schritt 2: Projekt erstellen

Nachdem Node.js installiert ist, können Sie mit dem nächsten Schritt fortfahren, dem Erstellen eines neuen Projekts. Erstellen Sie ein neues Verzeichnis für Ihr Projekt und wechseln Sie in dieses Verzeichnis. Öffnen Sie dann eine Kommandozeile oder eine Eingabeaufforderung und geben Sie den Befehl npm init ein. Dieser Befehl erstellt eine "package.json"-Datei, die die Abhängigkeiten und andere Informationen Ihres Projekts enthält. Folgen Sie den Anweisungen auf dem Bildschirm, um die Datei zu erstellen.

## Schritt 3: Express.js installieren

Nun können Sie Express.js installieren, indem Sie den Befehl npm install express auf der Kommandozeile eingeben. Dieser Befehl installiert das Express.js-Modul und alle seine Abhängigkeiten in Ihrem Projekt.


## Schritt 4: Code schreiben

Nach der Installation von Express.js können Sie mit dem Schreiben des Codes für Ihren Webserver beginnen. Erstellen Sie eine neue Datei mit dem Namen "server.js" im Root-Verzeichnis Ihres Projekts. Öffnen Sie diese Datei in einem Texteditor Ihrer Wahl und fügen Sie den folgenden Code hinzu:

```js
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hallo Welt!');
});

app.listen(3000, function(){
console.log('Der Server läuft auf Port 3000');
});
```

Dieser Code erstellt eine neue Express-Anwendung und legt einen GET-Endpunkt für die Root-Route fest. Jedes Mal, wenn ein Benutzer die URL Ihres Servers aufruft, wird die angegebene Funktion ausgeführt und der Text "Hallo Welt!" an den Benutzer zurückgegeben. Der letzte Befehl in diesem Code, `app.listen(3000, function(){...})`, sagt dem Server, dass er auf Port 3000 auf Anfragen lauschen soll.

## Schritt 5: Server starten
Jetzt können Sie Ihren Server starten, indem Sie den Befehl `node server.js` in der Kommandozeile ausführen. Wenn alles erfolgreich eingerichtet wurde, sollte die Ausgabe "Der Server läuft auf Port 3000" im Terminal erscheinen. Sie können nun die URL "http://localhost:3000" in Ihrem Browser aufrufen und sollten den Text "Hallo Welt!" sehen.

Mit Express.js können Sie auch weitere Routen und Funktionalitäten hinzufügen, wie z.B. das Verarbeiten von Formulardaten, das Verwalten von Sitzungen und Cookies und das Arbeiten mit Datenbanken. Es gibt viele Ressourcen im Internet, die Ihnen helfen, Ihren Wissensstand in Bezug auf Express.js und Node.js zu vertiefen.

In Zusammenfassung, Express.js ist ein mächtiges Framework für Node.js, das es Entwicklern ermöglicht, einen Webserver schnell und einfach zu erstellen. Durch die Schritte, die in diesem Essay beschrieben wurden, können Sie jetzt Ihren eigenen einfachen Webserver mit Express.js implementieren und darauf aufbauen, um weitere Funktionalitäten hinzuzufügen.
