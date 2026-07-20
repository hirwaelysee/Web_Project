fetch("./sections/header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header-container").innerHTML = data;

});


fetch("./sections/hero.html")
.then(response => response.text())
.then(data => {

    document.getElementById("hero-container").innerHTML = data;


    // Now hero exists
    initHeader();

});