function initHeader() {
    const image = document.getElementById("menu-icon");
    const menu = document.getElementById("mobile-menu");
    const text = document.getElementById("hero-text");

    console.log(text)
    if (!image || !menu) return;

    image.addEventListener("click", () => {

        // Show or hide the menu
        menu.classList.toggle("hidden");

        // Change the image
        if (menu.classList.contains("hidden")) {
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