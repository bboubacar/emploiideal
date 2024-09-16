# emploi-ideal

Une plateforme dédiée exclusivement à la publication d'offres d'emploi, permettant aux candidats de postuler directement en ligne.

Ce répertoire contient le front-end de l'application, développé avec Vite.js.

## Récupérer le projet

Pour récuperer le projet et l'executer en local vous devez faire <br />
`git clone https://github.com/bboubacar/emploiideal.git`

## Installation du projet <br />

`npm install`

## Configurations

Dans un fichier `.env` vous devez ajouter:

### Addresse API

Si vous n'avez pas accès à mon répertoire pour l'API, vous pouvez utiliser l'adresse suivante pour envoyer vos requêtes : <br />
`VITE_API_URL=https://bbcr.alwaysdata.net/`

### Clé EMAILJS

Pour permettre aux utilisateurs de vous contacter par email via la page de contact, créez un compte sur EmailJS et récupérez les clés nécessaires à ajouter dans le fichier `.env`:
`VITE_EMAILJS_SERVICE_KEY=service_s1k0t7h` <br />
`VITE_EMAILJS_TEMPLATE_KEY=template_uk8t28r` <br />
`VITE_EMAILJS_ID_KEY=AI-3MgdGU_377vRQ9`

## Lancement

Pour demarrer l'application, sur la ligne de commande de votre repertoire du projet vous devez executer: <br >
`npm run dev`
