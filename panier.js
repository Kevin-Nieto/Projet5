fetch('http://localhost:3000/api/teddies') //On va sur l'adresse de l'API
.then(function(response) {
  	return response.json(); //On récupère les données au format json
})
.then(function(data) { 
	let panier_json = localStorage.getItem("objet"); //On récupère les informations du panier qui sont dans le local storage
	let panier = JSON.parse(panier_json);
	if (panier === null) {
		let nounours = document.getElementById("panier");
		let info = document.createElement("h3");
		info.textContent = "Votre panier est vide !";
		nounours.appendChild(info);
		document.getElementById("contact").style.display = "none"; //On cache notre formulaire si le panier est vide
	}
	else {
		let nounours = document.getElementById("panier");
		let total = document.createElement("h3");
		let varPrixTotal = 0; //On initialise une variable à 0 pour pouvoir calculer le prix total du panier
		document.getElementById("button").addEventListener("click", function(event) { //Fonction qui récupère les informations du client et les id des nounours au click
			event.preventDefault();
			let contactUser = document.getElementById("contact");
			let prenom = contactUser.prenom.value;
			let name = contactUser.name.value;
			let adresse = contactUser.adresse.value;
			let ville = contactUser.ville.value;
			let mail = contactUser.mail.value;
			let contact = new Object(); //On crée un objet contact qui rassemble les informations du client
			contact.firstName = prenom;
			contact.lastName = name;
			contact.address = adresse;
			contact.city = ville;
			contact.email = mail;
			
			let products = []; //On crée un tableau qui contient les id des nounours
			panier.forEach((element) => {
				products.push(element._id);
			})
			let infoTotal = { //Notre objet qui rassemble les informations du client et les id
				contact: {},
				products: []
			};
			infoTotal.contact = contact;
			infoTotal.products = products;
			fetch('http://localhost:3000/api/teddies/order', { //Fetch avec method 'post' pour envoyer nos information
				method: 'post',
				headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    },
				body: JSON.stringify(infoTotal)
			}).then(function(response) {
				return response.json();
			})
			.then(function(data) { //Fonction pour placer l'orderId sur le local storage et si on à toutes les informations necessaires, on redirige le client vers la page de confirmation
				let orderId = data.orderId;
				localStorage.setItem("id", orderId);
				if (data.contact != undefined) {
					document.location = "file:///C:/Users/Nieto/Desktop/Projets/Repository/Projet5/validationAchat.html";
				}
			})
			
		});
		for (i = 0; i < panier.length; i++) { //Boucle pour afficher la quantitée, nom, couleur, prix/u et prix total
			let nounours = document.getElementById("panier");
			let img = document.createElement("img"); //On crée un élément img et récupère sa source dans l'API
			img.src = panier[i].image;
			nounours.appendChild(img);
			let info = document.createElement("h3");
			info.textContent = "Vous avez  " + panier[i].quantity + " " + panier[i].name + " de couleur " + panier[i].couleur;
			nounours.appendChild(info);
			let prix = document.createElement("h4");
			prix.textContent = "Prix/u = " + panier[i].price;
			nounours.appendChild(prix);
			let prixTotal = panier[i].quantity*panier[i].price + varPrixTotal;
			total.textContent = "Total = " + prixTotal;
			nounours.appendChild(total);
			varPrixTotal = prixTotal;
		}
		
	}
	document.getElementById("Bouton").addEventListener("click", function() { //Fonction pour vider le panier et actualiser la page
		window.localStorage.clear();
		document.location.reload(true);
	});
	
})
