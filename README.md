# winter-clic-game
Jeu en vanilla JS où l'on shoot des flocons en cliquant dessus

## Le But du jeu
Des flocons de diverse taille se balade sur l'écran. Le but est de cliquer dessus pour en faire disparaitre le plus possible sur une partie de X temps (à définir)

Sur la durée définie, le jeu va aller en se compliquant car les flocons vont se multiplier de plus en plus rapidement.

Si on arrive à plus de 50 flocons à l'écran avant la fin du timer, on a perdu !

En revanche si on parvient à maintenir moins de 50 flocons pendant X temps, c'est gagné.

## Pédagogie
Le jeu peut-être utilisé à partir de 5 ans pour apprendre à viser et cliquer avec précision.

## Création du jeu
### Technologie
- Structure en HTML5
- CSS pour l'aspect visuel et l'animation
- Fonctionnement du jeu en Vannilla JS
### La construction js
- Une fonction pour faire apparaitre les flocons de manières aléatoire dans une zone prédéfinie. Mais avec des tailles différentes (en veillant à ce qu'il y ait une taille minimum cliquable et une maximum qui ne rende pas le jeu trop simple). Les flocons devront également se déplacer de manière aléatoire sur la zone de jeu.
- Une fonction qui démarre le jeu
- Une fonction qui cacule le temps restant et arrête la partie
- Un écran de fin de jeu gagné/perdu
#### en option
-le score
-la précision
-une musique désactivable


penser à passer les valeur en rem

