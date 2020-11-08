const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
let temps = document.getElementById('temps');
const ecranFin = document.getElementById('ecran-fin');


temps = 60;
gameOver = 50;
loopPlay = false;

function start(){
    //compte du score
    count = 0;
    //pour que le pop des flocons accélère
    getFaster = 5000;
    //pour le redémarrage
    timeRemaining = temps;

    canvas.innerHTML = '';
    score.innerHTML = count;
    temps.innerHTML = temps;

    //pour ne pas rejouer à partir de là où on en était dans la difficulé
    loopPlay ? '' : game();
    loopPlay = true;

    game();
    //mécanique du jeu
    function game(){
        let randomTime = Math.round(Math.random() * getFaster);
        getFaster > 900 ? getFaster = (getFaster * 0.90) : '';

        // de façon aléatoire toutes les tant de secondes tu vas envoyer un flocon
        setTimeout(() =>{
            //tu joues floconPop()
            floconPop();
            //rejoue game()
            game();
            //tous les "temps aléatoire"
        }, randomTime);
    }

}

//Créer les flocons
function floconPop(){
    //on génère l'image (source en dessous)
    let flocon = new Image();
    flocon.src = "media/flocon.png";
    //on ajoute la classe flocon pour que ces derniers puissent apparaitre de façon aléatoire dans la zonde de jeu
    flocon.classList.add('flocon');
    //peu apparaitre partout dans le cadre canvas
    flocon.style.top = Math.random() * 600 + 'px';
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
    let trY = Math.random() * 600 * plusMinus;
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
        count ++;
        score.innerHTML = count;
    }
});