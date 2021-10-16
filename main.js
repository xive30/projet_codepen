//en premier les constantes globales et les events!!!
document.addEventListener("keyup", resultat); 
//je met l'evenment d'écoute keyup dans mon document qui appelle la fonction résultat
document.addEventListener("keyup", countDown);
//je met l'evenment d'écoute keyup dans mon document qui appelle la fonction countDown;
document.addEventListener("keyup", progressBar);
//je met l'evenment d'écoute keyup dans mon document qui appelle la fonction ProgressBar;
// let numMax = document.getElementById("numMax").innerhtml;creer une referencemax unique probleme le nombre est undifined
let max = document.getElementById("entree").maxLength;
let val = document.getElementById("resultat").textContent.length;

function resultat () {
	document.getElementById("resultat").innerHTML =  document.getElementById("entree").value;
    /*je déclare la foncion resultat qui déclare 
l'html  de l'element avec l'id resultat de mon document contient la valeur de mon element entree du document*/
    const stop = document.getElementById("gif");
    stop.style.visibility = "hidden";
    // if (document.getElementById("entree").value.length > 200){
        
    // }
}

function countDown() {
    let val = document.getElementById("resultat").textContent.length;
    document.getElementById("compte").innerHTML = "Caractères restant: " + (200 - val);
}/*je déclare la fonction countDown qui déclare
une variable  characters qui contient la longueur de l'element avec l'id resultat de mon document;
l'html  de l'element avec l'id compte de mon document contient
*/

//image d'attente
document.getElementById("entree").onfocus = function wait() {
    const hypnos = document.getElementById("gif");
    hypnos.style.visibility = "visible";
}/*lorsque l'element entree du document est onfocus j'appelle une fonction wait qui déclare
une constante hypnos qui contient l'element avec l'id gif 
le style css visibility de hypnos est définit en visible*/

document.getElementById("entree").onblur = function  disappear() {
    const stop = document.getElementById("gif");
    stop.style.visibility = "hidden";
}/*on blur et on focus a voir */


//buttons
//Gras
document.getElementById("bold").onclick = function b() {
    document.getElementById("entree").value += "<b></b>"
}

// Italic
document.getElementById("italic").onclick = function i() {
    document.getElementById("entree").value += "<i></i>"
}

//Souliggner
document.getElementById("underline").onclick = function s() {
    document.getElementById("entree").value += "<s></s>"
}

//progressbar 
function progressBar() {
    let val = document.getElementById("resultat").textContent.length;
    let max = document.getElementById("entree").maxLength;

    document.getElementById("progressbar").style.width = val*100 / max  + "%";
    let elem = document.getElementById("progressbar").style.width = val*100 / max;

    if (elem <= 50 ) {
        document.getElementById("progressbar").style.backgroundColor = "green";
    }else if (elem > 50 && elem <= 80) {
        document.getElementById("progressbar").style.backgroundColor = "orange";
    }else if (elem > 80) {
            document.getElementById("progressbar").style.backgroundColor = "red";
    }
}

// document.addEventListener("keyup", () =>{
//     if ()
// });

//le darkmode
function darmode() {
    let nightnday = document.body;
    nightnday.classList.toggle("darkmode");
}

