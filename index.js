let act = document.querySelectorAll(".header__ul_li_a");

act.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
})

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 3500);

});
