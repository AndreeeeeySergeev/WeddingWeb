const loader = document.getElementById("loader");

const firstVisit = !sessionStorage.getItem("visited");

if (firstVisit) {

    sessionStorage.setItem("visited", "true");

    // Полная анимация
    document.body.classList.add("loader-full");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => loader.remove(), 400);

    }, 3500);

} else {

    // Короткая
    document.body.classList.add("loader-short");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => loader.remove(), 200);

    }, 1000);

}