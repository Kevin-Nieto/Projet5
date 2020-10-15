fetch('http://localhost:3000/api/teddies') //On va sur l'adresse de l'API
.then(function(response) {
  	return response.json(); //On récupère les données au format json
})
.then(function(data) {
	let panier_json = localStorage.getItem("objet"); //On récupère les informations du panier depuis le local storage
	let panier = JSON.parse(panier_json); 
	let total = document.createElement("h3");
	let varPrixTotal = 0;
	let remerciment = document.getElementById("récapAchat");
	let h4 = document.createElement("h4");
	h4.textContent = "Votre achat à bien était validé, nous vous remercions pour la confiance que vous nous apportez ! On espère vous revoir très vite, à bientôt sur Orinoco !";
	remerciment.appendChild(h4);
	for (i = 0; i < panier.length; i++) { //On détail chaque élément présent de le panier client
		let recap = document.getElementById("récapAchat");
		let prixTotal = panier[i].quantity*panier[i].price + varPrixTotal;
		total.textContent = "Total = " + prixTotal;
		recap.appendChild(total);
		varPrixTotal = prixTotal; // On afficher le prix total des produits
	}
	let idCommande = localStorage.getItem("id"); // On récupère notre id de commande sur le local storage
	let id = document.createElement("h5");
	id.textContent = "Identifiant de la commande : " + idCommande; // On afficher cet id
	remerciment.appendChild(id);
	document.getElementById("buttonReturn").addEventListener("click", function() { //Fonction pour vider le local storage et rediriger vers la page d'accueil
		window.localStorage.clear();
		document.location = "file:///C:/Users/Nieto/Desktop/Projets/Repository/Projet5/index.html";
	})
})



