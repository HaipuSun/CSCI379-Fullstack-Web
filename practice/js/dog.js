function buyNewDog(){

  var dogNames = "https://dog.ceo/api/breeds/list/all";
  var dogImage;

  fetch(dogNames)
    .then(resp=>{
      return resp.json();
    })
    .then(json=>{
	  var names = [];
	  for (var key in json.message){
		  names.push(key);
	  }
	  var name = names[Math.floor(Math.random()*names.length)];
	  console.log(name);

    dogImage = "https://dog.ceo/api/breed/" + name + "/images/random";

	  fetch(dogImage)
		.then(resp=>{
			return resp.json();
		})
		.then(json=>{
			var imgsrc = json.message;
			console.log(imgsrc);

      document.getElementById("dogs")
        .innerHTML += '<div class="col-md-4"><img class="card-img-top" src=' + imgsrc + ' alt="Card image cap"><div class="card-body"><p class="card-text">' + name + '</p></div></div>';
		})
		.catch(error => console.log("ERROR"+error));

    })
	.catch(error => console.log("ERROR"+error));
}


document.getElementById("newDog")
      .addEventListener('click', buyNewDog);
