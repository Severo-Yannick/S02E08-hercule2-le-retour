// Informations sur Hercule
const hercule = {
  name: 'Hercule',
  job: 'Demi-dieu',
  age: 35,
  department: 75,
  arm: 60.5,
  inRelationship: true,
}
// Afficher le profil d'Hercule
base.fillProfil(hercule);

// Les amis d'Hercule
const herculeFriends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];
// Faire apparaître la liste des amis
base.printFriends(herculeFriends);
// Afficher le meilleur ami d'Hercule
base.setBestFriend(herculeFriends[0]);