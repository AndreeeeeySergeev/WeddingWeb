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

const modal = document.getElementById("orderModal");

const openBtn = document.getElementById("openModal");

const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {

    modal.style.display = "flex";

}

closeBtn.onclick = () => {

    modal.style.display = "none";

}

window.onclick = (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }
}

const form = document.getElementById("orderForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const data = {
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    try {

        const response = await fetch("http://127.0.0.1:8000/api/order/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

    } catch (error) {

        alert("Ошибка соединения с сервером");
        console.error(error);

    }

});
