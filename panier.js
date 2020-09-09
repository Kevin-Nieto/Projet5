fetch('http://localhost:3000/api/teddies') //On va sur l'adresse de l'API
.then(function(response) {
  	return response.json(); //On récupère les données au format json
})
.then(function(data) { /*
	var monobjet  = {
  		propriete1 : "valeur1",
  		propriete2 : "valeur2"
	};
	var monobjet_json = JSON.stringify(monobjet);
	localStorage.setItem("objet",monobjet_json);
	var monobjet_json = localStorage.getItem("objet");
	var monobjet = JSON.parse(monobjet_json);
	// Affichage dans la console
	console.log(monobjet); */
})
