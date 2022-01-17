//load favorites from local storage
const pictures =[];
const names = [];
const url = [];

window.onload = function () {
    var favorites = JSON.parse(localStorage.getItem("favorites"));

    for (let i=0; i <favorites.length; i++) {
        pictures.push(favorites[i].photos[0].medium)
        names.push(favorites[i].name)
        url.push(favorites[i].url)
    }
    display();
}

function display () {
    for (let i=0; i<pictures.length; i++) {
        var pic = $("<img>").attr("src", pictures[i]).addClass("img-size")
        var name = $("<h2>").text(names[i]).addClass("no-flex name")
        var link = $("<a>").attr("href", url[i]).attr("target","_blank").text("Adopt!").addClass("button adopt-btn my-2");
        var card = $("<div>").addClass("card border my-2");
        card.append(pic,name,link);
        $(".pet-pictures").append(card);
    }
}

var backButton = document.getElementById("back")

backButton.onclick = function() {
    document.location.href = "./index.html";
}