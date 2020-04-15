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

## Énoncé de l'exerice

Vous allez créer une API basique pour une boutique en ligne qui permet de créer, lire, modifier et supprimer des produits ( Product ). Les Product auront quatre champs obligatoires :

- `name` : le nom du produit, de type String
- `description` : la description du produit, de type String
- `price` : le prix du produit, de type Number
- `inStock` : si le produit est en stock, de type Boolean.

Vous allez implémenter cinq routes :

- GET: /api/products
  
Retournera tous les produits sous la forme{ products: Product[] }

- GET:/api/products/:id
  
Retournera le produit avec le_id fourni sous la forme { product: Product }

- POST:/api/products
  
Créera un nouveau Product dans la base de données.
Le corps de la requête a pour forme :

```
{
    "name": string,
    "description": string,
    "price": number,
    "inStock": boolean
}
```

Il retournera le Product ainsi créé (y compris son champ _id ), sous la forme{ product: Product }.

La Promise retournée par la méthode save() de votre modèle Mongoose reçoit le produit créé :

```
product.save()
.then(product => ... ... .json({ product }))
.catch(error => ... ...)
```

- PUT: /api/products/:id

Modifiera le produit avec le _id fourni selon les données envoyées dans le corps de la requête.
Le corps de la requête a pour forme :

```
{
    "name": string,
    "description": string,
    "price": number,
    "inStock": boolean
}
```

Retournera un objet de la forme{ message: 'Modified!' }

- DELETE : /api/products/:id

Supprimera le produit avec le _id fourni.
Retournera un objet de la forme { message: 'Deleted!' }

Votre API devra tourner sur votre machine locale en localhost (de préférence en port 3000, mais l'application front-end vous permet de modifier ce port si besoin) et accepter les requêtes HTTP venant de n'importe quelle origine (n'oubliez pas la configuration CORS !).
