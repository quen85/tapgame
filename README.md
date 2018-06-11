TapGame - Projet MEAN
========================

Développé par Quentin Giraud

Installation
--------------

- Ouvrir le terminal, créer un dossier vierge et, une fois à l'intérieur, cloner le dépôt :
```
git clone https://github.com/quen85/tapgame.git
```
- Installer les dépendances nécessaires :
```
npm install
```
- Lancer la base de données Mongo avec la commande :
```
mongod --dbpath db/data
```
- Lancer le serveur :
```
npm start
```
- Builder le client Angular :
```
cd client
sudo ng build -prod --output-path ../www
```
- Accéder au jeu via l'url :
```
http://localhost:8080
```