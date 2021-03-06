fetch('http://localhost:3000/api/teddies') 
.then(function(response) {
	return response.json();
  	
})
.then(function(data) {
	
	for (i = 0; i < data.length; i++) { //On fait un boucle pour créer toutes nos images et liens sur notre page
		let id2 = window.location.search; //On récupère l'url courant pour modifier dynamiquement notre affichage en fonction
		let div = document.createElement("div")
		let img = document.createElement("img"); //On crée un élément img et récupère sa source dans l'API
		img.src = data[i].imageUrl;
		let container2 = document.getElementById("container2"); 
		let id = data[i]._id;
		let link = document.createElement("a"); //Ici on crée nos liens
		link.href = "detail.html?_id=" + id;
		link.appendChild(img);
		div.appendChild(link);
		container2.appendChild(div);

			
		
		if ("?_id=" + data[i]._id === id2) { //Si notre current id dans l'url correspond à celui d'un nounours, on va l'afficher en grand ainsi que ses informations
			let div = document.createElement("div")
			let img = document.createElement("img"); //On crée un élément img et récupère sa source dans l'API
			img.src = data[i].imageUrl;
			let container = document.getElementById("Produit"); //Ici on va récupérer le nom, déscription et prix du 1er nounours et l'ajouter au HTML
			let h3 = document.createElement("h2");
			h3.textContent = data[i].name;
			let p = document.createElement("p");
			p.textContent = data[i].description;
			let p2 = document.createElement("h3");
			p2.textContent = data[i].price;
			let id = data[i]._id;
			let link = document.createElement("a");
			link.href = "detail.html?_id=" + id;
			let couleur = document.getElementById("choix") //On déclare une variable couleur pour créer une liste déroulante plus tard
			link.appendChild(img);
			div.appendChild(link);
			div.appendChild(h3);
			div.appendChild(p);
			div.appendChild(p2);
			container.appendChild(div);
			let currentPanier = new Object(); // Notre objet, qui rassemble les informations, image, prix, nom, quantitée et couleur
			currentPanier.image = data[i].imageUrl;
			currentPanier.name = data[i].name;
			currentPanier.price = data[i].price;
			currentPanier._id = data[i]._id;
			

			document.getElementById("myBtn").addEventListener("click", function() { //On ajoute un évènement onclick, pour récupérer les informations à ce moment
		  		
		  		let qt = document.getElementById("qt");
				currentPanier.quantity = qt.value; //Récupération de la quantitée séléctionée
				
				let panier = JSON.parse(localStorage.getItem("objet"));
				if (panier === null && currentPanier.couleur != undefined) { //On définie les différentes actions en fonction du panier et de la quantitée
					let panierSauvegarder = [];
					panierSauvegarder.push(currentPanier); //On ajoute le choix du client dans le tableau panierSauvegarder
					localStorage.setItem("objet", JSON.stringify(panierSauvegarder)); //On met notre panierSauvegarder sur le local storage
					panier = null;
					let ajoutPanier = "C'est ajouté !";
					alert(ajoutPanier);
				}
				else if (panier === null && currentPanier.couleur === undefined) {
					let message = "Choisissez une couleur !";
					alert(message);
				}
				else if (panier != null && currentPanier.couleur === undefined) {
					let message = "Choisissez une couleur !";
					alert(message);
				}
				else {
					let panierSauvegarder = panier;
					panierSauvegarder.push(currentPanier);
					localStorage.setItem("objet", JSON.stringify(panierSauvegarder));
					let ajoutPanier = "C'est ajouté !";
					alert(ajoutPanier);
				}
				
			});
			let liste_couleur = document.getElementById("SELECT"); //On fait une liste déroulante dynamique pour les couleurs des nounours

			for (y = 0; y < (data[i].colors.length); y++) { //Une boucle pour afficher autant de couleur disponible en fonction du nounours

				let option = document.createElement("option");
				option.text = data[i].colors[y];
				liste_couleur.appendChild(option);
				couleur.appendChild(liste_couleur);
				document.getElementById("choix").addEventListener("change", function(){
					let color = document.getElementById("SELECT");
					currentPanier.couleur = color.value;
				});
			}	
		}
	}
})
