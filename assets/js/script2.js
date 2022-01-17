// petfinder API calls
var pf = new petfinder.Client({ apiKey: "r2JfhNwBP0572Z5Vi3v61yt3IBVXjR7QvrxulktxLNBSqa6cnw", secret: "U0snJ0pJCd6qr7sKn0ox64ef6sOHOWcFTflBDZwq", species: "Cat" });

// Global Variables
const pets = [];
const facts = [];

let index = 0;
let index2 = 1;
var favorites = [];

function storeAnimals(response) {
  for (let i = 0; i < response.data.animals.length; i++) {
    if (response.data.animals[i].photos.length !== 0) {
      pets.push(response.data.animals[i]);
    }
  }
}

function next() {
  if (index === pets.length) {
    pf.animal.search({
      type: localStorage.getItem("species"),
      limit: 50,
    })

      .then(function (response) {
        storeAnimals(response);

        displayAnimals();
      })
  }
  index++;
  // $(".clear").empty();
  displayAnimals();
}

function displayAnimals() {
  $(".clear").empty();
  var proPic = $("<img>").attr("src", pets[index].photos[0].medium).addClass("img-size");
  var animalName = $("<p>").text(pets[index].name);
  $(".name").append(animalName);
  $(".card-image").append(proPic);
};

var yesButton = document.getElementById("yes-but")
var noButton = document.getElementById("no-but")
var favoritesButton = document.getElementById("favorites")
var nextBtn = document.getElementById("fact")
var submitBtn = document.getElementById("submitBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user opens the page, show the modal and get items from local storage
window.onload = function () {
  modal.style.display = "block";
  var favorites = JSON.parse(localStorage.getItem("favorites"));

  $.ajax({
    type: "GET",
    url: "https://cat-fact.herokuapp.com/facts"
  })
    .then(function (data) {
      createFactArray(data);
      var fact = $("<p>").text(facts[0]);
      $(".fact").append(fact);
    })
}

function createFactArray(data) {
  for (let i = 0; i < data.length; i++) {
    facts.push(data[i].text);
  }
}

// When the user clicks on <span> (x) or anywhere outside of the modal, close the modal
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//When the user clicks the submit button, store information in fields to local storage
submitBtn.onclick = function () {
  var name = $('#name').val();
  // var postalCode = $('#postalCode').val();
  localStorage.setItem("name", name);
  // localStorage.setItem("postalCode", postalCode);
  if (document.querySelector('input[id="speciesDog"]:checked')) {
    localStorage.setItem("species", "dog");
  }
  else if (document.querySelector('input[id="speciesCat"]:checked')) {
    localStorage.setItem("species", "cat");
  };

  modal.style.display = "none";

  pf.animal.search({
    type: localStorage.getItem("species"),
    limit: 50,
  })

    .then(function (response) {
      storeAnimals(response);

      displayAnimals();
    })

};


// sends you to petfinder page on a separate page, shows the next animal, and saves current pet from array to local storage 
yesButton.onclick = function () {
  var link = [pets[index].url];
  var favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites !== null) {
    favorites.push(pets[index]);
  }
  else {
    var favorites = [];
    favorites.push(pets[index]);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  next();
};

// shows next pet
noButton.onclick = function () {
  next();
};

// takes you to the favorites page
favoritesButton.onclick = function () {
  document.location.href = "./favorites.html";
}

// displays the next random cat fact
nextBtn.onclick = function () {
  $(".clear-fact").empty();
  var fact = $("<p>").text(facts[index2]);
  $(".fact").append(fact);
  index2++;
  if (facts[index2] == null) {
    index2 = 0;
    $(".clear-fact").empty();
    var fact = $("<p>").text(facts[index2]);
    $(".fact").append(fact);
  }
}
