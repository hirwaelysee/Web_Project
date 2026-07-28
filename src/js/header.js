function initHeader() {
    const image = document.getElementById("menu-icon");
    const menu = document.getElementById("mobile-menu");
    const text = document.getElementById("hero-text");
    const page = window.location.pathname.split('/').pop().toLowerCase() || '';
    const header = document.getElementById("main-header");

    console.log(page)
    if (!image || !menu) return;

    switch(page){
        case "home.html":
        case "index.html":
        case "":
            image.src = './src/assets/small-icon.png';
            break
        case "privacy_policy.html":
        case "imprint.html":
            image.src= './src/assets/green-small.png'
            break
    }

    image.addEventListener("click", () => {

        // Show or hide the menu
        menu.classList.toggle("hidden");

        // Change the image
        if (menu.classList.contains("hidden")) {
            switch(page){
                case "index.html":
                    image.src = "./src/assets/small-icon.png";
                    header.classList.remove("mb-[120px]");
                    text.classList.remove('hidden')
                    break
                case "privacy_policy.html":
                    image.src = "./src/assets/green-small.png";
                    header.classList.remove("mb-[120px]");
                    text.classList.remove('hidden')
                    break;
                case "imprint.html":
                    image.src = "./src/assets/green-small.png";
                    header.classList.remove("mb-[120px]");
                    text.classList.remove('hidden')
                    break;
            }
            image.src = "./src/assets/small-icon.png";
            header.classList.remove("mb-[120px]");
            text.classList.remove('hidden')
        } else {
            image.src = "./src/assets/small-icon-clicked.png";
            header.classList.add("mb-[120px]");
            text.classList.add('hidden');
        }

    });
    menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
        image.src = "./src/assets/small-icon.png";

        if (header) {
            header.classList.remove("mb-[120px]");
        }

        if (text) {
            text.classList.remove("hidden");
        }
    });
});
}