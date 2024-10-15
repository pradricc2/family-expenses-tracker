# Descrizione del progetto
Il progetto è un'applicazione Angular CLI versione 15.1.5. L'applicazione implementa il front end, molto basico, di un POC il cui scopo è utilizzare dei container per far comunicare un front end in Angular con un back end in JakartaEE ed un db postgres
# Descrizione delle Cartelle e dei File Principali
- .angular/: Contiene la cache di Angular.
- .vscode/: Configurazioni specifiche per Visual Studio Code.
- src/: Contiene il codice sorgente dell'applicazione.
  - app/: Contiene i moduli e i componenti dell'applicazione.
    - app-routing.module.ts: Configurazione delle rotte dell'applicazione.
    - app.component.*: File del componente principale dell'applicazione.
  - income-expenses/: Modulo per la gestione delle entrate e delle spese.
    - income-expenses.service.ts: Servizio per la gestione delle entrate e delle spese.
  - assets/: Contiene le risorse statiche come immagini e file.
- index.html: File HTML principale.
- main.ts: Punto di ingresso principale dell'applicazione.
- styles.css: File di stile globale.
- angular.json: Configurazione del progetto Angular.
- Dockerfile: File per la creazione dell'immagine Docker.
- package.json: File di configurazione dei pacchetti npm.
- tsconfig.*: File di configurazione di TypeScript.
