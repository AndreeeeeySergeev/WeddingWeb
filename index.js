let act = document.querySelectorAll(".header__ul_li_a");

act.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
})
