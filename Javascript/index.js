fetch('http://localhost:3000/api/teddies') //On va sur l'adresse de l'API
.then(function(response) {
  	return response.json(); //On récupère les données au format json
})
.then(function(data) {
	
for (i = 0; i < data.length; i++) {
		
		let div = document.createElement("div") //On crée un élément div
		let img = document.createElement("img"); //On crée un élément img 
		img.src = data[i].imageUrl; //On récupère l'url de l'image
		let container = document.getElementById("container"); //Ici on va placer les informations de nos nounours. Nom, déscription et prix
		let h3 = document.createElement("h2"); //Création d'un h2 
		h3.textContent = data[i].name; //Récupération du nom du nounours
		let p = document.createElement("p");
		p.textContent = data[i].description; //Récupération de la description du nounours
		let p2 = document.createElement("h3");
		p2.textContent = data[i].price; //Récupération du prix du nounours
		let id = data[i]._id; //Récupération de l'id du nounours
		let link = document.createElement("a"); //Création d'un lien pour accéder à notre deuxieme page html
		link.href = "detail.html?_id=" + id;
		link.appendChild(img); //On ajoute toute nos informations dans notre div, puis dans notre container
		div.appendChild(link);
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(p2);
		container.appendChild(div);
	}	
})
