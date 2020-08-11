fetch('http://localhost:3000/api/teddies') //On va sur l'adresse de l'API
.then(function(response) {
  	return response.json(); //On récupère les données au format json
})
.then(function(data) {
	const nounours1 = data[0];
	let img1 = document.createElement("img"); //On crée un élément img et récupère sa source dans l'API
	img1.src = "http://localhost:3000/images/teddy_1.jpg";
	
	
	let div1 = document.getElementById("block1"); //Ici on va récupérer le nom, déscription et prix du 1er nounours et l'ajouter au HTML
	div1.appendChild(img1);
	let nom1 = document.querySelector(".nom1");
	nom1.textContent = data[0].name;
	let info1 = document.querySelector(".description1");
	info1.textContent = data[0].description;
	let prix1 = document.querySelector(".prix1");
	prix1.textContent = data[0].price;

	const nounours2 = data[1];
	let img2 = document.createElement("img"); //On fait la même chose pour les nounours réstants
	img2.src = "http://localhost:3000/images/teddy_2.jpg";
	
	let div2 = document.getElementById("block2");
	div2.appendChild(img2);
	let nom2 = document.querySelector(".nom2");
	nom2.textContent = data[1].name;
	let info2 = document.querySelector(".description2");
	info2.textContent = data[1].description;
	let prix2 = document.querySelector(".prix2");
	prix2.textContent = data[1].price;

	const nounours3 = data[2];
	let img3 = document.createElement("img");
	img3.src = "http://localhost:3000/images/teddy_3.jpg";
	
	let div3 = document.getElementById("block3");
	div3.appendChild(img3);
	let nom3 = document.querySelector(".nom3");
	nom3.textContent = data[2].name;
	let info3 = document.querySelector(".description3");
	info3.textContent = data[2].description;
	let prix3 = document.querySelector(".prix3");
	prix3.textContent = data[2].price;

	const nounours4 = data[3];
	let img4 = document.createElement("img");
	img4.src = "http://localhost:3000/images/teddy_4.jpg";
	
	let div4 = document.getElementById("block4");
	div4.appendChild(img4);
	let nom4 = document.querySelector(".nom4");
	nom4.textContent = data[3].name;
	let info4 = document.querySelector(".description4");
	info4.textContent = data[3].description;
	let prix4 = document.querySelector(".prix4");
	prix4.textContent = data[3].price;

	const nounours5 = data[4];
	let img5 = document.createElement("img");
	img5.src = "http://localhost:3000/images/teddy_5.jpg";
	
	let div5 = document.getElementById("block5");
	div5.appendChild(img5);
	let nom5 = document.querySelector(".nom5");
	nom5.textContent = data[4].name;
	let info5 = document.querySelector(".description5");
	info5.textContent = data[4].description;
	let prix5 = document.querySelector(".prix5");
	prix5.textContent = data[4].price;

	
	

	
})
