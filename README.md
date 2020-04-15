# Boutique en ligne (exercice proposé sur OpenClassRoom)

Le but de cet exercice était de créer une API REST avec Node, Express et MongoDB.
La partie frontend était déjà fournie.

## Instruction pour essayer l'application

Cloner le [repo](https://github.com/OpenClassrooms-Student-Center/fullstack-activity) de l'application frontend dans un dossier
`frontend`.
Cloner le repo e-boutique-exo dans un dossier `backend`.

Pour lancer l'application front-end executez `npm install` puis `npm start` depuis la racine du dossier frontend.

Pour lancer le server backend exectuez `npm install` puis `nodemon serve` depuis la racine du dossier backend.

La connection a une base de donnée peut se faire via mongoDB Atlas.

[lien vers des instructions pour mettre en place la BDD sur mongoDB Atlas](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466348-configurez-votre-base-de-donnees).

Une fois la BDD mis en place, il faudra créer un fichier .env à la racine du projet backend et y inclure :

```
DB_CONNECTION_STRING=<connection string>
```

[Énoncé de l'exerice](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/exercises/3732)

