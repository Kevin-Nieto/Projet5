fetch('http://localhost:3000/api/teddies') //On va sur l'adresse de l'API
.then(function(response) {
  	return response.json(); //On récupère les données au format json
})
.then(function(data) {
	
for (i = 0; i < 5; i++) {
		let nounours = data[i];
		let img1 = document.createElement("img"); //On crée un élément img et récupère sa source dans l'API
		img1.src = data[i].imageUrl;
		let div1 = document.getElementById("block1"); //Ici on va récupérer le nom, déscription et prix du 1er nounours et l'ajouter au HTML
		div1.appendChild(img1);
		let nom1 = document.querySelector(".nom1");
		nom1.textContent = data[i].name;
		let info1 = document.querySelector(".description1");
		info1.textContent = data[i].description;
		let prix1 = document.querySelector(".prix1");
		prix1.textContent = data[i].price;
		console.log(nounours);
	}

	for (let valeur of data) {
		let newDiv = document.createElement("div");
		let nom = document.createTextNode(valeur.name);
		
		let currentDiv = document.getElementById("block1");

		currentDiv.appendChild(nom);
		
		console.log(valeur);
	}
	
})
