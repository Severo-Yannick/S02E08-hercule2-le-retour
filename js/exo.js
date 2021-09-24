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
}
// Passe la valeur pseudo dans l'élement id profil-name
let pseudo  = generatePseudo(hercule.name, hercule.department);
document.querySelector('#profil-name').innerHTML = pseudo;