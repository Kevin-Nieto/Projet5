fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243') 
.then(function(response) {
	return response.json();
  	
})
.then(function(data) {
	const nounours6 = data; //On fait la même chose que dans le fichier javascript.js, pour afficher les images et infos des nounours
	let img6 = document.createElement("img");
	img6.src = data.imageUrl;
	
	let div6 = document.getElementById("Produit");
	div6.appendChild(img6);
	let nom6 = document.querySelector(".nom0");
	nom6.textContent = data.name;
	let info6 = document.querySelector(".description0");
	info6.textContent = data.description;
	let prix6 = document.querySelector(".prix0");
	prix6.textContent = data.price;
	let select = document.getElementById("selectNumber");
	let options = [data.colors[0],data.colors[1],data.colors[2],data.colors[3]];

	for(let i = 0; i < options.length; i++) {
		let opt = options[i];
		let el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}

	
	
	
})
