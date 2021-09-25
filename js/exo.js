// Informations sur Hercule
const hercule = {
  name: "Hercule",
  job: "Demi-dieu",
  age: 35,
  department: 75,
  arm: 60.5,
  inRelationship: true,
};
// Afficher le profil d'Hercule
base.fillProfil(hercule);

// Les amis d'Hercule
const herculeFriends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];
// Faire apparaître la liste des amis
base.printFriends(herculeFriends);
// Afficher le meilleur ami d'Hercule
base.setBestFriend(herculeFriends[0]);

// Ajout du titre manquant
let missingTitle = document.createElement("h1");
missingTitle.classList.add("banner__title");
missingTitle.innerHTML = "Vous consultez le profil de Hercule";
document.querySelector("#header-banner").appendChild(missingTitle);

// Afficher tous les travaux d'Hercule
const displayAllWorks = () => {
  let works = document.querySelectorAll(".panel--work").length;
  for (let i = 0; i < works; i++) {
    base.displayWork(i);
  }
};
displayAllWorks();

// Afficher la disponibilité d'Hercule suivant l'heure qu'il est
let disponibility = document.querySelector("#availability");

let currentHour = base.getHour();
if (currentHour > 20 || currentHour < 8) {
  disponibility.innerHTML = "Pas disponible";
  disponibility.classList.add("off");
} else {
  disponibility.innerHTML = "Disponible";
}

// Générer un pseudo
const generatePseudo = (name, departement) => {
  return `${name}-du-${departement}`;
};
// Passe la valeur pseudo dans l'élement id profil-name
let pseudo = generatePseudo(hercule.name, hercule.department);
document.querySelector("#profil-name").innerHTML = pseudo;

// Faire fonctionner le menu en haut à gauche
document.querySelector("#menu-toggler").addEventListener("click", () => {
  const headerBanner = document.querySelector("#header-banner");
  const bannerClass = "banner--open";
  if (headerBanner.classList.contains(bannerClass)) {
    headerBanner.classList.remove(bannerClass);
  } else {
    headerBanner.classList.add(bannerClass);
  }
});

// Réaction à la soumission du formulaire de contact en haut à droite
let form = document.querySelector('#contact').addEventListener('submit', (event) => {
  event.preventDefault();
  // Nettoyage de l'input text après le submit du formulaire
  event.target.elements["message"].value = "";
  alert('Hercule ne souhaite pas être dérangé');
});

// Affichage du pourcentage de votes pour Hercule et César
let votesHerculeAbs = base.vote.hercule;
let votesCesarAbs = base.vote.cesar;
let votesTotal = votesHerculeAbs + votesCesarAbs;
let votesHerculeRel = Math.round(votesHerculeAbs / votesTotal * 100);
let votesCesarRel = Math.round(votesCesarAbs / votesTotal * 100);
document.querySelector('#trends-hercule .people__popularity').innerHTML = `${votesHerculeRel}%`;
document.querySelector('#trends-hercule .people__bar').style.width = `${votesHerculeRel}%`;
document.querySelector('#trends-cesar .people__popularity').innerHTML = `${votesCesarRel}%`;
document.querySelector('#trends-cesar .people__bar').style.width = `${votesCesarRel}%`;
