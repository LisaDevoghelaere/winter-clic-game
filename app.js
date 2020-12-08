const canvas = document.getElementById('canvas');
const score = document.getElementById('score');
const temps = document.getElementById('temps');
const ecranFin = document.getElementById('ecranFin');


tempsRestant = 50;
gameOver = 60;
loopPlay = false;

function start(){
    //compte du score
    count = 0;
    //pour que le pop des flocons accélère
    getFaster = 6000;
    //pour le redémarrage
    timeRemaining = tempsRestant;

    canvas.innerHTML = '';
    score.innerHTML = count;
    temps.innerHTML = timeRemaining;

    //pour ne pas rejouer à partir de là où on en était dans la difficulé
    loopPlay ? '' : game();
    loopPlay = true;

    game();
    //mécanique du jeu
    function game(){
        let randomTime = Math.round(Math.random() * getFaster);
        getFaster > 3500 ? getFaster = (getFaster * 0.95) : '';
 
        // de façon aléatoire toutes les tant de secondes tu vas envoyer un flocon
        setTimeout(() =>{

            if (timeRemaining === 0) {
               tuGagnes(); 
            }else if(canvas.childElementCount < gameOver){

                floconPop();

                game();
            }else{
                perdu();
            }

             //tous les "temps aléatoire"
        }, randomTime);

        const perdu = () => {
        ecranFin.innerHTML =`<div class="perdu">Perdu!<br>score : ${count} </div>`;
        ecranFin.style.visibility = 'visible';
        ecranFin.style.opacity = '1';
        loopPlay = false;
        }
        const tuGagnes = () =>{
            let precision = Math.round(count / tempsRestant * 100);
            ecranFin.innerHTML =`<div class="tuGagnes">Bravo!<br/><span class="txt-score">score :</span> ${count} <br/><span class="txt-score"> Précision :</span> ${precision}% </div>`;
            ecranFin.style.visibility = 'visible';
            ecranFin.style.opacity = '1';
            loopPlay = false;
        }
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
//Décompte 'clic'
canvas.addEventListener('click',() =>{
    if (timeRemaining > 0) {
        timeRemaining--;
        temps.innerHTML = timeRemaining;
    }
});

//faire disparaitre l'écran de fin
ecranFin.addEventListener('click', () =>{
    setTimeout(() =>{
        start();
        ecranFin.style.opacity = '0';
        ecranFin.style.visibility = 'hidden';
    }, 6000);
  
});