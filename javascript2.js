fetch('http://localhost:3000/api/teddies') 
.then(function(response) {
	return response.json();
  	
})
.then(function(data) {
	
	for (i = 0; i < data.length; i++) {
		let id2 = window.location.search;
		let div = document.createElement("div")
			let img = document.createElement("img"); //On crée un élément img et récupère sa source dans l'API
			img.src = data[i].imageUrl;
			let container2 = document.getElementById("container2"); //Ici on va récupérer le nom, déscription et prix du 1er nounours et l'ajouter au HTML
			let id = data[i]._id;
			let link = document.createElement("a");
			link.href = "page2.html?_id=" + id;
			link.appendChild(img);
			div.appendChild(link);
			container2.appendChild(div);
		
		if ("?_id=" + data[i]._id === id2) {
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
			link.href = "page2.html?_id=" + id;
			link.appendChild(img);
			div.appendChild(link);
			div.appendChild(h3);
			div.appendChild(p);
			div.appendChild(p2);
			container.appendChild(div);
			console.log(data);
		}
			
	}
	
})
