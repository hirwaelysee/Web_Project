function initHeader() {
    const image = document.getElementById("menu-icon");
    const menu = document.getElementById("mobile-menu");
    const text = document.getElementById("hero-text");
    const page = window.location.pathname.split('/').pop().toLowerCase();

    console.log(page)
    if (!image || !menu) return;

    switch(page){
        case "home.html":
            image.src = './src/assets/small-icon.png';
            break
        case "privacy_policy.html":
            image.src = './src/assets/green-small.png';
            break
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
                case "home.html":
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
}