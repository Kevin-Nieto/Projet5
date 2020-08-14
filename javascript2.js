fetch('http://localhost:3000/api/teddies') 
.then(function(response) {
	return response.json();
  	
})
.then(function(data) {
	const nounours6 = data[0]; //On fait la même chose que dans le fichier javascript.js, pour afficher les images et infos des nounours
	let img6 = document.createElement("img");
	img6.src = data[0].imageUrl;
	
	let div6 = document.getElementById("Produit");
	div6.appendChild(img6);
	let nom6 = document.querySelector(".nom0");
	nom6.textContent = data[0].name;
	let info6 = document.querySelector(".description0");
	info6.textContent = data[0].description;
	let prix6 = document.querySelector(".prix0");
	prix6.textContent = data[0].price;
	
	let img7 = document.createElement("img");
	img7.src = "http://localhost:3000/images/teddy_2.jpg";
	
	let div7 = document.querySelector(".img1");
	div7.appendChild(img7);

	let img8 = document.createElement("img");
	img8.src = "http://localhost:3000/images/teddy_3.jpg";
	
	let div8 = document.querySelector(".img2");
	div8.appendChild(img8);

	let img9 = document.createElement("img");
	img9.src = "http://localhost:3000/images/teddy_4.jpg";
	
	let div9 = document.querySelector(".img3");
	div9.appendChild(img9);

	let img10 = document.createElement("img");
	img10.src = "http://localhost:3000/images/teddy_5.jpg";
	
	let div10 = document.querySelector(".img4");
	div10.appendChild(img10);

	let id = window.location.search; //Chaque nounours possède un lien avec un id, en fonction de celui-ci, on change les images et infos de notre page
	if (id === "?_id=5beaa8bf1c9d440000a57d94") //Si notre id correspond à celui de la barre d'adresse, alors on exécute ce code
	{
		img6.src = "http://localhost:3000/images/teddy_2.jpg"; //On change l'image principale de la page2 par celle-ci
		nom6.textContent = data[1].name; //Modification des anciènes informations par les nouvelles
		info6.textContent = data[1].description;
		prix6.textContent = data[1].price;
		img7.src = "http://localhost:3000/images/teddy_1.jpg"; //On remplace la miniature par l'anciène image principale
		let newlien1 = document.getElementById('lien1');
		newlien1.href = "page2.html?_id=5be9c8541c9d440000665243"; //On change le lien de la miniature pour arriver sur le nounours correspondant
		
	}
	else if (id === "?_id=5beaaa8f1c9d440000a57d95") //On exécute le même code en changeant les valeurs pour chaque nounours
	{
		img6.src = "http://localhost:3000/images/teddy_3.jpg";
		nom6.textContent = data[2].name;
		info6.textContent = data[2].description;
		prix6.textContent = data[2].price;
		img8.src = "http://localhost:3000/images/teddy_1.jpg";
		let newlien2 = document.getElementById('lien2');
		newlien2.href = "page2.html?_id=5be9c8541c9d440000665243";
	}
	else if (id === "?_id=5beaabe91c9d440000a57d96")
	{
		img6.src = "http://localhost:3000/images/teddy_4.jpg";
		nom6.textContent = data[3].name;
		info6.textContent = data[3].description;
		prix6.textContent = data[3].price;
		img9.src = "http://localhost:3000/images/teddy_1.jpg";
		let newlien3 = document.getElementById('lien3');
		newlien3.href = "page2.html?_id=5be9c8541c9d440000665243";
	}
	else if (id === "?_id=5beaacd41c9d440000a57d97")
	{
		img6.src = "http://localhost:3000/images/teddy_5.jpg";
		nom6.textContent = data[4].name;
		info6.textContent = data[4].description;
		prix6.textContent = data[4].price;
		img10.src = "http://localhost:3000/images/teddy_1.jpg";
		let newlien4 = document.getElementById('lien4');
		newlien4.href = "page2.html?_id=5be9c8541c9d440000665243";
	}

	
	
	
})
