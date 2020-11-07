const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
const temps = document.getElementById('temps');
const ecranFin = document.getElementById('ecran-fin');

floconPop()

//Créer les flocons
function floconPop(){
    //on génère l'image (source en dessous)
    let flocon = new Image();
    flocon.src = "media/flocon.png";
    //on ajoute la classe flocon pour que ces derniers puissent apparaitre de façon aléatoire dans la zonde de jeu
    flocon.classList.add('flocon');
    //peu apparaitre partout dans le cadre canvas
    flocon.style.top = Math.random() * 704 + 'px';
    flocon.style.left = Math.random() * 340 + 'px';

    //taille de flocons aléatoire
    let x, y;
    x = y = (Math.random() * 45) + 30; // au minimum il fera 31 au max  75px de manière proportionnelle
    flocon.style.setProperty('--x', `${ x }px`);
    flocon.style.setProperty('--y', `${ y }px`);

    //Donner du mouvement
    //Déterminer + ou -
    let plusMinus = Math.random() < 0.5 ? -1 : 1;
    //On calcul un résultat pour l'axe x et pouy
    //translate x
    let trX = Math.random() * 340 * plusMinus;
    //translate y
    let trY = Math.random() * 704 * plusMinus;
    //on injecte le résultat
    flocon.style.setProperty('--trX', `${ trX }%`);
    flocon.style.setProperty('--trY', `${ trY }%`);




    //on dit que flocon est un enfant de canvas
    canvas.appendChild(flocon);
    
}

//fonction pour faire dispraitre au clic (remove)
document.addEventListener('click', function(e){
    // Pour cibler un élément, savoir sur quoi on a cliqué
    let targetElement = e.target || e.EventTarget;
    //console.log(targetElement);
    if (targetElement.classList.contains('flocon')) {
        targetElement.remove();
    }
});