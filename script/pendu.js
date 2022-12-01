let lettreUtilise = "";
let nomessayer = 0;
let idimagen = 0;  
let mots = ["table" , "chien" , "ordinateur", "pain", "neige", "hiver" , "maison" , "enfant", "pomme", "fromage"]
let nombre = Math.floor(Math.random() * 10);
let motTrouver = mots [nombre];
let longueur = motTrouver.length;
let motCache = [];

function nouvellePartie ()  {
     // Cache le mot avec "?" 
    for (let indice=0;indice<longueur;indice++){
        motCache.push("?");
    }
    document.getElementById("contenu").style.display = "block";
    document.getElementById ("messageCache").innerHTML= motCache;
    document.getElementById ("longueur").innerHTML= longueur;
    document.getElementById ("nomessais").innerHTML= nomessayer;
    document.getElementById("btndebut").style.display = "none"; 

}  
// Function essai
function essai(){
    let lettre = (document.getElementById ("lettrecherche").value).toLowerCase();
    let indice = 0;
    let lettreTrouve = "";
    
    let messageBoite=document.getElementById("message");
    // Validation vide et trait d'union
    if (lettre == "" || lettre == "-"){
        messageBoite.value = ("Introduire un bon lettre") ;
        return;
    } 
    // Boucles
     while (motTrouver[indice] != undefined){
        // Boucle - validation de mot déjà utilisé
        for (indice; indice < longueur ; indice++){ 
            if (lettre == lettreUtilise[indice]){
                messageBoite.value = "vous avez deja utilise ce mot";
                nomessayer++
                //lettreTrouve est pour faire la validation si la lettre n'est pas.
                lettreTrouve++
                //idimagen est pour changer l'image avec chaque faut
                idimagen++
                document.getElementById("imgpendu").setAttribute("src", "./img/pendu_" + idimagen + ".jpg");
            }  else if ( motTrouver[indice]==lettre){
                motCache [indice]=lettre
                lettreTrouve++
            }
        }
    }   
    // Ajouter la lettre utilise avec string
    lettreUtilise= lettreUtilise + (lettre);

     //lettreTrouve est pour faire la validation si la lettre n'est pas dans le mot.
    if (lettreTrouve == ""){
        messageBoite.value = "Essaie autre lettre";
        nomessayer++;
        idimagen++
        document.getElementById("imgpendu").setAttribute("src", "./img/pendu_" + idimagen + ".jpg");
    }   
    // Boucle de concatenation de mot cache
    let motCacheString= "";
    for ( iter = 0; iter < motCache.length; iter++) {
        motCacheString+=motCache[iter];
    }
     //Finir le jeu
    if (nomessayer == 9){
        messageBoite.value = "Desole. Le jeu a fini.";
        document.getElementById("btnjeu").disabled = true;
        document.getElementById("lettrecherche").disabled = true;
        document.getElementById("btnJeuNveau").style.display = "block"; 
    }

    if (motCacheString == motTrouver){
        messageBoite.value = "Bravo. Tu as reussi!!";
        document.getElementById("btnjeu").disabled = true;
        document.getElementById("lettrecherche").disabled = true;
        document.getElementById("btnJeuNveau").style.display = "block"; 
    }
    document.getElementById ("messageCache").innerHTML= motCacheString;
    document.getElementById ("lettreessais").innerHTML= lettreUtilise;
    document.getElementById ("nomessais").innerHTML= nomessayer;
}

function jeunouveau()
{
    //Recharger la page
    location.reload();
}